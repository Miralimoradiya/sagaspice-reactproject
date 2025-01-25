import React from "react";
import img1 from "../../assets/images/home/sri-sagas-turmeric-powder-1kg-front.jpg"
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <div className="about-header">
              <h1>Shopping Cart </h1>
            </div>

            <div className="breadcrumb-one">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    Your Shopping Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="mycart-section">
        <div className="container">
          <div className="row maycart-box r-box">
            <div className="col-md-6">
              <div className="pro-t">
                <p> Product </p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="pro-t">
                <p> Price </p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="pro-t">
                <p> Quantity </p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="pro-t pro-t1 ">
                <p> Total </p>
              </div>
            </div>
          </div>

          <div className="row maycart-box r-box1">
            <div className="col-md-6">
              <div className="pro-t pro-t-box">
                <img src={img1} />

                <p>
                  {" "}
                  Pure Organio Organic Turmeric Powder Curcumin Haldi Powder For
                  Cooking and Drinking{" "}
                </p>

                <span>Size: 350 Gm</span>

                <a href="">Remove</a>
              </div>
            </div>

            <div className="col-md-2">
              <div className="pro-t pro-t-box cart-plus1">
                <p> Rs. 329.00 </p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="cart-plus cart-plus1 Quantity">
                <h6>
                  <a id="minus" className="plus" />-<span id="value">0</span>
                  <a id="plus" className="plus">
                    +
                  </a>
                </h6>
              </div>
            </div>

            <div className="col-md-2">
              <div className="pro-t pro-t1 pro-t-box cart-plus1">
                <p> Rs. 329.00 </p>
              </div>
            </div>
          </div>

          <div className="row maycart-boxa">
            <div className="col-md-4"></div>

            <div className="col-md-4"></div>

            <div className="col-md-4">
              <div className="check-out">
                <div className="check-icon">
                  <div className="check-note">
                    <a href="">
                      <svg
                        className="w-[20px] h-[20px]"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19 19"
                      >
                        <path
                          fill="currentColor"
                          d="M17.3672 2.21875c.4453.44531.668.98437.668 1.61719 0 .60937-.2227 1.13672-.668 1.58203L4.99219 17.793l-4.007815.457H.878906c-.257812 0-.46875-.0938-.632812-.2812-.164063-.1876-.234375-.4102-.210938-.668l.457032-4.0078L12.8672.917969C13.3125.472656 13.8398.25 14.4492.25c.6328 0 1.1719.222656 1.6172.667969l1.3008 1.300781zM4.46484 16.7383l9.28126-9.28127-2.918-2.91797-9.28122 9.28124-.35157 3.2695 3.26953-.3515zM16.5938 4.60938c.2109-.21094.3164-.46875.3164-.77344 0-.32813-.1055-.59766-.3164-.8086l-1.336-1.33593c-.2109-.21094-.4805-.31641-.8086-.31641-.3047 0-.5625.10547-.7734.31641l-2.0391 2.03906 2.918 2.91797 2.0391-2.03906z"
                        ></path>
                      </svg>
                      <span>Note</span>
                    </a>
                  </div>

                  <div className="check-siping">
                    <a href="">
                      <svg
                        className="w-[22px] h-[22px]"
                        fill="currentColor"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path d="M280 192c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240zm352 192h-24V275.9c0-16.8-6.8-33.3-18.8-45.2l-83.9-83.9c-11.8-12-28.3-18.8-45.2-18.8H416V78.6c0-25.7-22.2-46.6-49.4-46.6H113.4C86.2 32 64 52.9 64 78.6V96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H96V78.6c0-8.1 7.8-14.6 17.4-14.6h253.2c9.6 0 17.4 6.5 17.4 14.6V384H207.6C193 364.7 170 352 144 352c-18.1 0-34.6 6.2-48 16.4V288H64v144c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16h195.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-488 96c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm272-320h44.1c8.4 0 16.7 3.4 22.6 9.4l83.9 83.9c.8.8 1.1 1.9 1.8 2.8H416V160zm80 320c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-96h-16.4C545 364.7 522 352 496 352s-49 12.7-63.6 32H416v-96h160v96zM256 248v-16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8z"></path>
                      </svg>
                      <span>Shipping</span>
                    </a>
                  </div>
                </div>

                <div className="check-totel">
                  <p>
                    Subtotal <span>Rs. 329.00</span>
                  </p>

                  <h6> Tax included. Shipping calculated at checkout. </h6>

                  <a href="">CHECK OUT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
