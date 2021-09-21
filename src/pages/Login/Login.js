import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import "./login.css";
import logo from "../../assets/images/logo.png";

export default function Login(props) {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [inputVal, setInputVal] = useState("");

  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = dangNhapAction(values);
      dispatch(action);

      console.log("values", values);
    },
  });

  const handleChangeTaiKhoan = (e) => {
    e.target.value.length !== 0 ? setInputValue("has-val") : setInputValue("");
  };

  const handleChangeMatKhau = (e) => {
    e.target.value.length !== 0 ? setInputVal("has-val") : setInputVal("");
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form" onSubmit={formik.handleSubmit}>
            <span className="login100-form-title p-b-26">Welcome</span>
            <img className="login100-form-img" src={logo} />

            <div className="wrap-input100 ">
              <input
                className={`input100 ${inputValue} `}
                type="text"
                name="taiKhoan"
                onChange={(formik.handleChange, handleChangeTaiKhoan)}
              />
              <span className="focus-input100" data-placeholder="Tài khoản" />
            </div>
            <div className="wrap-input100 ">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye" />
              </span>
              <input
                className={`input100 ${inputVal} `}
                type="password"
                name="matKhau"
                autoComplete="on"
                onChange={(formik.handleChange, handleChangeMatKhau)}
              />
              <span className="focus-input100" data-placeholder="Mật khẩu" />
            </div>
            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn" />
                <button className="login100-form-btn">Đăng nhập</button>
              </div>
            </div>
            <div className="text-center pt-5">
              <span className="txt1 mr-2">Chưa có tài khoản?</span>
              <NavLink
                to="register"
                className="cursor-pointer text-indigo-600 hover:text-indigo-800"
              >
                Đăng ký
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
