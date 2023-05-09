import React from "react";
import styled from "styled-components";
import CultAdv from "./Immagini/cultadv.jpg";

const MemberDetail = styled.div`
  padding: 1.5rem 0.5rem;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    border: 2px solid #852211;
    transform: translateY(-5px);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;
const JobItems = styled.div`
  display: flex;
  flex-direction: row;
`;
const CompanyImg = styled.div`
  margin-right: 30px;
`;
const JobTittle = styled.div`
  width: 100%;
  h3 {
    font-size: 1.6rem;
    font-weight: bold;
  }

  h4 {
    color: #042881 !important;
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem !important;
    font-weight: bolder;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding-left: 0;

    li {
      font-size: 16px;
      color: #999;

      i {
        margin-right: 5px;
        color: #ffc107;
      }
    }

    li:last-child {
      color: #000;
      font-weight: 600;
    }
  }
  @media (max-width: 320px) {
    p {
      font-size: 0.3rem !important;
    }
  }
  @media (max-width: 400px) {
    p {
      font-size: 0.5rem !important;
    }
  }
  @media (max-width: 650px) {
    p {
      font-size: 0.6rem !important;
    }
  }
`;
const Descrizione = styled.p`
  font-size: 1.2rem !important;

  text-align: start;
  font-weight: bolder;
  margin-bottom: 30px;
  @media (max-width: 400px) {
    font-size: 1rem !important;
  }
`;
function CultAdvMembri() {
  return (
    <div class="row my-5">
      <div className="d-flex justify-content-center">
        <img
          className="img-fluid col-xl-4 col-lg-4 col-md-6 mt-5 mb-5"
          src={CultAdv}
        />
      </div>

      <div class="col-xl-12 col-lg-12 col-md-12 pt-3">
        <MemberDetail className="my-3">
          <JobItems>
            <JobTittle className="py-3 px-3">
              <h4>Antonio Maria Duccilli</h4>
              <p>
                Si occupa di comunicazione e marketing digitale da oltre 15
                anni, già Country Manager per due importanti agenzie francesi e
                Business Developer Manager per una delle maggiori agenzie
                italiane. Nel 2020 ha fondato CULT adv. Azienda Facebook &
                Google Partner specializzata nel Performance Marketing con
                clienti quali Amplifon, Arquati, EON, Sorgenia, Compara
                Semplice, MSC Crociere, etc
              </p>
            </JobTittle>
          </JobItems>
        </MemberDetail>

        <MemberDetail className="my-3">
          <JobItems>
            <JobTittle className="py-3 px-3">
              <h4>Gianfranco Draicchio</h4>
              <p>
                Nasce in Germania a Dernabach nel 1981 Nel 2010 si laurea in
                accademia delle belle arti. Negl’anni partecipa a varie mostre
                esponendo opere audiovisive e producendo filmati
              </p>
            </JobTittle>
          </JobItems>
        </MemberDetail>
      </div>
    </div>
  );
}

export default CultAdvMembri;
