import React, { memo } from "react";
import "./HomeApp.css";
import mobile from "../../../assets/images/Mobile/mobile.png";
import slider2 from "../../../assets/images/Mobile/slide2.jpg";
import slider3 from "../../../assets/images/Mobile/slide3.jpg";
import slider4 from "../../../assets/images/Mobile/slide4.jpg";
import slider5 from "../../../assets/images/Mobile/slide5.jpg";
import slider7 from "../../../assets/images/Mobile/slide7.jpg";
import slider9 from "../../../assets/images/Mobile/slide9.jpg";
import slider10 from "../../../assets/images/Mobile/slide10.jpg";
import slider11 from "../../../assets/images/Mobile/slide11.jpg";
import Slider from "react-slick";

function HomeApp() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="app py-24">
      <div className="w-3/4 m-auto">
        <div className="md:grid md:grid-cols-2 md:gap-3">
          <div className="py-10 lg:pt-16">
            <p className="text-white md:text-2xl lg:text-4xl leading-normal mb-8">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </p>
            <span className="text-white lg:text-base block mb-8">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </span>
            <button
              class="bg-pink-color py-2 lg:py-3 px-4 lg:px-6 rounded-md text-white md: lg:text-base"
              onclick="window.open('https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8','_blank');"
            >
              App miễn phí - Tải về ngay!
            </button>
            <p class="mt-2">
              TIX có hai phiên bản
              <a
                class="tagA"
                target="_blank"
                href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
              >
                &nbsp; iOS
              </a>
              &nbsp;&amp;&nbsp;
              <a
                class="tagA"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                Android
              </a>
            </p>
          </div>
          <div className="mobile relative p-0">
            <img src={mobile} alt="" style={{ padding: "0 28%" }} />

            <Slider {...settings}>
              <img src={slider2} />
              <img src={slider3} />
              <img src={slider4} />
              <img src={slider5} />
              <img src={slider7} />
              <img src={slider9} />
              <img src={slider10} />
              <img src={slider11} />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HomeApp);
