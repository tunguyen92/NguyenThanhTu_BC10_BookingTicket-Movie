import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import Film from "../Film/Film";
import { NavLink } from "react-router-dom";
import "./MultipleRowSlick.css";

const MultipleRowsSlick = (props) => {
  // console.log(props.arrFilm);
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState(1);
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  const author = [
    {
      tenDienVien: "Yua Mikami",
      hinhAnh: "https://pics.r18.com/mono/actjpgs/mikami_yua.jpg",
      ngheNghiep: "DIỄN VIÊN",
    },
    {
      tenDienVien: "Yui Nagase",
      hinhAnh: "https://pics.r18.com/mono/actjpgs/nagase_yui2.jpg",
      ngheNghiep: "DIỄN VIÊN",
    },
    {
      tenDienVien: "Kana Momonogi",
      hinhAnh: "https://pics.r18.com/mono/actjpgs/momonogi_kana.jpg",
      ngheNghiep: "DIỄN VIÊN",
    },
    {
      tenDienVien: "Nozomi Arimura",
      hinhAnh: "https://pics.r18.com/mono/actjpgs/arimura_nozomi.jpg",
      ngheNghiep: "DIỄN VIÊN",
    },
  ];

  const renderFilms = (phim) => {
    if (phim) {
      return props.arrFilm.slice(0, 24).map((item, index) => {
        return <Film phim={item} key={index} />;
      });
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    arrows: false,
  };

  return (
    <div className="bg-dark-color aaaaa">
      <div className="container mx-auto p-16 grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="title-hd flex items-center justify-between">
            <h3 className="text-white text-2xl">DANH SÁCH PHIM</h3>
            <NavLink to="/danh-sach-phim">
              <div className="text-gray-300 text-sm flex yellow-color-hover">
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
                      "text-sm font-bold uppercase leading-normal " +
                      (openTab === 1 ? "yellow-color" : "text-gray-300")
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
                <li className="">
                  <a
                    className={
                      "text-sm font-bold uppercase leading-normal " +
                      (openTab === 2 ? "yellow-color" : "text-gray-3")
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
        <div className="celebrities ml-16 mt-10">
          <h3 className="sb-title text-white text-lg mb-8 pb-4 border-b-2 border-gray-200">
            NHÂN VẬT YÊU THÍCH
          </h3>
          {author.map((item) => {
            return (
              <div className="actor-item flex mb-8 items-center">
                <img
                  src={item.hinhAnh}
                  alt={item.tenDienVien}
                  className="w-16 h-16 mr-5 rounded"
                />
                <div className="actor-info flex flex-col">
                  <a
                    href="javascript:void(0)"
                    className="text-white mb-1 yellow-color-hover"
                  >
                    {item.tenDienVien}
                  </a>
                  <span className="text-gray-400">{item.ngheNghiep}</span>
                </div>
              </div>
            );
          })}
          <NavLink to="/nguon-anh-tu-trang-r18.com">
            <div className="text-gray-300 text-sm flex yellow-color-hover">
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
      </div>
    </div>
  );
};

export default MultipleRowsSlick;
