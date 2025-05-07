import React from "react"
import "./index.css" 
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import AboutSection from "./components/AboutSection" // Import AboutSection

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <AboutSection />
    </>
  )
}

export default App
