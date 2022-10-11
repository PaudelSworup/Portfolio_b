import React from "react";
import Heading from "./Heading";
import YTcard from "./YTcard";

const Youtube = () => {
  return (
    <>
      <section className="yt">
        <div className="container" style={{ color: "#555" }}>
          <Heading h2="Youtube" data="Educational Material" />
          <div className="row g-2 mt-3">
            <YTcard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Youtube;
