import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  DANG_NHAP_ACTION,
  SET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import { history } from "../../App";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data,
        });
        //Chuyển hướng đăng nhập về trang trước đó
        history.goBack();
      }

      console.log("result", result.data);
    } catch (error) {
      console.log("error", error.response.data);
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
