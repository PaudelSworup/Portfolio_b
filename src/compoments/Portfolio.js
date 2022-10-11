import React from "react";
import CardWork from "./CardWork";
import Heading from "./Heading";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio colors" id="Portfolio">
        <div className="container" style={{ color: "#555" }}>
          <Heading h2="Portfolio" data="My Works" />
          <div className="row g-3 mt-3">
            <CardWork />
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
