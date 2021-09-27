import React, { Component, useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./../../assets/styles/circle.scss";
import { Tabs, Rate } from "antd";
import { SET_CHI_TIET_PHIM } from "../../redux/actions/types/QuanLyRapType";
import { layThongTinChiTietPhim } from "../../redux/actions/QuanLyRapAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

export default function Detail(props) {
  const filmDetail = useSelector((state) => state.QuanLyPhimReducer.filmDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhim(id));
  }, []);
  console.log({ filmDetail });
  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail?.hinhAnh})`,
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        style={{ paddingTop: "150px", minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={30} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-3">
              <img
                className="col-span-1"
                style={{ height: "100%", borderRadius: "30px" }}
                src={filmDetail?.hinhAnh}
                alt=""
              />
              <div className="col-span-2 ml-5  " style={{ marginTop: "25%" }}>
                <p className="text-sm text-white mb-5">
                  Ngày chiếu:
                  {moment(filmDetail.ngayKhoiChieu).format("DD-MM-YYYY")}
                </p>
                <p className="text-3xl leading-3 text-white">Tên phim</p>
                <p className="text-white mt-3">{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
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
        <div className="mt-20 container px-5 py-5 ml-72 w-2/3 bg-white">
          <Tabs defaultActiveKey="1" centered tabBarStyle={{ color: "red" }}>
            <TabPane tab="Lịch chiếu" key="1">
              <Tabs tabPosition={"left"}>
                {filmDetail.heThongRapChieu?.map((htr, index) => {
                  return (
                    <TabPane
                      tab={
                        <div className="flex flex-row items-center justify-center">
                          <img
                            src={htr.logo}
                            alt=""
                            className="rounded-full w-full"
                            style={{ width: 50 }}
                          />
                          <div className="text-center ml-2">
                            {htr.tenHeThongRap}
                          </div>
                        </div>
                      }
                      key={index}
                    >
                      {htr.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div key={index}>
                            <div className="flex flex-row mb-3 mt-2">
                              <img
                                src={htr.logo}
                                alt=""
                                style={{ width: 50, height: 50 }}
                              />
                              <div className="ml-2 text-2xl ">
                                <p className=" ml-2">{cumRap.tenCumRap}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-4">
                              {cumRap.lichChieuPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to={`/checkout/${lichChieu.maLichChieu}`}
                                      key={index}
                                      className="col-span-1 text-green-800 font-bold mb-3"
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm:a")}
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </TabPane>
                  );
                })}
              </Tabs>
            </TabPane>
            <TabPane tab="Đánh giá" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Mô tả" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
