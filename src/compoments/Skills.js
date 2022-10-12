import React, { useEffect } from "react";
import Heading from "./Heading";
import SkillCard from "./SkillCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./skills.css";
import { Socialmedia } from "./Socialmedia";
import { SocialIcon } from "react-social-icons";
import "./navi.css";

const Skills = () => {
  useEffect(() => {
    console.log("scroll");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 200) {
        document.getElementById("arrow").style.display = "block";
      } else document.getElementById("arrow").style.display = "none";
    });
  });
  return (
    <>
      <section className="skills mt-3 colors" id="Skills">
        <div className="container" style={{ color: "#333" }}>
          <Heading h2="skills" data="My Skills" />
          <div className="row mt-2">
            <SkillCard value="100" label="HTML" />
            <SkillCard value="70" label="CSS" />
            <SkillCard value="80" label="JS" />
            <SkillCard value="70" label="REACT" />
            <SkillCard value="60" label="MySQL" />
            <SkillCard value="65" label="JAVA" />
            <SkillCard value="60" label="C#" />
            <SkillCard value="60" label="ANDROID" />
          </div>
        </div>
        <a href="#">
          <FontAwesomeIcon id="arrow" icon={faArrowUp} className="toTop" />
        </a>
        <div className="media">
          {Socialmedia.map((cur) => {
            const { id, url, title } = cur;
            return (
              <SocialIcon key={id} url={url} className="social" title={title} />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Skills;
