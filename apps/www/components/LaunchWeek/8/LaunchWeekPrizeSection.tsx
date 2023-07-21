import React from 'react'
import LabelBadge from './LabelBadge'
import LaunchWeekPrizeCard from './LaunchWeekPrizeCard'
import Image from 'next/image'

export default function LaunchWeekPrizeSection({
  className,
  ticket,
}: {
  className?: string
  ticket?: any
}) {
  const Ticket = ticket

  return (
    <div id="lw8-prizes" className={['scroll-mt-[75px] md:scroll-mt-[135px]', className].join(' ')}>
      <div className="!max-w-[100vw]">
        <div className="text-center relative z-10 text-white">
          <div className="max-w-[38rem] mx-auto flex flex-col items-center gap-4 px-4">
            <div className="w-[40px] h-[40px] rounded-sm flex items-center justify-center">
              <Image
                src="/images/launchweek/8/prize-icon.svg"
                alt="prizes"
                layout="fixed"
                width="60"
                height="60"
              />
            </div>
            <h2 className="text-4xl">Get your winning ticket</h2>
            <p className="radial-gradient-text-scale-500">
              Join us on August 11th for Launch Week 8's final day
              <br className="hidden md:inline-block" /> and find out if you are one of the lucky
              winners. Get sharing!
            </p>
          </div>
        </div>
        {ticket && <Ticket />}
        <div className="pt-8 lg:pt-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 max-w-7xl mx-auto h-auto text-white">
            <LaunchWeekPrizeCard
              imageUrl="/images/launchweek/8/swag/deskmat.jpg"
              imageWrapperClassName="w-full aspect-[1.9/1]"
              content={
                <h3 className="text-sm flex items-center gap-4">
                  Supabase Desk Mat <LabelBadge text="10 pieces" />
                </h3>
              }
              animateFrom="down"
            />
            <LaunchWeekPrizeCard
              imageUrl="/images/launchweek/8/swag/shirt.jpg"
              imageWrapperClassName="w-full aspect-[1.9/1]"
              imgObjectPosition="right"
              content={
                <h3 className="text-sm flex items-center gap-4">
                  Supabase T-Shirt <LabelBadge text="20 pieces" />
                </h3>
              }
              animateFrom="down"
            />
            <LaunchWeekPrizeCard
              imageUrl="/images/launchweek/8/swag/cap.jpg"
              imageWrapperClassName="w-full aspect-[1.9/1]"
              animateFrom="down"
              content={
                <h3 className="text-sm flex items-center gap-4">
                  Supabase Cap <LabelBadge text="25 caps" />
                </h3>
              }
            />
            <LaunchWeekPrizeCard
              imageUrl="/images/launchweek/8/swag/stickers.jpg"
              imageWrapperClassName="w-full aspect-[1.9/1]"
              animateFrom="down"
              content={
                <h3 className="text-sm flex items-center gap-4">
                  Supabase Sticker Pack <LabelBadge text="100 packs" />
                </h3>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
