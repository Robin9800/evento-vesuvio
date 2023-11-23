import React from "react";
import aueseusvesuvio from "./Immagini/aueseusvesuvio.png";
import cratere from "./Immagini/Cratere.jpeg";
import scintillaLogo from "./Immagini/manifesto scintilla.jpeg";
import scintillaModello from "./Immagini/scintillaPanel.jpg";

import styled from "styled-components";

const Container = styled.div`
  margin: 0 !important;
  padding: 0 !important;
`;
const PatrociniSection = styled.section`
  font-size: 1rem !important;
`;
const TitoloSezione = styled.h1`
  animation: slideInAndFade 1s ease-in-out;

  @keyframes slideInAndFade {
    from {
      opacity: 0;
      transform: translateY(-100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
const Descrizione = styled.p`
  font-size: 1rem ;

  text-align: start;
  margin-bottom: 30px;
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 485px) and (max-width: 571px) {
    text-align: center !important;
    font-size 1.4rem !important;
    margin-left: 0 !Important;
  } 
  @media (max-width: 485px) {
    font-size: 0.7rem;
    padding: 20px 0 0 0 !important;

  } 


`;
const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .container-imamgine-descrizione {
    padding-right: 0;

    @media (max-width: 991px) {
      padding-right: 0 !important;
    }
  }

  @media (max-width: 991px) {
    flex-direction: column;

    .descrizioni {
      text-align: center;
      margin-top: 20px;
    }
  }
`;
const Sezione = styled.div`
  margin: 1rem 10rem !important;
  @media (max-width: 487px) {
    h3,
    h2,
    h5 {
      font-size: 1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 1060px) {
    margin: 5rem 4rem !important;
  }
  @media (max-width: 570px) {
    margin: 5rem 2rem !important;
  }
`;

export default function Scintilla() {
  return (
    <PatrociniSection
      style={{
        backgroundColor: "#f4f1ee",
      }}
    >
      <Container
        class=" px-5 py-5 mt-5 rounded-5"
        style={{ backgroundColor: "#f4fee" }}
      >
        <div
          className="p-5 d-flex justify-content-start align-items-center text-center bg-image"
          style={{
            backgroundImage: `url(${scintillaModello})`,
            height: "60vh",
          }}
        >
          <TitoloSezione
            style={{ borderLeft: "2px solid white" }}
            className="ml-5 pl-5"
          >
           
          </TitoloSezione>
        </div>
       
     
          <div className="col-12 d-flex justify-content-center">
              <img
                className="img-fluid col-xl-7 col-lg-8 col-md-7 rounded-3 mb-2"
                src={scintillaLogo}
              />
            </div>
            
            
            
        
           
  
   
      </Container>
    </PatrociniSection>
  );
}
