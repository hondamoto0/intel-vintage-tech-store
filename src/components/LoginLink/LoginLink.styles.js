import styled from "styled-components";

const WrapperButton = styled.button`
  text-transform: capitalize;
  background: transparent;
  display: inline-block;
  border: none;
  cursor: pointer;
  font-family: var(--primaryFont);
  margin: 0 0.25rem;
  font-size: 0.85rem;
  letter-spacing: 2px;
  transition: var(--mainTransition);
  font-weight: 300;
`;

export default WrapperButton;
