import styled from "styled-components";
import bcg from "../../assets/mainBcg.jpeg";
const Wrapper = styled.div`
  .hero {
    min-height: 65vh;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7) 50%,
        rgba(255, 255, 255, 0.1)
      ),
      url(${bcg}) center/cover no-repeat;

    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--primaryDarkColor);
  }
`;

export default Wrapper;
