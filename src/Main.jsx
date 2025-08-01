import React from "react"
import { imageMap } from './imageMap'
import PlanetSwitchers from "./PlanetSwitchers"
import PlanetFacts from "./PlanetFacts"
import styled from "@emotion/styled"
import { QUERIES } from "./constants"
import PlanetInfo from "./PlanetInfo"
import PlanetImages from "./PlanetImages"

export default function Main({ planetData }) {
  const { 
    name, 
    overview,
    structure,
    geology,
    rotation,
    revolution,
    radius,
    temperature,
    images
  } = planetData
  const [displayedState, setDisplayedState] = React.useState('overview')
  const [variableData, setVariableData] = React.useState({})

  React.useEffect(() => {
    setDisplayedState('overview')
    console.log('hiya')
  }, [planetData])
  React.useEffect(() => {
    switch(displayedState) {
      case 'overview':
        setVariableData({
          ...overview,
          imgSrc: imageMap[images.planet]
        })
        break
      case 'structure':
        setVariableData({
          ...structure,
          imgSrc: imageMap[images.internal]
        })
        break
      case 'surface':
        setVariableData({
          ...geology,
          imgSrc: imageMap[images.planet]
        })
    }
  }, [displayedState, overview, structure, images, geology])

  const handleDisplayedStateUpdate = (state) => {
    setDisplayedState(state)
  }

  return (
    <Wrapper>
      <PlanetSwitchers
        handleDisplayedStateUpdate={handleDisplayedStateUpdate}
        displayedState={displayedState}
        name={name.toLowerCase()}
      />
      <PlanetImages
        variableData={variableData}
        surfaceSrc={imageMap[images.geology]}
        displayedState={displayedState}
      />
      <PlanetInfo 
        name={name}
        variableData={variableData}
      />
      <PlanetFacts
        data={{ rotation, revolution, radius, temperature }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 434px auto auto;
  gap: calc(33 / 16 * 1rem);

  @media ${QUERIES.tabletAndLarger} {
    max-width: calc(calc(1110 / 16 * 1rem) + calc(24 / 16 * 2rem));
    padding: 0 calc(24 / 16 * 1rem);
    margin: 0 auto;

    grid-template-rows: 550px auto auto;
    grid-template-columns: 50% 1fr;
  }

  @media ${QUERIES.laptopAndLarger} {
    margin-top: 125px;
    gap: 43px;
    grid-template-columns: 1fr 350px;
    grid-template-rows: repeat(3, auto);
  }
`;