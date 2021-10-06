import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  // constructor() {
  //   super();
  // }

  dangNhap = (thongTinDangNhap) => {
    // {taiKhoan:'',matKhau:''}
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
  };

  dangKy = (formData) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, formData);
  };

  layThongTinNguoiDung = (thongTinNguoiDung) => {
    return this.post(
      `/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      thongTinNguoiDung
    );
  };

  capNhatThongTinNguoiDung = () => {
    return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
