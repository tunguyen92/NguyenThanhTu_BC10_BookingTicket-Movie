import { SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";
import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import swal from "sweetalert";

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

export const datVeAction = (thongTinDatVe) => {
  return async (dispatch) => {
    try {
      await quanLyDatVeService.datVe(thongTinDatVe);
      swal({
        title: "Đặt vé thành công!",
        icon: "success",
      });
      // alert(result.data);
    } catch (error) {
      console.log("error", error);
    }
  };
};
