import React, { useContext } from "react";
//icon
import { FaAngleDoubleUp } from "react-icons/fa";
// Context Api
import { ScrollContext } from "../../context/scroll";
// styled-components
import Wrapper from "./ScrollButton.styles";
const ScrollButton = () => {
  const { height } = useContext(ScrollContext);
  const scrollBackToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
  return (
    <Wrapper height={height} onClick={scrollBackToTop}>
      <FaAngleDoubleUp />
    </Wrapper>
  );
};

export default ScrollButton;
