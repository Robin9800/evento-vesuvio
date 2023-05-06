import React from "react";
import patrocinivesuvio from "./Immagini/patrocinivesuvio.png";
import PatrociniLoghi from "./PatrociniLoghi";

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
const CenteredDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

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
            backgroundImage: `url(${patrocinivesuvio})`,
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
              Patrocini
            </h1>
          </TitoloSezione>
        </div>
        <CenteredDiv class="row d-flex align-items-center justify-content-center">
          <div class="descrizioni">
            <div class="right-caption">
              <div class="small-tittle d-flex flex-column">
                <div class="small-tittle  d-flex justify-content-center p-0 my-5">
                  <PatrociniLoghi />
                </div>
              </div>
            </div>
          </div>
        </CenteredDiv>
      </Container>
    </PatrociniSection>
  );
}
