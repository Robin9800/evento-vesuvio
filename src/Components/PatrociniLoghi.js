import React from "react";
import styled from "styled-components";
import Parcovesuvio from "./Immagini/Parco Vesuvio.jpeg";
import Napoli from "./Immagini/Napoli.png";
import Mav from "./Immagini/mav.jpeg";
import Bcc from "./Immagini/bcc.jpg";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Card = styled(MDBCard)`
  height: 200px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

function PatrociniLoghi() {
  return (
    <Container>
      <Card
        className="mx-3 mt-2 mb-3"
        style={{
          display: "inline-block",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.cittametropolitana.na.it/"
        >
          <MDBCardImage
            style={{ height: "200px" }}
            src={Napoli}
            alt="Napoli"
            position="top"
          />
        </a>
      </Card>

      <Card
        className="mx-3 my-3"
        style={{
          display: "inline-block",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.parconazionaledelvesuvio.it/"
        >
          <MDBCardImage
            style={{ height: "200px" }}
            src={Parcovesuvio}
            alt="Parcovesuvio"
            position="top"
          />
        </a>
      </Card>

      <Card
        className="mx-3 my-3"
        style={{
          display: "inline-block",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.museomav.it/"
        >
          <MDBCardImage
            style={{ height: "200px" }}
            src={Mav}
            alt="Mav"
            position="top"
          />
        </a>
      </Card>

      <Card
        className="mx-3 my-3"
        style={{
          display: "inline-block",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bccnapoli.it/"
        >
          <MDBCardImage
            style={{ height: "200px" }}
            src={Bcc}
            alt="Bcc"
            position="top"
          />
        </a>
      </Card>
    </Container>
  );
}

export default PatrociniLoghi;
