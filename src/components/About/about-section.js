import React from "react";

import { Card } from "react-bootstrap";
//css
import "./about.css";

import vision from './vision.jpg'
import mission from './mission.jpg'
import plan from './plan.png'


const AboutSec = () => {
  const cardHandler = () => {
    document.getElementById("title").style.display = "none";
    document.getElementById("vision").style.display = "block";
    document.querySelector(".card-img1").style.filter = "brightness(5%)";
    document.querySelector(".card-img1").style.transitionDuration = "2s";
  };
  const cardLeaveHandler = () => {
    document.getElementById("title").style.display = "block";
    document.getElementById("vision").style.display = "none";
    document.querySelector(".card-img1").style.filter = "brightness(40%)";
    document.querySelector(".card-img1").style.transitionDuration = "2s";
  };

  const cardHandler2 = () => {
    document.getElementById("title2").style.display = "none";
    document.getElementById("mission").style.display = "block";
    document.querySelector(".card-img2").style.filter = "brightness(5%)";
    document.querySelector(".card-img2").style.transitionDuration = "2s";
  };
  const cardLeaveHandler2 = () => {
    document.getElementById("title2").style.display = "block";
    document.getElementById("mission").style.display = "none";
    document.querySelector(".card-img2").style.filter = "brightness(40%)";
    document.querySelector(".card-img2").style.transitionDuration = "2s";
  };

  const cardHandler3 = () => {
    document.getElementById("title3").style.display = "none";
    document.getElementById("plan").style.display = "block";
    document.querySelector(".card-img3").style.filter = "brightness(5%)";
    document.querySelector(".card-img3").style.transitionDuration = "2s";
  };
  const cardLeaveHandler3 = () => {
    document.getElementById("title3").style.display = "block";
    document.getElementById("plan").style.display = "none";
    document.querySelector(".card-img3").style.filter = "brightness(40%)";
    document.querySelector(".card-img3").style.transitionDuration = "2s";
  };

  return (
    <div
      className="card-con"
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        width: "90%",
      }}
    >
      <Card
        onMouseEnter={cardHandler}
        onMouseLeave={cardLeaveHandler}
        className="bg-dark text-white"
        style={{
          height: "20rem",
          width: "20rem",
          borderRadius: "20px",
          marginBottom: "2rem",
          cursor: "pointer",
        }}
        id="cards"
      >
        <Card.Img
          className="card-img1"
          src={vision}
          alt="Card image"
          style={{ borderRadius: "20px" }}
        />
        <Card.ImgOverlay>
          <Card.Title
            id="title"
            style={{
              textAlign: "center",
              marginTop: "40%",
              color: "orange",
              fontSize: "2.6rem",
            }}
          >
            Our Vision
          </Card.Title>
          <Card.Text id="vision" style={{ display: "none" }}>
            <p>
              Our vision is to deliver optimal solutions with quality and
              services at reasonable prices. For us customer satisfaction is
              given top place. We always try to improve the quality of our
              products by exploring innovative ideas.
            </p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card
        onMouseEnter={cardHandler3}
        onMouseLeave={cardLeaveHandler3}
        className="bg-dark text-white"
        style={{
          height: "20rem",
          width: "20rem",
          borderRadius: "20px",
          marginBottom: "2rem",
          cursor: "pointer",
        }}
      >
        <Card.Img
          className="card-img3"
          src={mission}
          alt="Card image"
          style={{ borderRadius: "20px" }}
        />
        <Card.ImgOverlay>
          <Card.Title
            id="title3"
            style={{
              textAlign: "center",
              marginTop: "40%",
              color: "orange",
              fontSize: "2.6rem",
            }}
          >
            Our Plan
          </Card.Title>
          <Card.Text id="plan" style={{ display: "none" }}>
            <p>
              We expect a high degree of profitability based on our plan to key
              in on businesses that have already expressed the need for such
              services and products to the software manufacturer. Our management
              expertise in dealing with corporate decision makers and our
              partner's reputation will be the cornerstone of our success.
            </p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Card
        onMouseEnter={cardHandler2}
        onMouseLeave={cardLeaveHandler2}
        className="bg-dark text-white"
        style={{
          height: "20rem",
          width: "20rem",
          borderRadius: "20px",
          marginBottom: "2rem",
          cursor: "pointer",
        }}
      >
        <Card.Img
          className="card-img2"
          src={plan}
          alt="Card image"
          style={{ borderRadius: "20px" }}
        />
        <Card.ImgOverlay>
          <Card.Title
            id="title2"
            style={{
              textAlign: "center",
              marginTop: "40%",
              color: "orange",
              fontSize: "2.6rem",
            }}
          >
            Our Mission
          </Card.Title>
          <Card.Text id="mission" style={{ display: "none" }}>
            <p>
              Our mission is to enhancing the business growth of our customers
              with creative Design and Development to deliver market-defining
              high-quality solutions that create value and reliable competitive
              advantage for our clients around the world.
            </p>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
     
    </div>
  );
};

export default AboutSec;
