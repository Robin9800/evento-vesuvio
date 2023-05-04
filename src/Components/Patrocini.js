import React, { useState } from "react";
import VesuvioTramonto from "./Immagini/tramonto3.jpeg";
import PatrociniLoghi from "./PatrociniLoghi";

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
`;

export default function Patrocini() {
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
          <div class="col-lg-12 col-md-10 col-sm-11">
            <div class="section-tittle text-center mb-2 pb-1">
              <h1 className="mt-4" style={{ color: "black" }}>
                Patrocini
              </h1>
            </div>
          </div>
        </div>
        <CenteredDiv class="row align-items-center justify-content-center">
          <div class="descrizioni col-xl-12 col-lg-5 col-md-10">
            <div class="right-caption">
              <div class="small-tittle col-12 d-flex flex-column">
                <div class="small-tittle col-xl-12 col-lg-7 col-md-10  d-flex justify-content-center p-0 mt-5">
                  <PatrociniLoghi />
                </div>
              </div>
            </div>
          </div>
        </CenteredDiv>
      </div>
    </ChiSiamoSection>
  );
}
