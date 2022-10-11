import React, { useEffect, useState } from "react";
import { Request } from "./Request";

const YTcard = () => {
  const url = `https://www.googleapis.com/youtube/v3${Request.url}`;
  const [yt, setYt] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url).then((res) => res.json());
      // console.log(response.items);
      setYt(response.items);
    };
    getData();
  }, [url]);
  console.log(yt);
  return (
    <>
      {yt ? (
        yt.map((cur, index) => {
          const { id, snippet } = cur;
          return (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="card rounded shadow yt">
                <div className="card-body d-flex flex-column">
                  <iframe
                    title="yt"
                    src={`https://www.youtube.com/embed/${id.videoId}`}
                    frameBorder="0"
                    allowFullScreen={true}
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    oallowfullscreen="true"
                    msallowfullscreen="true"
                  ></iframe>
                  <h5 className="card-title text-center card-text">
                    {snippet.title}
                  </h5>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="text-center card-text">
          The request cannot be completed because you have exceeded your quota
        </h2>
      )}
    </>
  );
};

export default YTcard;
