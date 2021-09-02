import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
  constructor() {
    super();
  }

  layDanhSachBanner = () => {
    return this.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=1&soPhanTuTrenTrang=3`
    );
  };

  layDanhSachPhim = () => {
    return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
}

export const QLPhimService = new QuanLyPhimService();
