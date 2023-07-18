import { NextSeo } from 'next-seo'
import { GetStaticProps, GetStaticPaths } from 'next'
import Error from 'next/error'
import DefaultLayout from '~/components/Layouts/Default'
import SectionContainer from '~/components/Layouts/SectionContainer'
import TicketContainer from '~/components/LaunchWeek/8/Ticket/TicketContainer'
import { SITE_URL } from '~/lib/constants'
import { Session, SupabaseClient, createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import LaunchWeekPrizeSection from '~/components/LaunchWeek/8/LaunchWeekPrizeSection'
// import TicketBrickWall from '~/components/LaunchWeek/8/Ticket/TicketBrickWall'
import { PageState, ConfDataContext, UserData } from '~/components/LaunchWeek/hooks/use-conf-data'
import CTABanner from '../../../components/CTABanner'
import { useTheme } from 'common/Providers'

interface Props {
  user: UserData
  users: UserData[]
  ogImageUrl: string
}

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'http://localhost:54321',
  process.env.SUPABASE_SERVICE_ROLE_SECRET ??
    process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_SECRET ??
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9idWxkYW5ycHRsb2t0eGNmZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk3MjcwMTIsImV4cCI6MTk4NTMwMzAxMn0.SZLqryz_-stF8dgzeVXmzZWPOqdOrBwqJROlFES8v3I'
)

export default function UsernamePage({ user, users, ogImageUrl }: Props) {
  const { username, ticketNumber, name } = user

  const TITLE = `${name ? name + '’s' : 'Get your'} #SupaLaunchWeek Ticket`
  const DESCRIPTION = 'Supabase Launch Week 8 | 7–11 August 2023 | Generate your ticket. Win swag.'
  const OG_URL = `${SITE_URL}/tickets/${username}`

  const [supabase, setSupabase] = useState<SupabaseClient | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const { isDarkMode, toggleTheme } = useTheme()

  const [pageState, setPageState] = useState<PageState>('ticket')

  if (!ticketNumber) {
    return <Error statusCode={404} />
  }

  useEffect(() => {
    if (!supabase) {
      setSupabase(
        createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        )
      )
    }
  }, [])

  useEffect(() => {
    toggleTheme(true)
    document.body.className = 'dark bg-[#020405]'
    return () => {
      document.body.className = ''
      isDarkMode ? toggleTheme(true) : toggleTheme(false)
    }
  }, [])

  return (
    <>
      <NextSeo
        title={TITLE}
        openGraph={{
          title: TITLE,
          description: DESCRIPTION,
          url: OG_URL,
          images: [
            {
              url: ogImageUrl,
              width: 1200,
              height: 630,
            },
          ],
        }}
      />
      <ConfDataContext.Provider
        value={{
          supabase,
          session,
          userData: user,
          setUserData: () => null,
          setPageState,
        }}
      >
        <DefaultLayout>
          <div className="-mt-[65px]">
            <div className="relative pt-20">
              <div className="relative z-10">
                <SectionContainer className="flex flex-col justify-around items-center gap-2 md:gap-4 !px-2 !mx-auto md:min-h-[auto]">
                  {/* <LaunchWeekLogoHeader /> */}
                  {supabase && (
                    <TicketContainer
                      user={user}
                      referrals={user.referrals ?? 0}
                      supabase={supabase}
                      sharePage
                    />
                  )}
                </SectionContainer>
              </div>
            </div>
            <SectionContainer className="!pt-8">
              <LaunchWeekPrizeSection className="" />
            </SectionContainer>
            {/* <TicketBrickWall users={users} /> */}
          </div>
          <CTABanner className="!bg-[#020405]" />
        </DefaultLayout>
      </ConfDataContext.Provider>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = params?.username?.toString() || null
  let user
  let golden = false
  let ogImageUrl

  // fetch users for the TicketBrickWall
  const { data: users } = await supabaseAdmin!.from('lw8_tickets_staging').select().limit(17)

  // fetch a specific user
  if (username) {
    const { data } = await supabaseAdmin!
      .from('lw8_tickets_staging')
      .select('name, username, ticketNumber, bg_image_id, metadata')
      .eq('username', username)
      .single()

    user = data
    // referrals = user?.referrals ?? 0
    ogImageUrl = `https://obuldanrptloktxcffvn.functions.supabase.co/lw7-ticket-og?username=${encodeURIComponent(
      username ?? ''
    )}${golden ? '&golden=true' : ''}`
  }

  return {
    props: {
      user: {
        ...user,
        golden,
        username,
      },
      ogImageUrl,
      users,
      key: username,
    },
    revalidate: 5,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: 'blocking',
  })
}
