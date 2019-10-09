import React from "react"
import { Drawer, List, ListItem } from "@material-ui/core"

const SideDrawer = props => {
  return (
    <Drawer
      anchor='right'
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component='nav'>
        <ListItem button onClick={() => console.log("Event Starts in")}>
          Event Starts in
        </ListItem>
      </List>
      <List component='nav'>
        <ListItem button onClick={() => console.log("Venue Info")}>
          Venue Info
        </ListItem>
      </List>
      <List component='nav'>
        <ListItem button onClick={() => console.log("Highlights")}>
          Highlights
        </ListItem>
      </List>
      <List component='nav'>
        <ListItem button onClick={() => console.log("Pricing")}>
          Pricing
        </ListItem>
      </List>
      <List component='nav'>
        <ListItem button onClick={() => console.log("Location Info")}>
          Location Info
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer
