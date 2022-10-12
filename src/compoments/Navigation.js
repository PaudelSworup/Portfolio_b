import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faSun,
  faMoon,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navi.css";
import { Navcontent } from "./Navcontent";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const Bars = () => {
    setToggle(true);
    const bars = document.getElementById("bars");
    const cross = document.getElementById("cross");
    if ((bars.style.display = "block")) {
      cross.style.display = "flex";
      bars.style.display = "none";
    } else bars.style.display = "block";
  };

  const Cross = () => {
    setToggle(false);
    const bars = document.getElementById("bars");
    const cross = document.getElementById("cross");
    if ((cross.style.display = "block")) {
      cross.style.display = "none";
      bars.style.display = "block";
    } else cross.style.display = "block";
  };

  const Day = () => {
    document.body.style.background = "";

    const colorsChanger = document.querySelectorAll(".colors");
    for (let i = 0; i < colorsChanger.length; i++) {
      colorsChanger[i].style.background = "";
    }

    const desc = document.querySelectorAll(".desc");
    for (let i = 0; i < desc.length; i++) {
      desc[i].style.color = "";
    }

    const heading = document.querySelectorAll(".head");
    for (let i = 0; i < heading.length; i++) {
      heading[i].style.color = "";
    }
  };

  const Night = () => {
    document.body.style.background = "#111";
    const colorsChanger = document.querySelectorAll(".colors");
    for (let i = 0; i < colorsChanger.length; i++) {
      colorsChanger[i].style.background = "black";
    }

    const heading = document.querySelectorAll(".head");
    for (let i = 0; i < heading.length; i++) {
      heading[i].style.color = "#fff";
    }

    const desc = document.querySelectorAll(".desc");
    for (let i = 0; i < desc.length; i++) {
      desc[i].style.color = "#fff";
    }
  };
  return (
    <>
      <nav className="shadow navbar navbar-expand-md  navbar-style">
        <div className="container">
          <Link to="/" className="link">
            Portfolio
          </Link>
          <div
            id="navbar-togglers"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span id="bars" onClick={() => Bars()}>
              <FontAwesomeIcon icon={faBars} />
            </span>
            <span id="cross" onClick={() => Cross()}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
          </div>
          <div
            className={toggle ? "navMenu active" : "navMenu"}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto">
              {Navcontent.map((cur) => (
                <li key={cur.id} className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href={cur.links === "Home" ? `#` : `#${cur.links}`}
                  >
                    <span className="navSpan">{cur.links}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="blackWhite">
        <i>
          <FontAwesomeIcon
            title="day mode"
            onClick={() => Day()}
            className="text-warning"
            style={{ height: "30px", width: "30px" }}
            icon={faSun}
          />
        </i>

        <i>
          <FontAwesomeIcon
            title="night mode"
            onClick={() => Night()}
            className="text-info"
            style={{ height: "30px", width: "30px" }}
            icon={faMoon}
          />
        </i>
      </div>
    </>
  );
};

export default Navigation;
