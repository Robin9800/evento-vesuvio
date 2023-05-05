import React from "react";
import Header from "./Components/Header";
import Jumbotron from "./Components/Jumbotron";
import ChiSiamo from "./Components/ChiSiamo";
import AuesEus from "./Components/AuesEus";
import Patrocini from "./Components/Patrocini";
import Contatti from "./Components/Contatti";

import Footer from "./Components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Jumbotron} />
        <Route path="/chi-siamo" component={ChiSiamo} />
        <Route path="/aues-eus" component={AuesEus} />
        <Route path="/patrocini" component={Patrocini} />
        <Route path="/contatti" component={Contatti} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
