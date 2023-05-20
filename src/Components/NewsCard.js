import React from "react";
import Cult from "./Immagini/cult.png";
import styled from "styled-components";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

const Card = styled(MDBCard)`
  height: 200px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function NewsCard(props) {
  const { date, text, image, mediaImage, url } = props;
  return (
    <Card className="my-4" style={{ width: "300px", height: "450px" }}>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        {mediaImage && (
          <MDBCardImage
            style={{ height: "50px", width: "50%" }}
            src={mediaImage}
            fluid
          />
        )}

        <MDBCardImage
          style={{ height: "150px", width: "100%" }}
          src={image}
          fluid
          alt="cult"
        />

        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{date}</MDBCardTitle>
        <MDBCardText style={{ color: "black" }}>{text}</MDBCardText>
        <MDBBtn target="_blank" rel="noopener noreferrer" href={url}>
          Leggi di più
        </MDBBtn>
      </MDBCardBody>
    </Card>
  );
}
