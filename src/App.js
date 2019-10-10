import React from "react"
import "./App.css"
import Header from "./components/layout/Header"
import Home from "./components/home"

function App() {
  return (
    <div className='App' style={{ height: "1500px", background: "red" }}>
      <Header />
      <Home></Home>
    </div>
  )
}

export default App
