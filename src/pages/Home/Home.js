import React, { useEffect } from "react";
//Kết nối redux
import { useDispatch, useSelector } from "react-redux";
import Trailers from "../../components/ReactSlick/Trailers/Trailers";
import { layDanhSachPhimAction } from "../../redux/actions/QuanLyPhimActions";
import { layDanhSachHeThongCumRapAction } from "../../redux/actions/QuanLyRapAction";
import { layChiTietPhongVeAction } from "../../redux/actions/QuanLyDatVeAction";
import HomeListFilm from "../../components/ReactSlick/HomeListFilm/HomeListFilm";
import HomeCarousel from "./Carousel/Carousel";
import HomeMenu from "./HomeMenu/HomeMenu";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const { chiTietPhongVe } = useSelector((state) => state.QuanLyDatVeReducer);

  // console.log(props);
  //props.match.params

  const dispatch = useDispatch();

  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action);

    dispatch(layDanhSachHeThongCumRapAction());

    dispatch(layChiTietPhongVeAction());
  }, []);

  return (
    <div>
      <HomeCarousel />

      <HomeListFilm arrFilm={arrFilm} />
      <Trailers arrFilm={arrFilm} />

      <HomeMenu
        heThongRapChieu={heThongRapChieu}
        chiTietPhongVe={chiTietPhongVe}
      />
    </div>
  );
}
