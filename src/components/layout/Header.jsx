import React, { useEffect } from "react"
import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import SideDrawer from "./sideDrawer"

const Header = () => {
  const [open, setOpen] = React.useState(false)
  const [header, setHeader] = React.useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [])

  // componentWillUnmount() {
  //   window.removeEventListener("scroll")
  // }

  const handleScroll = () => {
    window.scrollY > 0 ? setHeader(true) : setHeader(false)
  }
  const toggleClose = value => {
    setOpen(value)
  }

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: header ? "#2f2f2f" : "transparent",
        boxShadow: "none",
        padding: "10px 0px"
      }}
    >
      <Toolbar>
        <div style={{ flexGrow: "1" }}>
          <div className='font_righteous ' style={{ fontSize: "40px" }}>
            Musical Events
          </div>
          <div className='header_logo_title'>
            Taylor Swift Lover Fest West at SoFi Stadium
          </div>
        </div>

        <IconButton
          aria-label='Menu'
          color='inherit'
          onClick={() => toggleClose(true)}
        >
          <MenuIcon></MenuIcon>
        </IconButton>
        <SideDrawer open={open} onClose={() => toggleClose(false)}></SideDrawer>
      </Toolbar>
    </AppBar>
  )
}
export default Header
