import { Tabs } from "antd";
import React, { memo } from "react";

const { TabPane } = Tabs;

function HomeMenu(props) {
  console.log(props);
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
                    <img
                      src={heThongRap.logo}
                      alt=""
                      className="rounded-full"
                      width="50"
                    />
                  }
                  key={index}
                >
                  {cumRap.tenCumRap}
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
