import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../../redux/actions/types/QuanLyPhimType";
import "./Trailers.css";

export default function Trailers(props) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState(3);
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const firstSlider = {
    infinite: true,
    swipeToSlide: true,
    fade: true,
  };

  const secondSlider = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    slidesToShow: 4,
    focusOnSelect: true,
  };

  return (
    <div className="trailers bg-dark-blue-color ">
      <div className="container mx-auto py-8 px-5 lg:p-16">
        <div className="title-hd flex items-center justify-between">
          <h3 className="text-white text-sm sm:text-lg md:text-2xl">
            TRAILERS
          </h3>
          <NavLink to="/danh-sach-phim">
            <div className="text-gray-300 text-xs md:text-sm flex yellow-color-hover duration-500 ease-linear">
              XEM TẤT CẢ
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1 mr-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </NavLink>
        </div>
        <div className="flex flex-wrap">
          <div className="list-movie w-full">
            <ul className="flex py-5" role="tablist">
              <li className="mr-10">
                <a
                  className={
                    " text-xs md:text-sm font-bold uppercase leading-normal " +
                    (openTab === 3 ? "yellow-color" : "text-gray-300")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                    const action = { type: SET_FILM_DANG_CHIEU };
                    dispatch(action);
                  }}
                ></a>
              </li>
              <li className="">
                <a
                  className={
                    "text-xs md:text-sm font-bold uppercase leading-normal " +
                    (openTab === 4 ? "yellow-color" : "text-gray-3")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                    const action = { type: SET_FILM_SAP_CHIEU };
                    dispatch(action);
                  }}
                ></a>
              </li>
            </ul>

            <div className="grid grid-cols-3 gap-4">
              <Slider
                {...firstSlider}
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                className="trailer-left col-span-2"
              >
                {props.arrFilm.slice(0, 6).map((item, index) => {
                  return (
                    <div key={index}>
                      <iframe
                        width="100%"
                        height="435px"
                        src={item.trailer}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                })}
              </Slider>

              <Slider
                {...secondSlider}
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                className="trailer-right bg-gray-blue-color py-5"
              >
                {/* {renderFilms(dangChieu)} */}
                {props.arrFilm.slice(0, 6).map((phim, index) => {
                  return (
                    <div
                      onClick={() => setActiveIndex(index)} // pass the index
                      className={`
                        ${
                          activeIndex === index
                            ? "bg-light-blue-color"
                            : "text-transparent"
                        }
                         trailer-film bg-light-blue-color-hover p-4 cursor-pointer
                      `}
                    >
                      <img
                        src={phim.hinhAnh}
                        className="w-40 h-16 mr-5 object-cover"
                      />
                      <p className="text-white ">{phim.tenPhim}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
