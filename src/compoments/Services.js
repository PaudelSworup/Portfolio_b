import React from "react";
import Cards from "./Cards";
import Heading from "./Heading";
import "./services.css";

const Services = () => {
  return (
    <>
      <section className="services colors" id="Services">
        <div className="container" style={{ color: "#333" }}>
          <Heading h2="Services" data="What I Provide" />
          <div className="row g-3 mt-3">
            <Cards />
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
