import React from "react";
import aueseusvesuvio from "./Immagini/aueseusvesuvio.png";
import cratere from "./Immagini/Cratere.jpeg";
import scintillaLogo from "./Immagini/manifesto.jpeg";
import scintillaModello from "./Immagini/scintillaPanel.jpg";
import ImageGallery from "./ImageGallery";

import styled from "styled-components";
import Scintillaimg from "./Immagini/Scintillaimg.jpeg"
import Scintillaimg1 from "./Immagini/Scintillaimg1.jpeg";
import Scintillaimg2 from "./Immagini/Scintillaimg2.jpeg";
import Scintillaimg3 from "./Immagini/Scintillaimg3.jpeg";
import Scintillaimg4 from "./Immagini/Scintillaimg4.jpeg";
import Scintillaimg5 from "./Immagini/Scintillaimg5.jpeg";
import Scintillaimg6 from "./Immagini/Scintillaimg6.jpeg";
import Scintillaimg7 from "./Immagini/Scintillaimg7.jpeg";
import Scintillaimg8 from "./Immagini/Scintillaimg8.jpeg";
import Scintillaimg9 from "./Immagini/Scintillaimg9.jpeg";
import Scintillaimg10 from "./Immagini/Scintillaimg10.jpeg";
import Scintillaimg11 from "./Immagini/Scintillaimg11.jpeg";
import Scintillaimg12 from "./Immagini/Scintillaimg12.jpeg";
import Scintillaimg13 from "./Immagini/Scintillaimg13.jpeg";
import Scintillaimg14 from "./Immagini/Scintillaimg14.jpeg";
import Scintillaimg15 from "./Immagini/Scintillaimg15.jpeg";
import Scintillaimg16 from "./Immagini/Scintillaimg16.jpeg";
import Scintillaimg17 from "./Immagini/Scintillaimg17.jpeg";
import Scintillaimg18 from "./Immagini/Scintillaimg18.jpeg";
import Scintillaimg19 from "./Immagini/Scintillaimg19.jpeg";
import Scintillaimg20 from "./Immagini/Scintillaimg20.jpeg";
import Scintillaimg21 from "./Immagini/Scintillaimg21.jpeg";
import Scintillaimg22 from "./Immagini/Scintillaimg22.jpeg";
import Scintillaimg23 from "./Immagini/Scintillaimg23.jpeg";
import Scintillaimg24 from "./Immagini/Scintillaimg24.jpeg";
import Scintillaimg25 from "./Immagini/Scintillaimg25.jpeg";
import Scintillaimg26 from "./Immagini/Scintillaimg26.jpeg";
import Scintillaimg27 from "./Immagini/Scintillaimg27.jpeg";
const images = [Scintillaimg,
  Scintillaimg1,
  Scintillaimg2,
  Scintillaimg3,
  Scintillaimg4,
  Scintillaimg5,
  Scintillaimg6,
  Scintillaimg7,
  Scintillaimg8,
  Scintillaimg9,
  Scintillaimg10,
  Scintillaimg11,
  Scintillaimg12,
  Scintillaimg13,
  Scintillaimg14,
  Scintillaimg15,
  Scintillaimg16,
  Scintillaimg17,
  Scintillaimg18,
  Scintillaimg19,
  Scintillaimg20,
  Scintillaimg21,
  Scintillaimg22,
  Scintillaimg23,
  Scintillaimg24,
  Scintillaimg25,
  Scintillaimg26,
  Scintillaimg27,]; 

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


export default function Scintilla() {
  return (
    <PatrociniSection
      style={{
        backgroundColor: "#f4f1ee",
      }}
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
       
     
          <div className="col-12 my-5 d-flex justify-content-center">
              <img
                className="img-fluid col-xl-7 col-lg-8 col-md-7 rounded-3 mb-2"
                src={scintillaLogo}
              />
            </div>
            <h2 className="text-center my-5" style={{ color: "rgb(255 125 0)" }}>
                FOTO DELL'EVENTO
              </h2>
            <ImageGallery images={images}/>

          
   

    </PatrociniSection>
  );
}
