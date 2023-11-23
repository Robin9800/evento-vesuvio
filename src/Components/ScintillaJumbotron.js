import React from "react";
import ScintillaLogo from "./Immagini/scintillaJumbotron.jpg";
import "../Css/Jumbotron.css";
import styled from "styled-components";

const ScintillaJumbotron = ({ title, description }) => {
  return (
    <div
      className="px-5 text-center bg-image"
      style={{
        backgroundImage: `url(${ScintillaLogo})`,
        height: "100vh",
        backgroundPosition: "bottom",
      }}
    >
      
    </div>
  );
};

export default ScintillaJumbotron;
