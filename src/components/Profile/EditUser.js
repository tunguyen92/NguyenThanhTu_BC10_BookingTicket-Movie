import { Button, Form, Input, Select } from "antd";
import { useFormik } from "formik";
import React from "react";
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
  const { thongTinNguoiDung, userLogin } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  // console.log(thongTinNguoiDung);
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};

    if (!values.matKhau) {
      errors.matKhau = "Chưa nhập mật khẩu.";
    } else if (values.matKhau.length < 6) {
      errors.matKhau = "Mật khẩu quá ngắn - ít nhất phải 6 ký tự.";
    } else if (!/(?=.*[0-9])/i.test(values.matKhau)) {
      errors.matKhau = "Mật khẩu phải chứa nhất một số.!";
    }

    if (!values.hoTen) {
      errors.hoTen = "Họ tên không được trống!";
    }

    if (!values.email) {
      errors.email = "Email không được trống!";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email chưa đúng định dạng!";
    }

    if (!values.soDT) {
      errors.soDT = "Điền số điện thoại vào!";
    } else if (values.soDT.length !== 10) {
      errors.soDT = "Đúng 10 số mới chịu nha!";
    }

    return errors;
  };

  const formik = useFormik({
    enableReinitialize: true,
    validate,
    initialValues: {
      taiKhoan: thongTinNguoiDung.taiKhoan,
      matKhau: thongTinNguoiDung.matKhau,
      email: thongTinNguoiDung.email,
      soDT: thongTinNguoiDung.soDT,
      maNhom: thongTinNguoiDung.maNhom,
      maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
      hoTen: thongTinNguoiDung.hoTen,
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
            taiKhoan: thongTinNguoiDung.taiKhoan,
            matKhau: thongTinNguoiDung.matKhau,
            email: thongTinNguoiDung.email,
            soDT: thongTinNguoiDung.soDT,
            maNhom: thongTinNguoiDung.maNhom,
            maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
            hoTen: thongTinNguoiDung.hoTen,
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
            // rules={[
            //   {
            //     required: true,
            //     message: "Nhập vào mật khẩu!",
            //   },
            // ]}
            // hasFeedback
          >
            <Input.Password
              name="matKhau"
              onChange={formik.handleChange}
              value={formik.values.matKhau}
              allowClear
            />
            {formik.errors.matKhau ? (
              <div className="pink-color">{formik.errors.matKhau}</div>
            ) : null}
          </Form.Item>

          {/* <Form.Item
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
            label="Họ tên"
            tooltip="Muốn mọi người gọi bằng gì thì điền vô :))"
            // rules={[
            //   {
            //     required: true,
            //     message: "Nhập vào họ tên!",
            //     whitespace: true,
            //   },
            // ]}
            className="fullname"
          >
            <Input
              name="hoTen"
              onChange={formik.handleChange}
              value={formik.values.hoTen}
              allowClear
            />
            {formik.errors.hoTen ? (
              <div className="pink-color">{formik.errors.hoTen}</div>
            ) : null}
          </Form.Item>

          <Form.Item
            label="E-mail"
            // rules={[
            //   {
            //     type: "email",
            //     message: "E-mail không hợp lệ!",
            //   },
            //   {
            //     required: true,
            //     message: "Nhập vào E-mail!",
            //   },
            // ]}
          >
            <Input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              allowClear
            />
            {formik.errors.email ? (
              <div className="pink-color">{formik.errors.email}</div>
            ) : null}
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            // rules={[
            //   {
            //     required: true,
            //     message: "Nhập vào số điện thoại!",
            //   },
            // ]}
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
            {formik.errors.soDT ? (
              <div className="pink-color">{formik.errors.soDT}</div>
            ) : null}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button
              className="bg-light-blue-color  border-none bg-pink-color-hover  bg-pink-color-focus rounded"
              htmlType="submit"
            >
              Cập nhật
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
