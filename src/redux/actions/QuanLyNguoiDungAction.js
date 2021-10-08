// import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  GET_TIM_KIEM_NGUOI_DUNG,
  DANG_NHAP_ACTION,
  GET_LIST_NGUOI_DUNG,
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
        // history.goBack();

        window.location.href = "/";
      }

      console.log("result", result.data);
    } catch (error) {
      alert(error.response?.data);
    }
  };
};

export const dangKyAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.dangKy(formData);

      alert("Đăng ký thành công");
      window.location.href = "/login";

      console.log(result);
    } catch (errors) {
      if (errors.response.status === 500) {
        alert("Tài khoản đã tồn tại!");
      }
      console.log(errors.response?.data);
    }
  };
};

export const layThongTinNguoiDungAction = (taiKhoan) => {
  console.log(taiKhoan);
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung(
        taiKhoan
      );

      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung: result.data,
        });
      }
      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const capNhatThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.capNhatThongTinNguoiDung();

      alert("Đăng ký thành công");

      console.log(result);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const layDanhSachNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      //get list user from API
      const result = await quanLyNguoiDungService.layDanhSachNguoiDung();

      //send result to redux
      dispatch({
        type: GET_LIST_NGUOI_DUNG,
        listUser: result.data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const timKiemNguoiDungAction = (keyword) => {
  return (dispatch) => {
    dispatch({
      type: GET_TIM_KIEM_NGUOI_DUNG,
      keyword: keyword,
    });
  };
};
