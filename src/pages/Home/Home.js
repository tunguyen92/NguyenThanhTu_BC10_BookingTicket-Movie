import React, { useEffect } from "react";
//Kết nối redux
import { useDispatch, useSelector } from "react-redux";
import HomeListFilm from "../../components/ReactSlick/HomeListFilm/HomeListFilm";
import Trailers from "../../components/ReactSlick/Trailers/Trailers";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongCumRapAction } from "../../redux/actions/QuanLyRapAction";
import HomeCarousel from "./Carousel/Carousel";
import HomeApp from "./HomeApp/HomeApp";
import HomeMenu from "./HomeMenu/HomeMenu";
import HomeNews from "./HomeNews/HomeNews";

export default function Home(props) {
  const { arrFilm, arrFilmDefault } = useSelector(
    (state) => state.QuanLyPhimReducer
  );
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  // console.log(props);
  //props.match.params

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(layDanhSachHeThongCumRapAction());
  }, [dispatch]);

  return (
    <div>
      <HomeCarousel arrFilmDefault={arrFilmDefault} />

      <HomeListFilm arrFilm={arrFilm} />
      <Trailers arrFilm={arrFilm} />

      <HomeMenu heThongRapChieu={heThongRapChieu} />

      <HomeNews />

      <HomeApp />
    </div>
  );
}
