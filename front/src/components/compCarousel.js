import React from "react";
import Carousel from 'react-bootstrap/Carousel'

import arrange5 from "../assets/arrange/arrange5.jpg";
import arrange7 from "../assets/arrange/arrange7.jpg";
import arrange9 from "../assets/arrange/arrange9.jpg";

export default function CompCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={arrange5}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={arrange7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={arrange9}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}