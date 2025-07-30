// import styled from "@emotion/styled"
import React from "react"
import Header from "./Header"

function App() {
  const [selectedPlanet, setSelectedPlanet] = React.useState('earth')

  return (
    <>
      <Header
        selectedPlanet={selectedPlanet}
        setSelectedPlanet={setSelectedPlanet}
      ></Header>
      <p>{selectedPlanet}</p>
      <main>
        <section>
          <div></div>
          <div>
            <div></div>
            <div></div>
          </div>
        </section>
        <section>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
    </>
  )
}

export default App
