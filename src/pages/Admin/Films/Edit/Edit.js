import { DatePicker, Form, Input, InputNumber } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatPhimUploadAction,
  layThongTinPhimAction,
} from "../../../../redux/actions/QuanLyPhimActions";
import { GROUPID } from "../../../../util/settings/config";

const Edit = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const { thongTinPhim } = useSelector((state) => state.QuanLyPhimReducer);
  console.log("thongTinPhim", thongTinPhim);
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    let { id } = props.match.params;

    dispatch(layThongTinPhimAction(id));
  }, [dispatch, props.match.params]);

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
    enableReinitialize: true,
    validate,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      danhGia: thongTinPhim.danhGia,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      maNhom: GROUPID,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      hinhAnh: null,
    },

    onSubmit: (values) => {
      console.log("values", values);
      values.maNhom = GROUPID;
      //Tạo đối tượng formdata => Đưa giá trị values từ formik vào formdata
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      //Cập nhật phim upload hình
      dispatch(capNhatPhimUploadAction(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    if (value !== null) {
      let ngayKhoiChieu = moment(value);
      formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    }
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (e) => {
    //Lấy file ra từ e
    let file = e.target.files[0];
    console.log(file);

    //Đem dữ liệu file lưu vào formik
    await formik.setFieldValue("hinhAnh", file);
    //Tạo đối tượng để đọc file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      // console.log(e.target.result);
      setImgSrc(e.target.result); //Hình base 64
    };
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
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
        <h3>Cập nhật phim </h3>

        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
          {formik.errors.tenPhim ? (
            <div className="pink-color">{formik.errors.tenPhim}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
          {formik.errors.trailer ? (
            <div className="pink-color">{formik.errors.trailer}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
          {formik.errors.moTa ? (
            <div className="pink-color">{formik.errors.moTa}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            onChange={handleChangeDatePicker}
            format="DD/MM/YYYY"
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>

        <Form.Item label="Số sao">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            value={formik.values.danhGia}
            min={1}
            max={10}
          />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg,image/gif,image/png"
          />
          <br />
          <img
            style={{ width: 100, height: 100, objectFit: "contain" }}
            src={imgSrc === "" ? thongTinPhim.hinhAnh : imgSrc}
            alt="hinhAnh"
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 14,
          }}
        >
          <button
            type="submit"
            className="bg-blue-700 text-white p-2 rounded-md"
          >
            Cập nhật
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Edit;
