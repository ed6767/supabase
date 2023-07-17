import styles from './ticket-visual.module.css'
import TicketProfile from './TicketProfile'
import TicketNumber from './TicketNumber'
import useConfData, { UserData } from '~/components/LaunchWeek/hooks/use-conf-data'
import TicketHeader from './TicketHeader'
import { useState } from 'react'
import Image from 'next/image'
import TicketForm from './TicketForm'
import TicketFooter from './TicketFooter'

type TicketGenerationState = 'default' | 'loading'
type Props = {
  user: UserData
  ticketGenerationState?: TicketGenerationState
  setTicketGenerationState?: any
}

export default function TicketVisual({
  user,
  ticketGenerationState = 'default',
  setTicketGenerationState,
}: Props) {
  const { username, golden = false, bg_image_id: bgImageId, ticketNumber } = user
  const { session } = useConfData()
  const [imageIsLoading, setImageIsLoading] = useState(true)

  const storageBaseFilepath = `https://obuldanrptloktxcffvn.supabase.co/storage/v1/object/public/images/lw7/tickets_bg`

  const ticketBg = {
    regular: {
      image: `${storageBaseFilepath}/blurred/regular/jpg/reg_bg_${bgImageId}.jpg`,
      background: `/images/launchweek/8/ticket-bg/regular.png`,
    },
    golden: {
      image: `${storageBaseFilepath}/blurred/golden/jpg/gold_bg_${bgImageId}.jpg`,
      background: `/images/launchweek/8/ticket-bg/golden.png`,
    },
  }

  const CURRENT_TICKET = golden ? 'golden' : 'regular'
  const CURRENT_TICKET_BG = ticketBg[CURRENT_TICKET].background

  return (
    <div className="flex relative flex-col w-[300px] h-auto md:w-full md:max-w-none backdrop-blur-md">
      <div
        className={[
          styles.visual,
          golden ? styles['visual--gold'] : '',
          // session ? styles['visual--logged-in'] : '',
          !golden && 'overflow-hidden',
          'flex relative flex-col justify-between w-full aspect-[1.935/1] bg-gradient-to-b from-[#ffffff80] to-[#ffffff20] before:rounded-2xl box-border backdrop-blur-md rounded-xl',
        ].join(' ')}
      >
        {username ? (
          <div className="absolute inset-0 h-[calc(100%-100px)] z-10 flex flex-col items-center justify-between w-full md:h-full flex-1 md:pl-8 md:pr-[15%] overflow-hidden">
            <TicketHeader />
            <div className="flex-1 w-full h-full md:h-auto flex py-6 md:py-4 flex-col justify-center">
              <TicketProfile
                user={user}
                ticketGenerationState={ticketGenerationState}
                setTicketGenerationState={setTicketGenerationState}
                golden={golden}
              />
            </div>
            <TicketFooter />
            <TicketNumber number={ticketNumber} />
            <div className="absolute z-0 inset-[1px] overflow-hidden rounded-xl">
              <Image
                src={CURRENT_TICKET_BG}
                alt="ticket background"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                quality={100}
              />
            </div>
          </div>
        ) : (
          <TicketForm
            defaultUsername={username ?? undefined}
            setTicketGenerationState={setTicketGenerationState}
          />
        )}
      </div>
    </div>
  )
}
