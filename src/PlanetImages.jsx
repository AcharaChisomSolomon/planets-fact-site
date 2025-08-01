import styled from "@emotion/styled"
import { QUERIES } from "./constants";

export default function PlanetImages({ variableData, surfaceSrc, displayedState }) {
  return (
    <Wrapper>
      <Container>
        <MainImgContainer>
          <Image src={variableData.imgSrc} alt="" />
        </MainImgContainer>
        <GeologyImgContainer
          displayedState={displayedState}
        >
          <Image src={surfaceSrc} alt="" />
        </GeologyImgContainer>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 calc(24 / 16 * 1rem);
  align-self: center;

  @media ${QUERIES.tabletAndLarger} {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  @media ${QUERIES.laptopAndLarger} {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: clamp(16.25rem, 17.84vw + 12.069rem, 28.125rem);
  margin: 0 auto;
  /* border: 1px solid blue; */
`;

const MainImgContainer = styled.div`

`;

const GeologyImgContainer = styled.div`
  display: ${p => p.displayedState === 'surface' ? undefined : 'none'};
  max-width: clamp(6.25rem, 5.634vw + 4.93rem, 10rem);
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
  /* border: 1px solid red; */
`;

const Image = styled.img`
  width: 100%;
`;