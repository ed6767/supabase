import cn from 'classnames'
import { useState } from 'react'
import styles from './ticket.module.css'
import styleUtils from '../../utils.module.css'
import Ticket from './Ticket'
import TicketActions from '~/components/LaunchWeek/7/Ticket/TicketActions'
import TicketCopy from '~/components/LaunchWeek/7/Ticket/ticket-copy'

import ReferralIndicator from '~/components/LaunchWeek/7/ReferralIndicator'
import { UserData } from '~/components/LaunchWeek/hooks/use-conf-data'
import useWinningChances from '~/components/LaunchWeek/hooks/useWinningChances'
import { SITE_URL } from '~/lib/constants'
import { useBreakpoint } from 'common/hooks/useBreakpoint'

type TicketGenerationState = 'default' | 'loading'

type Props = {
  username: UserData['username']
  ticketNumber: UserData['ticketNumber']
  name: UserData['name']
  golden: UserData['golden']
  bgImageId: UserData['bg_image_id']
  referrals: number
  sharePage?: boolean
}

export default function TicketContainer({
  username,
  name,
  ticketNumber,
  sharePage,
  golden,
  bgImageId,
  referrals,
}: Props) {
  const isMobile = useBreakpoint(1023)
  const [ticketGenerationState, setTicketGenerationState] =
    useState<TicketGenerationState>('default')
  const winningChances = useWinningChances()

  if (!username)
    return (
      <div className="w-full flex items-center justify-center">
        <div
          className={cn(
            styles['ticket-visual'],
            styleUtils.appear,
            styleUtils['appear-first'],
            'relative flex flex-col items-center gap-2 w-full max-w-2xl'
          )}
        >
          <Ticket
            username={username ?? undefined}
            name={name ?? undefined}
            ticketNumber={ticketNumber ?? 0}
            ticketGenerationState={ticketGenerationState}
            setTicketGenerationState={setTicketGenerationState}
            golden={golden}
            bgImageId={bgImageId}
          />
        </div>
      </div>
    )

  return (
    <div
      className={[
        `relative w-full max-w-screen md:max-w-[700px] lg:max-w-[1100px] min-h-[400px] flex flex-col items-center lg:grid lg:grid-cols-12 gap-4 lg:p-4 rounded-3xl backdrop-blur lg:items-stretch h-auto`,
        !isMobile && styles['ticket-hero'],
      ].join(' ')}
    >
      <div
        className={[
          'flex flex-col !w-full h-full justify-center col-span-full p-2 lg:p-8 lg:col-span-4 max-h-[400px] rounded-3xl backdrop-blur lg:backdrop-blur-none',
          isMobile && styles['ticket-hero'],
        ].join(' ')}
      >
        <div className="text-scale-1200 flex flex-col w-full items-center text-white text-center lg:text-left lg:items-start gap-2 lg:gap-3 mb-3 lg:mb-6">
          <h1
            className={cn(
              styleUtils.appear,
              styleUtils['appear-first'],
              'text-xl text-white lg:text-3xl '
            )}
          >
            {!sharePage ? (
              name ? (
                <>
                  {winningChances === 1 && (
                    <span className="text-2xl tracking-[0.02rem] leading-7 block">
                      You're <span className="gradient-text-purple-800">in the draw!</span> <br />
                      Now make it gold.
                    </span>
                  )}
                  {winningChances === 2 && (
                    <span className="text-2xl tracking-[0.02rem] leading-7 block">
                      You've <span className="gradient-text-purple-800">doubled</span> your{' '}
                      <br className="hidden lg:inline" />
                      chance!
                      <br className="inline lg:hidden" /> Almost{' '}
                      <span className={styles['gold-text']}>gold</span>.
                    </span>
                  )}
                  {winningChances === 3 && (
                    <span className="text-2xl tracking-[0.02rem] leading-7 block">
                      You're <span className={styles['gold-text']}>gold</span>!<br />
                      You've maxed your <br className="hidden lg:inline" /> chances of winning!
                    </span>
                  )}
                </>
              ) : (
                <span className="text-2xl leading-7 block">
                  Generate your ticket. <br />
                  Win the <span className="gradient-text-purple-800">SupaKeyboard</span>.
                </span>
              )
            ) : (
              <span className="tracking-[-0.02px] leading-7 block">
                {name ? name : username}'s <br className="hidden lg:inline" />
                unique ticket
              </span>
            )}
          </h1>

          <div className="text-base text-white leading-5">
            {!sharePage ? (
              golden ? (
                <p>
                  Join us on April 16th for Launch Week 7's final day and find out if you are one of
                  the lucky winners.
                </p>
              ) : username ? (
                <p>
                  Why stop there? Increase your chances of winning by sharing your unique ticket.
                  Get sharing!
                </p>
              ) : (
                <p>
                  We have some fantastic swag up for grabs, including 3 limited-edition mechanical
                  keyboards that you won't want to miss.
                </p>
              )
            ) : (
              <>
                <p>
                  Get yours and win some fantastic swag, including a limited-edition mechanical
                  keyboard that you won't want to miss.
                </p>

                <div className="mt-4 lg:mt-8 rounded-full bg-[#E6E8EB] py-1 px-3 -mb-3 border border-[#bbbbbb] text-xs transition-all ease-out hover:bg-[#dfe1e3]">
                  <a
                    href={`${SITE_URL}/${username ? '?referral=' + username : ''}`}
                    className={`flex items-center justify-center gap-2 text-[#2e2e2e]`}
                  >
                    Go to Launch Week 7
                  </a>
                </div>
              </>
            )}
          </div>

          {!sharePage && username && <ReferralIndicator />}
        </div>
        <div>
          {username && (
            <TicketActions
              username={username}
              golden={golden}
              ticketGenerationState={ticketGenerationState}
              setTicketGenerationState={setTicketGenerationState}
            />
          )}
        </div>
      </div>
      <div className="w-full flex-1 col-span-8 lg:-mt-16">
        <div
          className={cn(
            styles['ticket-visual'],
            styleUtils.appear,
            styleUtils['appear-fourth'],
            'relative flex flex-col items-center gap-2 w-full'
          )}
        >
          <Ticket
            username={username ?? undefined}
            name={name ?? undefined}
            ticketNumber={ticketNumber ?? 0}
            ticketGenerationState={ticketGenerationState}
            setTicketGenerationState={setTicketGenerationState}
            golden={golden}
            bgImageId={bgImageId}
          />
          {username && (
            <div className="w-full">
              <TicketCopy username={username} isGolden={golden} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
