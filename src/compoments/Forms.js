import React from "react";

const Forms = ({ title, label, type }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="mb-3">
          <label htmlFor={label} className="form-label head">
            {title}
          </label>
          <input
            type={type}
            className="form-control"
            id={label}
            aria-describedby="emailHelp"
          />
        </div>
      </div>
    </>
  );
};

export default Forms;
