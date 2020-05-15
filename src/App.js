import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { IntlProvider } from "react-intl";
import LanguageContext from "./context/LanguageContext";
import fr from "./assets/translation/fr";
import en from "./assets/translation/en";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Navbar from "./components/Navbar";

const messages = {
  fr: fr,
  en: en
};

const App = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <IntlProvider locale={language} messages={messages[language]}>
        <Router>
          <div>
            <Navbar language={language} />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/works/:projectSlug">
                <Works />
              </Route>
              <Route path="/works">
                <Works />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </IntlProvider>
    </>
  );
};

export default App;
