import React from "react"
import "./App.css"
import Header from "./components/layout/Header"
import Home from "./components/home"
import Info from "./components/info-section"
import Highlights from "./components/info-section/highlights"
import Pricing from "./components/info-section/pricing"

function App() {
  return (
    <div className='App' style={{ height: "1500px", background: "red" }}>
      <Header />
      <Home></Home>
      <Info></Info>
      <Highlights></Highlights>
      <Pricing></Pricing>
    </div>
  )
}

export default App
