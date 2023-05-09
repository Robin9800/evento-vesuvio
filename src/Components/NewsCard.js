import React from "react";
import Cult from "./Immagini/cult.png";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function NewsCard(props) {
  const { date, text, image, url } = props;
  return (
    <MDBCard className="my-4" style={{ width: "300px", height: "450px" }}>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage
          style={{ height: "150px" }}
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
    </MDBCard>
  );
}
