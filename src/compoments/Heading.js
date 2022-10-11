import React from "react";

const Heading = ({ h2, data }) => {
  return (
    <>
      <div className="row">
        <div
          className="col d-flex justify-content-center align-items-center heading"
          data-after={data}
        >
          <h2 className="head">{h2}</h2>
        </div>
      </div>
    </>
  );
};

export default Heading;
