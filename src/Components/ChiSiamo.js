import React from "react";
import VigamaMembri from "./VigamaMembri";
import EnzoInfo from "./EnzoInfo";
import CultAdvMembri from "./CultAdvMembri";
import chisiamovesuvio from "./Immagini/chisiamovesuvio1.png";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 !important;
  padding: 0 !important;
`;
const Mask = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 1);
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
  font-size: 1.2rem !important;
  @media (max-width: 350px) {
    text-align: center !important;
    font-size 0.8rem !important;
    margin-left: 0 !Important;
  }
  /* Stile per schermi con larghezza compresa tra 768px a 902px */
  @media (min-width: 485px) and (max-width: 571px) {
    text-align: center !important;
    font-size 1.4rem !important;
    margin-left: 0 !Important;

  } 
  @media (min-width: 350px) and (max-width: 564px) {

    font-size 1rem !important;


  } 
  text-align: start;
  font-weight: bolder;
  margin-bottom: 30px;
`;
const Sezione = styled.div`
  padding: 2rem 0 10rem;
`;
const SottotitoloSezione = styled.div`
  @media (max-width: 400px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

export default function ChiSiamo() {
  return (
    <ChiSiamoSection>
      <Container
        class=" py-5 mt-5 rounded-9"
        style={{ backgroundColor: "#f4f1ee" }}
      >
        <Mask>
          <div
            className="p-5 d-flex justify-content-start align-items-center text-center bg-image"
            style={{
              backgroundImage: `url(${chisiamovesuvio})`,
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
                Chi siamo
              </h1>
            </TitoloSezione>
          </div>
        </Mask>

        <CenteredDiv class="row align-items-center justify-content-center">
          <div className="container">
            <Sezione class=" col-xl-12 col-lg-12 col-md-10">
              <div class="right-caption">
                <div class="small-tittle col-12 d-flex flex-column">
                  <div class="d-flex justify-content-center p-0 mt-5">
                    <SottotitoloSezione className="col-xl-12 col-lg-12 col-md-12 d-flex justify-content-center">
                      <h3
                        translate="no"
                        className="text-center col-xl-6 col-lg-7 col-md-10 py-2 rounded-1"
                        style={{ color: "white", backgroundColor: "#042881" }}
                      >
                        FREE INTERNATIONAL ARTISTS
                      </h3>
                    </SottotitoloSezione>
                  </div>
                  <Descrizione className="pt-4" style={{ color: "black" }}>
                    FREE INTERNATIONAL ARTISTS - il 25 aprile 2003 a Fontanelle
                    di Roccabianca Parma tengono il 2.Meeting in cui il gruppo
                    assume la denominazione “FREE INTERNATIONAL ARTISTS”. Negli
                    anni successivi intensificano le attività e le penetrazioni
                    negli ambienti culturali e costruiscono una rete
                    internazionale di relazioni. La loro attività è a livello
                    globale e agiscono come un’unica mente progettando eventi,
                    simposi e meeting, allestendo mostre e tenendo conferenze.
                    Danno impulso agli artisti di varie parti d’Italia e del
                    mondo.
                  </Descrizione>
                  <Descrizione className="mt-1" style={{ color: "black" }}>
                    Collaborano con critici della TrackerArt. Siglano protocolli
                    di collaborazione con il Centro de Formaciòn y Ediciòn
                    Grafica Buenos Aires Argentina e di partneriato con Austrian
                    Visual Arts Association Styria Austria, con i Free
                    International Artists India, con il team cammellieri del
                    Raisar Oasis Desert (India) Rajastan. Collaborano con La
                    Universidad Autonoma Metropolitana Unidad Iztapalapa Ciudad
                    de México, con la London Biennale 2006, Istituto Polacco di
                    Cultura di Berlin. Intrecciano rapporti con studiosi e
                    critici d’arte come Francesco Piselli, Edith Risse, Milena
                    Koren Božiček, Antonio Picariello, Adriana Molina Giuseppe
                    Siano, Silvia Dayù, Ursula Brosch, Luigi Caramello,
                    Francesco de Piscopo, ecc.
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

                  <div class="small-tittle d-flex justify-content-center p-0 mt-5">
                    <EnzoInfo />
                  </div>

                  <div class="small-tittle col-xl-12 col-lg-12 col-md-12  d-flex justify-content-center p-0 mt-5">
                    <VigamaMembri />
                  </div>

                  <div class="small-tittle col-xl-12 col-lg-12 col-md-12  d-flex justify-content-center p-0 mt-5">
                    <CultAdvMembri />
                  </div>
                </div>
              </div>
            </Sezione>
          </div>
        </CenteredDiv>
      </Container>
    </ChiSiamoSection>
  );
}
