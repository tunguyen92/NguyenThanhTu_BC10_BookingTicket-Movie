import React from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
//Kết nối redux
import { useSelector, useDispatch } from "react-redux";
import MultipleRows from "../../components/ReactSlick/MultipleRowSlick";

export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  // console.log(props);
  //props.match.params

  return (
    <div className="container m-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows arrFilm={arrFilm} />
        </div>
      </section>

      <HomeMenu />
    </div>
  );
}
