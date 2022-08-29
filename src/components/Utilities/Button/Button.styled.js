import styled from 'styled-components';

export const StyledButton = styled.input`
  font-size: 18px;
  margin: 10px;
  background: transparent;
  font-weight: 100;
  font-family: ${(props) => props.theme.fonts.BEBASNEUE_BOLD}, sans-serif;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  letter-spacing: 1px;
`;
