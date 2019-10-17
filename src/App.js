import React from "react"
import "./App.css"
import { Element } from "react-scroll"
import Header from "./components/layout/Header"
import Home from "./components/home"
import Info from "./components/info-section"
import Highlights from "./components/info-section/highlights"
import Pricing from "./components/info-section/pricing"
import Location from "./components/info-section/location"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <div className='App' style={{ height: "1500px", background: "red" }}>
      <Header />
      <Element name='EventStarts'>
        <Home />>
      </Element>
      <Element name='VenueInfo'>
        <Info></Info>
      </Element>
      <Element name='Highlights'>
        <Highlights></Highlights>
      </Element>
      <Element name='Pricing'>
        <Pricing></Pricing>
      </Element>
      <Element name='LocationInfo'>
        <Location></Location>
      </Element>
      <Footer></Footer>
    </div>
  )
}

export default App
