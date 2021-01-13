import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselSlider from './carousel'

//components
import NewsRoom from './newsroom'
import RecentProducts from "./recentProducts"
const Home = () => {


  return (
    <div id="home">
      <CarouselSlider/>
      <NewsRoom/>
      <br />
      <br />
      <br />
      <h1 className="newsroom-heading">
        Our Recent Products
      </h1>
      <br />
      <br />
      <br />
      <RecentProducts/>

    </div>
  );
};

export default Home;
