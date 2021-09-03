import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return this.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=1&soPhanTuTrenTrang=3`
    );
  };

  layDanhSachPhim = () => {
    return this.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=1&soPhanTuTrenTrang=12`
    );
  };
}

export const quanLyPhimService = new QuanLyPhimService();
