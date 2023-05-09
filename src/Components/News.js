import React from "react";
import NewsCard from "./NewsCard";
import newsvesuvio from "./Immagini/newsvesuvio.png";
import Cult from "./Immagini/cult.png";
import Cronache from "./Immagini/cronachedellacampania.jpg";
import Mattino from "./Immagini/mattino.jpeg";
import Virgilio from "./Immagini/virgilio.jpg";
import Magazine from "./Immagini/napolimegazine.jpg";

import styled from "styled-components";

const Container = styled.div``;
const PatrociniSection = styled.section`
  font-size: 1rem !important;
`;
const DivGiornali = styled.div`
  @media (max-width: 1318px) {
    flex-direction: column;
    align-items: center;
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

export default function Contatti() {
  return (
    <PatrociniSection
      style={{
        backgroundColor: "#181818",
      }}
    >
      <Container class=" px-5 rounded-5" style={{ backgroundColor: "#f4f1ee" }}>
        <div
          className="p-5 d-flex justify-content-start align-items-center text-center bg-image"
          style={{
            backgroundImage: `url(${newsvesuvio})`,
            height: "60vh",
          }}
        >
          <TitoloSezione
            style={{ borderLeft: "2px solid white" }}
            className="ml-5 pl-5"
          >
            <h1
              className="mb-0"
              style={{ color: "white", fontWeight: "bolder" }}
            >
              News
            </h1>
          </TitoloSezione>
        </div>
        <DivGiornali className="d-flex justify-content-between px-5 py-5">
          <NewsCard
            className="mx-3 my-3"
            date="09/05/2023"
            text="Al museo archeologico di Ercolano il progetto di Enzo Marino per il bimillenario dalla nascita di Plinio il vecchio"
            image={Mattino}
            url="https://bit.ly/3LSB0rg"
          />
          <NewsCard
            className="mx-3 my-3"
            date="09/05/2023"
            text="Al Mav di Ercolano il progetto dell'artista Enzo Marino per il bimillenario dalla nascita di Plinio Il Vecchio"
            image={Virgilio}
            url="https://bit.ly/42mWLGR"
          />
          <NewsCard
            className="mx-3 my-3"
            date="09/05/2023"
            text='AD ERCOLANO - Al Mav il progetto "Vesuvio" di Enzo Marino per il bimillenario dalla nascita di Plinio il Vecchio'
            image={Magazine}
            url="https://bit.ly/44MnkqM"
          />

          <NewsCard
            className="mx-3 my-3"
            date="09/05/2023"
            text="Al MAV di Ercolano il progetto Vesuvio di Enzo Marino per il Bimillenario dalla nascita di Plinio il Vecchio"
            image={Cronache}
            url="https://bit.ly/3pgmke0"
          />
          <NewsCard
            className="mx-3 my-3"
            date="09/05/2023"
            text="Ercolano, al Mav il progetto Vesuvio per bimillenario nascita di Plinio il Vecchio"
            image={Cult}
            url="https://bit.ly/3NWWcPS"
          />
        </DivGiornali>
      </Container>
    </PatrociniSection>
  );
}
