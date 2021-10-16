import {
  FileAddOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import _ from "lodash";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { NavLink } from "react-router-dom";
import { history } from "../../App";
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import swal from "sweetalert";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {
  //path, exact, Component

  const { Component, ...restProps } = props;
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    // console.log(collapsed);
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    swal({
      title: "Bạn không có quyền truy cập vào trang này!",
      icon: "warning",
    });
    return <Redirect to="/" />;
  }

  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    swal({
      title: "Bạn không có quyền truy cập vào trang này!",
      icon: "warning",
    });
    return <Redirect to="/" />;
  }

  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
          <button
            onClick={() => {
              history.push("/profile");
            }}
            className="mr-10 yellow-color-hover"
          >
            Hello {userLogin.hoTen}
          </button>
          <button
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN);
              history.push("/");
            }}
            className="bg-pink-color rounded-3xl text-sm px-5 py-2"
          >
            Đăng xuất
          </button>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location,props.history,props.match

        return (
          <Fragment>
            <Layout style={{ maxHeight: "100vh" }}>
              <Sider
                className="text-center"
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
              >
                <button
                  className="pt-5"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/logo.png"}
                    alt="logo"
                    className="w-20 h-20"
                  />
                </button>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="12" icon={<UnorderedListOutlined />}>
                      <NavLink to="/admin/user">User List</NavLink>
                    </Menu.Item>
                    {/* <Menu.Item key="13" icon={<UserAddOutlined />}>
                      <NavLink to="/admin/user/add">Add User</NavLink>
                    </Menu.Item> */}{" "}
                  </SubMenu>

                  <SubMenu
                    key="sub2"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                        />
                      </svg>
                    }
                    title="Films"
                  >
                    <Menu.Item key="10" icon={<UnorderedListOutlined />}>
                      <NavLink to="/admin/films">Film List</NavLink>
                    </Menu.Item>
                    <Menu.Item key="11" icon={<FileAddOutlined />}>
                      <NavLink to="/admin/films/add-new">Add Film</NavLink>
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background">
                  <div className="text-right">{operations}</div>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: "85vh" }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};

export default AdminTemplate;
