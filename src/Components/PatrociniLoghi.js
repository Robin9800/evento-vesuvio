import React from "react";
import styled from "styled-components";
import AnnaMarino from "./Immagini/AnnaMarino.jpeg";
import ImmaGatto from "./Immagini/ImmaGatto.jpeg";
import RedentaVitulano from "./Immagini/RedentaVitulano.jpeg";

const SpeakerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SpeakerColumn = styled.div`
  flex-basis: calc(
    50% - 20px
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
  margin: 0 auto; /* aggiunta della proprietà margin */

  &:hover {
    transform: scale(1.05);
  }
`;

const SpeakerCaption = styled.figcaption`
  h3 {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 0.8rem;
    color: #212529;
  }

  p {
    text-align: center;
    font-size: 14px !important;
    font-weight: bolder;
    margin-bottom: 30px;
    color: #868e96;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        display: block;
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        border-radius: 50%;
        transition: transform 0.2s ease-out;

        &:hover {
          transform: translateY(-3px);
        }

        &:focus {
          outline: none;
          box-shadow: 0 0 0 2px #ffc107;
        }
      }

      .fab {
        font-size: 18px;
      }

      .fa-twitter {
        background-color: #1da1f2;
      }

      .fa-linkedin {
        background-color: #0077b5;
      }

      .fa-github {
        background-color: #333;
      }
    }
  }
`;

function PatrociniLoghi() {
  return (
    <SpeakerWrapper>
      <SpeakerColumn>
        <div className="d-flex flex-column mx-5">
          <SpeakerImage src={AnnaMarino} alt="Anna Marino" />
          <SpeakerCaption>
            <h3>Cav Enzo Marino</h3>
            <p></p>
          </SpeakerCaption>
        </div>
      </SpeakerColumn>

      <SpeakerColumn>
        <div className="d-flex flex-column mx-5">
          <SpeakerImage src={AnnaMarino} alt="Anna Marino" />
          <SpeakerCaption>
            <h3>Anna Luisa Marino</h3>
            <p></p>
          </SpeakerCaption>
        </div>
      </SpeakerColumn>

      <SpeakerColumn>
        <div className="d-flex flex-column mx-5">
          <SpeakerImage src={ImmaGatto} alt="Anna Marino" />
          <SpeakerCaption>
            <h3>Immacolata Gatto</h3>
            <p></p>
          </SpeakerCaption>
        </div>
      </SpeakerColumn>

      <SpeakerColumn>
        <div className="d-flex flex-column mx-5">
          <SpeakerImage src={RedentaVitulano} alt="Anna Marino" />
          <SpeakerCaption>
            <h3>Redenta Vitulano</h3>
            <p></p>
          </SpeakerCaption>
        </div>
      </SpeakerColumn>
    </SpeakerWrapper>
  );
}

export default PatrociniLoghi;
