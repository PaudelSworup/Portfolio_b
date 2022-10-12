import React from "react";

const SkillCard = ({ value, label }) => {
  return (
    <>
      <div className="col-12 col-md-6 progress-bar-div ">
        <label className="mr-5 head">{label}</label>
        <br />
        <progress value={value} max="100"></progress>
      </div>
    </>
  );
};

export default SkillCard;
