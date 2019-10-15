import React, { useState, useEffect } from "react"
import { Fade, Slide } from "react-reveal"

const Discount = () => {
  const [discountStart, setDiscountStart] = useState(0)
  const [discountEnd] = useState(35)

  const loadPercentage = () => {
    discountStart < discountEnd && setDiscountStart(discountStart + 1)
  }

  useEffect(() => {
    setTimeout(() => {
      loadPercentage()
    }, 50)
  }, [discountStart])

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade onReveal={() => loadPercentage()}>
          <div className='discount_percentage'>
            <span>{discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className='discount_description'>
            <h3>Purchase tickets before Jan 2020</h3>
            <p>
              If you’re verified as a Fan Club member, you’ll receive a text
              prior to the Verified Fan Fan Club Member presale that begins on
              Monday, October 14th at 10 am local time. The general public
              Verified Fan presale will follow during this date. Being verified
              for either presale would mean you’d receive a link to purchase and
              a unique access code. This text would come anywhere from 2-4 hours
              prior to the presale at 10 am local time.
            </p>
            <button>Purchase Now</button>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
