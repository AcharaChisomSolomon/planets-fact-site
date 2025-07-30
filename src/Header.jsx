import React from "react";
import styled from "@emotion/styled"

import UnstyledButton from './UnstyledButton'
import VisuallyHidden from "./VisuallyHidden";
import MobileMenu from "./MobileMenu";

export default function Header({ setSelectedPlanet }) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const handlePlanetSelection = planet => {
    setSelectedPlanet(planet)
  }

  return (
    <Header_>
      <MainHeader>
        <LogoText>THE PLANETS</LogoText>

        <DesktopNav>
          <NavLink>MERCURY</NavLink>
          <NavLink>VENUS</NavLink>
          <NavLink>EARTH</NavLink>
          <NavLink>MARS</NavLink>
          <NavLink>JUPITER</NavLink>
          <NavLink>SATURN</NavLink>
          <NavLink>URANUS</NavLink>
          <NavLink>NEPTUNE</NavLink>
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

      {showMobileMenu && <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
        handlePlanetSelection={handlePlanetSelection}
      />}
    </Header_>
  )
}

const Header_ = styled.header`
  border-bottom: 1px solid var(--c-text-secondary);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(20 / 16 * 1rem) calc(24 / 16 * 1rem) calc(24 / 16 * 1rem);
`;

const LogoText = styled.p`
  line-height: 1;
  font-size: var(--fs-temp-header);
  letter-spacing: var(--temp-letter-spacing);
  font-family: 'Antonio';
`;

const DesktopNav = styled.nav`
  display: none;
`;

const NavLink = styled(UnstyledButton)`

`;

const MobileOption = styled.div`

`;