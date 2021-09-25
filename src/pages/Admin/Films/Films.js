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
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + "..."
              : film.moTa}
          </Fragment>
        );
      },
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "moTa",
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
                if (window.confirm("Bạn có muốn xóa phim " + film.tenPhim)) {
                  // Gọi action
                  dispatch(xoaPhimAction(film.maPhim));
                }
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
    //Gọi api layDanSachPhim
    dispatch(layDanhSachPhimAction(value));
  };

  return (
    <div className="container">
      <h3 className="text-4xl">Quản lý phim</h3>
      <Button
        className="mb-5"
        onClick={() => {
          history.push("/admin/films/add-new");
        }}
      >
        Thêm phim
      </Button>
      <Search
        allowClear
        className="mb-5"
        placeholder="input search text"
        onSearch={onSearch}
        enterButton
      />

      <Table
        columns={columns}
        dataSource={data}
        rowKey={(phim) => phim.maPhim}
        onChange={onChange}
      />
    </div>
  );
}
