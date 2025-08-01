import styled from "@emotion/styled"
import UnstyledButton from "./UnstyledButton"
import { PLANET_COLORS, QUERIES } from "./constants"

export default function PlanetSwitchers({ 
  displayedState, 
  handleDisplayedStateUpdate,
  name
}) {
  return (
    <Wrapper>
      <Container>
        <Switcher 
          onClick={() => handleDisplayedStateUpdate('overview')}
          isActive={displayedState === 'overview'}
          name={name}
        >
          <Spanner>01</Spanner>
          OVERVIEW
        </Switcher>
        <Switcher 
          onClick={() => handleDisplayedStateUpdate('structure')}
          isActive={displayedState === 'structure'}
          name={name}
        >
          <Spanner>02</Spanner>
          <span><MainSpanner>INTERNAL</MainSpanner> STRUCTURE</span>
        </Switcher>
        <Switcher 
          onClick={() => handleDisplayedStateUpdate('surface')}
          isActive={displayedState === 'surface'}
          name={name}
        >
          <Spanner>03</Spanner>
          <span>SURFACE <MainSpanner>GEOLOGY</MainSpanner></span>
        </Switcher>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-bottom: 1px solid var(--c-text-secondary);

  @media ${QUERIES.tabletAndLarger} {
    border: none;

    grid-column: 2 / 3;
    grid-row: 2 / 3;
    align-self: center;
  }

  @media ${QUERIES.laptopAndLarger} {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 calc(24 / 16 * 1rem);

  @media ${QUERIES.tabletAndLarger} {
    flex-direction: column;
    gap: 1rem;
    padding: 0;
  }
`;

const Switcher = styled(UnstyledButton)`
  padding-block: calc(19 / 16 * 1rem);
  padding-block-end: ${p => p.isActive && `calc(15 / 16 * 1rem)`};
  border-bottom: ${p => p.isActive ? `4px solid ${PLANET_COLORS[p.name]}` : undefined};
  font-weight: bold;
  font-size: clamp(0.5625rem, 0.446vw + 0.348rem, 0.75rem);
  color: ${p => p.isActive ? 'var(--c-text-primary)' : 'var(--c-text-secondary)'};
  letter-spacing: 1.93px;

  &:hover {
    color: var(--c-text-primary);
  }

  @media ${QUERIES.tabletAndLarger} {
    display: flex;
    gap: clamp(0.9375rem, 1.786vw + 0.08rem, 1.6875rem);
    padding-inline: clamp(1.1875rem, 1.339vw + 0.545rem, 1.75rem);
    padding-block: clamp(0.9375rem, 0.744vw + 0.58rem, 1.25rem);
    border: ${p => !p.isActive && `1px solid var(--c-text-secondary)`};
    color: var(--c-text-primary);
    background-color: ${p => p.isActive && `${PLANET_COLORS[p.name]}`};

    &:hover {
      background-color: ${p => !p.isActive && `var(--c-text-tetiary)`}
    }
  }
`;

const Spanner = styled.span`
  display: none;
  color: var(--c-secondary);

  @media ${QUERIES.tabletAndLarger} {
    display: revert;;
  }
`;

const MainSpanner = styled(Spanner)``;