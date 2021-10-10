import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { capNhatThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function EditUser(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: props.thongTinNguoiDung.taiKhoan,
      matKhau: props.thongTinNguoiDung.matKhau,
      email: props.thongTinNguoiDung.email,
      soDT: props.thongTinNguoiDung.soDT,
      maNhom: props.thongTinNguoiDung.maNhom,
      maLoaiNguoiDung: props.userLogin.maLoaiNguoiDung,
      hoTen: props.thongTinNguoiDung.hoTen,
    },

    onSubmit: (values) => {
      console.log("values", values);
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      //Cập nhật
      dispatch(capNhatThongTinNguoiDungAction(values));
    },
  });

  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="bg-gray-blue-color w-full rounded-lg shadow-xl">
      <div className="p-4 border-b">
        <h2 className="text-2xl text-white">Chỉnh sửa hồ sơ</h2>
        <p className="text-sm text-gray-300 ">
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </p>

        <Form
          {...formItemLayout}
          form={form}
          onSubmitCapture={formik.handleSubmit}
          initialValues={{
            prefix: "84",
          }}
          className=" mt-5 pt-10 "
          style={{
            paddingRight: "10%",
            borderTop: "solid 1px white",
          }}
        >
          <Form.Item label="Tài khoản" className="taiKhoan">
            <Input
              name="taiKhoan"
              value={formik.values.taiKhoan}
              allowClear
              disabled
            />
          </Form.Item>

          <Form.Item
            label="Mật Khẩu"
            rules={[
              {
                required: true,
                message: "Nhập vào mật khẩu!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              name="matKhau"
              onChange={formik.handleChange}
              value={formik.values.matKhau}
              allowClear
            />
          </Form.Item>

          <Form.Item
            label="Họ tên"
            tooltip="Muốn mọi người gọi bằng gì thì điền vô :))"
            rules={[
              {
                required: true,
                message: "Nhập vào họ tên!",
                whitespace: true,
              },
            ]}
            className="fullname"
          >
            <Input
              name="hoTen"
              onChange={formik.handleChange}
              value={formik.values.hoTen}
              allowClear
            />
          </Form.Item>

          <Form.Item
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "E-mail không hợp lệ!",
              },
              {
                required: true,
                message: "Nhập vào E-mail!",
              },
            ]}
          >
            <Input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              allowClear
            />
          </Form.Item>

          {/* 
          <Form.Item
            name="XACNHANMATKHAU"
            label="Xác nhận mật khẩu"
            dependencies={["matKhau"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Xác nhận mật khẩu đi bạn!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("matKhau") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error("Mật khẩu không khớp bạn eii!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              name="xacNhanMatKhau"
              onChange={formik.handleChange}
              value={formik.values.matKhau}
            />
          </Form.Item> */}

          <Form.Item
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Nhập vào số điện thoại!",
              },
            ]}
            className="phone"
          >
            <Input
              name="soDT"
              onChange={formik.handleChange}
              value={formik.values.soDT}
              allowClear
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
