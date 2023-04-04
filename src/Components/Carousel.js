import React from "react";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const buttonStyle = {
    border: "none",
    backgroundColor: "transparent",
    fontSize: "50px",
    cursor: "pointer",
  };
  const handleNextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  const handlePreviousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button onClick={handlePreviousImage} style={buttonStyle}>
        &#9664;
      </button>
      <img
        src={images[currentImageIndex]}
        alt="Vesuvio"
        style={{ maxWidth: "100%" }}
      />
      <button onClick={handleNextImage} style={buttonStyle}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
