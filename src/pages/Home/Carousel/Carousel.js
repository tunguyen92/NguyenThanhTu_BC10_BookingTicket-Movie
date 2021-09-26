import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import "./Carousel.css";

export default class HomeCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
    };

    return (
      <div className="carousel cursor-pointer">
        <Slider {...settings}>
          <div>
            <img src={slider1} className="lg:h-screen w-full" />
          </div>
          <div>
            <img src={slider2} className="lg:h-screen w-full" />
          </div>
          <div>
            <img src={slider3} className="lg:h-screen w-full" />
          </div>
        </Slider>
      </div>
    );
  }
}
