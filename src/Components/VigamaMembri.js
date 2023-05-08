import React from "react";
import styled from "styled-components";
import AnnaMarino from "./Immagini/AnnaMarino.jpeg";
import ImmaGatto from "./Immagini/ImmaGatto.jpeg";
import RedentaVitulano from "./Immagini/RedentaVitulano.jpeg";

const Img = styled.img`
  max-width: 100%;
  border-radius: 100%;
  width: 180px;
  height: 150px;
  object-fit: cover;
`;

const ProgramDetail = styled.div`
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
function VigamaMembri() {
  return (
    <div class="row">
      <div class="small-tittle col-12 d-flex flex-column">
        <div class=" d-flex justify-content-center p-0 mt-5">
          <div className="col-xl-12 col-lg-12 col-md-12 d-flex justify-content-center">
            <h3
              translate="no"
              className="text-center col-xl-4 col-lg-4 col-md-4 py-2 rounded-1"
              style={{ color: "white", backgroundColor: "#042881" }}
            >
              VI.GA.MA GROUP
            </h3>
          </div>
        </div>
        <Descrizione className="pt-4" style={{ color: "black" }}>
          Il gruppo Vi.Ga.Ma opera in campo artistico e letterario con l'intento
          di incentivare e promuovere performance che valorizzino la storia e la
          cultura del territorio campano
        </Descrizione>
      </div>
      <div class="col-xl-12 col-lg-12 col-md-12  pt-4">
        <ProgramDetail>
          <JobItems>
            <div>
              <CompanyImg>
                <Img src={ImmaGatto} alt="" />
              </CompanyImg>
            </div>

            <JobTittle>
              <h4>Immacolata Gatto</h4>
              <p>
                Studia Lettere all’università Federico II di Napoli e si laurea
                con una tesi in Archeologia Medievale. Nel 2000 consegue il
                Dottorato di ricerca in "Cultura dell'età romanobarbarica"
                presso l'Università di Macerata e nel 2014 la Laurea Magistrale
                in Archeologia, beni culturali e turismo presso l'Università del
                Molise. Per diversi anni lavora come archeologa in siti dell'
                Alta Irpinia. Attualmente insegna, italiano, storia e geografia
              </p>
            </JobTittle>
          </JobItems>
        </ProgramDetail>
      </div>

      <div class="col-xl-12 col-lg-12 col-md-12 pt-3">
        <ProgramDetail>
          <JobItems>
            <div>
              <CompanyImg>
                <Img src={AnnaMarino} alt="" />
              </CompanyImg>
            </div>

            <JobTittle>
              <h4>Anna Luisa Marino</h4>
              <p>
                Studia lettere classiche e si laurea con una tesi in archeologia
                medievale. Dopo qualche esperienza di scavo e di studio dei
                reperti archeologici, scopre nell'insegnamento la sua vera
                passione e intanto collabora all'organizzazione di mostre e
                riviste d'arte. Oggi insegna in un liceo scientifico e prova a
                trasmettere la sua passione per l'archeologia, l'arte, la
                letteratura, il teatro, il cinema e la musica.
              </p>
            </JobTittle>
          </JobItems>
        </ProgramDetail>
      </div>

      <div class="col-xl-12 col-lg-12 col-md-12 pt-3">
        <ProgramDetail>
          <JobItems>
            <div>
              <CompanyImg>
                <Img src={RedentaVitulano} alt="" />
              </CompanyImg>
            </div>

            <JobTittle>
              <h4>Redenta Vitulano</h4>
              <p>
                Studia Lettere all’università Federico II di Napoli e si laurea
                con una tesi in Archeologia Medievale. Da sempre appassionata di
                Arte, Comunicazione e Teatro, diventa Counselor professionista e
                si specializza nei Disturbi Specifici dell’Apprendimento,
                integrando queste sue passioni con l’insegnamento.
              </p>
            </JobTittle>
          </JobItems>
        </ProgramDetail>
      </div>
    </div>
  );
}

export default VigamaMembri;
