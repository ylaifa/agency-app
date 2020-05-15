import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";

// import images
import ukFlag from "../assets/img/uk_flag.png";
import frFlag from "../assets/img/french_flag.png";

const Navbar = ({ language }) => {
  const { toggle } = useContext(LanguageContext);

  const [src, setSrc] = useState(frFlag);
  useEffect(() => (language === "fr" ? setSrc(ukFlag) : setSrc(frFlag)));

  return (
    <>
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
        <button onClick={toggle} id="language-btn" title="Change the language">
          <img src={src} alt="french_flag" width="100" height="50" />
        </button>
      </nav>
    </>
  );
};
export default Navbar;
