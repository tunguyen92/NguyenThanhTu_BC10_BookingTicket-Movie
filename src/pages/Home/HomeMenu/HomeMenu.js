import { Menu, Tabs } from "antd";
import { random } from "lodash-es";
import moment from "moment";
import React, { Fragment, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HomeMenu.css";

const { TabPane } = Tabs;
const { SubMenu } = Menu;

function HomeMenu(props) {
  console.log(props);

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

  const renderHeThongRap = () => {
    return props.heThongRapChieu?.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <img
              src={heThongRap.logo}
              alt=""
              className="rounded-full"
              width="50"
            />
          }
          key={heThongRap.maHeThongRap}
          style={{ height: "500px" }}
          className="scroll-cum-rap overflow-y-scroll"
        >
          <Tabs tabPosition="left" className="">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="flex items-center w-80">
                      <img src={heThongRap.logo} alt="" width="40" />
                      <div className="ml-5 text-left whitespace-pre-wrap">
                        {cumRap.tenCumRap}
                        <p className="text-gray-300 text-xs">{cumRap.diaChi}</p>
                      </div>
                    </div>
                  }
                  key={cumRap.maCumRap}
                >
                  <Menu
                    mode="inline"
                    style={{
                      height: "100%",
                      borderRight: 0,
                      backgroundColor: "#0f2133",
                    }}
                  >
                    {cumRap.danhSachPhim?.map((phim, index) => {
                      return (
                        <Menu.ItemGroup
                          key={phim.maPhim}
                          title={
                            <div className="film flex ">
                              <img
                                style={{
                                  width: 50,
                                  height: 60,
                                  objectFit: "cover",
                                  borderRadius: "3px",
                                  marginRight: "10px",
                                }}
                                src={phim.hinhAnh}
                                alt={phim.tenPhim}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = "https://picsum.photos/99";
                                }}
                              />
                              <div>
                                <p className="px-2 py-1 mr-2 bg-pink-600 rounded text-xs text-white inline-block">
                                  {phim.maPhim}
                                </p>
                                <p className="ten-phim text-white text-base inline-block">
                                  {phim.tenPhim}
                                </p>
                                <p className="text-xs">
                                  120 phút - TIX 8.1 - IMDb 0
                                </p>
                              </div>
                            </div>
                          }
                        >
                          {getListNgayChieu(phim.lstLichChieuTheoPhim)
                            ?.slice(0, 1)
                            .map((ngayChieu, index) => {
                              return (
                                <div className="grid grid-cols-3">
                                  {phim.lstLichChieuTheoPhim
                                    .filter((lichChieu) => {
                                      return (
                                        moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("DD/MM/YYYY") === ngayChieu
                                      );
                                    })
                                    .map((lichChieu) => {
                                      return (
                                        <Menu.Item
                                          className="bg-dark-color text-center"
                                          key={lichChieu.maLichChieu}
                                        >
                                          <NavLink
                                            to={`/checkout/${lichChieu.maLichChieu}`}
                                            className="text-white"
                                          >
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("DD/MM ")}
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </NavLink>
                                        </Menu.Item>
                                      );
                                    })}
                                </div>
                              );
                            })}
                        </Menu.ItemGroup>

                        // <SubMenu
                        //   // key={phim.maPhim}
                        //   title={
                        //     <div className="film flex ">
                        //       <img
                        //         style={{
                        //           width: 50,
                        //           height: 60,
                        //           objectFit: "cover",
                        //           borderRadius: "3px",
                        //           marginRight: "10px",
                        //         }}
                        //         src={phim.hinhAnh}
                        //         alt={phim.tenPhim}
                        //         onError={(e) => {
                        //           e.target.onerror = null;
                        //           e.target.src = "https://picsum.photos/99";
                        //         }}
                        //       />
                        //       <div>
                        //         <p className="px-2 py-1 mr-2 bg-pink-600 rounded text-xs text-white inline-block">
                        //           {phim.maPhim}
                        //         </p>
                        //         <p className="ten-phim text-white text-base inline-block">
                        //           {phim.tenPhim}
                        //         </p>
                        //         <p className="text-xs">
                        //           120 phút - TIX 8.1 - IMDb 0
                        //         </p>
                        //       </div>
                        //     </div>
                        //   }
                        // >
                        //   {/* {getListNgayChieu(phim.lstLichChieuTheoPhim)?.map(
                        //     (ngayChieu, index) => {
                        //       return (
                        //
                        //           <div className="grid grid-cols-3">
                        //             {phim.lstLichChieuTheoPhim
                        //               .filter((lichChieu) => {
                        //                 return (
                        //                   moment(
                        //                     lichChieu.ngayChieuGioChieu
                        //                   ).format("DD/MM/YYYY") === ngayChieu
                        //                 );
                        //               })
                        //               .map((lichChieu) => {
                        //                 return (
                        //                   <Menu.Item
                        //                     className="bg-dark-color text-center"
                        //                     key={lichChieu.maLichChieu}
                        //                   >
                        //                     <NavLink
                        //                       to={`/checkout/${lichChieu.maLichChieu}`}
                        //                       className="text-white"
                        //                     >
                        //                       {moment(
                        //                         lichChieu.ngayChieuGioChieu
                        //                       ).format("hh:mm A")}
                        //                     </NavLink>
                        //                   </Menu.Item>
                        //                 );
                        //               })}
                        //           </div>
                        //
                        //       );
                        //     }
                        //   )} */}
                        //   {/* </SubMenu> */}
                        // </SubMenu>
                      );
                    })}
                  </Menu>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <div className="he-thong-rap bg-dark-blue-color py-8 px-5 lg:p-16">
      <h3 className="text-white text-sm sm:text-lg md:text-2xl mb-10">
        CỤM RẠP
      </h3>
      <div
        style={{ width: "1000px" }}
        className=" bg-gray-blue-color container mx-auto rounded pt-2"
      >
        <Tabs tabPosition="left">{renderHeThongRap()}</Tabs>
      </div>
    </div>
  );
}

export default memo(HomeMenu);
