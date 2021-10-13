import React, { useState, useEffect, Fragment } from "react";
import { Table, Button, Modal } from "antd";
import moment from "moment";
import "./BookingHistory.css";

export default function BookingHistory(props) {
  console.log(props);
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      //   width: 100,
      align: "center",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      align: "center",
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
      dataIndex: "danhSachGhe",

      render: (danhSachGhe, dataCurrent) => {
        console.log(danhSachGhe);
        const soGhe = [
          {
            title: "Tên hệ thống rạp",
            dataIndex: "tenHeThongRap",
            //   width: 100,
            align: "center",
          },
          {
            title: "Tên rạp",
            dataIndex: "tenCumRap",
            align: "center",
          },
          {
            title: "Tên ghế",
            dataIndex: "tenGhe",
            align: "center",
          },
        ];
        return (
          <>
            <button className="p-1 bg-pink-600 rounded" onClick={showModal}>
              Chi tiết
            </button>
            <Modal
              title="Thông tin ghế đã đặt"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Table
                columns={soGhe}
                dataSource={danhSachGhe}
                rowKey={(ghe) => ghe.maGhe}
                onChange={onChange}
                pagination={{ pageSize: 3 }}
              />
            </Modal>
          </>
        );
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    // console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="booking-history bg-gray-blue-color w-full rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <h2 className="text-2xl text-white">Lịch sử đặt vé</h2>
        <p className="text-sm text-gray-300 ">
          Bấm vào chi tiết để xem số ghế!
        </p>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey={(ve) => ve.maVe}
        onChange={onChange}
        // scroll={{ y: "50vh" }}
        pagination={{ pageSize: 3 }}
      />
    </div>
  );
}
