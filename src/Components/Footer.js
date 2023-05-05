import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #f2f2f2;
  border-top: 3px solid #852211;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #333333;
  text-align: center;
  margin-bottom: 0;
`;

export default function App() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2023 Free International Artists</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}
