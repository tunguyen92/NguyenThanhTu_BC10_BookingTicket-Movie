import { Button, Input, Table } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachPhimAction,
  xoaPhimAction,
} from "../../../redux/actions/QuanLyPhimActions";
import { NavLink } from "react-router-dom";
import { history } from "../../../App";
import swal from "sweetalert";
import "./Film.css";

const { Search } = Input;

export default function Films() {
  const { arrFilmDefault } = useSelector((state) => state.QuanLyPhimReducer);

  const dispatch = useDispatch();

  // console.log(arrFilmDefault);

  useEffect(() => {
    dispatch(layDanhSachPhimAction());
  }, []);

  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.maPhim - b.maPhim,
      width: 100,
      align: "center",
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://picsum.photos/99`;
              }}
            />
          </Fragment>
        );
      },
      width: 100,
      align: "center",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => a.tenPhim.localeCompare(b.tenPhim),
      width: 250,
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 60
              ? film.moTa.substr(0, 60) + "..."
              : film.moTa}
          </Fragment>
        );
      },
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "moTa",
      width: 150,
      align: "center",
      render: (text, film) => {
        return (
          <Fragment>
            <NavLink
              className="text-green-700 text-2xl mr-5"
              to={`/admin/films/edit/${film.maPhim}`}
              key={1}
            >
              <EditOutlined />
            </NavLink>
            <span
              className="text-red-700 text-2xl cursor-pointer mr-5"
              to="/"
              key={2}
              onClick={() => {
                swal({
                  title: "Bạn có muốn xóa phim " + film.tenPhim + " không?",
                  text: "Xóa rồi là mất luôn nha!",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                }).then((willDelete) => {
                  if (willDelete) {
                    return dispatch(xoaPhimAction(film.maPhim));
                  } else {
                    swal("Ok, phim vẫn còn đó!");
                  }
                });
              }}
            >
              <DeleteOutlined />
            </span>
            <NavLink
              className="text-blue-700 text-2xl "
              to={`/admin/films/showtime/${film.maPhim}/${film.tenPhim}`}
              key={3}
              onClick={() => {
                localStorage.setItem("filmParams", JSON.stringify(film));
              }}
            >
              <CalendarOutlined />
            </NavLink>
          </Fragment>
        );
      },
    },
  ];

  const data = arrFilmDefault;

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  const onSearch = (value) => {
    //Gọi api layDanhSachPhim
    dispatch(layDanhSachPhimAction(value));
  };

  return (
    <div className="admin-film container">
      <h3 className="text-2xl">Quản lý phim</h3>

      <Search
        allowClear
        className="my-3"
        placeholder="Nhập tên phim cần tìm"
        onSearch={onSearch}
        enterButton
      />

      <Table
        columns={columns}
        dataSource={data}
        rowKey={(phim) => phim.maPhim}
        onChange={onChange}
        scroll={{ y: "45vh" }}
      />
    </div>
  );
}
