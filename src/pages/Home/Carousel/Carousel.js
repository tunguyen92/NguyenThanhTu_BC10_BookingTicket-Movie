import { CaretRightOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "animate.css";
import { Modal } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import icon1 from "../../../assets/images/Carousel/icon1.png";
import icon2 from "../../../assets/images/Carousel/icon2.png";
import icon3 from "../../../assets/images/Carousel/icon3.png";
import icon4 from "../../../assets/images/Carousel/icon4.png";
import slider1 from "../../../assets/images/Carousel/slider1.jpg";
import slider2 from "../../../assets/images/Carousel/slider2.jpg";
import slider3 from "../../../assets/images/Carousel/slider3.jpg";
import "./Carousel.css";

export default function HomeCarousel() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [state, setState] = useState({
    activeSlide: 0,
    activeSlide2: 0,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    beforeChange: (current, next) => setState({ activeSlide: next }),
    afterChange: (current) => setState({ activeSlide2: current }),
  };

  return (
    <div className="carousel cursor-pointer">
      <Slider {...settings}>
        <div className="relative">
          <img src={slider1} className="lg:h-screen w-full " alt="slider1" />
          {state.activeSlide2 === 0 && (
            <div className="hidden md:block">
              <ul class="subtitle  animate__animated animate__bounceInRight">
                <li>Hành động</li>
                <li>Khoa học viễn tưởng</li>
                <li>Siêu anh hùng</li>
              </ul>
              <p className="title animate__animated animate__bounceInRight ">
                MAN OF STEEL
              </p>
              <div class="slide_right animate__animated animate__bounceInRight">
                <NavLink
                  to=""
                  onClick={() => setIsModalVisible(true)}
                  class="btn-trailer text-white text-xl mr-10"
                >
                  <CaretRightOutlined className="yellow-color mr-3 text-2xl align-middle pb-4" />
                  XEM TRAILER
                </NavLink>
                <NavLink
                  to="/detail/9387"
                  class="btn-ticket text-white text-xl"
                >
                  <ShoppingCartOutlined className="yellow-color mr-3 text-2xl align-middle pb-4" />
                  ĐẶT VÉ
                </NavLink>
                <ul class="award-logo flex pt-14 opacity-60">
                  <li>
                    <img src={icon1} alt="icon" />
                  </li>
                  <li>
                    <img src={icon2} alt="icon" />
                  </li>
                  <li>
                    <img src={icon3} alt="icon" />
                  </li>
                  <li>
                    <img src={icon4} alt="icon" />
                  </li>
                </ul>
              </div>
              <div class="chart-cirle">
                <div class="chart-circle-l animate__animated animate__bounceInUp mr-16">
                  <div class="circle-chart">
                    <div class="c100 carousel p72">
                      <span className="text-center">7.2</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </div>
                  <span className="pl-2">Đánh giá IMDb</span>
                </div>
                <div class="chart-circle-r  animate__animated animate__bounceInUp">
                  <div class="circle-chart">
                    <div class="c100 carousel p74">
                      <span className="text-center">7.4</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </div>
                  <span className="pl-2">Đánh giá Rotten</span>
                </div>
              </div>
              <Modal
                visible={isModalVisible}
                footer={null}
                onCancel={() => setIsModalVisible(false)}
                bodyStyle={{ padding: "0" }}
                width={1000}
                key={1}
              >
                <iframe
                  style={{ width: "100%", height: "500px" }}
                  src="https://www.youtube.com/embed/T6DJcgm3wNY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Modal>
            </div>
          )}
        </div>
        <div className="relative">
          <img src={slider2} className="lg:h-screen w-full " alt="slider2" />
          {state.activeSlide2 === 1 && (
            <div className="hidden md:block">
              <ul class="subtitle  animate__animated animate__bounceInRight">
                <li>Hành động</li>
                <li>Khoa học viễn tưởng</li>
                <li>Phiêu lưu</li>
              </ul>
              <p className="title animate__animated animate__bounceInRight ">
                AQUAMAN
              </p>
              <div class="slide_right animate__animated animate__bounceInRight">
                <NavLink
                  to=""
                  onClick={() => setIsModalVisible(true)}
                  class="btn-trailer text-white text-xl mr-10"
                >
                  <CaretRightOutlined className="yellow-color mr-3 text-2xl align-middle pb-4" />
                  XEM TRAILER
                </NavLink>
                <NavLink
                  to="/detail/9389"
                  class="btn-ticket text-white text-xl"
                >
                  <ShoppingCartOutlined className="yellow-color mr-3 text-2xl align-middle pb-4" />
                  ĐẶT VÉ
                </NavLink>
                <ul class="award-logo flex pt-14 opacity-60">
                  <li>
                    <img src={icon1} alt="icon" />
                  </li>
                  <li>
                    <img src={icon2} alt="icon" />
                  </li>
                  <li>
                    <img src={icon3} alt="icon" />
                  </li>
                  <li>
                    <img src={icon4} alt="icon" />
                  </li>
                </ul>
              </div>
              <div class="chart-cirle">
                <div class="chart-circle-l animate__animated animate__bounceInUp mr-16">
                  <div class="circle-chart">
                    <div class="c100 carousel p69">
                      <span className="text-center">6.9</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </div>
                  <span className="pl-2">Đánh giá IMDb</span>
                </div>
                <div class="chart-circle-r  animate__animated animate__bounceInUp">
                  <div class="circle-chart">
                    <div class="c100 carousel p64">
                      <span className="text-center">6.4</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </div>
                  <span className="pl-2">Đánh giá Rotten</span>
                </div>
              </div>
              <Modal
                visible={isModalVisible}
                footer={null}
                onCancel={() => setIsModalVisible(false)}
                bodyStyle={{ padding: "0" }}
                width={1000}
                key={2}
              >
                <iframe
                  style={{ width: "100%", height: "500px" }}
                  src="https://www.youtube.com/embed/2wcj6SrX4zw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Modal>
            </div>
          )}
        </div>
        <div className="relative">
          <img src={slider3} className="lg:h-screen w-full " alt="slider3" />
          {state.activeSlide2 === 2 && (
            <div className="hidden md:block">
              <ul class="subtitle  animate__animated animate__bounceInRight">
                <li>Phiêu lưu</li>
                <li>Sử thi</li>
                <li>Khoa học viễn tưởng</li>
              </ul>
              <p className="title animate__animated animate__bounceInRight ">
                AVATAR 2
              </p>
              <div class="slide_right animate__animated animate__bounceInRight">
                <NavLink
                  to=""
                  onClick={() => setIsModalVisible(true)}
                  class="btn-trailer text-white text-xl mr-10"
                >
                  <CaretRightOutlined className="yellow-color mr-3 text-2xl align-middle pb-4" />
                  XEM TRAILER
                </NavLink>
                <NavLink
                  to="/detail/9390"
                  class="btn-ticket text-white text-xl"
                >
                  <ShoppingCartOutlined className="yellow-color mr-3 text-2xl align-middle pb-4" />
                  ĐẶT VÉ
                </NavLink>
                <ul class="award-logo flex pt-14 opacity-60">
                  <li>
                    <img src={icon1} alt="icon" />
                  </li>
                  <li>
                    <img src={icon2} alt="icon" />
                  </li>
                  <li>
                    <img src={icon3} alt="icon" />
                  </li>
                  <li>
                    <img src={icon4} alt="icon" />
                  </li>
                </ul>
              </div>
              <div class="chart-cirle">
                <div class="chart-circle-l animate__animated animate__bounceInUp mr-16">
                  <div class="circle-chart">
                    <div class="c100 carousel p93">
                      <span className="text-center">9.3</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </div>
                  <span className="pl-2">Đánh giá IMDb</span>
                </div>
                <div class="chart-circle-r  animate__animated animate__bounceInUp">
                  <div class="circle-chart">
                    <div class="c100 carousel p97">
                      <span className="text-center">9.7</span>
                      <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                      </div>
                    </div>
                  </div>
                  <span className="pl-2">Đánh giá Rotten</span>
                </div>
              </div>
              <Modal
                visible={isModalVisible}
                footer={null}
                onCancel={() => setIsModalVisible(false)}
                bodyStyle={{ padding: "0" }}
                width={1000}
                key={3}
              >
                <iframe
                  style={{ width: "100%", height: "500px" }}
                  src="https://www.youtube.com/embed/AxLH0lXEGAY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Modal>
            </div>
          )}
        </div>
      </Slider>
    </div>
  );
}
