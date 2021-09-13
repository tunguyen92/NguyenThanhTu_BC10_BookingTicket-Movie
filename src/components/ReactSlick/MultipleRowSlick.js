import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import Film from "../Film/Film";
import styleSlick from "./MultipleRowSlick.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}
        `}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}
        `}
      style={{ ...style, display: "block", left: "-50px" }}
      onClick={onClick}
    ></div>
  );
}

const MultipleRowsSlick = (props) => {
  // console.log(props.arrFilm);
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState(1);
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const renderFilms = (phim) => {
    if (phim) {
      return props.arrFilm.slice(0, 12).map((item, index) => {
        return (
          <div className={`${styleSlick["width-item"]}`} key={index}>
            <Film phim={item} />
          </div>
        );
      });
    }
  };

  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-gray-600 cursor-default"
                    : "text-gray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                  const action = { type: SET_FILM_DANG_CHIEU };
                  dispatch(action);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                ĐANG CHIẾU
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-gray-600 cursor-default"
                    : "text-gray-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                  const action = { type: SET_FILM_SAP_CHIEU };
                  dispatch(action);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                SẮP CHIẾU
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Slider {...settings}>{renderFilms(dangChieu)}</Slider>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Slider {...settings}>{renderFilms(sapChieu)}</Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleRowsSlick;
