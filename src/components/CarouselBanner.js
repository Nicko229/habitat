import React, { Component } from 'react';
import { Carousel } from "react-bootstrap";
import banner1 from '../assets/banner.jpeg';
import banner2 from '../assets/banner.png';
import './CarouselBanner.css';


export default class CarouselBanner extends Component {
  render() {
    return (
      <div className="banner-parent">
        <Carousel
          controls={false}
          className="carousel-banner">

          <Carousel.Item
            className="car-item">
            <img className="banner-img" src={banner1} />
          </Carousel.Item>
          <Carousel.Item
            className="car-item">
            <img className="banner-img" src={banner2} />
          </Carousel.Item>

        </Carousel>
      </div>
    )
  }
}