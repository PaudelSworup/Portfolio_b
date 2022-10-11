import React from "react";
import Heading from "./Heading";
import "./sections.css";

const Sections = () => {
  return (
    <>
      <section className="sections colors" id="About">
        <div className="container" style={{ color: "#555" }}>
          <Heading h2="About Me" data="Who Am I" />

          <div className="row mt-2">
            <div className="col-md-6 img-div">
              <img src="../images/pp.jpg" alt="" />
            </div>

            <div className="col-md-6 d-flex justify-content-center flex-column description-div">
              <h2 className="desc">
                I'm Sworup Khatri and I'm a fast learner and a Web Developer
              </h2>
              <p className="desc">
                Welcome viewers! This is Sworup Kc currently living at Bhaktapur
                and learning BCA at kathmandu college of technology. I love to
                design and develop websites and mobile applications and besides
                from that I love to sing a song, to make youtube videos, to
                watch and play football and love to travel.
              </p>
              <button className="btn btn-primary download">
                <a
                  href="https://drive.google.com/drive/folders/1579aPAPq7m2fkjWMW_5Ogia4NK40B4v_"
                  target="_blank "
                  rel="opener"
                >
                  Download Cv
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
