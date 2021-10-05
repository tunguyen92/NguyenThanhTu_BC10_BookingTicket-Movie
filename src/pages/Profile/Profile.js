import { Tabs, Radio, Space } from "antd";

const { TabPane } = Tabs;
{
  /* <Tabs tabPosition="left">
        <TabPane tab="Tab 1" key="1">
          Content of Tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab 3
        </TabPane>
      </Tabs> */
}

export default function Profile() {
  return (
    <div className="h-full pt-40 pb-10 space-y-2 bg-dark-color text-coolGray-800">
      <div className="divide-y divide-coolGray-300">
        <Tabs
          tabPosition="left"
          className="pt-2 pb-4 space-y-1 text-sm"
          type="card"
        >
          <TabPane
            tab={
              <div className="flex items-center p-2 space-x-4">
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="w-12 h-12 rounded-full bg-coolGray-500"
                />
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Leroy Jenkins
                  </h2>
                  <span className="flex items-center space-x-1">
                    <a
                      href="#"
                      className="text-xs hover:underline text-coolGray-600"
                    >
                      View profile
                    </a>
                  </span>
                </div>
              </div>
            }
            key="1"
          >
            Content of Tab 111111111111
          </TabPane>
          <TabPane tab="Thông tin tài khoản" key="2">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Lịch sử đặt vé" key="3">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="4">
            Content of Tab 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
