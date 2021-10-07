import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import "./Checkout.css";
import { DAT_VE } from "../../redux/actions/types/QuanLyDatVeType";
import DatVe from "./DatVe.module";
import _ from "lodash";
import { ThongTinDatVe } from "./../../_core/models/ThongTinDatVe";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { chiTietPhongVe, danhSachDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );

  const dispatch = useDispatch(() => {});

  useEffect(() => {
    //tạo hàm async
    const action = layChiTietPhongVeAction(props.match.params.id);

    //đẩy hàm đi
    dispatch(action);
  }, []);

  const { danhSachGhe, thongTinPhim } = chiTietPhongVe;

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";

      let checkGheDangDat = danhSachDangDat.findIndex((gheDangDat) => {
        return gheDangDat.maGhe === ghe.maGhe;
      });
      if (checkGheDangDat !== -1) {
        classGheDangDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              dispatch({
                type: DAT_VE,
                gheDuocChon: ghe,
              });
            }}
            disabled={ghe.daDat}
            className={`ghe ${classGheDangDat} ${classGheVip} ${classGheDaDat} `}
          >
            {ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="pb-0 pr-2 max-h-screen">
      <div className="grid grid-cols-12 ">
        <div className="col-span-9 ">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black"
              style={{ width: "80%", height: 15 }}
            ></div>
            <div className={`${style["trapezoid"]} text-center`}>
              <h3 className="mt-3 text-black text-bold">MÀN HÌNH</h3>
            </div>
            <div>{renderSeats()}</div>
          </div>
        </div>
        <div className="col-span-3 ">
          <h3 className="text-green-400 text-center text-2xl">
            {danhSachDangDat
              .reduce((total, ghe) => {
                return (total += ghe.giaVe);
              }, 0)
              .toLocaleString()}
          </h3>
          <hr />
          <h3 className="text-xl">{thongTinPhim.tenPhim}</h3>
          <p>
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p>Ngày chiếu: {thongTinPhim.ngayChieu}</p>
          <hr />

          <DatVe danhSachDangDat={_.sortBy(danhSachDangDat, ["maGhe"])} />
          <hr />
          <div className="my-5">
            <i className="">Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i>
            <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="max-h-screen flex flex-col justify-end items-center">
            <div
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachDangDat;
                thongTinDatVe.taiKhoanNguoiDung = userLogin.taiKhoan;
                dispatch(datVeAction(thongTinDatVe));
              }}
              className=" bg-green-500 text-white text-center py-3 font-bold text-2xl cursor-pointer w-full"
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
