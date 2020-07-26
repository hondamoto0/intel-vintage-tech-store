import styled, { css } from "styled-components";
const showScroll = css`
  z-index: 100;
  opacity: 1;
`;

const Wrapper = styled.button`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  background: var(--mainBlack);
  color: var(--mainWhite);
  z-index: -100;
  opacity: 0;
  transition: var(--mainTransition);
  font-size: 2rem;
  line-height: 0;
  padding: 0.3rem 0.5rem;
  cursor: pointer;

  ${props => (props.height > 100 ? showScroll : null)}
`;

export default Wrapper;
