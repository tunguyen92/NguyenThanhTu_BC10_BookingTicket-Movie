import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";
import "./Carousel.css";
import "animate.css";

export default function HomeCarousel() {
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
        <div className="relative">
          <img src={slider1} className="lg:h-screen w-full " alt="" />
          <p className="absolute top-1/2 left-1/2 animate__animated animate__bounce animate__delay-2s animate__slow animate__repeat-2">
            kjnkjn
          </p>
        </div>
        <div className="relative">
          <img src={slider2} className="lg:h-screen w-full " alt="" />
          <p className="absolute top-1/2 left-1/2">ksdfsdfjn</p>
        </div>
        <div className="relative">
          <img src={slider3} className="lg:h-screen w-full " alt="" />
          <p className="absolute top-1/2 left-1/2">ksdfsdfjsdghfghfgn</p>
        </div>
      </Slider>
    </div>
  );
}
