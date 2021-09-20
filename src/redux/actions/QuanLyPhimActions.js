import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_FILM } from "./types/QuanLyPhimType";
import { history } from "../../App";

export const layDanhSachPhimAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim(tenPhim);
      // console.log(result);

      //Sau khi lấy dữ liệu từ api về => redux (reducer)
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};

export const themPhimUploadHinhAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.themPhimUploadHinh(formData);
      alert("Thêm thành công");

      // console.log(result);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const capNhatPhimUploadAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.capNhatPhimUpload(formData);
      alert("Cập nhật phim thành công!");
      // console.log("Cập nhật", result.data);

      dispatch(layDanhSachPhimAction());

      history.push("/admin/films");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const layThongTinPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.layThongTinPhim(maPhim);

      // console.log(result.data);
      dispatch({
        type: SET_THONG_TIN_FILM,
        thongTinPhim: result.data,
      });
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const xoaPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await quanLyPhimService.xoaPhim(maPhim);
      alert("Xóa phim thành công");
      console.log("Xóa phim", result.data);
      //Load lại danh sách phim mới
      dispatch(layDanhSachPhimAction());
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
