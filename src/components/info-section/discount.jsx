import React from "react"
import { Fade, Slide } from "react-reveal"
const Discount = () => {
  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <div className='discount_percentage'>
          <span>35%</span>
          <span>OFF</span>
        </div>
        <div className='discount_description'>
          <h3>Purchase tickets before Jan 2020</h3>
          <p>
            If you’re verified as a Fan Club member, you’ll receive a text prior
            to the Verified Fan Fan Club Member presale that begins on Monday,
            October 14th at 10 am local time. The general public Verified Fan
            presale will follow during this date. Being verified for either
            presale would mean you’d receive a link to purchase and a unique
            access code. This text would come anywhere from 2-4 hours prior to
            the presale at 10 am local time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Discount
