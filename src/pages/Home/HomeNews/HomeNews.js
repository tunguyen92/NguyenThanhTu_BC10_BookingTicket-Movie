import React, { memo } from "react";
import ads from "../../../assets/images/ads.png";
import actress from "../../../assets/images/park-bo-young.jpg";

function HomeNews() {
  return (
    <div className="news bg-dark-color">
      <div className="container mx-auto py-8 px-5 lg:p-16 ">
        <img src={ads} alt="" className="w-7/12 mb-10" />
        <div className="grid grid-cols-3 gap-4 m-10">
          <div className="col-span-2">
            <h3 className="text-white text-sm sm:text-lg md:text-2xl mb-10">
              TIN TỨC
            </h3>
            <div className="content sm:flex pr-9 w-full mb-14">
              <img src={actress} alt="" className="rounded mr-7 w-1/3 h-full" />
              <div>
                <h3 className="mb-4 text-justify">
                  <a
                    className=" title-color text-xs sm:text-sm md:text-lg"
                    href="https://docbao.vn/dep/nhung-my-nhan-han-hack-tuoi-than-sau-song-hye-kyo-than-thai-cuon-hut-park-bo-young-tua-nu-sinh-cap-3-tintuc778908"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Những mỹ nhân Hàn “hack tuổi thần sầu”: Song Hye Kyo thần
                    thái cuốn hút, Park Bo Young tựa nữ sinh cấp 3
                  </a>
                </h3>
                <span className="text-xs text-gray-400">9 giờ trước</span>
                <p className="mt-4 text-justify text-xs sm:text-sm">
                  <span className="title-color">Park Bo Young </span> là một
                  “hiện tượng” lão hóa ngược của K-biz. Với sự nghiệp phim đồ
                  sộ, thời gian vào nghề hơn 10 năm nhưng cô nàng 31 tuổi vẫn
                  khiến khán giả ngạc nhiên bởi nhan sắc dường như không hề thay
                  đổi theo...
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-xs sm:text-sm md:text-lg">
                  Xem thêm
                </h3>
                <a
                  className="text-xs sm:text-sm text-gray-300"
                  href="https://zingnews.vn/phim-anh.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  XEM TẤT CẢ TIN TỨC
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1 inline-block"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex">
                <div>
                  <div className="mr-4 mb-7 pr-4">
                    <h6 className="text-xs">
                      <a
                        className=" title-color text-xs sm:text-sm md:text-lg"
                        href="https://zingnews.vn/will-smith-wild-wild-west-la-phim-do-nhat-cua-toi-post1268044.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Will Smith: “Wild Wild West là phim dở nhất của tôi”
                      </a>
                    </h6>
                    <span className="text-xs text-gray-400">9 giờ trước</span>
                  </div>
                  <div className="mr-4 mb-7 pr-4">
                    <h6 className="text-xs">
                      <a
                        className=" title-color text-xs sm:text-sm md:text-lg"
                        href="https://zingnews.vn/canh-phim-co-su-xuat-hien-cua-400000-nguoi-an-do-post1267970.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Cảnh phim có sự xuất hiện của 400.000 người Ấn Độ
                      </a>
                    </h6>
                    <span className="text-xs text-gray-400">9 giờ trước</span>
                  </div>
                </div>
                <div>
                  <div className="mr-4 mb-7 pr-4">
                    <h6 className="text-xs">
                      <a
                        className=" title-color text-xs sm:text-sm md:text-lg"
                        href="https://zingnews.vn/khan-gia-phan-ung-khi-thanos-bi-giet-de-dang-trong-what-if-post1267637.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Khán giả phản ứng khi Thanos bị giết dễ dàng trong “What
                        If...?”
                      </a>
                    </h6>
                    <span className="text-xs text-gray-400">9 giờ trước</span>
                  </div>
                  <div className="mr-4 mb-7 pr-4">
                    <h6 className="text-xs">
                      <a
                        className=" title-color text-xs sm:text-sm md:text-lg"
                        href="https://zingnews.vn/vu-tru-marvel-doi-mat-nguy-co-mat-ban-quyen-hang-loat-sieu-anh-hung-post1266957.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Vũ trụ Marvel đối mặt nguy cơ mất bản quyền hàng loạt
                        siêu anh hùng
                      </a>
                    </h6>
                    <span className="text-xs text-gray-400">9 giờ trước</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ml-2 sm:ml-5 md:ml-16 mt-10">
            <h3 className="text-white text-xs md:text-xs mb-10">QUẢNG CÁO</h3>
            <p>Chỗ này là quảng cáo, thích thì đặt không thích thì đặt...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HomeNews);
