import React from "react";
import aueseusvesuvio from "./Immagini/aueseusvesuvio.png";

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
  justify-content: center;
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

export default function Contatti() {
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
              Contatti
            </h1>
          </TitoloSezione>
        </div>
        <CenteredDiv class="row d-flex ">
          <Sezione class=" col-xl-12 col-lg-12 col-md-10 d-flex justify-content-center">
            <div class="right-caption">
              <div class="small-tittle d-flex flex-column">
                <div class="col-xl-12 col-lg-7 col-md-10 d-flex justify-content-center p-0 mt-5">
                  <div className="col-xl-12 col-lg-6 col-md-3 d-flex flex-column justify-content-center text-center">
                    <h2
                      style={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      FREE INTERNATIONAL ARTISTS:
                    </h2>
                    <h5
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      T +39 3465064978
                    </h5>
                    <h5
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      e-mail: marinoenzo@yahoo.it - www.marinoenzo.com
                    </h5>
                    <h5
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      PEC: enzomarino.freeinternationalartists@pec.it
                    </h5>
                    <h2
                      style={{
                        color: "black",
                        fontWeight: "bolder",
                      }}
                      className="col-12 mt-3"
                    >
                      VI.GA.MA Group
                    </h2>
                    <h5
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      Prof. Redenta Vitulano
                    </h5>
                    <h5
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      T +39 3385972849
                    </h5>
                    <h5
                      style={{
                        fontStyle: "italic",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      e-mail: redentavitulano65@gmail.com
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </Sezione>
        </CenteredDiv>
      </Container>
    </PatrociniSection>
  );
}
