import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from "../../../assets/images/slider1.jpg";
import slider2 from "../../../assets/images/slider2.jpg";
import slider3 from "../../../assets/images/slider3.jpg";

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
      <div>
        <Slider {...settings}>
          <img src={slider1} className="lg:h-screen cursor-pointer" />
          <img src={slider2} className="lg:h-screen cursor-pointer" />
          <img src={slider3} className="lg:h-screen cursor-pointer" />
        </Slider>
      </div>
    );
  }
}
