import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungAction";
import "./login.css";
import logo from "../../assets/images/logo.png";

export default function Login(props) {
  const dispatch = useDispatch();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [translateFormLogin, setTranslateFormLogin] = useState("");
  const [translateFormRegister, setTranslateFormRegister] = useState("");

  useEffect(() => {
    setTranslateFormLogin("login100-form");
    setTranslateFormRegister("register-form-hide-right");
  }, []);

  /*const { userLogin } =*/ useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  // console.log(userLogin);

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

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <div className="container-login100">
      <div className="wrap-login100">
        <form
          className={`login100-form-hide-left ${translateFormLogin}`}
          onSubmit={formik.handleSubmit}
        >
          <span className="login100-form-title p-b-26">Welcome Back</span>
          <img className="login100-form-img" src={logo} alt="" />
          <div className="wrap-input100 ">
            <input
              className="input100"
              type="text"
              name="taiKhoan"
              required
              onChange={formik.handleChange}
            />
            <span className="focus-input100" data-placeholder="Tài khoản" />
          </div>
          <div className="wrap-input100 ">
            <span className="btn-show-pass">
              <i
                className={isPasswordShown ? "far fa-eye-slash" : "far fa-eye"}
                onClick={togglePasswordVisiblity}
              ></i>
            </span>
            <input
              className="input100"
              type={isPasswordShown ? "text" : "password"}
              name="matKhau"
              autoComplete="on"
              required
              onChange={formik.handleChange}
            />
            <span className="focus-input100" data-placeholder="Mật khẩu" />
          </div>
          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button type="submit" className="login100-form-btn">
                Đăng nhập
              </button>
            </div>
          </div>
          <div className="text-center pt-5">
            <span className="txt1 mr-2">Chưa có tài khoản?</span>
            <NavLink
              to="register"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Đăng ký ngay
            </NavLink>
          </div>
        </form>

        <form className={`register-form ${translateFormRegister}`}>
          <span className="login100-form-title p-b-26">Tạo tài khoản mới</span>
          <img className="login100-form-img" src={logo} alt="" />
          <div className="wrap-input100 ">
            <input
              className="input100"
              type="text"
              name="tenTaiKhoan"
              required
            />
            <span className="focus-input100" data-placeholder="Tên tài khoản" />
          </div>

          <div className="wrap-input100 ">
            <span className="btn-show-pass">
              <i
                className={isPasswordShown ? "far fa-eye-slash" : "far fa-eye"}
              ></i>
            </span>
            <input
              className="input100"
              type={isPasswordShown ? "text" : "password"}
              name="matKhau"
              autoComplete="on"
              required
            />
            <span className="focus-input100" data-placeholder="Mật khẩu" />
          </div>

          <div className="wrap-input100 ">
            <input className="input100" type="text" name="hoTen" required />
            <span className="focus-input100" data-placeholder="Họ tên" />
          </div>

          <div className="wrap-input100 ">
            <input className="input100" type="text" name="email" required />
            <span className="focus-input100" data-placeholder="Email" />
          </div>

          <div className="wrap-input100 ">
            <input className="input100" type="text" name="sdt" required />
            <span className="focus-input100" data-placeholder="Số điện thoại" />
          </div>

          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button className="login100-form-btn">Đăng nhập</button>
            </div>
          </div>
          <div className="text-center pt-5">
            <span className="txt1 mr-2">Đã có tài khoản?</span>
            <span className="cursor-pointer text-indigo-600 hover:text-indigo-800">
              Đăng nhập ngay
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
