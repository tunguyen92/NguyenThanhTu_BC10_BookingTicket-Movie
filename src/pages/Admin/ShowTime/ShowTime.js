import React, { useState } from "react";
import { Form, Select, Button, DatePicker, InputNumber } from "antd";
import { useEffect } from "react";
import { quanLyRapService } from "../../../services/QuanLyRapService";
import { quanLyDatVeService } from "../../../services/QuanLyDatVeService";
import { useFormik } from "formik";
import moment from "moment";
import swal from "sweetalert";

export default function ShowTime(props) {
  const [form] = Form.useForm();

  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      console.log("submit", values);
      try {
        const result = await quanLyDatVeService.taoLichChieu(values);
        swal({
          title: "Thêm lịch chiếu thành công!",
          icon: "success",
        });
        console.log(result.data);
      } catch (error) {
        swal({
          title: `${error.response?.data}`,
          icon: "error",
        });
        // console.log(error.response?.data);
      }
    },
  });

  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
    danhSachRap: [],
  });

  console.log(state.heThongRapChieu);

  useEffect(async () => {
    try {
      let result = await quanLyRapService.layDanhSachHeThongRap();

      setState({ ...state, heThongRapChieu: result.data });
    } catch (error) {
      console.log(error.response?.data);
    }
  }, []);

  const options = state.heThongRapChieu?.map((htr, index) => {
    return {
      label: htr.tenHeThongRap,
      value: htr.tenHeThongRap,
    };
  });

  const handleChangeHeThongRap = async (value) => {
    try {
      let result = await quanLyRapService.layThongTinCumRap(value);
      //gán giá trị cụm rạp vào state.cumRap
      setState({ ...state, cumRapChieu: result.data });
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  const handleChangeCumRap = (value) => {
    state.cumRapChieu.map((rapChieu) => {
      return setState({
        ...state,
        danhSachRap: rapChieu.danhSachRap,
      });
    });
    // formik.setFieldValue("maRap", value);
  };

  const handleChangeMaRap = (value) => {
    formik.setFieldValue("maRap", value);
    console.log(value);
  };

  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log(moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };

  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log(moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };

  const onChangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      initialValues={{
        remember: true,
      }}
      onSubmitCapture={formik.handleSubmit}
    >
      <h3 className="text-2xl">
        Tạo lịch chiếu - {props.match.params.tenPhim}
      </h3>
      <img
        src={film.hinhAnh}
        alt={film.tenPhim}
        style={{
          width: 180,
          height: 120,
          objectFit: "contain",
          margin: "20px 0",
        }}
      />
      <Form.Item
        label="Hệ thống rạp"
        name="heThongRap"
        rules={[{ required: true, message: "Chưa chọn hệ thống rạp!" }]}
      >
        <Select
          options={options}
          onChange={handleChangeHeThongRap}
          placeholder="Chọn hệ thống rạp"
        />
      </Form.Item>

      <Form.Item
        label="Cụm rạp"
        name="cumRap"
        rules={[{ required: true, message: "Chưa chọn cụm rạp!" }]}
      >
        <Select
          options={state.cumRapChieu?.map((cumRap, index) => ({
            label: cumRap.tenCumRap,
            value: cumRap.maCumRap,
          }))}
          onChange={handleChangeCumRap}
          placeholder="Chọn cụm rạp"
        />
      </Form.Item>

      <Form.Item
        label="Mã rạp"
        name="maRap"
        rules={[{ required: true, message: "Chưa chọn mã rạp!" }]}
      >
        <Select
          options={state.danhSachRap?.map((rap, index) => ({
            label: rap.maRap,
            value: rap.maRap,
          }))}
          onChange={handleChangeMaRap}
          placeholder="Chọn mã rạp"
        />
      </Form.Item>

      <Form.Item
        label="Lịch chiếu"
        name="lichChieu"
        rules={[
          {
            type: "object",
            required: true,
            message: "Chưa nhập lịch chiếu!",
          },
        ]}
      >
        <DatePicker
          format="DD/MM/YYYY hh:mm:ss"
          showTime
          onChange={onChangeDate}
          onOk={onOk}
        />
      </Form.Item>

      <Form.Item
        label="Giá vé"
        name="giaVe"
        rules={[{ required: true, message: "Chưa nhập giá vé!" }]}
      >
        <InputNumber
          step={1000}
          min={75000}
          max={150000}
          onChange={onChangeInputNumber}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 14,
        }}
      >
        <Button
          className="bg-blue-700 text-white p-2 mr-2 rounded-md bg-pink-color-hover focus:bg-blue-700"
          htmlType="submit"
        >
          Tạo lịch chiếu
        </Button>

        <Button
          onClick={() => {
            form.resetFields();
          }}
          className="bg-blue-700 text-white p-2 rounded-md bg-pink-color-hover focus:bg-blue-700"
          type="button"
        >
          Xóa form
        </Button>
      </Form.Item>
    </Form>
  );
}
