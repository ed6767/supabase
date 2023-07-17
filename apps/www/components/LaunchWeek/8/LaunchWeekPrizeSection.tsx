import React from 'react'
import LabelBadge from './LabelBadge'
import LaunchWeekPrizeCard from './LaunchWeekPrizeCard'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LaunchWeekPrizeSection({
  className,
  ticket,
}: {
  className?: string
  ticket?: any
}) {
  const finalAnimationState = { y: 0, opacity: 1 }
  const Ticket = ticket

  return (
    <div id="lw-8-prizes" className={['scroll-mt-[75px]', className].join(' ')}>
      <div className="!max-w-[100vw]">
        <div className="text-center relative z-10 text-white">
          <motion.div
            className="max-w-[38rem] mx-auto flex flex-col items-center gap-4 px-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={finalAnimationState}
            viewport={{ once: true, margin: '-150px' }}
            transition={{ type: 'spring', bounce: 0, delay: 0.2 }}
          >
            <div className="w-[40px] h-[40px] rounded-sm bg-[#030A0C] flex items-center justify-center">
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
          </motion.div>
        </div>
        {ticket && <Ticket />}
        <div className="pt-8 lg:pt-16 px-4">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 max-w-7xl mx-auto h-auto text-white">
            <LaunchWeekPrizeCard
              imageUrl="/images/launchweek/seven/stickers.jpg"
              imageWrapperClassName="w-full aspect-[1.9/1]"
              animateFrom="down"
              content={
                <>
                  <LabelBadge text="10 caps" className="block sm:hidden" />
                  <h3 className="text-sm flex items-center gap-4">
                    Supabase Cap <LabelBadge text="10 caps" className="hidden sm:block" />
                  </h3>
                </>
              }
            />
            <LaunchWeekPrizeCard
              imageUrl="/images/launchweek/seven/tshirt.jpg"
              imageWrapperClassName="w-full aspect-[1.9/1]"
              imgObjectPosition="right"
              content={
                <>
                  <LabelBadge text="25 shirts" className="block sm:hidden" />
                  <h3 className="text-sm flex items-center gap-4">
                    Supabase T-shirt <LabelBadge text="25 shirts" className="hidden sm:block" />
                  </h3>
                </>
              }
              animateFrom="down"
            />
            <LaunchWeekPrizeCard
              imageUrl="/images/launchweek/seven/socks.jpg"
              imageWrapperClassName="w-full aspect-[1.9/1]"
              content={
                <>
                  <LabelBadge text="15 pairs" className="block sm:hidden" />
                  <h3 className="text-sm flex items-center gap-4">
                    Supabase Socks <LabelBadge text="15 pairs" className="hidden sm:block" />
                  </h3>
                </>
              }
              animateFrom="down"
            />
            <LaunchWeekPrizeCard
              imageUrl="/images/launchweek/seven/stickers.jpg"
              imageWrapperClassName="w-full aspect-[1.9/1]"
              animateFrom="down"
              content={
                <>
                  <LabelBadge text="200 packs" className="block sm:hidden" />
                  <h3 className="text-sm flex items-center gap-4">
                    Supabase Sticker Pack{' '}
                    <LabelBadge text="200 packs" className="hidden sm:block" />
                  </h3>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
