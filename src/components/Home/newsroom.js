import React from "react";

import NewsRoomCaro from "./newsroom-caro";
//css
import "./home.css";

const NewsRoom = () => {
  return (
    <div className="newsroom-container">
      <br />
      <br />
      <div className="newsroom-heading">newsroom</div>
      <br />
      <br />
      <p id="paragraph">
        We are here to listen your voice, understand your expectation then make
        it true. We are promised to make you satisfied.
      </p>
      <br />
      <br />
      <br />
      <NewsRoomCaro />
    </div>
  );
};

export default NewsRoom;
