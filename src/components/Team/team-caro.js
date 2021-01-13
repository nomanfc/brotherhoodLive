import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";

import "./team.css";
import team from './team.jpg'

const TeamCaro = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item indicators="false">
        <img
          className="d-block w-100"
          src={team}
          alt="Team"
          style={{
            height: "100vh",
            maxHeight: "65vh",
            width: "100%",
            filter: "brightness(20%)",
            borderRadius: "0 0 30px 30px"
          }}
        />
        <Carousel.Caption>
          <h1 id="caro-caption">Our Team</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default TeamCaro;
