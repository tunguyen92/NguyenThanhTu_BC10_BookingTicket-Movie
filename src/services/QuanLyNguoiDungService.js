import { baseService } from "./baseService";
import { GROUPID } from "./../util/settings/config";

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

  layDanhSachNguoiDung = () => {
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
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

  xoaThongTinNguoiDung = (taiKhoan) => {
    return this.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
