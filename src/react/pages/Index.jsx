import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/css/swiper.min.css";
import "../../assets/css/swiper-bundle.min.css";
import { FaStar } from "react-icons/fa";
import banner1 from "../../assets/images/banner/Sri-Sagas-Banner.jpg";
import banner2 from "../../assets/images/banner/Sri-Sagas-BannerA.jpg";
import why1 from "../../assets/images/home/1.png";
import why2 from "../../assets/images/home/No_Chemicals_Pesticides_180x.png";
import why3 from "../../assets/images/home/Preserves_the_Environment_180x.png";
import why4 from "../../assets/images/home/Certified_Organic_Sources_180x.png";
import featuredproduct1 from "../../assets/images/products/sri-sagas-coriander-powder-1kg-front.jpg";
import featuredproduct2 from "../../assets/images/products/sri-sagas-red-chilli-powder-medium-1kg-front.jpg";
import featuredproduct3 from "../../assets/images/products/sri-sagas-turmeric-powder-1kg-front.jpg";
import featuredproduct4 from "../../assets/images/products/sri-sagas-coriander-powder-1kg-front.jpg";
import newssec1 from "../../assets/images/home/Pureorganio_forbes_india_540x.jpg";
import newssec2 from "../../assets/images/home/Pureorganio_silicon_startups_540x.jpg";
import shooping1 from "../../assets/images/home/shopping-cart_180x.png";
import shooping2 from "../../assets/images/home/delivery-truck_180x.png";
import shooping3 from "../../assets/images/home/credit-card_180x.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={banner1} className="d-block w-100" alt="Banner 1" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="Banner 2" />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      {/* why section  */}
      <section className="why-section">
        <div className="container">
          <div className="why-hed">
            <h2>Why Sri Sagas Spices?</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="why-text">
                <img src={why1} alt="High Nutritional Value" />
                <p>
                  High Nutritional <br />
                  Value
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="why-text">
                <img src={why2} alt="No Chemicals & Pesticides" />
                <p>
                  No Chemicals <br /> & Pesticides
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="why-text">
                <img src={why3} alt="Preserves the Environment" />
                <p>
                  Preserves the <br />
                  Environment
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="why-text">
                <img src={why4} alt="Certified Organic Sources" />
                <p>
                  Certified Organic <br />
                  Sources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-section pro-section">
        <div className="container">
          <div className="why-hed">
            <h2>Featured Products</h2>
          </div>
          <div className="prod-section">
            <div className="products-box">
              <div className="pro-text">
                <Link to="/productdetail">
                  <div className="pr-img">
                    <img
                      src={featuredproduct1}
                      alt="Sri Sagas Coriander Powder 1Kg"
                    />
                    <div className="list-icon pr-img-icon">
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px] smao-icon"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M569.354 231.631C512.969 135.948 407.808 72 288 72 168.14 72 63.004 135.994 6.646 231.63a47.999 47.999 0 0 0 0 48.739C63.032 376.053 168.192 440 288 440c119.86 0 224.996-63.994 281.354-159.631a48.002 48.002 0 0 0 0-48.738zM416 228c0 68.483-57.308 124-128 124s-128-55.517-128-124 57.308-124 128-124 128 55.517 128 124zm125.784 36.123C489.837 352.277 393.865 408 288 408c-106.291 0-202.061-56.105-253.784-143.876a16.006 16.006 0 0 1 0-16.247c29.072-49.333 73.341-90.435 127.66-115.887C140.845 158.191 128 191.568 128 228c0 85.818 71.221 156 160 156 88.77 0 160-70.178 160-156 0-36.411-12.833-69.794-33.875-96.01 53.76 25.189 98.274 66.021 127.66 115.887a16.006 16.006 0 0 1-.001 16.246zM224 224c0-10.897 2.727-21.156 7.53-30.137v.02c0 14.554 11.799 26.353 26.353 26.353 14.554 0 26.353-11.799 26.353-26.353s-11.799-26.353-26.353-26.353h-.02c8.981-4.803 19.24-7.53 30.137-7.53 35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="butn-hov">
                      <a href="#">Select Options</a>
                    </div>
                  </div>
                  <div className="pr-tex">
                    <p>
                      Sri Sagas Coriander Powder 1Kg Pack
                      <br />
                      Rs. 369.00 <span>Rs. 445.00</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="products-box">
              <div className="pro-text">
                <Link to="/productdetail">
                  <div className="pr-img">
                    <img
                      src={featuredproduct2}
                      alt="Sri Sagas Red Chilli Powder Medium 1Kg"
                    />
                    <div className="list-icon pr-img-icon">
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px] smao-icon"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M569.354 231.631C512.969 135.948 407.808 72 288 72 168.14 72 63.004 135.994 6.646 231.63a47.999 47.999 0 0 0 0 48.739C63.032 376.053 168.192 440 288 440c119.86 0 224.996-63.994 281.354-159.631a48.002 48.002 0 0 0 0-48.738zM416 228c0 68.483-57.308 124-128 124s-128-55.517-128-124 57.308-124 128-124 128 55.517 128 124zm125.784 36.123C489.837 352.277 393.865 408 288 408c-106.291 0-202.061-56.105-253.784-143.876a16.006 16.006 0 0 1 0-16.247c29.072-49.333 73.341-90.435 127.66-115.887C140.845 158.191 128 191.568 128 228c0 85.818 71.221 156 160 156 88.77 0 160-70.178 160-156 0-36.411-12.833-69.794-33.875-96.01 53.76 25.189 98.274 66.021 127.66 115.887a16.006 16.006 0 0 1-.001 16.246zM224 224c0-10.897 2.727-21.156 7.53-30.137v.02c0 14.554 11.799 26.353 26.353 26.353 14.554 0 26.353-11.799 26.353-26.353s-11.799-26.353-26.353-26.353h-.02c8.981-4.803 19.24-7.53 30.137-7.53 35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="butn-hov">
                      <a href="#">Select Options</a>
                    </div>
                  </div>
                  <div className="pr-tex">
                    <p>
                      Sri Sagas Red Chilli Powder Medium 1Kg Pack
                      <br />
                      Rs. 369.00 <span>Rs. 445.00</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="products-box">
              <div className="pro-text">
                <Link to="/productdetail">
                  <div className="pr-img">
                    <img
                      src={featuredproduct3}
                      alt="Sri Sagas Turmeric Powder 1Kg"
                    />
                    <div className="list-icon pr-img-icon">
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px] smao-icon"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M569.354 231.631C512.969 135.948 407.808 72 288 72 168.14 72 63.004 135.994 6.646 231.63a47.999 47.999 0 0 0 0 48.739C63.032 376.053 168.192 440 288 440c119.86 0 224.996-63.994 281.354-159.631a48.002 48.002 0 0 0 0-48.738zM416 228c0 68.483-57.308 124-128 124s-128-55.517-128-124 57.308-124 128-124 128 55.517 128 124zm125.784 36.123C489.837 352.277 393.865 408 288 408c-106.291 0-202.061-56.105-253.784-143.876a16.006 16.006 0 0 1 0-16.247c29.072-49.333 73.341-90.435 127.66-115.887C140.845 158.191 128 191.568 128 228c0 85.818 71.221 156 160 156 88.77 0 160-70.178 160-156 0-36.411-12.833-69.794-33.875-96.01 53.76 25.189 98.274 66.021 127.66 115.887a16.006 16.006 0 0 1-.001 16.246zM224 224c0-10.897 2.727-21.156 7.53-30.137v.02c0 14.554 11.799 26.353 26.353 26.353 14.554 0 26.353-11.799 26.353-26.353s-11.799-26.353-26.353-26.353h-.02c8.981-4.803 19.24-7.53 30.137-7.53 35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="butn-hov">
                      <a href="#">Select Options</a>
                    </div>
                  </div>
                  <div className="pr-tex">
                    <p>
                      Sri Sagas Turmeric Powder 1Kg Pack
                      <br />
                      Rs. 249.00 <span>Rs. 299.00</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="products-box">
              <div className="pro-text">
                <Link to="/productdetail">
                  <div className="pr-img">
                    <img
                      src={featuredproduct4}
                      alt="Sri Sagas Coriander Powder 1Kg"
                    />
                    <div className="list-icon pr-img-icon">
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px] smao-icon"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M569.354 231.631C512.969 135.948 407.808 72 288 72 168.14 72 63.004 135.994 6.646 231.63a47.999 47.999 0 0 0 0 48.739C63.032 376.053 168.192 440 288 440c119.86 0 224.996-63.994 281.354-159.631a48.002 48.002 0 0 0 0-48.738zM416 228c0 68.483-57.308 124-128 124s-128-55.517-128-124 57.308-124 128-124 128 55.517 128 124zm125.784 36.123C489.837 352.277 393.865 408 288 408c-106.291 0-202.061-56.105-253.784-143.876a16.006 16.006 0 0 1 0-16.247c29.072-49.333 73.341-90.435 127.66-115.887C140.845 158.191 128 191.568 128 228c0 85.818 71.221 156 160 156 88.77 0 160-70.178 160-156 0-36.411-12.833-69.794-33.875-96.01 53.76 25.189 98.274 66.021 127.66 115.887a16.006 16.006 0 0 1-.001 16.246zM224 224c0-10.897 2.727-21.156 7.53-30.137v.02c0 14.554 11.799 26.353 26.353 26.353 14.554 0 26.353-11.799 26.353-26.353s-11.799-26.353-26.353-26.353h-.02c8.981-4.803 19.24-7.53 30.137-7.53 35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="butn-hov">
                      <a href="#">Select Options</a>
                    </div>
                  </div>
                  <div className="pr-tex">
                    <p>
                      Sri Sagas Coriander Powder 1Kg Pack
                      <br />
                      Rs. 359.00 <span>Rs. 399.00</span>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="products-box">
              <div className="pro-text">
                <a href="product-details.php">
                  <div className="pr-img">
                    <img
                      src={featuredproduct3}
                      alt="Sri Sagas Turmeric Powder 1Kg"
                    />
                    <div className="list-icon pr-img-icon">
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px] smao-icon"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                        </svg>
                      </a>
                      <a href="#">
                        <svg
                          className="w-[20px] h-[20px]"
                          fill="currentColor"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M569.354 231.631C512.969 135.948 407.808 72 288 72 168.14 72 63.004 135.994 6.646 231.63a47.999 47.999 0 0 0 0 48.739C63.032 376.053 168.192 440 288 440c119.86 0 224.996-63.994 281.354-159.631a48.002 48.002 0 0 0 0-48.738zM416 228c0 68.483-57.308 124-128 124s-128-55.517-128-124 57.308-124 128-124 128 55.517 128 124zm125.784 36.123C489.837 352.277 393.865 408 288 408c-106.291 0-202.061-56.105-253.784-143.876a16.006 16.006 0 0 1 0-16.247c29.072-49.333 73.341-90.435 127.66-115.887C140.845 158.191 128 191.568 128 228c0 85.818 71.221 156 160 156 88.77 0 160-70.178 160-156 0-36.411-12.833-69.794-33.875-96.01 53.76 25.189 98.274 66.021 127.66 115.887a16.006 16.006 0 0 1-.001 16.246zM224 224c0-10.897 2.727-21.156 7.53-30.137v.02c0 14.554 11.799 26.353 26.353 26.353 14.554 0 26.353-11.799 26.353-26.353s-11.799-26.353-26.353-26.353h-.02c8.981-4.803 19.24-7.53 30.137-7.53 35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64z"></path>
                        </svg>
                      </a>
                    </div>
                    <div className="butn-hov">
                      <a href="#">Select Options</a>
                    </div>
                  </div>
                  <div className="pr-tex">
                    <p>
                      Sri Sagas Turmeric Powder 1Kg Pack
                      <br />
                      Rs. 249.00 <span>Rs. 299.00</span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news section  */}
      <section className="new-section">
        <div className="container">
          <div className="why-hed">
            <h2>Sri Sagas In News</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="high-text">
                <div className="high-img">
                  <img src={newssec1} alt="Forbes India" />
                </div>
                <div className="high-detal">
                  <h3>Forbes India</h3>
                  <p>
                    How an Indian start-up pure organio is driving indians
                    towards 'Rurban' Living.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="high-text">
                <div className="high-img">
                  <img src={newssec2} alt="SiliconIndia Startup" />
                </div>
                <div className="high-detal">
                  <h3>SiliconIndia Startup</h3>
                  <p>
                    Pure Organio Transforming the Indian Spices Ecosystem by
                    Delivering Pure Organic Spices at Your Doorstep.
                  </p>
                  <a href="">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimoni section  */}
      <section className="testimoni-section ">
        <div className="container">
          <div className="why-hed">
            <h2>What People Are Saying</h2>
          </div>
          <Swiper
            className="ind-slider"
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: {
                slidesPerView: 1, // 1 slide on small screens
              },
              768: {
                slidesPerView: 2, // 2 slides on medium screens
              },
              1024: {
                slidesPerView: 2, // 2 slides on larger screens
              },
            }}
          >
            <SwiperSlide>
              <div className="test-box">
                <div>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <h5>Very happy with PureOrganio</h5>
                <p>
                  Post Covid19/Corona I have been looking for a proper online
                  seller of organic products and finally I have found the right
                  one. Very happy with PureOrganio.com. I ordered a bunch of
                  products from them, from organic tea to organic ginger, very
                  much satisfied with what I got. High quality, 100% organic,
                  and quick delivery despite the lockdown. Highly recommended.
                </p>
                <h6>Raghav Hegde</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-box">
                <div>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <h5>Nice experience with your products</h5>
                <p>
                  Nice experience with your products. It was a really nice
                  experience with your products. I did not think I would go for
                  organic, but your products seemed very attractive and the
                  packaging was too appealing, and so was the flavor. I would
                  love to recommend it to all of my friends. Thank you for your
                  service and thoughtfully crafted delivery. Loved it!!!
                </p>
                <h6>Sunaina Varma</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-box">
                <div>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <h5>Very happy with PureOrganio</h5>
                <p>
                  Post Covid19/Corona I have been looking for a proper online
                  seller of organic products and finally I have found the right
                  one. Very happy with PureOrganio.com. I ordered a bunch of
                  products from them, from organic tea to organic ginger, very
                  much satisfied with what I got. High quality, 100% organic,
                  and quick delivery despite the lockdown. Highly recommended.
                </p>
                <h6>Raghav Hegde</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-box">
                <div>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <h5>Nice experience with your products</h5>
                <p>
                  Nice experience with your products. It was a really nice
                  experience with your products. I did not think I would go for
                  organic, but your products seemed very attractive and the
                  packaging was too appealing, and so was the flavor. I would
                  love to recommend it to all of my friends. Thank you for your
                  service and thoughtfully crafted delivery. Loved it!!!
                </p>
                <h6>Sunaina Varma</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* cart section  */}
      <section className="cart-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="cart-text">
                <img src={shooping1} alt="Shopping Cart" />
                <h5>Free Shipping</h5>
                <p>You Can Avail Free Shipping At No Minimum Order.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cart-text">
                <img src={shooping2} alt="Delivery Truck" />
                <h5>Fast Delivery</h5>
                <p>Same Day Dispatch* Through Blue Dart</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cart-text">
                <img src={shooping3} alt="Credit Card" />
                <h5>100% Secured Pay</h5>
                <p>We Use Secured Payment Of PayU Money</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
