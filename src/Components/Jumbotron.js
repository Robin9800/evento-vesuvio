import React, { useState } from "react";
import Vesuvio from "./Immagini/Vesuvioo.jpeg";
import "../Css/Jumbotron.css";
import styled from "styled-components";

const Data = styled.span`
  color: #e08126;
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
  @media (max-width: 487px) {
    font-size: 1rem !important;
    color: white;
  }
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 487px) and (max-width: 767px) {
    color: white;
  }
  @media (min-width: 767px) and (max-width: 1072px) {
    color: white;
  }
`;

const Titolo = styled.div`
  color: white;
  /* Stile per schermi con larghezza compresa tra 487px e 768px */
  @media (min-width: 487px) and (max-width: 768px) {
    .text-white {
      text-align: start;
    }
    h1 {
      font-size: 2.5rem !important;
      margin-top: 10px;
    }
  }
  @media (max-width: 487px) {
    text-align: center !important;
    font-size 1rem !important;
    margin-left: 0 !Important;
  }
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 485px) and (max-width: 571px) {
    text-align: center !important;
    font-size 1.4rem !important;
  } 
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 571px) and (max-width: 767px) {
    text-align: center !important;
    font-size 1.8rem !important;
  } 
  
  /* Stile per schermi con larghezza compresa tra 576px e 768px */
  @media (min-width: 767px) and (max-width: 1072px) {
    font-size 2rem !important;
  }
  /* Stile per schermi con larghezza superiore a 1072px */
  @media (min-width: 1072px) {
    margin-right: 24rem;
    margin-bottom: 0.8rem;

    font-size: 2.8rem !important;
    font-weight: bolder;
  }
`;
const Em = styled.em`
  /* Stile per schermi con larghezza inferiore a 1072px */
  @media (max-width: 487px) {
    text-align: center !important;
    font-size: 1rem !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  /* Stile per schermi con larghezza compresa tra572px */
  min-width: 486px) and (max-width: 572px) {
    text-align: center !important;
    font-size: 0.5rem !important;
  }
`;
const DivData = styled.div`
  @media (max-width: 487px) {
    align-self: center !important;
    margin: 0 !important;
    padding: 0 !important;
    color: red !important;
  }
  /* Stile per schermi con larghezza compresa tra 487px a 767px */
  @media (min-width: 487px) and (max-width: 767px) {
    align-self: center !important;
    margin: 0 !important;
    padding: 0 !important;
    color: red !important;
  }
`;

const ContainerTitolo = styled.div`
  animation: fadeIn 1s ease-in-out;
  animation-fill-mode: both;
  margin-top: 12rem;
  text-align: start;
  margin-left: 7rem;
  width: 100%;
  position: relative;
  top: 0;

  @media (max-width: 487px) {
    display: flex !important;
    justify-content: center !important;
    margin-left: 0;
    margin-top: 12rem;
  }
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 487px) and (max-width: 767px) {
    display: flex !important;
    justify-content: center !important;
    margin-left: 0;
  }
`;

const Descrizione = styled.p`
  animation: fadeIn 1s ease-in-out;
  animation-fill-mode: both;
  margin-top: 8rem;

  color: white;
  text-align: center;
  font-size: 1rem !important;
  font-weight: bolder;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 767px) {
    font-size: 0.7rem !important;
    margin-bottom: 3rem; !important;
  }
`;

const Jumbotron = ({ onCarouselClick }) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleCarouselClick = () => {
    setShowCarousel(true);
    if (onCarouselClick) onCarouselClick();
  };

  const handleCloseClick = () => {
    setShowCarousel(false);
  };

  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url(${Vesuvio})`,
        height: "100vh",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <div className=" d-flex justify-content-around flex-column align-items-center h-100">
          <ContainerTitolo className="text-white d-flex justify-content-between">
            <div className="d-flex flex-column">
              <Titolo>AUES EUS,</Titolo>
              <Titolo style={{ marginBottom: "0" }}>
                VESUVIO LUCE CHE BRUCIA
              </Titolo>
              <Em style={{ fontSize: "2rem", color: "#e08126" }}>
                Plinio il vecchio intuisce/scolpisce il magma
              </Em>
            </div>
          </ContainerTitolo>
          <DivData className="d-flex flex-column align-self-end  mr-5 pr-3">
            <Data className="font-italic" style={{ width: "275px" }}>
              Città Metropolitana di Napoli Italia Parco del Vesuvio c/o Gran
              Cono
            </Data>
            <Data className="font-italic">
              <i class="fa-solid fa-location-dot"></i> 16 maggio 2023 h. 9:30
            </Data>
          </DivData>
          <Descrizione>
            È un’ incursione di Enzo Marino nell’animo e nell’esperienza
            trascendente di Gaius Plinius Secundus mentre lascia l’"ager
            stabianus” per inoltrarsi nel mondo dell’Ade.
          </Descrizione>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
