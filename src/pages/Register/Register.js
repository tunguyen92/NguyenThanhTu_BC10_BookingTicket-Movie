import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import "./register.css";

export default function Login(props) {
  const dispatch = useDispatch();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [translateForm, setTranslateForm] = useState("");
  const [translateFormRegister, setTranslateFormRegister] = useState("");

  useEffect(() => {
    setTranslateForm("login100-form");
    setTranslateFormRegister("register-form-hide-right");
  }, []);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "",
      hoTen: "",
      maLoaiNguoiDung: "KhachHang",
    },
    onSubmit: (values) => {
      let formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      console.log("values", values);

      dispatch(dangKyAction(values));
    },
  });

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleChangeSelect = (e) => {
    let maNhom = e.target.value;
    formik.setFieldValue("maNhom", maNhom);
  };

  return (
    <div className="container-login100">
      <div className="wrap-login100">
        <form
          className={`login100-form-hide-left ${translateForm}`}
          onSubmit={formik.handleSubmit}
        >
          <span className="login100-form-title p-b-26">Tạo tài khoản mới</span>
          <img className="login100-form-img" src={logo} />
          <div className="wrap-input100 ">
            <input
              className="input100"
              type="text"
              name="taiKhoan"
              required
              onChange={formik.handleChange}
            />
            <span className="focus-input100" data-placeholder="Tên tài khoản" />
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

          <div className="wrap-input100 ">
            <input
              className="input100"
              type="text"
              name="hoTen"
              required
              onChange={formik.handleChange}
            />
            <span className="focus-input100" data-placeholder="Họ tên" />
          </div>

          <div className="wrap-input100 ">
            <input
              className="input100"
              type="text"
              name="email"
              required
              onChange={formik.handleChange}
            />
            <span className="focus-input100" data-placeholder="Email" />
          </div>

          <div className="wrap-input100 ">
            <input
              className="input100"
              type="text"
              name="soDt"
              required
              onChange={formik.handleChange}
            />
            <span className="focus-input100" data-placeholder="Số điện thoại" />
          </div>

          <div className="wrap-input100 ">
            <select
              name="maNhom"
              className="input100 form-select outline-none cursor-pointer"
              onChange={handleChangeSelect}
            >
              <option selected disabled hidden>
                Chọn mã nhóm
              </option>
              <option>GP01</option>
              <option>GP02</option>
              <option>GP03</option>
              <option>GP04</option>
              <option>GP05</option>
              <option>GP06</option>
              <option>GP07</option>
              <option>GP08</option>
              <option>GP09</option>
              <option>GP10</option>
            </select>
            <span className="focus-input100" data-placeholder="Mã nhóm" />
          </div>

          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button type="submit" className="login100-form-btn">
                Đăng ký
              </button>
            </div>
          </div>
          <div className="text-center pt-5">
            <span className="txt1 mr-2">Đã có tài khoản?</span>
            <NavLink
              to="login"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Đăng nhập ngay
            </NavLink>
          </div>
        </form>

        <form className={`register-form ${translateFormRegister}`}>
          <span className="login100-form-title p-b-26">Welcome Back</span>
          <img className="login100-form-img" src={logo} />
          <div className="wrap-input100 ">
            <input className="input100" type="text" name="taiKhoan" required />
            <span className="focus-input100" data-placeholder="Tài khoản" />
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
          <div className="container-login100-form-btn">
            <div className="wrap-login100-form-btn">
              <div className="login100-form-bgbtn" />
              <button className="login100-form-btn">Đăng nhập</button>
            </div>
          </div>
          <div className="text-center pt-5">
            <span className="txt1 mr-2">Đã có tài khoản?</span>
            <span className="cursor-pointer text-indigo-600 hover:text-indigo-800">
              Đăng ký ngay
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
