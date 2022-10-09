import {
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
  SET_THONG_TIN_FILM,
} from "../actions/types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../actions/types/QuanLyRapType";
import defaultImage from "../../assets/images/Carousel/slider1.jpg";

const date = new Date();

date.setMonth(date.getMonth() - 2);

const stateDefault = {
  arrFilm: [
    {
      maPhim: 1322,
      tenPhim: "TAKEN 2",
      biDanh: "taken-2",
      trailer: "https://www.youtube.com/embed/T6DJcgm3wNY",
      hinhAnh: defaultImage,
      moTa: "Đây là một bộ phim hành động Mỹ sản xuất năm 2014, được đạo diễn bởi Chad Stahelski. Phim có sự tham gia của các diễn viên Keanu Reeves, Michael Nyqvist, Alfie Allen, Adrianne Palicki, Bridget Moynahan, Ian McShane, Willem Dafoe, John Leguizamo và Dean Winters",
      maNhom: "GP09",
      ngayKhoiChieu: "2021-08-28T20:55:10.05",
      danhGia: 10,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {},
  thongTinPhim: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM:
      state.arrFilmDefault = action.arrFilm;
      state.arrFilm = state.arrFilmDefault.filter((film) => {
        let khoiChieu = new Date(film.ngayKhoiChieu) <= date;
        return khoiChieu === state.dangChieu;
      });

      return { ...state };

    case SET_FILM_DANG_CHIEU:
      state.arrFilm = state.arrFilmDefault.filter((film) => {
        let khoiChieu = new Date(film.ngayKhoiChieu) <= date;
        return khoiChieu === state.dangChieu;
      });
      return { ...state };

    case SET_FILM_SAP_CHIEU:
      state.arrFilm = state.arrFilmDefault.filter((film) => {
        let khoiChieu = new Date(film.ngayKhoiChieu) > date;
        return khoiChieu === state.sapChieu;
      });
      return { ...state };

    case SET_CHI_TIET_PHIM:
      state.filmDetail = action.filmDetail;
      return { ...state };

    case SET_THONG_TIN_FILM:
      state.thongTinPhim = action.thongTinPhim;
      return { ...state };

    default:
      return { ...state };
  }
};
