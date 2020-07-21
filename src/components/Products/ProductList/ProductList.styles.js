import styled from "styled-components";

const Wrapper = styled.section`
  .section {
    padding: 4rem 0;
  }
  /*search Error*/
  .section-title {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    text-align: center;
    margin-bottom: 3.5rem;
  }
  .products-center {
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--fullWidth);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 1.8rem;
    row-gap: 1.8rem;
    /* align-items: start; */
    @media screen and (min-width: 1279px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
`;

export default Wrapper;
