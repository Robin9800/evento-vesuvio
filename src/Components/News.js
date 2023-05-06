import React from "react";
import newsvesuvio from "./Immagini/newsvesuvio.png";

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
  padding-bottom: 5rem;
  padding-top: 5rem;
  @media (max-width: 487px) {
    h3,
    h2,
    h5 {
      font-size: 0.95rem;
    }
  }
  @media (min-width: 770px) and (max-width: 100px) {
    h3,
    h2,
    h5 {
      font-size: 2rem;
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
      <Container
        class=" px-5 py-5 mt-5 rounded-5"
        style={{ backgroundColor: "#f4f1ee" }}
      >
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
        <CenteredDiv class="row d-flex ">
          <Sezione class=" d-flex justify-content-center">
            <div class="right-caption">
              <div class="small-tittle d-flex flex-column">
                <div class=" d-flex justify-content-center p-0">
                  <div className=" d-flex flex-column justify-content-center text-center">
                    <h1
                      style={{
                        color: "black",
                        fontWeight: "bold",
                      }}
                      className="col-12"
                    >
                      IN ARRIVO
                    </h1>
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
