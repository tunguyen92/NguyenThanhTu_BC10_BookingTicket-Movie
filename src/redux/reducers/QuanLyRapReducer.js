import { SET_HE_THONG_RAP_CHIEU } from "../actions/types/QuanLyRapType";

const stateDefault = {
  heThongRapChieu: [
    {
      lstCumRap: [
        {
          danhSachPhim: [
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: 44889,
                  maRap: "903",
                  tenRap: "Rạp 3",
                  ngayChieuGioChieu: "2021-09-30T12:00:34",
                  giaVe: 75000,
                },
              ],
              maPhim: 8487,
              tenPhim: "The Gangster, The Cop, The Devil",
              hinhAnh:
                "http://movie0706.cybersoft.edu.vn/hinhanh/the-gangster-the-cop-the-devil_gp09.jpg",
            },
          ],
          maCumRap: "megags-cao-thang",
          tenCumRap: "MegaGS - Cao Thắng",
          diaChi: "19 Cao Thắng, Q.3",
        },
      ],
      maHeThongRap: "MegaGS",
      tenHeThongRap: "MegaGS",
      logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
      mahom: "GP09",
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
