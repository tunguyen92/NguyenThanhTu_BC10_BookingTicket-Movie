import {
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_THONG_TIN_FILM,
} from "../actions/types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 1322,
      tenPhim: "John Wick II",
      biDanh: "john-wick-ii",
      trailer: "https://www.youtube.com/embed/XGk2EfbD_Ps",
      hinhAnh:
        "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
      moTa: "Mạng đổi mạng là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
      maNhom: "GP09",
      ngayKhoiChieu: "2021-08-28T20:55:10.05",
      danhGia: 10,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM:
      state.arrFilmDefault = action.arrFilm;
      state.arrFilm = state.arrFilmDefault.filter(
        (film) =>
          new Date(film.ngayKhoiChieu) <= new Date("2020-07-15") ===
          state.dangChieu
      );

      return { ...state };

    case SET_FILM_DANG_CHIEU:
      state.arrFilm = state.arrFilmDefault.filter(
        (film) =>
          new Date(film.ngayKhoiChieu) <= new Date("2020-07-15") ===
          state.dangChieu
      );
      return { ...state };

    case SET_FILM_SAP_CHIEU:
      state.arrFilm = state.arrFilmDefault.filter(
        (film) =>
          new Date(film.ngayKhoiChieu) > new Date("2020-07-15") ===
          state.sapChieu
      );
      return { ...state };

    case SET_CHI_TIET_PHIM:
      state.filmDetail = action.filmDetail;
      return { ...state };

    default:
      return { ...state };
  }
};
