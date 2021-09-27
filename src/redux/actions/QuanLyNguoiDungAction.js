import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data,
        });
        alert("Đăng nhập thành công");

        //chuyển hướng về trang trước khi đăng nhập
        history.goBack();

        window.location.href = "/home";
      }

      console.log("result", result.data);
    } catch (error) {
      alert("error", error.response?.data);
    }
  };
};

export const dangKyAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.dangKy(formData);

      alert("Đăng ký thành công");

      console.log(result);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const layThongTinNguoiDungAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();

      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data.content,
        });
      }

      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};
