import styled from "styled-components";
const Wrapper = styled.div`
  .header {
    padding: 2rem 0;
    a {
      text-transform: capitalize;
      margin: 0 0.25rem;
      font-size: 0.85rem;
      letter-spacing: 2px;
      transition: var(--mainTransition);
    }
  }
  .logo {
    margin: 0 auto;
    width: 9rem;
  }
`;
export default Wrapper;
