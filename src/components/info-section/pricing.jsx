import React from "react"
import PurchaseButton from "../common/Button"

class Pricing extends React.Component {
  state = {
    seats: [
      {
        price: 800,
        position: "Floor",
        description:
          "Official Platinum Seats are premium tickets to concerts and other events made available by artists and event providers through Ticketmaster. They give fans fair and safe access to some of the best seats in the house."
      },
      {
        price: 550,
        position: "VIP",
        description:
          "Official Platinum Seats are premium tickets to concerts and other events made available by artists and event providers through Ticketmaster. They give fans fair and safe access to some of the best seats in the house."
      },
      {
        price: 350,
        position: "Club 1",
        description:
          "For events where they are available, please note that Official Platinum Seats can only be purchased online at www.ticketmaster.com, and they cannot be exchanged, transferred, or purchased with Ticketmaster Gift Cards."
      },
      {
        price: 300,
        position: "Club 2",
        description:
          "Official Platinum Seats are premium tickets to concerts and other events made available by artists and event providers through Ticketmaster. They give fans fair and safe access to some of the best seats in the house."
      },
      {
        price: 250,
        position: "Stadium",
        description:
          "The price you pay is the original price of the ticket. Official Platinum Seats were not purchased initially and then posted for resale; they are being sold for the first time through Ticketmaster on behalf of the artist or event provider."
      },
      {
        price: 180,
        position: "Economy",
        description:
          "Currently, Official Platinum Seats are not available for all events. Be sure to check back often as new events are continually being added."
      }
    ],
    link: ["https://www1.ticketmaster.com/event/0A00574B4DB65B04"]
  }
  renderSeat = () =>
    this.state.seats.map(seat => (
      <div className='pricing_item' key={seat.price}>
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
    ))
  render() {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>{this.renderSeat()}</div>
        </div>
      </div>
    )
  }
}

export default Pricing
