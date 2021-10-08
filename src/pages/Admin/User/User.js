import React, { Fragment, useEffect } from "react";
import { Table, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { QuanLyNguoiDungReducer } from "./../../../redux/reducers/QuanLyNguoiDungReducer";
import {
  layDanhSachNguoiDungAction,
  layThongTinNguoiDungAction,
  timKiemNguoiDungAction,
} from "./../../../redux/actions/QuanLyNguoiDungAction";
import { NavLink } from "react-router-dom";
import {
  EditOutlined,
  DeleteOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
export default function User() {
  const { listUser, listUserTimKiem, keyword } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  // console.log(listUserTimKiem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

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
            <NavLink to="" className="text-green-700 text-2xl mr-5">
              <EditOutlined />
            </NavLink>
            <span
              className="text-red-700 text-2xl cursor-pointer mr-5"
              to="/"
              key={2}
              // onClick={() => {
              //   if (window.confirm("Bạn có muốn xóa phim " + film.tenPhim)) {
              //     // Gọi action
              //     dispatch(xoaPhimAction(film.maPhim));
              //   }
              // }}
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
            <NavLink to="" className="text-green-700 text-2xl mr-5">
              <EditOutlined />
            </NavLink>
            <span
              className="text-red-700 text-2xl cursor-pointer mr-5"
              to="/"
              key={2}
              // onClick={() => {
              //   if (window.confirm("Bạn có muốn xóa phim " + film.tenPhim)) {
              //     // Gọi action
              //     dispatch(xoaPhimAction(film.maPhim));
              //   }
              // }}
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
