import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/actions/types/QuanLyPhimType";
import Film from "../../components/Film/HomeFilm/Film";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";

export default function ListFilm(props) {
  const dispatch = useDispatch();
  const [openTab, setOpenTab] = useState(1);
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);

  const { dangChieu, sapChieu } = useSelector(
    (state) => state.QuanLyPhimReducer
  );

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);
  }, []);

  const renderFilms = (phim) => {
    if (phim) {
      return arrFilm.map((item, index) => {
        return <Film phim={item} key={index} />;
      });
    }
  };

  return (
    <div className="bg-dark-color">
      <div className="container mx-auto pt-28 pb-8 px-5 ">
        <div className="title-hd flex items-center justify-between">
          <h3 className="text-white text-sm sm:text-lg md:text-2xl">
            DANH SÁCH PHIM
          </h3>
        </div>
        <div className="flex flex-wrap">
          <div className="list-movie w-full">
            <ul className="flex py-5" role="tablist">
              <li className="mr-10">
                <a
                  className={
                    " text-xs md:text-sm font-bold uppercase leading-normal " +
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
                    "text-xs md:text-sm font-bold uppercase leading-normal " +
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
                <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 ">
                  {renderFilms(dangChieu)}
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 ">
                  {renderFilms(sapChieu)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
