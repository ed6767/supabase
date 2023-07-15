import { useState } from 'react'
import { PageState, ConfDataContext, UserData } from '~/components/LaunchWeek/hooks/use-conf-data'
import TicketContainer from './TicketContainer'
// import Form from './form'
import { SupabaseClient, Session } from '@supabase/supabase-js'

type Props = {
  supabase: SupabaseClient | null
  session: Session | null
  userData: UserData
  sharePage?: boolean
  defaultPageState?: PageState
}

export default function TicketContext({
  supabase,
  session,
  userData,
  sharePage,
  defaultPageState = 'registration',
}: Props) {
  // const [userData, setUserData] = useState<UserData>(defaultUserData)
  // const [pageState, setPageState] = useState<PageState>(defaultPageState)

  return (
    // <ConfDataContext.Provider
    //   value={{
    //     supabase,
    //     session,
    //     userData,
    //     setUserData,
    //     setPageState,
    //   }}
    // >
    // {pageState === 'registration' && !sharePage ? (
    //   <Form align={defaultPageState === 'registration' ? 'Center' : 'Left'} />
    // ) : (
    <TicketContainer
      username={userData.username}
      name={userData.name}
      ticketNumber={userData.ticketNumber}
      sharePage={sharePage}
      golden={userData.golden}
      bgImageId={userData.bg_image_id}
      referrals={userData.referrals ?? 0}
    />
    // </ConfDataContext.Provider>
  )
}
