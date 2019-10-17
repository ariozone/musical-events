import React from "react"
import { Drawer, List, ListItem } from "@material-ui/core"
import { scroller } from "react-scroll"

const SideDrawer = props => {
  const scrollToElement = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    })
    props.onClose(false)
  }
  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component='nav'>
        <ListItem button onClick={() => scrollToElement("EventStarts")}>
          Event Starts in
        </ListItem>
      </List>
      <List component='nav'>
        <ListItem button onClick={() => scrollToElement("VenueInfo")}>
          Venue Info
        </ListItem>
      </List>
      <List component='nav'>
        <ListItem button onClick={() => scrollToElement("Highlights")}>
          Highlights
        </ListItem>
      </List>
      <List component='nav'>
        <ListItem button onClick={() => scrollToElement("Pricing")}>
          Pricing
        </ListItem>
      </List>
      <List component='nav'>
        <ListItem button onClick={() => scrollToElement("LocationInfo")}>
          Location Info
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer
