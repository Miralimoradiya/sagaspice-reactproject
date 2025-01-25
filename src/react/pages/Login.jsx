import React from "react";
import img1 from "../../assets/images/products/sri-sagas-turmeric-powder-1kg-front.jpg"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <div className="about-header">
              <h1>Favourite List </h1>
            </div>

            <div className="breadcrumb-one">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    Favourite
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* products  */}
      {/* product  */}
      <section className="list-page-2">
        <div className="container">
          <div className="prod-section">
            <div className="row">
              <div className="col-md-3">
                <div className="pro-text pro-text_a">
                  <Link to="productdetail">
                    <div className="pr-img">
                      <img
                        src={img1}
                        alt="Sri Sagas Turmeric Powder 1Kg"
                      />
                      <div className="list-icon pr-img-icon">
                        <a href="#" aria-label="Wishlist">
                          <svg
                            className="w-[20px] h-[20px]"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                          </svg>
                        </a>
                        <a href="#" aria-label="Compare">
                          <svg
                            className="w-[20px] h-[20px] smao-icon"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                          </svg>
                        </a>
                        <a href="#" aria-label="View Product">
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
                    </div>
                    <div className="pr-tex list-text pr-tex_a">
                      <p>
                        Sri Sagas Turmeric Powder 1Kg Pack
                        <br /> Rs. 369.00 <span>Rs. 445.00</span>
                      </p>
                      <p className="s_text">
                        Our turmeric powder is definitely something you should
                        try. It is made from natural sun-dried turmeric.
                      </p>
                    </div>
                  </Link>
                  <select className="form-control form-control_2 form-control_5 card-p opsen">
                    <option selected="" value="">
                      Select Options
                    </option>
                    <option value="350">350 Gm</option>
                    <option value="1000">1 Kg</option>
                    <option value="100">100 Gm</option>
                  </select>
                  <div className="Quantity Quantity_a list-1">
                    <p>Quantity</p>
                    <h6>
                      <a id="minus" className="plus">
                        -<span id="value">0</span>
                      </a>
                      <a id="plus" className="plus">
                        +
                      </a>
                    </h6>
                    <h5>
                      <a href="">Add to Cart</a>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="pro-text pro-text_a">
                  <Link to="/productdetail">
                    <div className="pr-img">
                      <img
                        src={img1}
                        alt="Sri Sagas Turmeric Powder 500gm"
                      />
                      <div className="list-icon pr-img-icon">
                        <a href="#" aria-label="Wishlist">
                          <svg
                            className="w-[20px] h-[20px]"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                          </svg>
                        </a>
                        <a href="#" aria-label="Compare">
                          <svg
                            className="w-[20px] h-[20px] smao-icon"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                          </svg>
                        </a>
                        <a href="#" aria-label="View Product">
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
                    </div>
                    <div className="pr-tex list-text pr-tex_a">
                      <p>
                        Sri Sagas Turmeric Powder 500gm Pack
                        <br /> Rs. 369.00 <span>Rs. 445.00</span>
                      </p>
                      <p className="s_text">
                        Our turmeric powder is definitely something you should
                        try. It is made from natural sun-dried turmeric.
                      </p>
                    </div>
                  </Link>
                  <select className="form-control form-control_2 form-control_5 card-p opsen">
                    <option selected="" value="">
                      Select Options
                    </option>
                    <option value="350">350 Gm</option>
                    <option value="500">500 Gm</option>
                    <option value="100">100 Gm</option>
                  </select>
                  <div className="Quantity Quantity_a list-1">
                    <p>Quantity</p>
                    <h6>
                      <a id="minus" className="plus">
                        -<span id="value">0</span>
                      </a>
                      <a id="plus" className="plus">
                        +
                      </a>
                    </h6>
                    <h5>
                      <a href="">Add to Cart</a>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="pro-text pro-text_a">
                  <Link to="/productdetail">
                    <div className="pr-img">
                      <img
                        src={img1}
                        alt="Sri Sagas Turmeric Powder 200gm"
                      />
                       <div className="list-icon pr-img-icon">
                        <a href="#" aria-label="Wishlist">
                          <svg
                            className="w-[20px] h-[20px]"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                          </svg>
                        </a>
                        <a href="#" aria-label="Compare">
                          <svg
                            className="w-[20px] h-[20px] smao-icon"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                          </svg>
                        </a>
                        <a href="#" aria-label="View Product">
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
                    </div>
                    <div className="pr-tex list-text pr-tex_a">
                      <p>
                        Sri Sagas Turmeric Powder 200gm Pack
                        <br /> Rs. 369.00 <span>Rs. 445.00</span>
                      </p>
                      <p className="s_text">
                        Our turmeric powder is definitely something you should
                        try. It is made from natural sun-dried turmeric.
                      </p>
                    </div>
                  </Link>
                  <select className="form-control form-control_2 form-control_5 card-p opsen">
                    <option selected="" value="">
                      Select Options
                    </option>
                    <option value="200">200 Gm</option>
                    <option value="100">100 Gm</option>
                  </select>
                  <div className="Quantity Quantity_a list-1">
                    <p>Quantity</p>
                    <h6>
                      <a id="minus" className="plus">
                        -<span id="value">0</span>
                      </a>
                      <a id="plus" className="plus">
                        +
                      </a>
                    </h6>
                    <h5>
                      <a href="">Add to Cart</a>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="pro-text pro-text_a">
                  <Link to="/productdetail">
                    <div className="pr-img">
                      <img
                        src={img1}
                        alt="Sri Sagas Turmeric Powder 100gm"
                      />
                       <div className="list-icon pr-img-icon">
                        <a href="#" aria-label="Wishlist">
                          <svg
                            className="w-[20px] h-[20px]"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                          >
                            <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                          </svg>
                        </a>
                        <a href="#" aria-label="Compare">
                          <svg
                            className="w-[20px] h-[20px] smao-icon"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                          >
                            <path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"></path>
                          </svg>
                        </a>
                        <a href="#" aria-label="View Product">
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
                    </div>
                    <div className="pr-tex list-text pr-tex_a">
                      <p>
                        Sri Sagas Turmeric Powder 100gm Pack
                        <br /> Rs. 369.00 <span>Rs. 445.00</span>
                      </p>
                      <p className="s_text">
                        Our turmeric powder is definitely something you should
                        try. It is made from natural sun-dried turmeric.
                      </p>
                    </div>
                  </Link>
                  <select className="form-control form-control_2 form-control_5 card-p opsen">
                    <option selected="" value="">
                      Select Options
                    </option>
                    <option value="100">100 Gm</option>
                  </select>
                  <div className="Quantity Quantity_a list-1">
                    <p>Quantity</p>
                    <h6>
                      <a id="minus" className="plus">
                        -<span id="value">0</span>
                      </a>
                      <a id="plus" className="plus">
                        +
                      </a>
                    </h6>
                    <h5>
                      <a href="">Add to Cart</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
