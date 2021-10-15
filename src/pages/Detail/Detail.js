import React, { useEffect } from "react";
import "./../../assets/styles/circle.scss";
import { Rate } from "antd";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import moment from "moment";
import RenderTable from "./RenderTable";
import "./Detail.css";

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  const dispatch = useDispatch();
  // const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhim(id));
  }, []);
  console.log({ filmDetail });

  return (
    <div
      style={{
        backgroundColor: "#0f2133",
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-12" style={{ paddingTop: "150px" }}>
        <div className="col-span-6 col-start-3">
          <div className="grid grid-cols-3">
            <img
              className="col-span-1"
              style={{ height: "400px", borderRadius: "30px" }}
              src={filmDetail?.hinhAnh}
              alt=""
            />
            <div className="col-span-2 ml-5  " style={{ marginTop: "25%" }}>
              <p className="text-sm text-white mb-5">
                Ngày khởi chiếu:{" "}
                {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
              </p>
              <p className="text-3xl leading-3 text-white">
                {filmDetail.tenPhim}
              </p>
              <p className="text-white mt-3">{filmDetail.moTa}</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 mt-20">
          <div className="flex flex-col" style={{ alignItems: "center" }}>
            <div className={`c100 p${filmDetail.danhGia * 10} big`}>
              <span className=" text-center">{filmDetail.danhGia}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div>
              <Rate
                style={{ color: "#fa8c16" }}
                disabled
                value={filmDetail.danhGia / 2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <RenderTable heThongRapChieu={filmDetail.heThongRapChieu} />
      </div>
    </div>
  );
}
