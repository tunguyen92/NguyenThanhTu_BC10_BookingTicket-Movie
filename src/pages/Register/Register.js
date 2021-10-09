import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import logo from "../../assets/images/logo.png";
import { dangKyAction } from "../../redux/actions/QuanLyNguoiDungAction";
import "./register.css";

export default function Register(props) {
  const dispatch = useDispatch();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [translateForm, setTranslateForm] = useState("");
  const [translateFormRegister, setTranslateFormRegister] = useState("");

  useEffect(() => {
    setTranslateForm("login100-form");
    setTranslateFormRegister("register-form-hide-right");
  }, []);

  const togglePasswordVisiblity = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Formik
      initialValues={{
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "",
        hoTen: "",
        maLoaiNguoiDung: "KhachHang",
      }}
      onSubmit={(values) => {
        let formData = new FormData();
        for (let key in values) {
          formData.append(key, values[key]);
        }
        console.log("values", values);

        dispatch(dangKyAction(values));
      }}
      validationSchema={Yup.object().shape({
        taiKhoan: Yup.string()
          .required("Tài khoản không được trống")
          .min(5, "Tên tài khoản từ 5 kí tự trở lên."),

        matKhau: Yup.string()
          .required("Chưa nhập mật khẩu.")
          .min(8, "Mật khẩu quá ngắn - ít nhất phải 8 ký tự.")
          .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa nhất một số."),

        email: Yup.string()
          .email("Email không đúng định dạng.")
          .required("Không được để trống."),

        hoTen: Yup.string().required("Họ tên không được trống"),

        soDt: Yup.string()
          .required("Nhập vào số điện thoại")
          .matches(/[0-9]/, "Số điện thoại sao có chữ được bạn êiii.")
          .min(10, "Chưa đủ 10 số.")
          .max(10, "Quá 10 số rồi."),

        maNhom: Yup.string().ensure().required("Chọn mã nhóm!"),
      })}
    >
      {(props) => {
        const { touched, errors, handleChange, handleBlur, handleSubmit } =
          props;
        return (
          <div className="container-login100">
            <div className="wrap-login100">
              <form
                className={`login100-form-hide-left ${translateForm}`}
                onSubmit={handleSubmit}
              >
                <span className="login100-form-title p-b-26">
                  Tạo tài khoản mới
                </span>
                <NavLink to="/" className="cursor-pointer">
                  <img className="login100-form-img" src={logo} alt="logo" />
                </NavLink>

                <div className="wrap-input100 ">
                  <input
                    className="input100"
                    type="text"
                    name="taiKhoan"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="Tên tài khoản"
                  />
                  {errors.taiKhoan && touched.taiKhoan && (
                    <div className="pink-color input-feedback">
                      {errors.taiKhoan}
                    </div>
                  )}
                </div>

                <div className="wrap-input100 ">
                  <span className="btn-show-pass">
                    <i
                      className={
                        isPasswordShown ? "far fa-eye" : "far fa-eye-slash"
                      }
                      onClick={togglePasswordVisiblity}
                    ></i>
                  </span>
                  <input
                    className="input100"
                    type={isPasswordShown ? "text" : "password"}
                    name="matKhau"
                    autoComplete="on"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="Mật khẩu"
                  />
                  {errors.matKhau && touched.matKhau && (
                    <div className="pink-color input-feedback">
                      {errors.matKhau}
                    </div>
                  )}
                </div>

                <div className="wrap-input100 ">
                  <input
                    className="input100"
                    type="text"
                    name="hoTen"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="focus-input100" data-placeholder="Họ tên" />
                  {errors.hoTen && touched.hoTen && (
                    <div className="pink-color input-feedback">
                      {errors.hoTen}
                    </div>
                  )}
                </div>

                <div className="wrap-input100 ">
                  <input
                    className="input100"
                    name="email"
                    type="text"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="focus-input100" data-placeholder="Email" />
                  {errors.email && touched.email && (
                    <div className="pink-color input-feedback">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="wrap-input100 ">
                  <input
                    className="input100"
                    type="text"
                    name="soDt"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="Số điện thoại"
                  />
                  {errors.soDt && touched.soDt && (
                    <div className="pink-color input-feedback">
                      {errors.soDt}
                    </div>
                  )}
                </div>

                <div className="wrap-input100 ">
                  <select
                    name="maNhom"
                    className="input100 form-select outline-none cursor-pointer"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option hidden>Chọn mã nhóm</option>
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
                  {errors.maNhom && touched.maNhom && (
                    <div className="pink-color input-feedback">
                      {errors.maNhom}
                    </div>
                  )}
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
                <img className="login100-form-img" src={logo} alt="" />
                <div className="wrap-input100 ">
                  <input
                    className="input100"
                    type="text"
                    name="taiKhoan"
                    required
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="Tài khoản"
                  />
                </div>
                <div className="wrap-input100 ">
                  <span className="btn-show-pass">
                    <i
                      className={
                        isPasswordShown ? "far fa-eye" : "far fa-eye-slash"
                      }
                    ></i>
                  </span>
                  <input
                    className="input100"
                    type={isPasswordShown ? "password" : "text"}
                    name="matKhau"
                    autoComplete="on"
                    required
                  />
                  <span
                    className="focus-input100"
                    data-placeholder="Mật khẩu"
                  />
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
      }}
    </Formik>
  );
}
