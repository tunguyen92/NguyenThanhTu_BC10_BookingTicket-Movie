import React, { useState } from "react";
import "./TrailerFilm.css";

export default function TrailerFilm(props) {
  const { phim } = props;

  return (
    <div className="trailer-film bg-light-blue-color-hover p-4 cursor-pointer">
      <img src={phim.hinhAnh} className="w-40 h-16 mr-5 object-cover" />
      <p className="text-white ">{phim.tenPhim}</p>
    </div>
  );
}
