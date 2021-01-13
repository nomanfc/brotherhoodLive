import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";

import "./contact.css";
import contact from './contact-us.jpg'

const ContactCaro = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item indicators="false">
        <img
          className="d-block w-100"
          src={contact}
          alt="ContactUS"
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
            <h1 id="caro-contact-caption">Contact Us</h1>
          </div>
          <br />
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <p id="p-tag-contact">Don't hesitate to contact us whenever you need</p>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ContactCaro;
