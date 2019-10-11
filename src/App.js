import React from "react"
import "./App.css"
import Header from "./components/layout/Header"
import Home from "./components/home"
import Info from "./components/info-section"

function App() {
  return (
    <div className='App' style={{ height: "1500px", background: "red" }}>
      <Header />
      <Home></Home>
      <Info></Info>
    </div>
  )
}

export default App
