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
import seat from "../../assets/images/seat.svg";

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
            <img src={seat} alt="" class="img-ghe" width="30" height="30" />
            <span>{ghe.stt}</span>
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div
      className="pb-0 pr-2 min-h-screen pt-20"
      style={{ backgroundColor: "#0f2133" }}
    >
      <div className="grid grid-cols-12 ">
        <div className="col-span-9 min-h-screen">
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

          <div className="flex justify-center">
            <hr />

            <div className="flex" style={{ alignItems: "center" }}>
              <div className="ghe">
                <svg
                  class="svg-inline--fa fa-couch fa-w-20"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="couch"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                  ></path>
                </svg>
              </div>
              <div>Ghế thường</div>
            </div>
            <div className="flex" style={{ alignItems: "center" }}>
              <div className="ghe gheVip">
                <svg
                  className="svg-inline--fa fa-couch fa-w-20"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="couch"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                  ></path>
                </svg>
              </div>
              <div>Ghế vip</div>
            </div>
            <div className="flex" style={{ alignItems: "center" }}>
              <div className="ghe gheDaDat">
                <svg
                  class="svg-inline--fa fa-couch fa-w-20"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="couch"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                  ></path>
                </svg>
              </div>
              <div>Ghế đã đặt</div>
            </div>
            <div className="flex" style={{ alignItems: "center" }}>
              <div className="ghe gheDangDat">
                <svg
                  class="svg-inline--fa fa-couch fa-w-20"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="couch"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"
                  ></path>
                </svg>
              </div>
              <div>Ghế đang đặt</div>
            </div>
          </div>
        </div>
        <div className="col-span-3 mt-5">
          <h3 className="text-green-400 text-center text-4xl mb-2">
            {danhSachDangDat
              .reduce((total, ghe) => {
                return (total += ghe.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            đ
          </h3>
          <hr />
          <h3 className="text-xl mt-3">{thongTinPhim.tenPhim}</h3>
          <p className="text-black mt-1 ">
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p className="text-black mt-1 mb-3 ">
            Ngày chiếu: {thongTinPhim.ngayChieu}
          </p>
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
