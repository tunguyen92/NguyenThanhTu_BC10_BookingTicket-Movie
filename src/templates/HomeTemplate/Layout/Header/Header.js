import React, { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";
import userIcon from "../../../../assets/images/user-icon.jpg";
import "./header.css";

const navigation = [
  { name: "Trang chủ", to: "/", current: true },
  { name: "Phim", to: "/contact", current: false },
  { name: "Tin tức", to: "/news", current: false },
  { name: "Liên hệ", to: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  // console.log(userLogin);

  // Sticky navbar on scroll
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    setShow(window.pageYOffset > 140);
  };

  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            onClick={() => {
              history.push("/login");
            }}
            className="self-center px-3 py-2 rounded-2xl sm:text-base text-xs font-medium text-gray-300 hover:bg-pink-600 hover:text-white duration-500  mr-2"
          >
            Đăng nhập
          </button>
          <button
            onClick={() => {
              history.push("/register");
            }}
            className="self-center sm:text-base text-xs text-white bg-pink-600 px-3 sm:px-6 py-2 sm:py-2 rounded-3xl"
          >
            Đăng ký
          </button>
        </Fragment>
      );
    }

    return (
      <Fragment>
        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative">
          <div>
            <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <img
                className="h-8 w-8 rounded-full"
                rel="tooltip"
                title={`Hello ${userLogin.hoTen}!`}
                src={userIcon}
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-blue-color  ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => {
                      history.push("/profile");
                    }}
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-300 m-auto w-full hover:bg-gray-900  yellow-color-hover duration-300"
                    )}
                  >
                    Thông tin cá nhân
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-300 m-auto w-full hover:bg-gray-900  yellow-color-hover duration-300"
                    )}
                    onClick={() => {
                      localStorage.removeItem(USER_LOGIN);
                      localStorage.removeItem(TOKEN);
                      history.push("/");
                      window.location.reload();
                    }}
                  >
                    Đăng xuất
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </Fragment>
    );
  };
  return (
    <Disclosure
      as="nav"
      className={
        `${show && "sticky"} ` +
        (!navigation[0].current
          ? "bg-gray-blue-color"
          : "bg-transparent absolute top-0 z-10 w-full")
      }
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 sm:h-28">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex-1 flex items-center justify-center  sm:justify-start">
                <NavLink
                  to="/"
                  className="flex-shrink-0 flex items-center"
                  onClick={() => {
                    navigation.map((item, index) => {
                      index === 0
                        ? (item.current = true)
                        : (item.current = false);
                    });
                  }}
                >
                  <img
                    className="w-10 sm:w-14  lg:w-20"
                    src={process.env.PUBLIC_URL + "/images/logo.png"}
                    alt="logo"
                  />
                </NavLink>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? " yellow-color-hover yellow-color"
                            : "text-gray-300  yellow-color-hover",
                          "px-3 py-2 rounded-2xl text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => {
                          navigation.forEach((navlink) => {
                            navlink.current = false;
                          });
                          item.current = true;
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {renderLogin()}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-blue-color">
              {navigation.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 yellow-color-hover yellow-color"
                      : "text-gray-300 hover:bg-gray-900  yellow-color-hover",
                    "block px-3 py-2 rounded-2xl text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => {
                    navigation.forEach((navlink) => {
                      navlink.current = false;
                    });
                    item.current = true;
                    open = true;
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
