import React from "react";
//react router dom
import { Link } from "react-router-dom";
import Wrapper from "./Error.styles";
function Error() {
  return (
    <Wrapper>
      <div className="error-page">
        <div className="error-container">
          <h1>không tìm thấy trang này</h1>
          <Link to="/" className="error btn-primary">
            quay trở lại trang Home
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
export default Error;
