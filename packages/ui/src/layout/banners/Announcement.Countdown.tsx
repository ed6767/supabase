import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'
import Countdown from 'react-countdown'
import { AnnouncementProps } from './Announcement'
import _announcement from './data/Announcement.json'
import CountdownWidget from '../../components/CountdownWidget/CountdownWidget'

interface CountdownButtonProps {
  dest: string
}

const announcement = _announcement as AnnouncementProps

function CountdownButton({ children, dest }: PropsWithChildren<CountdownButtonProps>) {
  return (
    <a
      href={dest}
      className="bg-white text-xs px-1.5 md:px-2.5 py-1 rounded-full text-black shadow-none hover:shadow-mg cursor-pointer"
    >
      {children}
    </a>
  )
}

function CountdownBanner() {
  const { pathname } = useRouter()
  const isLaunchWeekPage = pathname === '/launch-week'
  const isLaunchWeekSection = pathname.includes('launch-week')

  if (isLaunchWeekPage) return null

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="w-full flex gap-3 md:gap-6 items-center justify-center">
          <p>Supabase Launch Week 8</p>
          <div>
            <CountdownButton dest="/launch-week">Explore</CountdownButton>
          </div>
        </div>
      )
    } else {
      // Render countdown
      return (
        <div
          className={[
            'w-full flex gap-3 md:gap-6 items-center md:justify-center text-sm md:text-base',
            isLaunchWeekSection && '!justify-center',
          ].join(' ')}
        >
          <p>
            <span className="hidden md:inline">Supabase</span> Launch Week 8
          </p>
          <div className="flex gap-1 items-center">
            <CountdownWidget days={days} hours={hours} minutes={minutes} seconds={seconds} />
          </div>
          {!isLaunchWeekPage && (
            <div className="hidden md:block">
              <CountdownButton dest="/launch-week">Get your ticket</CountdownButton>
            </div>
          )}
        </div>
      )
    }
  }

  return (
    <div
      className="relative w-full h-14 p-2 bg-gradient-to-r from-[#9E44EF] to-[#DBB8BF] bg-blue-300 flex items-center justify-center text-white !bg-cover !bg-center"
      style={{ background: 'url("/images/launchweek/8/banner.svg")' }}
    >
      <Countdown date={new Date(announcement.launchDate)} renderer={renderer} />
    </div>
  )
}

export default CountdownBanner
