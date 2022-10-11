import React from "react";
import { Myworks } from "./Myworks";
import "./cards.css";

const CardWork = () => {
  const checkIn = (url) => {
    window.location.href = url;
  };
  return (
    <>
      {Myworks.map((cur) => (
        <div key={cur.id} className="col-12 col-md-6 col-lg-3">
          <div
            className="card rounded shadow cards"
            onClick={() => checkIn(cur.url)}
          >
            <div className="card-body d-flex flex-column card-element">
              <img src={cur.img} alt="" />
              <h5 className="card-title text-center card-text">{cur.title}</h5>
              <p className="card-text text-secondary text-justify card-text">
                {cur.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardWork;
