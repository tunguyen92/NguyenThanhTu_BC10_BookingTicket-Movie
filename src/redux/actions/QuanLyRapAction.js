import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/QuanLyRapType";

export const layDanhSachHeThongCumRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyRapService.layDanhSachHeThongRap();
      //   console.log(result.data);
      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data,
        });
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};
