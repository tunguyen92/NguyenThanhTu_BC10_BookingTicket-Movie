import React, { useEffect } from "react";
//Kết nối redux
import { useDispatch, useSelector } from "react-redux";
import MultipleRows from "../../components/ReactSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongCumRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeMenu from "./HomeMenu/HomeMenu";

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
    <div className="container m-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows arrFilm={arrFilm} />
        </div>
      </section>

      <HomeMenu heThongRapChieu={heThongRapChieu} />
    </div>
  );
}
