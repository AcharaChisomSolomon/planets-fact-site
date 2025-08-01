import styled from '@emotion/styled'
import iconSource from './assets/icon-source.svg'
import { QUERIES } from './constants';

export default function PlanetInfo({ name, variableData }) {
  return (
    <Wrapper>
      <PlanetName>{name}</PlanetName>
      <PlanetText>{variableData.content}</PlanetText>
      <div>
        <LinkContainer>
          <span>Source : </span>
          <PlanetSource href={variableData.source}>
            Wikipedia <Icon width={12} height={12} src={iconSource} alt="" />
          </PlanetSource>
        </LinkContainer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* border: 1px solid red; */
  padding: 0 calc(24 / 16 * 1rem);
  text-align: center;

  @media ${QUERIES.tabletAndLarger} {
    padding: 0;
    text-align: revert;

    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  @media ${QUERIES.laptopAndLarger} {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

const PlanetName = styled.h1`
  font-size: clamp(2.5rem, 2.036vw + 2.023rem, 3rem);

  @media ${QUERIES.tabletAndLarger} {
    font-size: clamp(3rem, 4.762vw + 0.714rem, 5rem);
  }
`;

const PlanetText = styled.p`
  font-size: clamp(0.6875rem, 0.446vw + 0.473rem, 0.875rem);
  margin-block-start: clamp(1.875rem, 2.29vw + 1.338rem, 2.4375rem);
  margin-block-end: clamp(2.75rem, -2.036vw + 3.227rem, 2.25rem);
  font-weight: 400;
  line-height: 2;
  opacity: .8;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  font-weight: normal;
  gap: 7px;
  opacity: .5;

  @media ${QUERIES.tabletAndLarger} {
    justify-content: revert;
  }
`;

const PlanetSource = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: var(--c-text-primary);
`;

const Icon = styled.img`
  flex-shrink: 0;
`;