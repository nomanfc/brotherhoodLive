import React from "react";
import AboutCarousel from "./about-carou";
import AboutSec from './about-section';

const About = () => {
  return (
    <div id="about">
        <AboutCarousel/><br/><br/>
        <div className="paragraph">A small foundation for “crafting ideas into reality” in the field of information technology. Needs of Software System in the major fields like Education, Business, Security, Medicine etc. are warmly conducted here. Various solutions in the field of information technology are also offered here. Our software engineers always engaged to develop the customer’s needs with higher possibility of accomplishment.</div>
        <br/><br/>
        <AboutSec/>
        <br/><br/>
    </div>
  );
};

export default About;
