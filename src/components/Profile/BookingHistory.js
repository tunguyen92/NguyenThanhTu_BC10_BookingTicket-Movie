import React, { useState, useEffect, Fragment } from "react";
import { Table, Button } from "antd";
import moment from "moment";

export default function BookingHistory(props) {
  console.log(props);
  const columns = [
    {
      title: "Mã vé",
      dataIndex: "maVe",
      //   width: 100,
      align: "center",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.tenPhim - b.tenPhim,
    },
    {
      title: "Thời lượng",
      dataIndex: "thoiLuongPhim",
      render: (thoiLuongPhim, dataCurrent) => {
        return thoiLuongPhim + " phút";
      },
      align: "center",
    },
    {
      title: "Ngày giờ đặt",
      dataIndex: "ngayDat",
      render: (ngayDat, dataCurrent) => {
        return moment(ngayDat).format("DD/MM/YYYY - hh:mm:ss");
      },
      align: "center",
    },
    {
      title: "Giá vé",
      dataIndex: "giaVe",
      render: (giaVe, dataCurrent) => {
        return giaVe + " VNĐ";
      },
      align: "center",
    },
    {
      title: "Số ghế",
      dataIndex: "giaVe",
      render: (giaVe, dataCurrent) => {
        return giaVe + " VNĐ";
      },
    },
  ];

  const data = props.thongTinDatVe;

  function onChange(pagination, filters, sorter, extra) {
    // console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="bg-gray-blue-color w-full rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <h2 className="text-2xl text-white">Chỉnh sửa hồ sơ</h2>
        <p className="text-sm text-gray-300 ">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </p>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(ve) => ve.maVe}
        onChange={onChange}
        scroll={{ y: "50vh" }}
      />
    </div>
  );
}
