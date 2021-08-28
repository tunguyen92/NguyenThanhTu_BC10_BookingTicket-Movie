import { Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

export default function HomeMenu() {
  return (
    <>
      <Tabs tabPosition="left">
        <TabPane
          tab={
            <img
              src="https://picsum.photos/123"
              alt=""
              className="rounded-full"
              width="50"
            />
          }
          key="1"
        >
          Content of Tab 1
          <img src="https://picsum.photos/123" alt="" width="100" />
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/143"
              alt=""
              className="rounded-full"
              width="50"
            />
          }
          key="2"
        >
          Content of Tab 2
          <img src="https://picsum.photos/143" alt="" width="100" />
        </TabPane>
        <TabPane
          tab={
            <img
              src="https://picsum.photos/163"
              alt=""
              className="rounded-full"
              width="50"
            />
          }
          key="3"
        >
          Content of Tab 3
          <img src="https://picsum.photos/163" alt="" width="100" />
        </TabPane>
      </Tabs>
    </>
  );
}
