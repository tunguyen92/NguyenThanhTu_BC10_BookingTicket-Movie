import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/QuanLyRapType";

const stateDefault = {
  heThongRapChieu: [
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
};

export const QuanLyRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU:
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };

    default:
      return { ...state };
  }
};
