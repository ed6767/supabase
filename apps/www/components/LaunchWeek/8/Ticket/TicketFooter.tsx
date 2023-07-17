import React from 'react'
import { LW8_DATE } from '~/lib/constants'

interface Props {}

export default function TicketFooter({}: Props) {
  return (
    <div className="relative z-10 w-full flex gap-4 md:gap-6 mb-4 md:mb-6 text-scale-1100 font-mono uppercase tracking-widest">
      <span>{LW8_DATE}</span>
      <span>supabase.com/ticket</span>
    </div>
  )
}
