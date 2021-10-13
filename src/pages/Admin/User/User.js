import React, { Fragment, useEffect, useState } from "react";
import { Table, Input, Modal, Button, Form, Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { QuanLyNguoiDungReducer } from "./../../../redux/reducers/QuanLyNguoiDungReducer";
import {
  capNhatThongTinNguoiDungAction,
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
import { GROUPID } from "./../../../util/settings/config";

const { Option } = Select;

export default function User() {
  const { listUser, listUserTimKiem, keyword } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const dispatch = useDispatch();

  //Tạo modal update hiển thị thông tin User
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(layDanhSachNguoiDungAction());
  }, []);

  //  tạo user được chọn khi edit
  let [selectUser, setSelectUser] = useState({});
  const setUser = (user) => setSelectUser(user);

  // cập nhật user được chọn để render ra modal
  useEffect(() => {
    console.log(selectUser);
    form.setFieldsValue(selectUser);
  }, [selectUser]);

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

  const [form] = Form.useForm();

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
                setUser(listUser[i]);
                showModal();
              }}
              className="text-blue-700 text-2xl mr-5"
            />

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
  function handleChange(value) {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  }
  return (
    <Fragment>
      <Button type="primary" className="mb-5" onClick={showModal}>
        Thêm người dùng
      </Button>
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
      <Modal
        title="Cập nhật thông tin người dùng"
        visible={isModalVisible}
        onOk={() => {
          // console.log(selectUser);

          //check validation
          form
            .validateFields()
            .then((values) => {
              //Update tên nhóm vào thông tin user
              selectUser = { ...selectUser, maNhom: GROUPID };
              // Gọi API update
              dispatch(capNhatThongTinNguoiDungAction(selectUser, true));

              // tắt Modal
              handleOk();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onChange={(e) => {
            const id = e.target.id;
            const value = e.target.value;
            selectUser = { ...selectUser, [id]: value };
          }}
        >
          <Form.Item
            name="taiKhoan"
            label="Tên tài khoản"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào tên tài khoản!",
              },
              {
                min: 5,
                message: "Tên tài khoản tối thiểu 5 ký tự trở lên.",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="hoTen"
            label="Họ và tên"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào họ và tên!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "E-mail không hợp lệ!",
              },
              {
                required: true,
                message: "Vui lòng nhập vào E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="soDt"
            rules={[
              {
                required: true,
                message: "Nhập vào số điện thoại!",
              },
              {
                pattern: "^([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})$",
                message: "Số điện thoại không đúng định dạng",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập vào mật khẩu!",
              },

              { min: 8, message: "Mật khẩu tối thiểu 8 ký tự trở lên." },
              {
                pattern: ".*[A-Z].*$",
                message: "Mật khẩu chứa ít nhất 1 chữ cái in hoa",
              },
              {
                pattern: ".*[0-9].*$",
                message: "Mật khẩu chứa ít nhất 1 chữ số",
              },
              {
                pattern: ".*[!@#$%^&+=].*$",
                message: "Mật khẩu chứa ít nhất 1 ký tự đặc biệt",
              },
              {
                pattern: "^(?:[\u0000-\u007F]+|[\u0370-\u03FF]+)$",
                message: "Mật khẩu không đúng định dạng",
              },
            ]}
          >
            <Input.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item label="Loại tài khoản">
            <Select
              name="maLoaiNguoiDung"
              defaultValue="KhachHang"
              onChange={handleChange}
              className="text-black"
            >
              <Option value="KhachHang">Khách hàng</Option>
              <Option value="QuanTri">Quản Trị</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
}
