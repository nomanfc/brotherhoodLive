import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";

import "./career.css";
import career from './career.jpg'

const CareerCaro = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item indicators="false">
        <img
          className="d-block w-100"
          src={career}
          alt="Career"
          style={{
            height: "100vh",
            maxHeight: "65vh",
            width: "100%",
            filter: "brightness(20%)",
            borderRadius: "0 0 30px 30px"
          }}
        />
        <Carousel.Caption>
          <div>
            <h1 id="caro-career-caption">Crafting Ideas into Reality</h1>
          </div>
          <br />
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p id="p-tag">brotherhoodinfotech.com</p>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CareerCaro;
