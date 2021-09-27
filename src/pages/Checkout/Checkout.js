import React from "react";
import { useSelector } from "react-redux";

export default function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  return (
    <div className="h-screen pb-0">
      <div className="grid grid-cols-12">
        <div className="col-span-9"></div>
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-2xl">0đ</h3>
          <hr />
          <h3 className="text-xl">Lật mặt 48h</h3>
          <p>Địa điểm: BHD Star - Vincom 3/2</p>
          <p>Ngày chiếu: 25/04/2021 - 12:05 RẠP 5</p>
          <hr />

          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-400 text-lg">0đ</span>
            </div>
          </div>
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
          <div className=" h-full flex flex-col justify-end items-center">
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-2xl">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
