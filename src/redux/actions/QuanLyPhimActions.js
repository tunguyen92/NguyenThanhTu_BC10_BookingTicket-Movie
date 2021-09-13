import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.layDanhSachPhim();
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
