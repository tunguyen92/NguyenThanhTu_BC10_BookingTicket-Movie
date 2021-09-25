import React, { useState, useEffect } from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
//Kết nối redux
import { useSelector, useDispatch } from "react-redux";
import MultipleRows from "../../components/ReactSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongCumRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  // console.log(props);
  //props.match.params

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(layDanhSachHeThongCumRapAction());
  }, []);

  return (
    <div>
      <HomeCarousel />
      <div className="container m-auto">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <MultipleRows arrFilm={arrFilm} />
          </div>
        </section>

        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
