import React, { useState } from "react";
import Vesuvio from "./Immagini/Vesuvio4.jpg";
import "../Css/Jumbotron.css";
import Carosello from "./Carosello";
import { MDBBtn } from "mdb-react-ui-kit";
import styled from "styled-components";

const Button = styled(MDBBtn)`
  background-color: transparent;
  color: white !important;
  border: 2px solid white !important;
  padding: 10px 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    color: black !important;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 0.3s ease-in-out;
    z-index: -1;
  }
  &:hover::before {
    left: 0;
  }
`;

const Jumbotron = ({
  dataEvento,
  Titolo1,
  Titolo2,
  descrizioneBreve,
  onCarouselClick,
}) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleCarouselClick = () => {
    setShowCarousel(true);
    if (onCarouselClick) onCarouselClick();
  };

  const handleCloseClick = () => {
    setShowCarousel(false);
  };

  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage: `url(${Vesuvio})`,
        height: "100vh",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <div className=" container-titoli d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h2 className="my-4">{dataEvento}</h2>
            <h1>{Titolo1}</h1>
            <h1>{Titolo2}</h1>
            <p className="my-4">{descrizioneBreve}</p>
            <Button tag="a" outline size="lg">
              <i className="fa-sharp fa-solid fa-circle-play mr-3"></i>
              Riproduci Galleria
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
