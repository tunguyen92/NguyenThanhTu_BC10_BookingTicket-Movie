import {
  DAT_VE,
  SET_CHI_TIET_PHONG_VE,
} from "../actions/types/QuanLyDatVeType";
import { ThongTinLichChieu } from "../../_core//models/ThongTinPhongVe";

const stateDefault = {
  chiTietPhongVe: new ThongTinLichChieu(),
  danhSachDangDat: [],
};

export const QuanLyDatVeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHONG_VE: {
      state.chiTietPhongVe = action.chiTietPhongVe;

      return { ...state };
    }

    case DAT_VE: {
      let danhSachGheCapNhat = [...state.danhSachDangDat];
      let index = danhSachGheCapNhat.findIndex((ghe) => {
        return ghe.maGhe === action.gheDuocChon.maGhe;
      });

      if (index === -1) {
        danhSachGheCapNhat.push(action.gheDuocChon);
      } else {
        danhSachGheCapNhat.splice(index, 1);
      }

      state.danhSachDangDat = danhSachGheCapNhat;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
