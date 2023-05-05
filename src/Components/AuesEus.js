import React from "react";
import aueseusvesuvio from "./Immagini/aueseusvesuvio.png";
import cratere from "./Immagini/Cratere.jpeg";

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
  font-size: 1rem !important;

  text-align: start;
  margin-bottom: 30px;
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
  padding: 2rem 10rem 5rem 10rem;
`;

export default function Patrocini() {
  return (
    <PatrociniSection
      style={{
        backgroundColor: "#181818",
      }}
    >
      <Container
        class=" px-5 py-5 mt-5 rounded-5"
        style={{ backgroundColor: "#f4f1ee" }}
      >
        <div
          className="p-5 d-flex justify-content-start align-items-center text-center bg-image"
          style={{
            backgroundImage: `url(${aueseusvesuvio})`,
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
              AUES EUS
            </h1>
          </TitoloSezione>
        </div>
        <CenteredDiv class="row align-items-center justify-content-center">
          <Sezione class=" col-xl-12 col-lg-12 col-md-10">
            <div class="right-caption">
              <div class="small-tittle  d-flex flex-column">
                <div class="col-xl-12 col-lg-7 col-md-10 d-flex justify-content-center p-0 mt-5">
                  <div className="col-xl-12 col-lg-6 col-md-3 d-flex flex-column justify-content-center text-center">
                    <h3
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      BIMILLENNARIO DELLA NASCITA DI PLINIO IL VECCHIO (Como 23-
                      Stabia 79)
                    </h3>
                    <h5
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      Quando la storia finisce …inizia la creatività
                    </h5>
                    <h2
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bolder",
                      }}
                      className="col-12"
                    >
                      “Aues Eus. Vesuvio luce che brucia“
                    </h2>
                    <h2
                      style={{
                        fontStyle: "italic",
                        color: "black",
                      }}
                      className="col-12"
                    >
                      Plinio intuisce/scolpisce il magma{" "}
                    </h2>
                  </div>
                </div>
                <Descrizione
                  className="pt-5 col-12 px-0 text-center"
                  style={{ color: "black" }}
                >
                  È un’incursione di Enzo Marino nell’animo e nell’esperienza
                  trascendente di Gaius Plinius Secundus mentre lascia l’ "ager
                  stabianus” per inoltrarsi nel mondo dell’Ade.
                </Descrizione>
                <Descrizione
                  className="mt-1 text-center"
                  style={{ color: "black" }}
                >
                  &lt;&lt; È la rievocazione/restauro degli ultimi pensieri di
                  Plinio, mentre transita dal sopore, provocato dai gas del
                  cratere, verso il regno delle ombre. Il desiderio estremo di
                  comprendere il fenomeno eruttivo, che Plinio stava vivendo
                  sulla sua pelle e a lui sconosciuto, si trasforma in un
                  eccezionale prodigio che va oltre il sentire umano ma che fa
                  ancora provare cose impercettibili ma stupefacenti. Plinio
                  contesta duramente gli dei che gli hanno riservato una fine
                  così poco onorevole, non solo come ammiraglio ma
                  essenzialmente come uomo del discernimento e del libero
                  pensiero e lo fa con tale veemenza da mettere in difficoltà le
                  divinità. E così l’eterno buio, per volere divino, non avanza
                  più ma rimane fermo per far vivere l’incanto di un tempo
                  sospeso e permettere a Plinio di scoprire la realtà eruttiva.
                  Enzo Marino, artista inquieto, annullando l’intervallo di
                  duemila anni, s’insinua in questo mistero, ospita in se lo
                  spirito di Plinio, acquisisce l’antica smania, attizza la sua
                  follia e insieme scolpiscono il magma. È la compenetrazione di
                  due personalità differenti, è la fusione di due esperienze
                  estreme, è il legame tra due contesti dissimili eppure tanto
                  vicini. È la continuità del modus operandi umano che fin dai
                  tempi primigeni ha permesso all’uomo di ricercare “nell’antica
                  memoria”, elaborare i ricordi, superare i suoi stessi
                  traguardi e ricominciare così tutto daccapo. Semmai scavando
                  nell’assurdo. In concreto è la smania dell’uomo di ieri e di
                  oggi che non accetta le imposizioni, le prepotenze, le
                  falsità, il comando assurdo, le decisioni altrui. E detesta la
                  cieca obbedienza. Tutto questo sarà raccontato attraverso una
                  performance multidisciplinare di gruppo in cui sarà realizzata
                  la scultura performativa “scolpire il magma” come gesto
                  allegorico della vogliadi libertà assoluta &gt;&gt;
                </Descrizione>
                <div className="col-12 d-flex justify-content-center mt-2">
                  <img className="img-fluid col-8 rounded-3" src={cratere} />
                </div>
              </div>
            </div>
          </Sezione>
        </CenteredDiv>
      </Container>
    </PatrociniSection>
  );
}
