import React from "react";
import Header from "./Components/Header";
import Jumbotron from "./Components/Jumbotron";
import Carosello from "./Components/Carosello";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  return (
    <>
      <Header />

      <Jumbotron
        dataEvento="16 Maggio 2023"
        Titolo1="Aues Eus,"
        Titolo2="Vesuvio luce che brucia"
        descrizioneBreve="Performance artistica Enzo Marino"
      />
    </>
  );
};

export default App;
