import React from "react";
import "../Css/NewsCards.css";
import NewsCard from "./NewsCard";
import newsvesuvio from "./Immagini/newsvesuvio.png";
import Cult from "./Immagini/cult.png";
import Cronache from "./Immagini/cronachedellacampania.jpg";
import Mattino from "./Immagini/mattino.jpeg";
import Virgilio from "./Immagini/virgilio.jpg";
import Magazine from "./Immagini/napolimegazine.jpg";
import Video from "./Immagini/TRAILER-ENZO-VESUVIO.mp4";
import CopertinaVideo from "./Immagini/Enzo1.jpeg";
import Copertina from "./Immagini/copertinanews.jpeg";
import RaiNews from "./Immagini/rainewspng.png";
import NapoliVillage from "./Immagini/napolivillage.png";
import TerronianMagazine from "./Immagini/terronianmagazine.png";
import NewsExpress from "./Immagini/newsexpress.jpg";
import NapoliFactory from "./Immagini/napolifactory.jpeg";
import Scintillaimg1 from "./Immagini/Scintillaimg1.jpeg";
import PubblicaNow from "./Immagini/pubblicanow.png";
import scintillaLogo from "./Immagini/AuesManifesto.jpeg";
import IlDesk from "./Immagini/ildesk.png";
import IlDeskImg from "./Immagini/ildeskimg.webp";
import EssereAltrove from "./Immagini/esserealtrove.jpg";
import EssereAltroveimg from "./Immagini/esserealtroveimg.jpg";

import styled from "styled-components";

const Container = styled.div``;
const PatrociniSection = styled.section`
  font-size: 1rem !important;
`;
const Trailer = styled.video`
  @media (max-width: 466px) {
    width: 300px;
    height: 200px;
  }
`;
const DivGiornali = styled.div`
  @media (max-width: 1318px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 400px) {
    padding: 0 !important;
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
        <div>
          <div className="container mt-5">
            <div>
              <h2 className="text-center  mb-4">
                GUARDA IL TRAILER DELL'EVENTO:
              </h2>
            </div>
            <div
              className="d-flex justify-content-center mb-2 "
              style={{
                height: "50vh",
              }}
            >
              <Trailer controls poster={CopertinaVideo}>
                <source src={Video} type="video/mp4" />
              </Trailer>
            </div>
          </div>
          <DivGiornali className="d-flex justify-content-between px-5 py-5">
            <NewsCard
              className="my-3 fade-in"
              date="20/05/2023"
              text="Al Parco Nazionale del Vesuvio la performance di Enzo Marino su «Plinio il vecchio»"
              image={Copertina}
              mediaImage={Mattino}
              url="https://bit.ly/41VHr33"
            />
            <NewsCard
              className="09/05/2023 my-3 fade-in"
              date="19/05/2023"
              text="Sul Vesuvio va in scena la morte di Plinio il Vecchio"
              image={Copertina}
              mediaImage={RaiNews}
              url="https://bit.ly/3pPcno8"
            />
            <NewsCard
              className="my-3 fade-in fs-5"
              date="19/05/2023"
              text="Sul Vesuvio Plinio il vecchio rivive grazie alla performance di Enzo Marino"
              image={Copertina}
              mediaImage={NapoliVillage}
              url="https://bit.ly/41WD6N9"
            />
            <NewsCard
              className="my-3 fade-in fs-5"
              date="19/05/2023"
              text="ENZO MARINO FA RIVIVERE PLINIO IL VECCHIO SU VESUVIO"
              image={Copertina}
              mediaImage={TerronianMagazine}
              url="https://bit.ly/3WqBmub"
            />
            <NewsCard
              className="my-3 fade-in fs-5"
              date="19/05/2023"
              text="Sul Vesuvio Plinio il vecchio rivive grazie alla performance di Enzo Marino"
              image={Copertina}
              mediaImage={NewsExpress}
              url="https://bit.ly/42UNLZW"
            />
            <NewsCard
              className="my-3 fade-in fs-5"
              date="20/05/2023"
              text="Sul Vesuvio Plinio il vecchio rivive grazie alla performance di Enzo Marino"
              image={Copertina}
              mediaImage={NapoliFactory}
              url="https://bit.ly/3Iw9j74"
            />
            <NewsCard
              className=" my-3 fade-in"
              date="09/05/2023"
              text="Al museo archeologico di Ercolano il progetto di Enzo Marino per il bimillenario dalla nascita di Plinio il vecchio"
              image={Mattino}
              url="https://bit.ly/3LSB0rg"
            />
            <NewsCard
              className="09/05/2023 my-3 fade-in"
              date="09/05/2023"
              text="Al Mav di Ercolano il progetto dell'artista Enzo Marino per il bimillenario dalla nascita di Plinio Il Vecchio"
              image={Virgilio}
              url="https://bit.ly/42mWLGR"
            />
            <NewsCard
              className="09/05/2023 my-3"
              date="09/05/2023"
              text='AD ERCOLANO - Al Mav il progetto "Vesuvio" di Enzo Marino per il bimillenario dalla nascita di Plinio il Vecchio'
              image={Magazine}
              url="https://bit.ly/44MnkqM"
            />

            <NewsCard
              className="09/05/2023 my-3"
              date="09/05/2023"
              text="Al MAV di Ercolano il progetto Vesuvio di Enzo Marino per il Bimillenario dalla nascita di Plinio il Vecchio"
              image={Cronache}
              url="https://bit.ly/3pgmke0"
            />
            <NewsCard
              className="09/05/2023 my-3"
              date="09/05/2023"
              text="Ercolano, al Mav il progetto Vesuvio per bimillenario nascita di Plinio il Vecchio"
              image={Cult}
              url="https://bit.ly/3NWWcPS"
            />
            <NewsCard
              className="my-3 fade-in fs-5"
              date="08/10/2023"
              text="VIII Edizione del Premio Scintilla dell’ingegno sul cono del Vesuvio"
              image={Scintillaimg1}
              mediaImage={NapoliFactory}
              url="https://www.napolifactory.it/2023/10/08/viii-edizione-del-premio-scintilla-dellingegno-sul-cono-del-vesuvio/"
            />
            <NewsCard
              className="my-3 fade-in fs-5"
              date="06/10/2023"
              text="Scintilla dell’Ingegno, VIII edizione del Premio sul cono del Vesuvio"
              image={scintillaLogo}
              mediaImage={PubblicaNow}
              url="https://www.pubblicanow.it/2023/10/06/scintilla-dellingegno-viii-edizione-del-premio-sul-cono-del-vesuvio/"
            />
            <NewsCard
              className="my-3 fade-in fs-5"
              date="10/10/2023"
              text="Napoli, le eccellenze della ‘scintilla’ premiati sul Vesuvio"
              image={IlDeskImg}
              mediaImage={IlDesk}
              url="https://www.ildesk.it/arte-e-cultura/napoli-le-eccellenze-della-scintilla-premiati-sul-vesuvio/"
            />
            <NewsCard
              className="my-3 fade-in fs-5"
              date="09/10/2023"
              text="Servizio Premio Scintilla 2023"
              image={EssereAltroveimg}
              mediaImage={EssereAltrove}
              url="https://www.facebook.com/photo/?fbid=762458162562287&set=a.469400998534673&locale=it_IT"
            />
          </DivGiornali>
        </div>
      </Container>
    </PatrociniSection>
  );
}
