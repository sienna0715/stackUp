import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <FooterContainer>
        © 2023 Copyright by Lee Sion. All rights reserved.
      </FooterContainer>
    </FooterWrap>
  );
}

export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  line-height: 3;
  display: flex;
  justify-content: center;
`;

const FooterContainer = styled.div`
  width: 90%;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
