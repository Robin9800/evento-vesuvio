import React from "react";
import Header from "./Components/Header";
import Jumbotron from "./Components/Jumbotron";
import Carosello from "./Components/Carosello"
import ChiSiamo from "./Components/ChiSiamo";
import AuesEus from "./Components/AuesEus";
import Patrocini from "./Components/Patrocini";
import News from "./Components/News";
import Contatti from "./Components/Contatti";
import Scintilla from "./Components/Scintilla";

import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Carosello} />
        <Route path="/chi-siamo" component={ChiSiamo} />
        <Route path="/aues-eus" component={AuesEus} />
        <Route path="/patrocini" component={Patrocini} />
        <Route path="/news" component={News} />
        <Route path="/contatti" component={Contatti} />
        <Route path="/scintilla" component={Scintilla} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
