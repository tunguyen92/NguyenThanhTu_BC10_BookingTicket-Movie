import { Tabs } from "antd";
import moment from "moment";
import React, { memo } from "react";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;

function HomeMenu(props) {
  // console.log(props);
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
          key={index}
        >
          <Tabs tabPosition="left">
            {heThongRap.lstCumRap?.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="flex items-center">
                      <img src={heThongRap.logo} alt="" width="50" />
                      <div className="ml-5 mb-0 text-left">
                        {cumRap.tenCumRap}
                        <p className="text-red-400 mb-0">Chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {cumRap.danhSachPhim?.slice(0, 5).map((phim, index) => {
                    return (
                      <div className="flex" key={index}>
                        <div className="flex mb-2">
                          <img
                            style={{
                              width: 100,
                              height: 150,
                              objectFit: "cover",
                            }}
                            src={phim.hinhAnh}
                            alt={phim.tenPhim}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "https://picsum.photos/99";
                            }}
                          />
                          <div className="ml-2 ">
                            <h1 className=" text-xl text-red-600">
                              {phim.tenPhim}
                            </h1>
                            <p>{cumRap.diaChi}</p>
                            <div className="grid grid-cols-6  gap-6">
                              {phim.lstLichChieuTheoPhim
                                ?.slice(0, 12)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to="/"
                                      key={index}
                                      className="text-yellow-700"
                                    >
                                      {moment(
                                        lichChieu.ngayChieuGioChieu
                                      ).format("hh:mm A")}
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };

  return (
    <>
      <Tabs tabPosition="left">{renderHeThongRap()}</Tabs>
    </>
  );
}

export default memo(HomeMenu);
