import React from "react";
import Slider from "react-slick";
import "./style.scss";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const contentStyle = {
  height: "400px",
  color: "fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
  cursor: "pointer",
};

export default function HomeCarousel() {
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div>
          <h3 style={contentStyle}>
            <img src="https://picsum.photos/999" className="w-full" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src="https://picsum.photos/989" className="w-full" alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src="https://picsum.photos/939" className="w-full" alt="" />
          </h3>
        </div>
      </Slider>
    </div>
  );
}
