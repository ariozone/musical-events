import React from "react"
import PurchaseButton from "../common/Button"
import ticketInfo from "../../resources/ticketInfo"
import { Zoom } from "react-reveal"

const Pricing = () => {
  const seats = ticketInfo()
  const delay = [0, 250, 500, 250, 500, 750]
  const renderSeat = () =>
    seats.map((seat, index) => (
      <Zoom key={seat.price} delay={delay[index]}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${seat.price}</span>
              <span>{seat.position}</span>
            </div>
            <div className='pricing_description'>{seat.description}</div>
            <div className='pricing_buttons'>
              <PurchaseButton></PurchaseButton>
            </div>
          </div>
        </div>
      </Zoom>
    ))

  return (
    <div className='bck_black'>
      <div className='center_wrapper pricing_section'>
        <h2>Pricing</h2>

        <div className='pricing_wrapper'>{renderSeat()}</div>
      </div>
    </div>
  )
}

export default Pricing
