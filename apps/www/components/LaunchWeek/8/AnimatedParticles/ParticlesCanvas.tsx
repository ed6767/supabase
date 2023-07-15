import React, { useMemo, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AdditiveBlending } from 'three'
import useConfData from '~/components/LaunchWeek/hooks/use-conf-data'
import Particle from './Particle'
import useParticlesConfig from './hooks/useParticlesConfig'

const ParticlesCanvas = ({ users }: { users: any }) => {
  const isWindowUndefined = typeof window === 'undefined'
  if (isWindowUndefined) return null

  const canvasRef = React.useRef(null)

  const [animate, setAnimate] = useState<boolean>(true)
  const { config, handleSetConfig, particles, setParticles } = useParticlesConfig(users)
  const { supabase } = useConfData()
  const [realtimeChannel, setRealtimeChannel] = useState<ReturnType<
    (typeof supabase | any)['channel']
  > | null>(null)

  const loadUsers = async () => {
    return await supabase!.from('lw8_tickets_staging').select('id', { count: 'exact' })
  }

  // Update particles live when new tickets are generated
  useEffect(() => {
    if (supabase) {
      const channel = supabase
        .channel('lw8_tickets_changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'lw8_tickets_staging',
          },
          async () => {
            const { data: users } = await loadUsers()

            handleSetConfig('particles', users?.length)
            setParticles((prev: any) => users! ?? prev)
          }
        )
        .subscribe()
      setRealtimeChannel(channel)
    }

    return () => {
      // Cleanup realtime subscription on unmount
      realtimeChannel?.unsubscribe()
    }
  }, [])

  // stop animation if canvas if not in viewport
  // to avoid unneccessary computations
  const handleScroll = () => {
    if (canvasRef.current && typeof window !== 'undefined') {
      const rect = (canvasRef.current as HTMLDivElement)?.getBoundingClientRect()
      const isInView = rect.bottom > 0

      setAnimate(isInView)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* ThreeJs setup */

  const Geometry = useMemo(
    () => () => <circleGeometry args={[config.particlesSize, config.particlesSides]} />,
    []
  )
  const Material = () =>
    useMemo(
      () => (
        <meshStandardMaterial
          color={config.color}
          blending={config.particlesBlending ? AdditiveBlending : undefined}
        />
      ),
      []
    )

  return (
    <Canvas
      ref={canvasRef}
      dpr={[1, 2]}
      camera={{ fov: 75, position: [0, 0, 450] }}
      className="relative z-30"
    >
      <ambientLight intensity={config.lightIntensity} />
      <group position={[0, 30, 0]}>
        {particles?.map((user: any, index: number) => (
          <Particle
            key={`particle-${user.username ?? index}`}
            user={user}
            config={config}
            animate={animate}
          >
            <Geometry />
            <Material />
          </Particle>
        ))}
      </group>
    </Canvas>
  )
}

export default ParticlesCanvas
