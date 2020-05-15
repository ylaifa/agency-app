import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";

// import images
import ukFlag from "../assets/img/uk_flag.png";
import frFlag from "../assets/img/french_flag.png";

const Navbar = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "fr"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  });

  const toggle = () =>
    language === "fr" ? setLanguage("en") : setLanguage("fr");

  return (
    <>
      <LanguageContext.Provider value={localStorage.getItem("language")}>
        <nav className="navbar navbar-dark bg-dark">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/about">
            About
          </Link>
          <Link className="navbar-link" to="/works">
            Works
          </Link>
          <button
            onClick={toggle}
            id="language-btn"
            title="Change the language"
          >
            {language === "fr" ? (
              <img src={frFlag} alt="french_flag" width="100" height="50" />
            ) : (
              <img src={ukFlag} alt="uk_flag" width="100" height="50" />
            )}
          </button>
        </nav>
      </LanguageContext.Provider>
    </>
  );
};
export default Navbar;
