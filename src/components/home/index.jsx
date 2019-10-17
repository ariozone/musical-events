import React from "react"
import Carrousel from "./Carrousel"
import Countdown from "./Countdown"
import { Zoom } from "react-reveal"

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel></Carrousel>
      <div className='artist_name'>
        {" "}
        <Zoom>
          <div className='wrapper'>Taylor Swift</div>
        </Zoom>
      </div>
      <Countdown></Countdown>
    </div>
  )
}
export default Home
