import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { themPhimUploadHinhAction } from "../../../../redux/actions/QuanLyPhimActions";
import { GROUPID } from "../../../../util/settings/config";

export default function AddNew(props) {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const validate = (values) => {
    const errors = {};

    if (!values.tenPhim) {
      errors.tenPhim = "Chưa nhập tên phim.";
    }

    if (!values.trailer) {
      errors.trailer = "Trailer không được trống!";
    }

    if (!values.moTa) {
      errors.moTa = "Mô tả không được trống!";
    }

    return errors;
  };

  const formik = useFormik({
    validate,
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      danhGia: 0,
      hinhAnh: {},
      maNhom: GROUPID,
    },
    onSubmit: (values) => {
      console.log(values);
      //Tạo đối tượng formData => Đưa values từ formik vào formData
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("file", values.hinhAnh, values.hinhAnh.name);
        }
      }
      // console.log("formData", formData.get("file"));

      //Gọi api gửi các giá trị formData về backend xử lý
      dispatch(themPhimUploadHinhAction(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");

    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    //Lấy file từ e
    let file = e.target.files[0];
    // console.log(file);

    //Tạo đối tượng để đọc file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      // console.log(e.target.result);
      setImgSrc(e.target.result);
    };

    //Đem dữ liệu lưu vào formik
    formik.setFieldValue("hinhAnh", file);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        form={form}
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Thêm phim</h3>

        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} />
          {formik.errors.tenPhim ? (
            <div className="pink-color">{formik.errors.tenPhim}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
          {formik.errors.trailer ? (
            <div className="pink-color">{formik.errors.trailer}</div>
          ) : null}
        </Form.Item>

        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} />
          {formik.errors.moTa ? (
            <div className="pink-color">{formik.errors.moTa}</div>
          ) : null}
        </Form.Item>

        <Form.Item
          label="Ngày khởi chiếu"
          name="ngayKhoiChieu"
          rules={[
            {
              type: "object",
              required: true,
              message: "Chưa nhập ngày khởi chiếu!",
            },
          ]}
        >
          <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
        </Form.Item>

        <Form.Item
          label="Số sao"
          name="soSao"
          rules={[{ required: true, message: "Chưa nhập số sao!" }]}
        >
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
          />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input
            type="file"
            accept="image/png, image/gif, image/jpeg"
            onChange={handleChangeFile}
          ></input>
          <img
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              objectFit: "contain",
            }}
            src={imgSrc}
            alt="Hình ảnh"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 14,
          }}
        >
          <button
            className="bg-blue-700 text-white p-2 rounded-md"
            type="submit"
          >
            Thêm phim
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
