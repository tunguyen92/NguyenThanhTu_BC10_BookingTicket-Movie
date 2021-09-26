import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Film.css";

export default function Film(props) {
  const { phim } = props;

  // console.log(phim.ngayKhoiChieu)

  console.log(phim);

  return (
    <div className="movie-item relative mr-7 mt-5 rounded-md">
      <div className="mv-img relative">
        <img
          src={phim.hinhAnh}
          alt={phim.tenPhim}
          className="relative w-full h-60 object-cover"
        />
      </div>
      <div className="hvr-inner m-auto absolute top-0 left-0 bottom-0 right-0 bg-pink-color py-2 px-3 w-28 h-10 text-center rounded-3xl cursor-pointer opacity-0 ">
        <NavLink
          to={`/detail/${phim.maPhim}`}
          className="text-white flex items-center justify-end hover:text-white"
        >
          <p className="text-white text-xs">XEM THÊM</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </NavLink>
      </div>
      <div className="title-in absolute left-0 bottom-0 mb-5 ml-5 flex flex-col items-start">
        <NavLink
          to={`/detail/${phim.maPhim}`}
          className="text-white text-base yellow-color-hover"
          rel="tootip"
          title={phim.tenPhim}
        >
          {phim.tenPhim.length > 14
            ? phim.tenPhim.slice(0, 14) + "..."
            : phim.tenPhim}
        </NavLink>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-400 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-white text-sm">
            {phim.danhGia}
            <span className="text-xs">/10</span>
          </p>
        </div>
      </div>
    </div>
  );
}
