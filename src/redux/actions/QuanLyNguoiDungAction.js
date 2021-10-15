import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import {
  GET_TIM_KIEM_NGUOI_DUNG,
  DANG_NHAP_ACTION,
  GET_LIST_NGUOI_DUNG,
  GET_THONG_TIN_NGUOI_DUNG,
} from "./types/QuanLyNguoiDungType";
import swal from "sweetalert";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);

      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data,
        });

        swal({
          title: "Đăng nhập thành công!",
          icon: "success",
        }).then((value) => {
          history.push("/");
        });

        //chuyển hướng về trang trước khi đăng nhập
        // history.goBack();
      }

      console.log("result", result.data);
    } catch (errors) {
      swal({
        title: `${errors.response?.data}`,
        icon: "error",
      });
    }
  };
};

export const dangKyAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyNguoiDungService.dangKy(formData);

      swal({
        title: "Đăng ký thành công!",
        icon: "success",
      }).then((value) => {
        history.push("/login");
      });

      console.log(result);
    } catch (errors) {
      if (errors.response.status === 500) {
        swal({
          title: `${errors.response?.data}`,
          icon: "error",
        });
      }
      console.log(errors.response?.data);
    }
  };
};

export const layThongTinNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung(
        taiKhoan
      );

      dispatch({
        type: GET_THONG_TIN_NGUOI_DUNG,
        thongTinNguoiDung: result.data,
      });
      // console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const capNhatThongTinNguoiDungAction = (thongTinTaiKhoan, isUpdate) => {
  return async (dispatch) => {
    try {
      await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongTinTaiKhoan);

      swal({
        title: "Cập nhật thành công!",
        icon: "success",
      }).then((value) => {
        if (!isUpdate) {
          window.location.replace("/profile");
        }
      });

      dispatch(layDanhSachNguoiDungAction());
    } catch (errors) {
      swal({
        title: `${errors.response?.data}`,
        icon: "error",
      });

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

export const xoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      await quanLyNguoiDungService.xoaThongTinNguoiDung(taiKhoan);
      swal({
        title: "Xóa tài khoản thành công!",
        icon: "success",
      });
      dispatch(layDanhSachNguoiDungAction());
    } catch (errors) {
      swal({
        title: `${errors.response?.data}`,
        icon: "error",
      });
    }
  };
};

export const themNguoiDungAction = (thongTinNguoiDung) => {
  return async (dispatch) => {
    try {
      await quanLyNguoiDungService.themNguoiDung(thongTinNguoiDung);
      swal({
        title: "Thêm người dùng thành công!",
        icon: "success",
      });
      dispatch(layDanhSachNguoiDungAction());
    } catch (error) {
      swal({
        title: `${error.response?.data}`,
        icon: "error",
      });
    }
  };
};
