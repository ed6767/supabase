import cn from 'classnames'
import { useState } from 'react'
import styles from './ticket.module.css'
import styleUtils from '../../utils.module.css'
import Ticket from './Ticket'
import TicketActions from '~/components/LaunchWeek/8/Ticket/TicketActions'
import TicketCopy from '~/components/LaunchWeek/8/Ticket/ticket-copy'

import ReferralIndicator from '~/components/LaunchWeek/7/ReferralIndicator'
import { UserData } from '~/components/LaunchWeek/hooks/use-conf-data'
import useWinningChances from '~/components/LaunchWeek/hooks/useWinningChances'
import { SITE_URL } from '~/lib/constants'
import { useBreakpoint } from 'common/hooks/useBreakpoint'
import { Button } from 'ui'
import TicketCustomizationForm from './TicketCustomizationForm'
import { SupabaseClient } from '@supabase/supabase-js'
import Link from 'next/link'

type TicketGenerationState = 'default' | 'loading'

type Props = {
  user: UserData
  supabase: SupabaseClient
  referrals: number
  sharePage?: boolean
}

export default function TicketContainer({ user, sharePage, referrals, supabase }: Props) {
  const { username, name, golden, bg_image_id: bgImageId, ticketNumber } = user
  const isMobile = useBreakpoint(1023)
  const [ticketGenerationState, setTicketGenerationState] =
    useState<TicketGenerationState>('default')
  const winningChances = useWinningChances()

  // if (ticketGenerationState === 'loading') {
  //   return <div className="min-h-[400px]">loading</div>
  // }

  if (!user.username)
    return (
      <div className="w-full flex items-center justify-center min-h-[400px]">
        <div
          className={cn(
            styles['ticket-visual'],
            styleUtils.appear,
            styleUtils['appear-first'],
            'relative flex flex-col items-center gap-2 w-full max-w-2xl'
          )}
        >
          <Ticket
            user={user}
            ticketGenerationState={ticketGenerationState}
            setTicketGenerationState={setTicketGenerationState}
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
          'flex flex-col !w-full h-full justify-center col-span-full p-6 lg:p-8 lg:col-span-4 max-h-[400px] rounded-3xl backdrop-blur lg:backdrop-blur-none',
          isMobile && styles['ticket-hero'],
        ].join(' ')}
      >
        <div className="text-scale-1200 flex flex-col w-full items-center text-white text-center lg:text-left lg:items-start gap-2 lg:gap-3">
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
                    <span className="text-2xl tracking-[0.02rem] leading-7 block text-scale-1000">
                      <span className="text-white">Your in! </span>
                      Now make it unique and share.
                    </span>
                  )}
                  {winningChances === 2 && (
                    <span className="text-2xl tracking-[0.02rem] leading-7 block">
                      <span className="text-white">You've doubled your chance!</span>
                      <br className="inline lg:hidden" /> Share again to get a golden ticket.
                    </span>
                  )}
                  {winningChances === 3 && (
                    <span className="text-2xl tracking-[0.02rem] leading-7 block">
                      <span className={styles['gold-text']}>You're gold!</span>
                      <br />
                      Congratulations, you've maxed your chances of winning!
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

          <div className="text-sm text-scale-1200 leading-5">
            {!sharePage ? (
              golden ? (
                <p>
                  Join us on April 16th for Launch Week 7's final day and find out if you are one of
                  the lucky winners.
                </p>
              ) : username ? (
                <p>
                  Customize your ticket and increase your chances of winning by sharing it with the
                  community.
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
                  Generate and share your own custom ticket for a chance to win{' '}
                  <Link href="#lw8-prizes">
                    <a className="hover:!underline !text-brand-900">awesome swag</a>
                  </Link>
                  .
                </p>

                <Button type="secondary" asChild>
                  <a
                    href={`${SITE_URL}/${username ? '?referral=' + username : ''}`}
                    className="w-full mt-4 lg:mt-8"
                  >
                    Join Launch Week 8
                  </a>
                </Button>
              </>
            )}
          </div>

          {!sharePage && user.username && (
            <TicketCustomizationForm user={user} supabase={supabase} />
          )}

          {/* {!sharePage && username && <ReferralIndicator />} */}
        </div>
      </div>
      <div className="w-full flex-1 col-span-8 lg:-mt-12">
        <div
          className={cn(
            styles['ticket-visual'],
            styleUtils.appear,
            styleUtils['appear-first'],
            'relative flex flex-col items-center gap-4 w-full'
          )}
        >
          <Ticket
            user={user}
            ticketGenerationState={ticketGenerationState}
            setTicketGenerationState={setTicketGenerationState}
          />
          {username && (
            <div className="w-full">
              <TicketActions
                username={username}
                golden={golden}
                ticketGenerationState={ticketGenerationState}
                setTicketGenerationState={setTicketGenerationState}
              />
              <TicketCopy username={username} isGolden={golden} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
