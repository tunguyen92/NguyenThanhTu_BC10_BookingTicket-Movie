import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  datVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import "./Checkout.css";
import { DAT_VE } from "../../redux/actions/types/QuanLyDatVeType";
import DatVe from "./DatVe.module";
import _ from "lodash";
import { ThongTinDatVe } from "./../../_core/models/ThongTinDatVe";
import seat from "../../assets/images/seat.svg";
import { swal } from "sweetalert";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const { chiTietPhongVe, danhSachDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  console.log(chiTietPhongVe);
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
            <img src={seat} alt="" class="img-ghe" width="30" height="30" />
            <span className="sttGhe">{ghe.stt}</span>
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div
      className="pb-0 pr-2 min-h-screen pt-5"
      style={{ backgroundColor: "#0f2133" }}
    >
      <div className="grid grid-cols-12 ">
        <div className="content-left col-span-9 max-h-full">
          <div className="flex justify-around flex-wrap">
            <h3 className="text-white mr-10">
              Rạp chiếu: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
            </h3>

            <div>
              <h3 className="text-white mr-10">
                Ngày chiếu: {thongTinPhim.ngayChieu}
              </h3>
            </div>
            <div>
              <h3 className="text-white">
                Suất chiếu: {thongTinPhim.gioChieu}
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-center mt-5">
            <div className="screen">
              <h3 className="mt-5 text-2xl text-white text-bold text-center">
                MÀN HÌNH
              </h3>
            </div>

            <div>{renderSeats()}</div>
          </div>

          <div className="flex justify-center">
            <hr />

            <div className="flex" style={{ alignItems: "center" }}>
              <div className="ghe">
                <img src={seat} alt="" class="img-ghe" width="30" height="30" />
              </div>
              <div className="text-white">Ghế thường</div>
            </div>
            <div className="flex" style={{ alignItems: "center" }}>
              <div className="ghe gheVip">
                <img src={seat} alt="" class="img-ghe" width="30" height="30" />
              </div>
              <div className="text-white">Ghế vip</div>
            </div>
            <div className="flex" style={{ alignItems: "center" }}>
              <div className="ghe gheDaDat">
                <img src={seat} alt="" class="img-ghe" width="30" height="30" />
              </div>
              <div className="text-white">Ghế đã đặt</div>
            </div>
            <div className="flex" style={{ alignItems: "center" }}>
              <div className="ghe gheDangDat">
                <img src={seat} alt="" class="img-ghe" width="30" height="30" />
              </div>
              <div className="text-white">Ghế đang đặt</div>
            </div>
          </div>
        </div>
        <div className="content-right-upper-730px col-span-3 ">
          <h3 className="total-price text-green-400 text-center text-4xl mb-2">
            {danhSachDangDat
              .reduce((total, ghe) => {
                return (total += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            đ
          </h3>
          <hr />
          <h3 className="text-2xl mt-3 text-white text-center mb-3">
            {thongTinPhim.tenPhim}
          </h3>

          <hr />

          <DatVe danhSachDangDat={_.sortBy(danhSachDangDat, ["maGhe"])} />
          <hr />
          <div className="my-5 text-white">
            <span>Email: </span>
            {userLogin.email}
          </div>
          <hr />
          <div className="my-5 text-white">
            <span>Phone: </span>
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
                if (danhSachDangDat.length === 0) {
                  alert("Vui lòng chọn chỗ ngồi");
                } else dispatch(datVeAction(thongTinDatVe));
              }}
              className="checkout border-2  text-white text-center  mt-5 font-bold text-2xl cursor-pointer w-50 rounded-full py-3 px-6"
            >
              THANH TOÁN
            </div>
          </div>
        </div>
        <div className="content-right-lower-730px ">
          <h3 className="text-2xl mt-3 text-white text-center">
            {thongTinPhim.tenPhim}
          </h3>
          <DatVe danhSachDangDat={_.sortBy(danhSachDangDat, ["maGhe"])} />
          <div className="ml-5 my-5 text-white">
            <p>Email: </p>
            {userLogin.email}
            <br className="mb-5" />
            <span>Phone: </span>
            {userLogin.soDT}

            <div className="max-h-screen flex flex-col justify-end items-center mt-10">
              <div
                onClick={() => {
                  const thongTinDatVe = new ThongTinDatVe();
                  thongTinDatVe.maLichChieu = props.match.params.id;
                  thongTinDatVe.danhSachVe = danhSachDangDat;
                  thongTinDatVe.taiKhoanNguoiDung = userLogin.taiKhoan;
                  if (danhSachDangDat.length === 0) {
                    alert("Vui lòng chọn chỗ ngồi");
                  } else dispatch(datVeAction(thongTinDatVe));
                }}
                className="checkout border-2  text-white text-center  mt-5 font-bold text-2xl cursor-pointer w-50 rounded-full py-3 px-6"
              >
                THANH TOÁN
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
