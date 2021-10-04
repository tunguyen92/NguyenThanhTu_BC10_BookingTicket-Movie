import {
  SET_HE_THONG_RAP_CHIEU,
  SET_CHI_TIET_PHIM,
} from "../actions/types/QuanLyRapType";

const stateDefault = {
  heThongRapChieu: [
    {
      lstCumRap: [
        {
          danhSachPhim: [
            {
              lstLichChieuTheoPhim: [
                {
                  giaVe: 75000,
                  maLichChieu: 16531,
                  maRap: "475",
                  ngayChieuGioChieu: "2019-01-01T10:10:00",
                  tenRap: "Rạp 5",
                },
              ],
              maPhim: 1322,
              tenPhim: "John Wick II",
              hinhAnh:
                "http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-ii_gp09.jpeg",
            },
          ],
          diaChi: "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh",
          maCumRap: "bhd-star-cineplex-pham-hung",
          tenCumRap: "BHD Star Cineplex - Phạm Hùng",
        },
      ],
      maHeThongRap: "BHDStar",
      tenHeThongRap: "BHD Star Cineplex",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
      mahom: "GP09",
    },
  ],
  chiTietPhongVe: [],
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

export const QuanLyLichChieuReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_CHI_TIET_PHIM:
      state.chiTietPhongVe = action.filmDetail;

      return { ...state };

    default:
      return { ...state };
  }
};
