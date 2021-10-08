import React from "react";
import { Link } from "react-router-dom";
import { Tabs } from "antd";

const { TabPane } = Tabs;

export default function News() {
  return (
    <section className="px-5 pt-32 pb-10 bg-dark-blue-color ">
      <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
        <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
          <div className="flex flex-col space-y-8 md:space-y-12">
            <div className="flex flex-col space-y-2">
              <h3 className="flex items-center space-x-2 ">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full "></span>
                <span className="text-xs  title-color font-bold tracking-wider uppercase">
                  Nổi bật
                </span>
              </h3>
              <Link to="/news" className="hover:underline">
                George Clooney cấm vợ con xem phim siêu anh hùng mình đóng.
              </Link>
              <p className="text-xs ">47 phút trước</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="flex items-center space-x-2 ">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full "></span>
                <span className="text-xs title-color font-bold tracking-wider uppercase">
                  Nổi bật
                </span>
              </h3>
              <Link to="/news" className="hover:underline">
                Hãng sản xuất phim ‘Bombshell’ bị kiện 14,3 triệu USD.
              </Link>
              <p className="text-xs ">2 giờ trước</p>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="flex items-center space-x-2 ">
                <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full "></span>
                <span className="text-xs title-color font-bold tracking-wider uppercase">
                  Nổi bật
                </span>
              </h3>
              <Link to="/news" className="hover:underline">
                ‘No One Gets Out Alive’ và cơn ác mộng của người nhập cư.
              </Link>
              <p className="text-xs ">4 giờ trước</p>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2">
            <div className="flex w-full h-1 bg-opacity-10 ">
              <div className="w-1/2 h-full "></div>
            </div>
            <a to="/news" className="flex items-center justify-between w-full">
              <span className="text-xs font-bold tracking-wider uppercase yellow-color-hover">
                Xem thêm tin nổi bật
              </span>
              <svg
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 text-white strokeCurrent text-violet-600"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
        <div
          className="relative flex col-span-12 bg-center bg-no-repeat bg-cover  xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/620x610')",
          }}
        >
          <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 ">
            paris, france
          </span>
          <a className="flex flex-col items-center justify-end  text-center  group via-transparent flex-grow-1 bg-gradient-to-b from-coolGray-900 to-coolGray-900">
            <span className="flex items-center mb-4 space-x-2 text-violet-600">
              <span className="relative flex-shrink-0 w-2 h-2 rounded-full ">
                <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping "></span>
              </span>
              <span className="text-sm font-bold">Live</span>
            </span>
            <h1
              to="/news"
              className="text-2xl text-white font-semibold group-hover:underline bg-black bg-opacity-50 p-3 sm:p-4 yellow-color-hover"
            >
              Dwayne “The Rock” Johnson nói về phim được đầu tư 130 triệu USD
            </h1>
          </a>
        </div>
        <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
          <div className="mb-8 space-x-5 border-b-2 border-opacity-10">
            <Tabs defaultActiveKey="1">
              <TabPane
                tab="Mới nhất"
                key="1"
                className="pb-5 text-xs border-b-2"
              >
                <div className="flex flex-col divide-y divide-coolGray-300">
                  <div className="flex px-1 py-4">
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      src="https://source.unsplash.com/random/244x324"
                    />
                    <div className="flex flex-col flex-grow">
                      <Link to="/news" className="hover:underline">
                        Cặp nhân vật gây khó chịu ở “Hương vị tình thân”.
                      </Link>
                      <p className="mt-auto text-xs ">
                        5 phút trước
                        <Link
                          to="/news"
                          className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                        >
                          Phim truyền hình
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex px-1 py-4">
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      src="https://source.unsplash.com/random/245x325"
                    />
                    <div className="flex flex-col flex-grow">
                      <Link to="/news" className="hover:underline">
                        ‘Tổng đài truy vết’ - khi tội lỗi định hình con người.
                      </Link>
                      <p className="mt-auto text-xs ">
                        14 phút trước
                        <Link
                          to="/news"
                          className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                        >
                          Phim chiếu rạp
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex px-1 py-4">
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      src="https://source.unsplash.com/random/246x326"
                    />
                    <div className="flex flex-col flex-grow">
                      <Link to="/news" className="hover:underline">
                        Loay hoay trong việc quản lý hàng nghìn phim điện ảnh
                        trên mạng.
                      </Link>
                      <p className="mt-auto text-xs ">
                        22 phút trước
                        <Link
                          to="/news"
                          className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                        >
                          Trong nước
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex px-1 py-4">
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      src="https://source.unsplash.com/random/247x327"
                    />
                    <div className="flex flex-col flex-grow">
                      <Link to="/news" className="hover:underline">
                        Cuộc sống của một phụ nữ bị đảo lộn vì phim “Squid
                        Game”.
                      </Link>
                      <p className="mt-auto text-xs ">
                        37 phút trước
                        <Link
                          to="/news"
                          className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                        >
                          Thế giới
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </TabPane>

              <TabPane
                tab="Phổ biến"
                key="2"
                className="pb-5 text-xs border-b-2"
              >
                <div className="flex flex-col divide-y divide-coolGray-300">
                  <div className="flex px-1 py-4">
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      src="https://picsum.photos/246/326?random=1"
                    />
                    <div className="flex flex-col flex-grow">
                      <Link to="/news" className="hover:underline">
                        Phim truyền hình Việt ngày càng hút khán giả.
                      </Link>
                      <p className="mt-auto text-xs ">
                        9 giờ trước
                        <Link
                          to="/news"
                          className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                        >
                          Phim truyền hình
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex px-1 py-4">
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      src="https://picsum.photos/246/326?random=2"
                    />
                    <div className="flex flex-col flex-grow">
                      <Link to="/news" className="hover:underline">
                        Diễn biến vụ kiện của Scarlett Johansson với Disney.
                      </Link>
                      <p className="mt-auto text-xs ">
                        1 ngày trước
                        <Link
                          to="/news"
                          className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                        >
                          Phim chiếu rạp
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex px-1 py-4">
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      src="https://picsum.photos/246/326?random=3"
                    />
                    <div className="flex flex-col flex-grow">
                      <Link to="/news" className="hover:underline">
                        Các nhà làm phim nói gì về 'kiểm duyệt' và 'lạm quyền'?
                      </Link>
                      <p className="mt-auto text-xs ">
                        2 ngày trước
                        <Link
                          to="/news"
                          className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                        >
                          Trong nước
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex px-1 py-4">
                    <img
                      alt=""
                      className="flex-shrink-0 object-cover w-20 h-20 mr-4 "
                      src="https://picsum.photos/246/326?random=4"
                    />
                    <div className="flex flex-col flex-grow">
                      <Link to="/news" className="hover:underline">
                        Cái chết của Lý Tiểu Long và sự sụp đổ dòng phim võ
                        thuật.
                      </Link>
                      <p className="mt-auto text-xs ">
                        3 ngày trước
                        <Link
                          to="/news"
                          className="block text-blue-400 lg:ml-2 lg:inline hover:underline"
                        >
                          Thế giới
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
