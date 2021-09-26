import React, { useEffect } from "react";
//Kết nối redux
import { useDispatch, useSelector } from "react-redux";
import MultipleRows from "../../components/ReactSlick/MultipleRowSlick";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongCumRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "./Carousel/Carousel";
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
    <div>
      <HomeCarousel />

      <MultipleRows arrFilm={arrFilm} />

      <HomeMenu heThongRapChieu={heThongRapChieu} />
    </div>
  );
}
