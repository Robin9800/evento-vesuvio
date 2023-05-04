import React, { useState } from "react";
import Vesuvio from "./Immagini/Vesuvioo.jpeg";
import "../Css/Jumbotron.css";
import Carosello from "./Carosello";
import { MDBBtn } from "mdb-react-ui-kit";
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
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 768px) and (max-width: 902px) {
    font-size: 3.5rem !important;
  }
  /* Stile per schermi con larghezza superiore a 902px */
  @media (min-width: 902px) {
    margin-right: 25rem;

    font-size: 3.5rem !important;
  }
  /* Stile per schermi con larghezza superiore a 1072px */
  @media (min-width: 1072px) {
    margin-right: 24rem;
    margin-bottom: 0.8rem;

    font-size: 2.8rem !important;
    font-weight: bolder;
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
              <em style={{ fontSize: "2rem", color: "#e08126" }}>
                Plinio il vecchio intuisce/scolpisce il magma
              </em>
            </div>
          </ContainerTitolo>
          <div className="d-flex flex-column align-self-end  mr-5 pr-3">
            <Data className="font-italic" style={{ width: "275px" }}>
              Città Metropolitana di Napoli Italia Parco del Vesuvio c/o Gran
              Cono
            </Data>
            <Data className="font-italic">
              <i class="fa-solid fa-location-dot"></i> 16 maggio 2023 h. 9:30
            </Data>
          </div>
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
