import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Vesuvio from "./Immagini/Vesuvio.jpg";
import Vesuvio2 from "./Immagini/Vesuvio2.jpeg";
import Vesuvio3 from "./Immagini/Vesuvio3.jpg";
import styled from "styled-components";

const Carousel = styled(MDBCarousel)`
  width: 60%;
  img {
    object-fit: contain;
  }
`;
const Carosello = ({ onCloseClick }) => {
  return (
    <Carousel showIndicators showControls>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src={Vesuvio}
        alt="..."
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src={Vesuvio2}
        alt="..."
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src={Vesuvio3}
        alt="..."
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </Carousel>
  );
};
export default Carosello;
