import { Button, Menu, Tabs } from "antd";
import moment from "moment";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
// import "./HomeMenu.css";

const { TabPane } = Tabs;
const { SubMenu } = Menu;

function RenderTable(props) {
  // console.log(props);
  return (
    <div className=" bg-gray-blue-color container rounded pt-2 ml-72 w-2/3">
      <Tabs tabPosition="top" centered>
        <TabPane tab="" key="-1">
          <Tabs tabPosition="left">
            {props.heThongRapChieu?.map((heThongRap, index) => {
              return (
                <TabPane
                  style={{ width: "100%" }}
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
                          style={{ width: "80%" }}
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
                            {cumRap.lichChieuPhim?.map((lichChieu) => {
                              return (
                                <TabPane
                                  style={{ width: "40%" }}
                                  tab={moment(
                                    lichChieu.ngayChieuGioChieu
                                  ).format("DD/MM/YYYY")}
                                  key={moment(
                                    lichChieu.ngayChieuGioChieu
                                  ).format("DD/MM/YYYY")}
                                >
                                  <NavLink
                                    to={`/checkout/${lichChieu.maLichChieu}`}
                                    className="text-gray-300 text-xs lg:text-sm"
                                  >
                                    {moment(lichChieu.ngayChieuGioChieu).format(
                                      "hh:mm A"
                                    )}
                                  </NavLink>
                                </TabPane>
                              );
                            })}
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
