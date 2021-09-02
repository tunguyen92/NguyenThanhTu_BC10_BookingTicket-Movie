import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getCarouselAction } from "../../../../redux/actions/CarouselActions";
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

export default function HomeCarousel() {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  // console.log(arrImg);

  const dispatch = useDispatch();

  useEffect(() => {
    //TH1: action = {type:'',data}
    //TH2: (phải cài middleware)
    //callbackFunction (dispatch)
    dispatch(getCarouselAction());
  }, []);

  const contentStyle = {
    height: "600px",
    cursor: "pointer",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <h3
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            {/* <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            /> */}
          </h3>
        </div>
      );
    });
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>{renderImg()}</Slider>
    </div>
  );
}
