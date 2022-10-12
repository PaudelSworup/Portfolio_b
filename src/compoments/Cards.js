import React from "react";
import { cardDetail } from "./cardDetail";
// import "./cards.css";

const Cards = () => {
  const ytChannel = () => {
    window.location.href =
      "https://www.youtube.com/channel/UCJemdKovMBJkfb8XF2GxU3g";
  };
  return (
    <>
      {cardDetail.map((cur) => (
        <div key={cur.id} className="col-12 col-md-6 col-lg-3">
          <div className="card rounded shadow cards">
            <div className="card-body d-flex flex-column">
              <i className="text-center favIcon">{cur.icon}</i>
              <h5 className="card-title text-center card-text">{cur.title}</h5>
              <p className="card-text text-secondary text-justify card-text">
                {cur.desc}
              </p>
              {cur.title === "Youtube Videos" ? (
                <p
                  className="card-text  text-center text-white card-text ytchannel"
                  onClick={() => ytChannel()}
                >
                  {cur.channel}
                </p>
              ) : (
                console.log("nonone")
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
