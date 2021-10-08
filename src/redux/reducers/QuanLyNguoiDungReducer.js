import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import {
  GET_TIM_KIEM_NGUOI_DUNG,
  DANG_NHAP_ACTION,
  GET_LIST_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
} from "../actions/types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
  listUser: [],
  listUserTimKiem: [],
  keyword: "",
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }

    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }

    case GET_LIST_NGUOI_DUNG: {
      state.listUser = action.listUser;
      return { ...state };
    }

    case GET_TIM_KIEM_NGUOI_DUNG: {
      state.keyword = action.keyword;
      let listUser = [...state.listUser];
      let listTimKiem = listUser.filter((user) => {
        return user.taiKhoan.includes(action.keyword);
      });
      if (listTimKiem.length === 0) {
        alert("Không tồn tại tài khoản này");
      }
      state.listUserTimKiem = listTimKiem;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
