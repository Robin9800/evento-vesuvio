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

const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

const FooterTopLogo = styled.img`
  margin: 0 20px;
  height: 50px;
`;

const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const FooterLink = styled.li`
  margin-right: 20px;
  font-size: 14px;
  color: #333333;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
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
        <FooterTop>
          <FooterTopLogo
            src="https://www.fondazionealberodoro.org/wp-content/uploads/2019/12/Logo_FondazioneAlberoDoro.png"
            alt="Albero D'Oro Logo"
          />
        </FooterTop>
        <FooterLinksContainer>
          <FooterLinks>
            <FooterLink>Chi siamo</FooterLink>
            <FooterLink>Progetti</FooterLink>
            <FooterLink>Contatti</FooterLink>
          </FooterLinks>
        </FooterLinksContainer>
        <FooterText>© 2023 Free International Artists</FooterText>
      </FooterContent>
    </FooterContainer>
  );
}
