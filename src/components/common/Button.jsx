import React from "react"
import { Button } from "@material-ui/core"
import TicketIcon from "../../resources/images/icons/ticket.png"

const PurchaseButton = () => {
  return (
    <Button
      href='https://www1.ticketmaster.com/event/0A00574B4DB65B04'
      variant='contained'
      size='small'
      style={{
        background: "#ff4800",
        color: "white"
      }}
    >
      <img src={TicketIcon} className='iconImage' alt='icon_button'></img>
      Purchase Tickets
    </Button>
  )
}

export default PurchaseButton
