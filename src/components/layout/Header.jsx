import React from "react"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"

import MenuIcon from "@material-ui/core/Menu"

export default class Header extends React.Component {
  render() {
    return <AppBar position='fixed'>Musical Events</AppBar>
  }
}
