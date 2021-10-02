import { Menu, Tabs } from "antd";
import { random } from "lodash-es";
import moment from "moment";
import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import "./HomeMenu.css";

const { TabPane } = Tabs;
const { SubMenu } = Menu;

// const RenderLichChieu = (props) => {
//   const { phim } = props;

//   return phim.lstLichChieuTheoPhim?.slice(0, 10).map((lichChieu, index) => {
//     return (
//       <SubMenu
//         className="ngay-chieu rounded-md pl-5"
//         style={{ background: "#06121e" }}
//         key={index}
//         title={`Ngày chiếu: ${moment(lichChieu.ngayChieuGioChieu).format(
//           "DD/MM/YYYY"
//         )} chỗ này chưa làm được`}
//       >
//         <Menu.Item className="bg-dark-color" key={index}>
//           <NavLink
//             to={`/checkout/${lichChieu.maLichChieu}`}
//             className="text-white"
//           >
//             {moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}
//           </NavLink>
//         </Menu.Item>
//       </SubMenu>
//     );
//   });
// };

// const RenderDanhSachPhim = (props) => {
//   const { cumRap } = props;

//   return cumRap.danhSachPhim?.map((phim, index) => {
//     return (
//       <SubMenu
//         key={index}
//         title={
//           <div className="film flex ">
//             <img
//               style={{
//                 width: 50,
//                 height: 60,
//                 objectFit: "cover",
//                 borderRadius: "3px",
//                 marginRight: "10px",
//               }}
//               src={phim.hinhAnh}
//               alt={phim.tenPhim}
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://picsum.photos/99";
//               }}
//             />
//             <div>
//               <p className="px-2 py-1 mr-2 bg-pink-600 rounded text-xs text-white inline-block">
//                 {phim.maPhim}
//               </p>
//               <p className="ten-phim text-white text-base inline-block">
//                 {phim.tenPhim}
//               </p>
//               <p className="text-xs">120 phút - TIX 8.1 - IMDb 0</p>
//             </div>
//           </div>
//         }
//       >
//         <Menu
//           mode="inline"
//           style={{
//             borderRight: 0,
//             backgroundColor: "#0f2133",
//           }}
//         >
//           <RenderLichChieu phim={phim} />
//         </Menu>
//       </SubMenu>
//     );
//   });
// };

function HomeMenu(props) {
  console.log(props);

  // const renderHeThongRap = () => {
  //   return props.heThongRapChieu?.map((heThongRap, index) => {
  //     return (
  //       <TabPane
  //         tab={
  //           <img
  //             src={heThongRap.logo}
  //             alt=""
  //             className="rounded-full"
  //             width="50"
  //           />
  //         }
  //         key={index}
  //         style={{ height: "500px" }}
  //         className="scroll-cum-rap overflow-y-scroll"
  //       >
  //         <Tabs tabPosition="left" className="">
  //           {heThongRap.lstCumRap?.map((cumRap, index) => {
  //             return (
  //               <TabPane
  //                 tab={
  //                   <div className="flex items-center w-80">
  //                     <img src={heThongRap.logo} alt="" width="40" />
  //                     <div className="ml-5 text-left whitespace-pre-wrap">
  //                       {cumRap.tenCumRap}
  //                       <p className="text-gray-300 text-xs">{cumRap.diaChi}</p>
  //                     </div>
  //                   </div>
  //                 }
  //                 key={index}
  //               >
  //                 <Menu
  //                   mode="inline"
  //                   style={{
  //                     height: "100%",
  //                     borderRight: 0,
  //                     backgroundColor: "#0f2133",
  //                   }}
  //                 >
  //                   <RenderDanhSachPhim cumRap={cumRap} />
  //                 </Menu>
  //               </TabPane>
  //             );
  //           })}
  //         </Tabs>
  //       </TabPane>
  //     );
  //   });
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
                        <SubMenu
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
                          <Menu.ItemGroup
                            mode="inline"
                            style={{
                              borderRight: 0,
                              backgroundColor: "#0f2133",
                            }}
                          >
                            {phim.lstLichChieuTheoPhim
                              ?.slice(0, 10)
                              .map((lichChieu) => {
                                return (
                                  <SubMenu
                                    className="ngay-chieu rounded-md"
                                    style={{ background: "#06121e" }}
                                    key={lichChieu.maLichChieu}
                                    title={`Ngày chiếu: ${moment(
                                      lichChieu.ngayChieuGioChieu
                                    ).format("DD/MM/YYYY")} `}
                                  >
                                    <Menu.Item
                                      className="bg-dark-color"
                                      key={`${lichChieu.maLichChieu}${lichChieu.ngayChieuGioChieu}`}
                                    >
                                      <NavLink
                                        to={`/checkout/${lichChieu.maLichChieu}`}
                                        className="text-white"
                                      >
                                        {moment(
                                          lichChieu.ngayChieuGioChieu
                                        ).format("hh:mm A")}
                                      </NavLink>
                                    </Menu.Item>
                                  </SubMenu>
                                );
                              })}
                          </Menu.ItemGroup>
                        </SubMenu>
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
