import React from "react";

import ServicesCaro from "./services-caro";
import ServiceSec from "./service-section";

const Services = () => {
  return (
    <div id="services">
      <ServicesCaro />
      <br />
      <br />
      <div id="background">
        <p id="paragraph">
          Our software engineers have a wealth of experience in building web
          applications. We are also experts in many verticals and business
          domains, including e-Commerce, e-Learning, AdTech, Finance,
          Entertainment, and more.
        </p>
        <br />
        <br />
        <ServiceSec />
      </div>
    </div>
  );
};

export default Services;
