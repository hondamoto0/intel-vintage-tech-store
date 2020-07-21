import styled from "styled-components";

const Wrapper = styled.section`
  .single-product {
    width: var(--smallWidth);
    max-width: var(--fullWidth);
    margin: 4rem auto;
  }
  .single-product-image {
    max-width: 25rem;
    align-self: center;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .single-product article {
    margin-bottom: 3rem;
  }
  .single-product h1 {
    text-transform: capitalize;
    font-size: 2.3rem;
    letter-spacing: var(--mainSpacing);
  }

  .single-product h2 {
    color: var(--primaryColor);
  }
  .single-product p {
    line-height: 2;
    letter-spacing: 1px;
  }

  @media screen and (min-width: 992px) {
    .single-product {
      display: grid;
      grid-template-columns: 2fr 3fr;
      column-gap: 3rem;
    }
  }
`;

export default Wrapper;
