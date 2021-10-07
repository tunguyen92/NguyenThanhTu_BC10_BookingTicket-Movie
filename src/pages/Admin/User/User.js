import React, { Fragment } from "react";
import { Table, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function User() {
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      width: 100,
    },
    {
      title: "Tên tài khoản",
      dataIndex: "userName",
      width: 150,
    },
    {
      title: "Họ và tên",
      dataIndex: "name",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "age",
      width: 150,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phoneNumber",
      width: 150,
    },
    {
      title: "Mật khẩu",
      dataIndex: "password",
      width: 150,
    },
    {
      title: "Loại người dùng",
      dataIndex: "loaiND",
      width: 150,
    },
  ];

  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      stt: i + 1,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <Fragment>
      <Search
        placeholder="Nhập thông tin cần tìm"
        onSearch={onSearch}
        enterButton
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
