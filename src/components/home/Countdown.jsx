import React from "react"
import Slide from "react-reveal/Slide"

class Countdown extends React.Component {
  state = {
    stops: "Jan, 4, 2020",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentDidMount() {
    setInterval(() => this.getCountdownTime(this.state.stops), 1000)
  }

  getCountdownTime = stops => {
    const time = Date.parse(stops) - Date.parse(new Date())
    if (time > 0) {
      const seconds = Math.floor((time / 1000) % 60)
      const minutes = Math.floor((time / 1000 / 60) % 60)
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
      const days = Math.floor(time / (1000 * 60 * 60 * 24))
      this.setState({ days, hours, minutes, seconds })
    } else console.log("Event date passed!")
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className='countdown_wrapper'>
          <div className='countdown_top'>Event Starts in</div>
          <div className='countdown_bottom'>
            <div className='countdown_item'>
              <div className='countdown_time'>{this.state.days}</div>
              <div className='countdown_tag'>Days</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{this.state.hours}</div>
              <div className='countdown_tag'>Hours</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{this.state.minutes}</div>
              <div className='countdown_tag'>Minutes</div>
            </div>
            <div className='countdown_item'>
              <div className='countdown_time'>{this.state.seconds}</div>
              <div className='countdown_tag'>Seconds</div>
            </div>
          </div>
        </div>
      </Slide>
    )
  }
}
export default Countdown
