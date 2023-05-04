import React, { useState } from "react";
import "../Css/Jumbotron.css";
import Vesuvio from ".//Immagini/Vesuvio4.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import Carosello from "./Carosello";

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
    <div className="row">
      <div className="col p-0">
        <div className=" d-flex p-0">
          <div
            className="background-image"
            style={{ backgroundImage: `url(${Vesuvio})` }}
          >
            <div className="image-overlay"></div>
            <div
              className={`carousel-overlay ${showCarousel ? "active" : ""}`}
            ></div>
          </div>
          <div className="titoli-jumbotron">
            <h2 className="my-3">{dataEvento}</h2>
            <h1>{Titolo1}</h1>
            <h1>{Titolo2}</h1>
            <p className="my-3">{descrizioneBreve}</p>
            <button className="btn my-3" onClick={handleCarouselClick}>
              <i className="fa-sharp fa-solid fa-circle-play"></i> Riproduci
              Galleria
            </button>
          </div>

          {showCarousel && (
            <div className="carousel-container">
              <Carosello onCloseClick={handleCloseClick} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
