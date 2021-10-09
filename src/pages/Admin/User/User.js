import React, { Fragment, useEffect, useState } from "react";
import { Table, Input, Modal, Button, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { QuanLyNguoiDungReducer } from "./../../../redux/reducers/QuanLyNguoiDungReducer";
import {
  layDanhSachNguoiDungAction,
  layThongTinNguoiDungAction,
  timKiemNguoiDungAction,
  xoaNguoiDungAction,
} from "./../../../redux/actions/QuanLyNguoiDungAction";
import { NavLink } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  ContactsOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import "./User.scss";

export default function User() {
  const { listUser, listUserTimKiem, keyword } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  // console.log(listUserTimKiem);
  const dispatch = useDispatch();

  //Tạo modal update hiển thị thông tin User
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    alert("OK");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  //  tạo user được chọn khi edit
  const [selectUser, setSelectUser] = useState("");

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      width: 50,
    },
    {
      title: "Tên tài khoản",
      dataIndex: "userName",
      width: 100,
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      width: 200,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      width: 100,
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      width: 100,
    },
    {
      title: "Loại người dùng",
      dataIndex: "loaiND",
      width: 100,
    },
    {
      title: "",
      dataIndex: "action",
      width: 150,
    },
  ];
  const data = [];

  if (keyword === "") {
    for (let i = 0; i < listUser.length; i++) {
      data.push({
        key: i,
        stt: i + 1,
        userName: listUser[i].taiKhoan,
        name: listUser[i].hoTen,
        email: listUser[i].email,
        phoneNumber: listUser[i].soDt,
        password: listUser[i].matKhau,
        loaiND: listUser[i].maLoaiNguoiDung,
        action: (
          <Fragment>
            <NavLink to="" className="text-green-700 text-2xl mr-5">
              <ContactsOutlined />
            </NavLink>
            <EditOutlined
              onClick={() => {
                showModal();
                setSelectUser(listUser[i]);
              }}
              className="text-blue-700 text-2xl mr-5"
            />
            <Modal
              title="Cập nhật thông tin người dùng"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Input
                placeholder="Tên tài khoản"
                value={selectUser.taiKhoan}
                className="mb-5"
              />
              <Input
                placeholder="Họ và tên"
                value={selectUser.hoTen}
                className="mb-5"
              />
              <Input
                placeholder="Email"
                value={selectUser.email}
                className="mb-5"
              />
              <Input
                placeholder="Số điện thoại"
                value={selectUser.soDt}
                className="mb-5"
              />
              <Input.Password
                placeholder="Mật khẩu"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={selectUser.matKhau}
                className="mb-5"
              />
              <Input
                placeholder="Mã loại người dùng"
                value={selectUser.maLoaiNguoiDung}
                className="mb-5"
              />
            </Modal>
            ;
            <span
              className="text-red-700 text-2xl cursor-pointer mr-5"
              to="/"
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có muốn xóa người dùng " + listUser[i].taiKhoan
                  )
                ) {
                  // Gọi action
                  dispatch(xoaNguoiDungAction(listUser[i].taiKhoan));
                }
              }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        ),
      });
    }
  } else {
    for (let i = 0; i < listUserTimKiem.length; i++) {
      data.push({
        key: i,
        stt: i + 1,
        userName: listUserTimKiem[i].taiKhoan,
        name: listUserTimKiem[i].hoTen,
        email: listUserTimKiem[i].email,
        phoneNumber: listUserTimKiem[i].soDt,
        password: listUserTimKiem[i].matKhau,
        loaiND: listUserTimKiem[i].maLoaiNguoiDung,
        action: (
          <Fragment>
            <NavLink to="" className="text-green-700 text-2xl mr-5">
              <ContactsOutlined />
            </NavLink>
            <button
              className="text-green-700 text-2xl mr-5"
              onClick={showModal}
            >
              <EditOutlined />
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </button>
            <span
              className="text-red-700 text-2xl cursor-pointer mr-5"
              to="/"
              key={2}
              onClick={() => {
                if (
                  window.confirm(
                    "Bạn có muốn xóa người dùng " + listUserTimKiem[i].taiKhoan
                  )
                ) {
                  // Gọi action
                  dispatch(xoaNguoiDungAction(listUserTimKiem[i].taiKhoan));
                }
              }}
            >
              <DeleteOutlined />
            </span>
          </Fragment>
        ),
      });
    }
  }

  const { Search } = Input;
  const onSearch = (value) => {
    dispatch(timKiemNguoiDungAction(value));
  };

  return (
    <Fragment>
      <Search
        placeholder="Nhập tên tài khoản cần tìm"
        // onSearch={onSearch}
        onChange={(e) => onSearch(e.target.value)}
        enterButton
        className="mb-5"
      />
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ y: "50vh" }}
      />
    </Fragment>
  );
}
