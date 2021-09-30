import { SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);

      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};
