import React from "react";
import styled from "styled-components";
import Parcovesuvio from "./Immagini/Parco Vesuvio.jpeg";
import Napoli from "./Immagini/Napoli.png";
import Mav from "./Immagini/mav.jpeg";

const SpeakerWrapper = styled.div`
  display: flex;
`;

const SpeakerColumn = styled.div`
  margin: 0 10px 30px;

  @media screen and (max-width: 768px) {
    flex-basis: calc(100% - 20px);
  }
`;
const SpeakerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-out;
  margin: 0 auto;
`;

const PatrocinioSection = styled.div`
  transition: transform 0.2s ease-out;
  margin: 0 auto; /* aggiunta della proprietà margin */

  &:hover {
    transform: scale(1.05);
  }
  a:hover {
    text-decoration: none;
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

      a:hover {
        text-decoration: none;
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
      <SpeakerColumn className="justify-content-center">
        <PatrocinioSection className="d-flex flex-column mx-5">
          <a
            href="https://www.cittametropolitana.na.it/"
            className="d-flex flex-column"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpeakerImage src={Napoli} alt="Anna Marino" />
            <SpeakerCaption>
              <h3>Città Metropolitana Di Napoli</h3>
            </SpeakerCaption>
          </a>
        </PatrocinioSection>

        <PatrocinioSection className="d-flex flex-column mx-5">
          <a
            href="https://www.parconazionaledelvesuvio.it/"
            className="d-flex flex-column"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpeakerImage src={Parcovesuvio} alt="Anna Marino" />
            <SpeakerCaption>
              <h3>Parco Nazionale Del Vesuvio</h3>
            </SpeakerCaption>
          </a>
        </PatrocinioSection>

        <PatrocinioSection className="d-flex flex-column mx-5">
          <a
            href="https://www.museomav.it/"
            className="d-flex flex-column"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpeakerImage src={Mav} alt="Anna Marino" />
            <SpeakerCaption>
              <h3>Museo Archeologico Virtuale</h3>
            </SpeakerCaption>
          </a>
        </PatrocinioSection>
      </SpeakerColumn>
    </SpeakerWrapper>
  );
}

export default PatrociniLoghi;
