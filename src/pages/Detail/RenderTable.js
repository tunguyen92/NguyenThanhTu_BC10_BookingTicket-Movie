import { Tabs } from "antd";
import moment from "moment";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
// import "./HomeMenu.css";

const { TabPane } = Tabs;

function RenderTable(props) {
  // console.log(props);
  const getListNgayChieu = (listLichChieu) => {
    var listNgayChieu = [];
    listLichChieu.forEach((lichChieu) => {
      if (
        listNgayChieu.indexOf(
          moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")
        ) === -1
      ) {
        listNgayChieu.push(
          moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY")
        );
      }
    });
    return listNgayChieu;
  };

  const menuNgayChieu = (props) => {
    console.log(props);
    const listNgayChieu = getListNgayChieu(props);
    console.log(listNgayChieu);

    return listNgayChieu?.map((ngayChieu) => {
      return (
        <TabPane
          style={{ paddingLeft: 0 }}
          tab={`Ngày chiếu:  ${ngayChieu}`}
          key={ngayChieu}
        >
          <div className="text-center grid lg:grid-cols-3 md:grid-rows-2 sm:grid-cols-1 mr-5">
            {props
              .filter((lichChieu) => {
                return (
                  moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY") ===
                  ngayChieu
                );
              })
              .map((lichChieu) => {
                return (
                  <NavLink
                    to={`/checkout/${lichChieu.maLichChieu}`}
                    className="text-gray-300 text-xs lg:text-sm border-2 rounded-full py-2 ml-2 px-2 mb-2"
                    key={lichChieu.maLichChieu}
                  >
                    {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
                  </NavLink>
                );
              })}
          </div>
        </TabPane>
      );
    });
  };

  return (
    <div className=" bg-gray-blue-color container rounded pt-2 mx-auto w-2/3 pb-10 relative">
      <Tabs tabPosition="top" centered>
        <TabPane
          tab=""
          key="-1"
          style={{ maxHeight: "500px" }}
          className="scroll-cum-rap overflow-y-auto"
        >
          <Tabs tabPosition="left">
            {props.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <TabPane
                  tab={
                    <img
                      src={heThongRap.logo}
                      alt=""
                      className="rounded-full w-6 sm:w-8 lg:w-12 "
                    />
                  }
                  key={index}
                >
                  <Tabs tabPosition="left">
                    {heThongRap.cumRapChieu?.map((cumRap, index) => {
                      return (
                        <TabPane
                          tab={
                            <div className="md:flex items-center w-20 sm:w-32 md:w-60 lg:w-80">
                              <img
                                src={heThongRap.logo}
                                alt=""
                                className="w-6 lg:w-10 p-0"
                              />
                              <div className="ml-5 text-xs lg:text-sm text-left whitespace-pre-wrap ">
                                {cumRap.tenCumRap}
                                <p className="text-gray-300 text-xs mt-1">
                                  {cumRap.diaChi}
                                </p>
                              </div>
                            </div>
                          }
                          key={cumRap.maCumRap}
                        >
                          <Tabs tabPosition="left">
                            {menuNgayChieu(cumRap.lichChieuPhim)}
                          </Tabs>
                        </TabPane>
                      );
                    })}
                  </Tabs>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      </Tabs>
    </div>
  );
}
export default memo(RenderTable);
