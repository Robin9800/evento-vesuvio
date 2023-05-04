import React from "react";
import styled from "styled-components";
import Vigama from "./Immagini/Vigama.jpeg";
import EnzoMarino from "./Immagini/EnzoMarino.jpeg";
import AnnaMarino from "./Immagini/AnnaMarino.jpeg";
import ImmaGatto from "./Immagini/ImmaGatto.jpeg";
import RedentaVitulano from "./Immagini/RedentaVitulano.jpeg";

const SpeakerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SpeakerColumn = styled.div`
  margin-top: 3rem !important;
  flex-basis: calc(
    33.33% - 20px
  ); /* calcola la larghezza di ciascun elemento in modo che ci siano 20px di margine tra di essi */
  margin: 0 10px 30px;

  @media screen and (max-width: 768px) {
    flex-basis: calc(100% - 20px);
  }
`;

const SpeakerImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const SpeakerCaption = styled.figcaption`
  h3 {
    text-align: start;
    font-size: 22px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
    color: #212529;
  }

  p {
    text-align: start;
    font-size: 14px !important;
    font-weight: bolder;
    margin-bottom: 30px;
    color: #868e96;
  }
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

  text-align: start;
  font-weight: bolder;
  margin-bottom: 30px;
`;

const Img = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 3.5rem;
`;

function VigamaMembri() {
  return (
    <SpeakerWrapper>
      <CenteredDiv class="row align-items-center justify-content-center">
        <div class="descrizioni col-xl-12 col-lg-5 col-md-10 p-0">
          <div class="right-caption">
            <div class="small-tittle col-12 d-flex flex-column p-0">
              <div class="col-xl-12 col-lg-7 col-md-10 d-flex justify-content-center p-0">
                <div className="col-4">
                  <Img
                    style={{ height: "auto", width: "auto" }}
                    className="img-fluid rounded-9"
                    src={Vigama}
                    alt="Vesuvio"
                  />
                </div>
              </div>
              <Descrizione style={{ color: "black" }}>
                Il gruppo Vi.Ga.Ma opera in campo artistico e letterario con
                l'intento di incentivare e promuovere performance che
                valorizzino la storia e la cultura del territorio campano.
              </Descrizione>
            </div>
          </div>
        </div>
      </CenteredDiv>

      <SpeakerColumn>
        <div className="d-flex flex-column mx-5">
          <SpeakerImage src={ImmaGatto} alt="Anna Marino" />
          <SpeakerCaption>
            <h3>Immacolata Gatto</h3>
            <p>
              Studia Lettere all’università Federico II di Napoli e si laurea
              con una tesi in Archeologia Medievale. Nel 2000 consegue il
              Dottorato di ricerca in " Cultura dell'età romanobarbarica" presso
              l'Università di Macerata e nel 2014 la Laurea Magistrale in
              Archeologia, beni culturali e turismo presso l'Università del
              Molise. Per diversi anni lavora come archeologa in siti dell' Alta
              Irpinia. Attualmente insegna, italiano, storia e geografia
            </p>
          </SpeakerCaption>
        </div>
      </SpeakerColumn>

      <SpeakerColumn>
        <div className="d-flex flex-column mx-5">
          <SpeakerImage src={AnnaMarino} alt="Anna Marino" />
          <SpeakerCaption>
            <h3>Anna Luisa Marino</h3>
            <p>
              Studia lettere classiche e si laurea con una tesi in archeologia
              medievale. Dopo qualche esperienza di scavo e di studio dei
              reperti archeologici, scopre nell'insegnamento la sua vera
              passione e intanto collabora all'organizzazione di mostre e
              riviste d'arte. Oggi insegna in un liceo scientifico e prova a
              trasmettere la sua passione per l'archeologia,l'arte, la
              letteratura,il teatro, il cinema e la musica.
            </p>
          </SpeakerCaption>
        </div>
      </SpeakerColumn>

      <SpeakerColumn>
        <div className="d-flex flex-column mx-5">
          <SpeakerImage src={RedentaVitulano} alt="Anna Marino" />
          <SpeakerCaption>
            <h3>Redenta Vitulano</h3>
            <p>
              Studia Lettere all’università Federico II di Napoli e si laurea
              con una tesi in Archeologia Medievale. Da sempre appassionata di
              Arte, Comunicazione e Teatro, diventa Counselor professionista e
              si specializza nei Disturbi Specifici dell’Apprendimento,
              integrando queste sue passioni con l’insegnamento.
            </p>
          </SpeakerCaption>
        </div>
      </SpeakerColumn>
    </SpeakerWrapper>
  );
}

export default VigamaMembri;
