import CountdownStep from './CountdownStep'

interface CountdownWidgetProps {
  days?: string
  hours?: string
  minutes?: string
  seconds?: string
}

function CountdownWidget({ days, hours, minutes, seconds }: CountdownWidgetProps) {
  return (
    <div className="flex gap-1 items-center">
      {days && (
        <>
          <CountdownStep value={days} unit="d" /> :
        </>
      )}
      {hours && (
        <>
          <CountdownStep value={hours} unit="h" /> :
        </>
      )}
      {minutes && (
        <>
          <CountdownStep value={minutes} unit="m" />
          {seconds && ' :'}
        </>
      )}
      {seconds && <CountdownStep value={seconds} unit="s" />}
    </div>
  )
}

export default CountdownWidget
