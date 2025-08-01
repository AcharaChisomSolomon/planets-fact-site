import styled from "@emotion/styled"
import { QUERIES } from "./constants";

export default function PlanetFacts({ data }) {
  const { rotation, revolution, radius, temperature } = data
  return (
    <Wrapper>
        <Fact>
          <FactTitle>ROTATION TIME</FactTitle>
          <FactValue>{rotation}</FactValue>
        </Fact>
        <Fact>
          <FactTitle>REVOLUTION TIME</FactTitle>
          <FactValue>{revolution}</FactValue>
        </Fact>
        <Fact>
          <FactTitle>RADIUS</FactTitle>
          <FactValue>{radius}</FactValue>
        </Fact>
        <Fact>
          <FactTitle>AVERAGE TEMP.</FactTitle>
          <FactValue>{temperature}</FactValue>
        </Fact>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  gap: calc(8 / 16 * 1rem);
  padding: 0 calc(24 / 16 * 1rem);
  margin-bottom: calc(56 / 16 * 1rem);

  @media ${QUERIES.tabletAndLarger} {
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(0.75rem, 2.679vw + -0.536rem, 1.875rem);

    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }

  @media ${QUERIES.laptopAndLarger} {
    margin-top: 43px;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
`;

const Fact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--c-text-secondary);
  padding-block: clamp(0.9375rem, 0.763vw + 0.759rem, 1.125rem);
  padding-inline: clamp(1.5rem, -2.545vw + 2.096rem, 0.875rem);

  @media ${QUERIES.tabletAndLarger} {
    padding-block: clamp(1.125rem, 1.042vw + 0.625rem, 1.5625rem);
    padding-inline: clamp(0.875rem, 1.488vw + 0.161rem, 1.5rem);
    flex-direction: column;
    align-items: start;
    gap: calc(4 / 16 * 1rem);
  }
`;

const FactValue = styled.h2`
  font-size: clamp(1.25rem, 1.018vw + 1.011rem, 1.5rem);

  @media ${QUERIES.tabletAndLarger} {
    font-size: clamp(1.5rem, 2.381vw + 0.357rem, 2.5rem);
  }
`;

const FactTitle = styled.p`
  font-weight: bold;
  letter-spacing: 0.93px;
  color: var(--c-text-secondary);
  font-size: clamp(0.5rem, 0.446vw + 0.286rem, 0.6875rem);
`;