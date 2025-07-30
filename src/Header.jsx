import styled from "@emotion/styled"
import UnstyledButton from './UnstyledButton'

export default function Header() {
  return (
    <header>
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

        </MobileOption>
      </MainHeader>
    </header>
  )
}

const MainHeader = styled.div`

`;

const LogoText = styled.p`

`;

const DesktopNav = styled.nav`

`;

const NavLink = styled(UnstyledButton)`

`;

const MobileOption = styled.div`

`;