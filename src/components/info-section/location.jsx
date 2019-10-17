import React from "react"
import { Fade } from "react-reveal"
const Location = () => {
  return (
    <Fade>
      <div className='location_wrapper'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.6394983986957!2d-118.34473088436526!3d33.950399080633865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b786cbfb8f4f%3A0x5fb99cb7249e4170!2sSoFi%20Stadium!5e0!3m2!1sen!2sus!4v1571269266314!5m2!1sen!2sus'
          width='100%'
          height='500px'
          frameBorder='0'
          allowFullScreen
          title='Location'
        ></iframe>
        <div className='location_tag'>
          <div>Location</div>
        </div>
      </div>
    </Fade>
  )
}
export default Location
