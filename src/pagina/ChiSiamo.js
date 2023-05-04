import React, { useState } from "react";
import VigamaMembri from "./VigamaMembri";
import EnzoInfo from "./EnzoInfo";
import Cratere from "./Immagini/Cratere.jpeg";
import VesuvioTramonto from "./Immagini/tramonto2.jpeg";
import InternationalArtists from "./Immagini/International Artists.jpeg";

import styled from "styled-components";

const ChiSiamoSection = styled.section`
  font-size: 1rem !important;
`;
const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .container-imamgine-descrizione {
    padding-right: 0;
    justify-content: center;

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
const Descrizione = styled.p`
  font-size: 1rem !important;

  text-align: start;
  font-weight: bolder;
  margin-bottom: 30px;
`;
const Img = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export default function ChiSiamo() {
  return (
    <ChiSiamoSection
      style={{
        backgroundColor: "#181818",
        paddingTop: "4rem",
      }}
    >
      <div
        class="container px-5 py-5 mt-5 rounded-5"
        style={{ backgroundColor: "#f4f1ee" }}
      >
        <div class="row justify-content-center align-items-center flex-column mx-5">
          <div class="col-xl-2 col-lg-7 col-md-10 d-flex justify-content-center">
            <img
              style={{ height: "auto", width: "auto" }}
              className="img-fluid rounded-6"
              src={VesuvioTramonto}
              alt="Vesuvio"
            />
          </div>
        </div>
        <CenteredDiv class="row align-items-center justify-content-center">
          <div class="descrizioni col-xl-12 col-lg-5 col-md-10">
            <div class="right-caption">
              <div class="small-tittle col-12 d-flex flex-column">
                <div class="col-xl-12 col-lg-7 col-md-10 d-flex justify-content-center p-0 mt-5">
                  <div className="col-4">
                    <Img
                      style={{ height: "auto", width: "auto" }}
                      className="img-fluid rounded-1"
                      src={InternationalArtists}
                      alt="Vesuvio"
                    />
                  </div>
                </div>
                <Descrizione style={{ color: "black" }}>
                  FREE INTERNATIONAL ARTISTS - il 25 aprile 2003 a Fontanelle di
                  Roccabianca Parma tengono il 2.Meeting in cui il gruppo assume
                  la denominazione “FREE INTERNATIONAL ARTISTS”. Negli anni
                  successivi intensificano le attività e le penetrazioni negli
                  ambienti culturali e costruiscono una rete internazionale di
                  relazioni. La loro attività è a livello globale e agiscono
                  come un’unica mente progettando eventi, simposi e meeting,
                  allestendo mostre e tenendo conferenze. Danno impulso agli
                  artisti di varie parti d’Italia e del mondo.
                </Descrizione>
                <Descrizione className="mt-1" style={{ color: "black" }}>
                  Collaborano con critici della TrackerArt. Siglano protocolli
                  di collaborazione con il Centro de Formaciòn y Ediciòn Grafica
                  Buenos Aires Argentina e di partneriato con Austrian Visual
                  Arts Association Styria Austria, con i Free International
                  Artists India, con il team cammellieri del Raisar Oasis Desert
                  (India) Rajastan. Collaborano con La Universidad Autonoma
                  Metropolitana Unidad Iztapalapa Ciudad de México, con la
                  London Biennale 2006, Istituto Polacco di Cultura di Berlin.
                  Intrecciano rapporti con studiosi e critici d’arte come
                  Francesco Piselli, Edith Risse, Milena Koren Božiček, Antonio
                  Picariello, Adriana Molina Giuseppe Siano, Silvia Dayù, Ursula
                  Brosch, Luigi Caramello, Francesco de Piscopo, ecc.
                </Descrizione>
                <Descrizione className="mt-1" style={{ color: "black" }}>
                  Partecipano a progetti internazionali come “La Ruta de
                  Quetzalcoatl en el Arte” México e “Bluprint - Liverpool
                  Independent Biennial”, MuseuMan Berlin. Sono presenti nei
                  comitati scientifici del VI.Women`s International Conference
                  2005 e dell’ “Incontro d’arte México-China” Olimpiadi di
                  Pechino 2008; “Performance” 2006 - (Brighton Beach UK); “Art
                  for The City Museum” 2006 (Faget, Romania); Centro de
                  Formaciòn y Ediciòn Gràfica 2006 Buenos Aires, Argentina.
                </Descrizione>

                <div class="small-tittle col-xl-12 col-lg-7 col-md-10  d-flex justify-content-center p-0 mt-5">
                  <EnzoInfo />
                </div>

                <div class="small-tittle col-xl-12 col-lg-7 col-md-10  d-flex justify-content-center p-0 mt-5">
                  <VigamaMembri />
                </div>
              </div>
            </div>
          </div>
        </CenteredDiv>
      </div>
    </ChiSiamoSection>
  );
}
