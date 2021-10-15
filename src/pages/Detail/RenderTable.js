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
          <div className="text-center grid grid-cols-3 ">
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
                    className="text-gray-300 text-xs lg:text-sm border-2 rounded-full py-1 px-0 ml-2 mb-2"
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

    // return (
    //   <div>
    //     <div
    //       className="ngay-chieu text-white rounded-md text-xs md:text-sm py-2 px-3 mt-2"
    //       style={{ background: "#06121e" }}
    //     >
    //       Ngày chiếu: {ngayChieu}
    //     </div>
    //     <div className="bg-dark-color grid grid-cols-2 md:grid-cols-3">
    //       {phim.lstLichChieuTheoPhim
    //         .filter((lichChieu) => {
    //           return (
    //             moment(lichChieu.ngayChieuGioChieu).format("DD/MM/YYYY") ===
    //             ngayChieu
    //           );
    //         })
    //         .map((lichChieu) => {
    //           return (
    //             <div
    //               className="bg-dark-color text-center py-2 px-3 "
    //               key={lichChieu.maLichChieu}
    //             >
    //               <NavLink
    //                 to={`/checkout/${lichChieu.maLichChieu}`}
    //                 className="text-gray-300 text-xs lg:text-sm"
    //               >
    //                 {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
    //               </NavLink>
    //             </div>
    //           );
    //         })}
    //     </div>
    //   </div>
    // );
  };

  return (
    <div className=" bg-gray-blue-color container rounded pt-2 ml-72 w-2/3">
      <Tabs tabPosition="top" centered>
        <TabPane tab="" key="-1">
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
