import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

interface Props {
  animate?: boolean
  children: any
  config: any
  user?: any
  canvasRef?: any
}

const BackgroundParticle = ({ animate = true, children, config, canvasRef }: Props) => {
  const particle = useRef<any>(null)

  const windowWidth = window?.innerWidth
  const windowHeight = window?.innerHeight
  const viewportWidth = canvasRef?.current?.offsetWidth ?? windowWidth ?? 600
  const viewportHeight = canvasRef?.current?.offsetHeight ?? windowHeight ?? 600

  if (particle?.current) {
    particle.current.position.x = Math.random() * viewportWidth - viewportWidth / 2
    particle.current.position.y = Math.random() * viewportHeight - viewportHeight / 2
  }

  return <mesh ref={particle}>{children}</mesh>
}

export default BackgroundParticle
