import { useEffect, useRef, useState } from 'react'
import { SITE_URL, TWEET_TEXT, TWEET_TEXT_GOLDEN } from '~/lib/constants'
import { IconCheckCircle } from 'ui'
import useConfData from '~/components/LaunchWeek/hooks/use-conf-data'
import { useParams } from '~/hooks/useParams'
import TicketForm from './TicketForm'
import { TwitterShareButton, TwitterIcon, LinkedinShareButton } from 'next-share'

type TicketGenerationState = 'default' | 'loading'

type Props = {
  username: string
  golden?: boolean
  ticketGenerationState?: TicketGenerationState
  setTicketGenerationState: (ticketGenerationState: TicketGenerationState) => void
}

export default function TicketActions({
  username,
  golden = false,
  ticketGenerationState,
  setTicketGenerationState,
}: Props) {
  const [imgReady, setImgReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const downloadLink = useRef<HTMLAnchorElement>()
  const link = `${SITE_URL}/tickets/${username}?lw=8${golden ? `&golden=true` : ''}`
  const permalink = encodeURIComponent(link)
  const text = golden ? TWEET_TEXT_GOLDEN : TWEET_TEXT
  const encodedText = encodeURIComponent(text)
  const { userData } = useConfData()
  const tweetUrl = `https://twitter.com/intent/tweet?url=${permalink}&via=supabase&text=${encodedText}`
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${permalink}`
  const downloadUrl = `https://obuldanrptloktxcffvn.functions.supabase.co/lw8-ticket?username=${encodeURIComponent(
    username
  )}`
  const params = useParams()
  const sharePage = params.username

  useEffect(() => {
    setImgReady(false)

    const img = new Image()

    img.src = downloadUrl
    img.onload = () => {
      setImgReady(true)
      setLoading(false)
      if (downloadLink.current) {
        downloadLink.current.click()
        downloadLink.current = undefined
      }
    }
  }, [downloadUrl])

  // const generateOG = () => {
  //   // Prefetch ticket og image.
  //   fetch(
  //     `https://obuldanrptloktxcffvn.functions.supabase.co/lw8-ticket?username=${encodeURIComponent(
  //       username ?? ''
  //     )}`
  //   ).catch((_) => {})
  // }

  return (
    <div className="grid gap-1 grid-cols-1 sm:grid-cols-3">
      {!sharePage ? (
        <>
          <div className="rounded bg-[#E6E8EB] text-scale-500 py-1 px-3 border border-[#3e3e3e] text-xs mb-1">
            <div className="flex items-center justify-center gap-2">
              <div className="text-scale-300">
                <IconCheckCircle size={10} strokeWidth={1.5} />
              </div>
              Connect with Github
            </div>
          </div>
          <div
            className={`rounded ${
              userData.sharedOnTwitter ? 'bg-[#E6E8EB] text-scale-500' : 'text-white'
            }  text-scale-500 py-1 px-3 border border-[#3e3e3e] text-xs mb-1 transition-all ease-out hover:bg-[#dfe1e3] w-full flex items-center justify-center gap-2 text-center ${
              userData.sharedOnTwitter ? 'text-scale-500' : 'text-white hover:text-scale-500'
            }`}
          >
            <a href={tweetUrl} rel="noopener noreferrer prefetch" target="_blank">
              {userData.sharedOnTwitter && (
                <div className="text-scale-900">
                  <IconCheckCircle size={10} strokeWidth={1} />
                </div>
              )}
              Share on Twitter
            </a>
          </div>
          <div
            className={`rounded ${
              userData.sharedOnLinkedIn ? 'bg-[#E6E8EB] text-scale-500' : 'text-white'
            }  text-scale-500 py-1 px-3 border border-[#3e3e3e] text-xs mb-1 transition-all ease-out hover:bg-[#dfe1e3]`}
          >
            <a
              href={linkedInUrl}
              rel="noopener noreferrer prefetch"
              target="_blank"
              className={`flex items-center justify-center gap-2 ${
                userData.sharedOnLinkedIn ? 'text-scale-500' : 'text-white hover:text-scale-500'
              }`}
            >
              {userData.sharedOnLinkedIn && (
                <div className="text-scale-900">
                  <IconCheckCircle size={10} strokeWidth={1} />
                </div>
              )}
              Share on Linkedin
            </a>
          </div>
        </>
      ) : (
        !username && (
          <TicketForm
            defaultUsername={username ?? undefined}
            ticketGenerationState={ticketGenerationState}
            setTicketGenerationState={setTicketGenerationState}
          />
        )
      )}
    </div>
  )
}
