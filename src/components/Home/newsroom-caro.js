import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { Card, Button } from "react-bootstrap";

import axios from "axios";

import "./home.css";

import mission from "./mission_statement.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function NewsRoomCaro() {
  const [caro, setCaro] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response1) => {
          setCaro(response1.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getData();
  }, []);

  return (
    <>
      <div className="app">
        <Carousel  breakPoints={breakPoints}>
          {caro.map((data) => (
            <Card
              id="card"
              style={{
                width: "18rem",
                height: "25rem",
                overflow: "hidden",
                border: "1px solid orange",
              }}
            >
              <Card.Img
                variant="top"
                src={mission}
                style={{ height: "10rem" ,filter:"brightness(50%)" }}
              />
              <Card.Header style={{ background: "rgba(0,0,0,0.8)", color: "orange",fontSize: "0.6rem"}}>
                <Card.Title style={{fontSize: "1rem", textAlign: "justify"}}>{data.title}</Card.Title>
              </Card.Header>
              <Card.Body id="C-body"
                style={{  color: "white", overflow: "auto" }}
              >
                <Card.Text style={{textAlign:"justify"  , color: "black", fontFamily: "Helvet"}} >{data.body}</Card.Text>
              </Card.Body>
              <Card.Footer style={{ background: "black", color: "white" , margin: "auto", width:"100%"}}>
                <Button variant="primary" id="btn">Details</Button>
              </Card.Footer>
            </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default NewsRoomCaro;
