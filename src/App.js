import React from "react";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";

const App = () => {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#333",
        }}
      >
        <Header />
        <Carousel images={images} />
      </div>
    </>
  );
};

export default App;
