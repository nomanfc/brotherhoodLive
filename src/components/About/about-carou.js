import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import about from './about-us.jpg'



const AboutCarousel = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item indicators="false">
        <img
          className="d-block w-100"
          src={about}
          alt="About"
          style={{
            height: "100vh",
            maxHeight: "65vh",
            width: "100%",
            filter: "brightness(15%)",
            borderRadius: "0 0 30px 30px"
          }}
        />
        <Carousel.Caption>
          <h1 id="caro-caption">Who We Are?</h1>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
  );
};

export default AboutCarousel;
