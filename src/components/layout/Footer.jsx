import React from "react"
import { Fade } from "react-reveal"
const Footer = () => {
  return (
    <footer className='bck_red'>
      <Fade delay={500}>
        <div className='font_righteous footer_logo_venue'> Musical Events </div>
        <div className='footer_copyright'>
          Musical Events 2019. Created By Ario Tamaddoni.
        </div>
      </Fade>
    </footer>
  )
}
export default Footer
