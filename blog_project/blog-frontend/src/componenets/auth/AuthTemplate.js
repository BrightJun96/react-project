import React from "react";
import { Link } from "react-router-dom";
import { AuthTemplateBlock, WhiteBox } from "./styled/styledAuthTemplate";

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">REACTERS</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
