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
        <ListItem button onClick={() => console.log("list item clicked")}>
          Item 1
        </ListItem>
      </List>
    </Drawer>
  )
}

export default SideDrawer
