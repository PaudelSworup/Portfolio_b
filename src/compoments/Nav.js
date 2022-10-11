import React from "react";
import "./nav.css";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const ScrollDown = () => {
    window.scrollBy(0, 600);
  };
  return (
    <>
      <section className="navbar">
        <div className="nav">
          <h2 className="text-white nav-text">Hi, I'm Sworup!</h2>
          <p className="text-white nav-text">I am a Web Developer</p>
          <i className="m-auto">
            <FontAwesomeIcon
              className="text-white icon"
              icon={faAnglesDown}
              onClick={() => ScrollDown()}
            />
          </i>
        </div>
      </section>
    </>
  );
};

export default Nav;
