import React from "react"

class Countdown extends React.Component {
  render() {
    return (
      <div className='countdown_wrapper'>
        <div className='countdown_top'>Event Starts in</div>
        <div className='countdown_bottom'>
          <div className='countdown_item'>
            <div className='countdown_time'>23</div>
            <div className='countdown_tag'>Days</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>2</div>
            <div className='countdown_tag'>Hours</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>20</div>
            <div className='countdown_tag'>Minutes</div>
          </div>
          <div className='countdown_item'>
            <div className='countdown_time'>43</div>
            <div className='countdown_tag'>Seconds</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Countdown
