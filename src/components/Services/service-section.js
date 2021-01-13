import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
//css
import "./services.css";

const ServiceSec = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios
      .get("serviceData.json")
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="servicesec-container">
      {service.map((data) => (
        <Card
          id="cards"
          border="warning"
          style={{
            width: "18rem",
            height: "auto",
            marginBottom: "2rem",
          }}
        >
          <Card.Header
            id="header"
            style={{
              textAlign: "center",
              fontSize: "2rem",
              color: "orange",
              fontStyle: "bold",
              height: "auto",
            }}
          >
            {data.header}
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ textAlign: "justify", fontSize: "1rem" }}>
              {data.text}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ServiceSec;
