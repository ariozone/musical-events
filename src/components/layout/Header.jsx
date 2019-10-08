import React from "react"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"

import MenuIcon from "@material-ui/core/Menu"

export default class Header extends React.Component {
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
          <div className='header_logo'>
            <div className='font_righteous header_logo_venue'>
              Musical Events
            </div>
            <div className='header_logo_title'>Enjoy The Music</div>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}
