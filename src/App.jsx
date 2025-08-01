// import styled from "@emotion/styled"
import React from "react"
import Header from "./Header"
import Main from "./Main"
import data from "./data.json"

function App() {
  const [selectedPlanet, setSelectedPlanet] = React.useState('earth')

  return (
    <>
      <Header
        selectedPlanet={selectedPlanet}
        setSelectedPlanet={setSelectedPlanet}
      ></Header>
      
      <Main
        planetData={data.find(d => d.name.toLowerCase() === selectedPlanet)}
      ></Main>
    </>
  )
}

export default App
