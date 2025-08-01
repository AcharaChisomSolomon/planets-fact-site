import styled from '@emotion/styled';

export default styled.button`
  display: ${(props) => props.display || 'block'};
  margin: 0;
  padding: 0;
  line-height: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;