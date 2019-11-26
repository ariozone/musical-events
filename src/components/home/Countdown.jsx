import React from "react"
import Slide from "react-reveal/Slide"

const Countdown = () => {
  const stops = "Jul, 26, 2020"
  //const [stops] = React.useState("Jul, 26, 2020")
  const [days, setDays] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [seconds, setSeconds] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => getCountdownTime(stops), 1000)
  }, [])

  const getCountdownTime = stopTime => {
    const time = Date.parse(stopTime) - Date.parse(new Date())
    if (time > 0) {
      setSeconds(Math.floor((time / 1000) % 60))
      setMinutes(Math.floor((time / 1000 / 60) % 60))
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24))
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
    } else console.log("Event date passed!")
  }

  return (
    <Slide left delay={1000}>
      <div className='countdown_wrapper'>
        <div className='countdown_top'>Event Starts in</div>
        <div className='countdown_bottom'>
          <div className='countdown_item'>
            <div className='countdown_time'>{days}</div>
            <div className='countdown_tag'>Days</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>{hours}</div>
            <div className='countdown_tag'>Hours</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>{minutes}</div>
            <div className='countdown_tag'>Minutes</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>{seconds}</div>
            <div className='countdown_tag'>Seconds</div>
          </div>
        </div>
      </div>
    </Slide>
  )
}
export default Countdown
