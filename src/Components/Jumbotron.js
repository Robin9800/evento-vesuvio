import React, { useState } from "react";
import Vesuvio from "./Immagini/Vesuvioo.jpeg";
import "../Css/Jumbotron.css";
import styled from "styled-components";

const Data = styled.span`
  a {
    color: rgb(255 125 0);
  }
  animation: comparsaDestra 1s ease-in-out;

  @keyframes comparsaDestra {
    from {
      opacity: 0;
      transform: translateX(100%);
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
  @media (max-width: 914px) {
    text-align: center;
    font-size: 1rem !important;
  }
  @media (max-width: 435px) {
    text-align: center;
    font-size: 0.7rem !important;
  }
`;
const P = styled.p`
  color: white;
  animation: comparsaSotto 1s ease-in-out;
  margin-top: 8rem;
  font-size: 1.2rem !important;
  @media (max-width: 914px) {
    text-align: center;
    font-size: 1rem !important;
  }
  @media (max-width: 435px) {
    text-align: center;
    margin-top: 0;

    font-size: 0.7rem !important;
  }
`;

const Titolo = styled.div`
  color: white;
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
    margin-bottom: 0.8rem;

    font-size: 2.8rem !important;
    font-weight: bolder;
  }

  @media (max-width: 435px) {
  
    font-size: 1.3rem !important;
  }

  
`;
const Em = styled.em`
  color: rgb(255 125 0);

  animation: comparsaSotto 1.3s ease-in-out;

  @keyframes comparsaSotto {
    from {
      opacity: 0;
      transform: translateY(100%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  /* Stile per schermi con larghezza inferiore a 1072px */
  @media (max-width: 487px) {
    text-align: center !important;
    font-size: 1rem !important;
    margin-top: 1rem !important;
    padding: 0 !important;
  }
  /* Stile per schermi con larghezza compresa tra572px */
  min-width: 350px) and (max-width: 572px) {
    text-align: center !important;
    font-size: 0.5rem !important;
  }
`;
const DivData = styled.div`
  margin-right: 1rem;
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
  @media (max-width: 914px) {
    text-align: center;
    margin-top: 2rem !important;
    font-size: 1rem !important;
  }
`;

const Container = styled.div``;

const ContainerJumbotron = styled.div`
  animation: fadeIn 1s ease-in-out;
  animation-fill-mode: both;
  text-align: start;
  margin-left: 7rem;
  width: 100%;
  position: relative;
  top: 0;

  @media (max-width: 487px) {
    display: flex !important;
    justify-content: center !important;
    margin-left: 0;
  }
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 487px) and (max-width: 767px) {
    display: flex !important;
    justify-content: center !important;
    margin-left: 0;
  }
  @media (max-width: 914px) {
    display: flex;
    flex-direction: column !important;
  }
`;
const ContainerDescrizione = styled.p``;
const Descrizione = styled.p`
color: rgb(255 125 0);

animation: comparsaDestra 1s ease-in-out;
margin:0;
  font-size: 0.7rem !important;
  text-align: center;
  @media (max-width: 435px) {
    text-align: center !important;
    font-size 0.8rem !important;
    margin-left: 0 !Important;
  }
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 485px) and (max-width: 571px) {

    font-size 1.2rem !important;
    margin-left: 0 !Important;

  } 
  @media (min-width: 350px) and (max-width: 564px) {
    font-size 0.8rem !important;
  } 
  text-align: start;
  font-weight: bolder;
`;

const Jumbotron = () => {
  const link = [
    {
      id: 1,
      url: "https://www.google.com/maps/dir//Citt%C3%A0+Metropolitana+di+Napoli+Italia+Parco+del+Vesuvio+c%2Fo+Gran+Cono/@40.8530485,14.2340841,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x133ba5a88df693a1:0x1f053535459784cf!2m2!1d14.4258522!2d40.8281756",
      title: "Parco vesuvio",
    },
  ];

  return (
    <div
      className="px-5 text-center bg-image"
      style={{
        backgroundImage: `url(${Vesuvio})`,
        height: "100vh",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
        <Container className=" d-flex flex-column align-items-center justify-content-center mt-5 pt-5 h-100">
          <ContainerJumbotron className="text-white d-flex justify-content-between">
            <div className="d-flex col-xl-8 col-lg-8 col-md-16 flex-column">
              <Titolo>AUES EUS</Titolo>
              <Titolo style={{ marginBottom: "0" }}>
                VESUVIO LUCE CHE BRUCIA
              </Titolo>
              <Em style={{ fontSize: "2rem" }}>
                Plinio il vecchio intuisce/scolpisce il magma
              </Em>
            </div>
            <DivData className="d-flex flex-column  mr-5 pr-3">
              <Data className="font-italic" style={{ width: "275px" }}>
                <a target="_blank" rel="noopener noreferrer" href={link[0].url}>
                  <i class="fa-solid fa-location-dot"></i> Città Metropolitana
                  di Napoli Italia Parco del Vesuvio c/o Gran Cono
                </a>
              </Data>
              <Data className="font-italic mb-4" style={{ color: "white" }}>
                16 maggio 2023 h. 9:30
              </Data>
              <Descrizione>
                «Con il Patrocinio della Città Metropolitana di Napoli»
              </Descrizione>
              <Descrizione>
                Questa iniziativa è contro il “sistema” della camorra
              </Descrizione>
            </DivData>
          </ContainerJumbotron>
          <ContainerDescrizione className="mt-5">
            <P>
              È un’ incursione di Enzo Marino nell’animo e nell’esperienza
              trascendente di Gaius Plinius Secundus mentre lascia l’"ager
              stabianus” per inoltrarsi nel mondo dell’Ade.
            </P>
          </ContainerDescrizione>
        </Container>
      </div>
    </div>
  );
};

export default Jumbotron;
