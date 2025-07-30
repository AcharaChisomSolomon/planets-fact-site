import React from "react";
import styled from "@emotion/styled"

import { QUERIES } from "./constants";
import UnstyledButton from './UnstyledButton'
import VisuallyHidden from "./VisuallyHidden";
import MobileMenu from "./MobileMenu";

export default function Header({ selectedPlanet, setSelectedPlanet }) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const handlePlanetSelection = planet => {
    setSelectedPlanet(planet)
  }

  return (
    <Header_>
      <Wrapper>
        <MainHeader>
          <LogoText>THE PLANETS</LogoText>

          <DesktopNav>
            <NavLink 
              isActive={selectedPlanet === 'mercury'}
              color={'var(--c-mercury)'}
              onClick={() => setSelectedPlanet('mercury')}
              >MERCURY</NavLink>
            <NavLink 
              isActive={selectedPlanet === 'venus'}
              color={'var(--c-venus)'}
              onClick={() => setSelectedPlanet('venus')}
              >VENUS</NavLink>
            <NavLink 
              isActive={selectedPlanet === 'earth'}
              color={'var(--c-earth)'}
              onClick={() => setSelectedPlanet('earth')}
              >EARTH</NavLink>
            <NavLink 
              isActive={selectedPlanet === 'mars'}
              color={'var(--c-mars)'}
              onClick={() => setSelectedPlanet('mars')}
              >MARS</NavLink>
            <NavLink 
              isActive={selectedPlanet === 'jupiter'}
              color={'var(--c-jupiter)'}
              onClick={() => setSelectedPlanet('jupiter')}
              >JUPITER</NavLink>
            <NavLink 
              isActive={selectedPlanet === 'saturn'}
              color={'var(--c-saturn)'}
              onClick={() => setSelectedPlanet('saturn')}
              >SATURN</NavLink>
            <NavLink 
              isActive={selectedPlanet === 'uranus'}
              color={'var(--c-uranus)'}
              onClick={() => setSelectedPlanet('uranus')}
              >URANUS</NavLink>
            <NavLink 
              isActive={selectedPlanet === 'neptune'}
              color={'var(--c-neptune)'}
              onClick={() => setSelectedPlanet('neptune')}
              >NEPTUNE</NavLink>
          </DesktopNav>

          <MobileOption>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                <g fill='#fff' fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/>
                </g>
              </svg>
              <VisuallyHidden>Show Menu</VisuallyHidden>
            </UnstyledButton>
          </MobileOption>
        </MainHeader>

        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
          handlePlanetSelection={handlePlanetSelection}
        />
      </Wrapper>
    </Header_>
  )
}

const Header_ = styled.header`
  border-bottom: 1px solid var(--c-text-secondary);
`;

const Wrapper = styled.div`
  max-width: calc(1440 / 16 * 1rem);
  margin: 0 auto;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(20 / 16 * 1rem) calc(24 / 16 * 1rem) calc(24 / 16 * 1rem);

  @media ${QUERIES.tabletAndLarger} {
    display: revert;
    text-align: center;
    padding-block: 0;
  }

  @media ${QUERIES.laptopAndLarger} {
    display: flex;
  }
`;

const LogoText = styled.p`
  line-height: 1;
  font-size: var(--fs-temp-header);
  letter-spacing: var(--temp-letter-spacing);
  font-family: 'Antonio';

  @media ${QUERIES.tabletAndLarger} {
    padding-block-start: calc(26 / 16 * 1rem);
  }

  @media ${QUERIES.laptopAndLarger} {
    padding-block-start: 0;
  }
`;

const DesktopNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndLarger} {
    display: flex;
    justify-content: center;
    gap: calc(24 / 16 * 1rem);
  }

`;

const NavLink = styled(UnstyledButton)`
  font-size: var(--fs-h4);
  font-weight: bold;
  letter-spacing: var(--h4-letter-spacing);
  color: var(--c-text-secondary);
  padding-block-start: calc(32 / 16 * 1rem);
  padding-block-end: ${p => p.isActive ? `calc(calc(24 / 16 * 1rem) - calc(4 / 16 * 1rem))` : 'calc(24 / 16 * 1rem)'};
  border-bottom: ${p => p.isActive ? `4px solid ${p.color}` : undefined};

  &:hover {
    color: var(--c-text-primary);
  }

  @media ${QUERIES.laptopAndLarger} {
    padding-block: calc(26 / 16 * 1rem);
    padding-block-start: ${p => p.isActive ? `calc(calc(26 / 16 * 1rem) - calc(4 / 16 * 1rem))` : 'calc(26 / 16 * 1rem)'};
    border-top: ${p => p.isActive ? `4px solid ${p.color}` : undefined};
    border-bottom: none;
  }
`;

const MobileOption = styled.div`
  @media ${QUERIES.tabletAndLarger} {
    display: none;
  }
`;