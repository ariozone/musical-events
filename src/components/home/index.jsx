import React from "react"
import Carrousel from "./Carrousel"
import Countdown from "./Countdown"

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel></Carrousel>
      <div className='artist_name'>
        {" "}
        <div className='wrapper'>Ariana Grande</div>
      </div>
      <Countdown></Countdown>
    </div>
  )
}
export default Home
