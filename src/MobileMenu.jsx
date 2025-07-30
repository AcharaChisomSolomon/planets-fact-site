import styled from '@emotion/styled';
import * as Dialog from '@radix-ui/react-dialog';

import UnstyledButton from './UnstyledButton';
import VisuallyHidden from './VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss, handlePlanetSelection }) => {
  const selectPlanet = planet => {
    handlePlanetSelection(planet)
    onDismiss()
  }
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Content>
          <MainHeader>
            <LogoText>THE PLANETS</LogoText>
            <CloseButton onClick={onDismiss}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
                <g fill='hsla(240, 6%, 54%, 1.00)' fillRule="evenodd">
                  <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/>
                </g>
              </svg>
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </CloseButton>
          </MainHeader>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>
          <Nav>
            <NavLink onClick={() => selectPlanet('mercury')}>
              <Circle color={'var(--c-mercury)'}></Circle>
              <NavText><p>MERCURY</p></NavText>
              <ChevronIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
              </ChevronIcon>
            </NavLink>
            <NavLink onClick={() => selectPlanet('venus')}>
              <Circle color={'var(--c-venus)'}></Circle>
              <NavText><p>VENUS</p></NavText>
              <ChevronIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
              </ChevronIcon>
            </NavLink>
            <NavLink onClick={() => selectPlanet('earth')}>
              <Circle color={'var(--c-earth)'}></Circle>
              <NavText><p>EARTH</p></NavText>
              <ChevronIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
              </ChevronIcon>
            </NavLink>
            <NavLink onClick={() => selectPlanet('mars')}>
              <Circle color={'var(--c-mars)'}></Circle>
              <NavText><p>MARS</p></NavText>
              <ChevronIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
              </ChevronIcon>
            </NavLink>
            <NavLink onClick={() => selectPlanet('jupiter')}>
              <Circle color={'var(--c-jupiter)'}></Circle>
              <NavText><p>JUPITER</p></NavText>
              <ChevronIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
              </ChevronIcon>
            </NavLink>
            <NavLink onClick={() => selectPlanet('saturn')}>
              <Circle color={'var(--c-saturn)'}></Circle>
              <NavText><p>SATURN</p></NavText>
              <ChevronIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
              </ChevronIcon>
            </NavLink>
            <NavLink onClick={() => selectPlanet('uranus')}>
              <Circle color={'var(--c-uranus)'}></Circle>
              <NavText><p>URANUS</p></NavText>
              <ChevronIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
              </ChevronIcon>
            </NavLink>
            <NavLink onClick={() => selectPlanet('neptune')}>
              <Circle color={'var(--c-neptune)'}></Circle>
              <NavText><p>NEPTUNE</p></NavText>
              <ChevronIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
              </ChevronIcon>
            </NavLink>
          </Nav>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Content = styled(Dialog.Content)`
  min-height: 100svh;
  background-color: var(--c-bg);
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: calc(20 / 16 * 1rem) calc(24 / 16 * 1rem) calc(24 / 16 * 1rem);
  border-bottom: 1px solid var(--c-text-secondary);
`;

const LogoText = styled.p`
  line-height: 1;
  font-size: var(--fs-temp-header);
  letter-spacing: var(--temp-letter-spacing);
  font-family: 'Antonio';
`;

const CloseButton = styled(UnstyledButton)`

`;

const Nav = styled.nav`
  padding-block: calc(14 / 16 * 1rem);
`;

const NavLink = styled(UnstyledButton)`
  width: calc(100% - calc(24 / 16 * 1rem) * 2);
  display: flex;
  align-items: center;
  gap: calc(18 / 16 * 1rem);
  margin-inline: calc(24 / 16 * 1rem);
  padding: calc(20 / 16 * 1rem) 0 calc(24 / 16 * 1rem);

  &:not(:last-of-type) {
    border-bottom: 1px solid #979797;
  }
`;

const Circle = styled.div`
  width: calc(20 / 16 * 1rem);
  height: calc(20 / 16 * 1rem);
  border-radius: 50%;
  background-color: ${p => p.color};
`;

const NavText = styled.div`
  p {
    font-size: calc(15 / 16 * 1rem);
    letter-spacing: 1.36px;
  }
`;

const ChevronIcon = styled.div`
  margin-left: auto;
  padding: 7px;
`;

export default MobileMenu;