import React from "react"
import { AppBar, Toolbar, IconButton, Menu } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SideDrawer from "./sideDrawer"

export default class Header extends React.Component {
  state = {
    open: false
  }
  toggleClose = value => {
    this.setState({ open: value })
  }

  render() {
    return (
      <AppBar
        position='fixed'
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div style={{ flexGrow: "1" }}>
            <div className='font_righteous ' style={{ fontSize: "40px" }}>
              Musical Events
            </div>
            <div className='header_logo_title'>Enjoy The Music</div>
          </div>

          <IconButton
            aria-label='Menu'
            color='inherit'
            onClick={() => this.toggleClose(true)}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <SideDrawer
            open={this.state.open}
            onClose={() => this.toggleClose(true)}
          ></SideDrawer>
        </Toolbar>
      </AppBar>
    )
  }
}
