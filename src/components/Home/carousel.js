import React, { useState, useEffect } from "react";
import axios from "axios";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";

const CarouselSlider = () => {
  const [caro, setCaro] = useState([]);

  useEffect(() => {
    axios
      .get("homeCarousel.json")
      .then((res) => {
        console.log(res);
        setCaro(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Carousel>
      {caro.map((data) => (
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={data.image}
            alt="First slide"
            style={{
              height: "100vh",
              maxHeight: "100vh",
              width: "100%",
              filter: "brightness(15%)",
            }}
          />
          <Carousel.Caption>
            <h3 id="caro-title">{data.title}</h3>
            <p id="caro-text">{data.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
