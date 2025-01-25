import React from "react";
import myorder1 from "../../assets/images/products/sri-sagas-coriander-powder-1kg-front.jpg";
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <>
      <div>
        <section className="about-section">
          <div className="container">
            <div className="about-text">
              <div className="about-header about-header_a">
                <h1>My Account</h1>
              </div>

              <div className="breadcrumb-one">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>

                    <li className="breadcrumb-item active" aria-current="page">
                      {" "}
                      My Account
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* section 2  */}
      <div className="container">
        <div className="payment-method chak">
          <div className="checkout-header-block">
            <div className="checkout-title-block">
              <h1>Checkout</h1>
            </div>

            <div className="checkout-steps-block">
              <ul id="progressbar" className="nav mb-3 ftab" role="tablist">
                <li className="active check">
                  <a
                    className="nav-link NEWS-one active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#one"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Shipping
                  </a>
                </li>

                <li className="active">
                  <a
                    className="nav-link NEWS-one"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#two"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Payment
                  </a>
                </li>

                <li>
                  <a
                    className="nav-link NEWS-one"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#three"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Order
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* section 3  */}
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade news-text-two show active"
          id="one"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <section className="account-section">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className="account-link">
                    <div className="nev-section" id="exTab1">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link NEWS-one active"
                            id="pills-home-tab"
                            data-toggle="pill"
                            href="#link1"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                          >
                            My Account
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link NEWS-one"
                            id="pills-profile-tab"
                            data-toggle="pill"
                            href="#link2"
                            role="tab"
                            aria-controls="pills-profile"
                            aria-selected="false"
                          >
                            My Addresses
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link NEWS-one"
                            id="pills-contact-tab"
                            data-toggle="pill"
                            href="#link3"
                            role="tab"
                            aria-controls="pills-contact"
                            aria-selected="false"
                          >
                            My Orders
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link NEWS-one"
                            id="pills-stocks-tab"
                            data-toggle="pill"
                            href="#link4"
                            role="tab"
                            aria-controls="pills-stocks"
                            aria-selected="false"
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade news-text-two show active"
                      id="link1"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="from-sec why-nature-hed stuffed-hed">
                        <h2>Fill out the form below</h2>
                        <form
                          className="get-contact-form"
                          id="contact_form"
                          name="contact_form"
                          method="post"
                        >
                          <input
                            type="hidden"
                            name="r_from"
                            value="Contact Page Enquiry"
                          />
                          <div className="row row-2">
                            <div className="col-6">
                              <label>First Name</label>
                              <input
                                type="text"
                                className="form-control form-control_2 form-control_5"
                                name="firstName"
                                id="firstName"
                                required
                              />
                            </div>
                            <div className="col-6">
                              <label>Last Name</label>
                              <input
                                type="text"
                                className="form-control form-control_2 form-control_5"
                                name="lastName"
                                id="lastName"
                                required
                              />
                            </div>
                            <div className="col-6">
                              <label>E-mail Address</label>
                              <input
                                type="email"
                                className="form-control form-control_2 form-control_5"
                                name="email"
                                id="email"
                                required
                              />
                            </div>
                            <div className="col-6">
                              <label>Mobile No</label>
                              <input
                                type="text"
                                className="form-control form-control_2 form-control_5"
                                name="mobile"
                                id="mobile"
                                required
                              />
                            </div>
                          </div>
                          <div className="submit send-us submit5 sendsub">
                            <button
                              type="submit"
                              className="btn-1 btn-5 button-box contact_form_submit-1"
                            >
                              Update Profile
                            </button>
                          </div>
                          <div id="contact_form_msg_box" className="mt-3"></div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="link2"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="aad2">
                        <div className="myadd-hed why-nature-hed stuffed-hed">
                          <h2>My Address</h2>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="myadd-box">
                              <p>
                                1, ABC, Ghatkopar East, Pant Nagar, Ghatkopar
                                Mumbai
                              </p>
                              <div className="add-delet">
                                <a href="#">
                                  <i className="fas fa-pen"></i>
                                </a>
                                <a href="#">
                                  <i className="far fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="myadd-box">
                              <p>
                                1, ABC, Ghatkopar East, Pant Nagar, Ghatkopar
                                Mumbai
                              </p>
                              <div className="add-delet">
                                <a href="#">
                                  <i className="fas fa-pen"></i>
                                </a>
                                <a href="#">
                                  <i className="far fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="new-add">
                            <a
                              data-toggle="modal"
                              href="javascript:void(0);"
                              data-target=".bd-example-modal-lgadd"
                            >
                              <i className="fas fa-plus"></i> Add New Address
                            </a>
                          </div>
                          <div className="add-addre">
                            <div className="myadd-hed why-nature-hed stuffed-hed">
                              <h2>Add New Address</h2>
                            </div>
                            <form
                              className="get-contact-form"
                              id="add_address_form"
                              name="add_address_form"
                              method="post"
                            >
                              <input
                                type="hidden"
                                name="r_from"
                                value="Contact Page Enquiry"
                              />
                              <div className="row row-2">
                                <div className="col-6">
                                  <label>Address Line 1</label>
                                  <input
                                    type="text"
                                    className="form-control form-control_2 form-control_5"
                                    name="addressLine1"
                                    id="addressLine1"
                                    required
                                  />
                                </div>
                                <div className="col-6">
                                  <label>Address Line 2</label>
                                  <input
                                    type="text"
                                    className="form-control form-control_2 form-control_5"
                                    name="addressLine2"
                                    id="addressLine2"
                                    required
                                  />
                                </div>
                                <div className="col-6">
                                  <label>Area</label>
                                  <input
                                    type="text"
                                    className="form-control form-control_2 form-control_5"
                                    name="area"
                                    id="area"
                                    required
                                  />
                                </div>
                                <div className="col-6">
                                  <label>Mobile</label>
                                  <input
                                    type="number"
                                    className="form-control form-control_2 form-control_5"
                                    name="mobile"
                                    id="mobile"
                                    required
                                  />
                                </div>
                                <div className="col-6">
                                  <label>State</label>
                                  <input
                                    type="text"
                                    className="form-control form-control_2 form-control_5"
                                    name="state"
                                    id="state"
                                    required
                                  />
                                </div>
                                <div className="col-6">
                                  <label>City</label>
                                  <input
                                    type="text"
                                    className="form-control form-control_2 form-control_5"
                                    name="city"
                                    id="city"
                                    required
                                  />
                                </div>
                                <div className="col-6">
                                  <label>Pincode</label>
                                  <input
                                    type="number"
                                    className="form-control form-control_2 form-control_5"
                                    name="pincode"
                                    id="pincode"
                                    required
                                  />
                                </div>
                                <div className="col-6"></div>
                                <div className="col-6">
                                  <input
                                    type="checkbox"
                                    className="form-controla"
                                    name="billingSameAsShipping"
                                    id="billingSameAsShipping"
                                  />
                                  <label htmlFor="billingSameAsShipping">
                                    Billing Address same as shipping address
                                  </label>
                                </div>
                              </div>
                              <div className="submit send-us submit5">
                                <button
                                  type="submit"
                                  className="btn-1 btn-2 button-box contact_form_submit-1"
                                >
                                  ADD ADDRESS
                                </button>
                              </div>
                              <div
                                id="contact_form_msg_box"
                                className="mt-3"
                              ></div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="link3"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="why-nature-hed stuffed-hed">
                        <h2>My Orders</h2>
                      </div>

                      <div className="orders-sec">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="order-box1">
                              <div className="order-img">
                                <img
                                  src={myorder1}
                                  alt="Order Item"
                                />
                              </div>

                              <div className="order-text1">
                                <h5>Order No-GG/256</h5>
                                <span>3 items</span>
                                <p>ordered on 27-may-22</p>
                              </div>

                              <div className="scart-1 odbox od-1">
                                <img
                                  src={myorder1}
                                  alt="Product"
                                />
                                <div className="cart-pdetal">
                                  <h3>
                                    Pure Organio Organic Turmeric Powder
                                    Curcumin Haldi Powder For Cooking and
                                    Drinking
                                  </h3>
                                  <h4>Size: 350 Gm</h4>
                                  <div className="Quantity Quantity_a Quantity_b">
                                    <p>Quantity - 2</p>
                                  </div>
                                </div>
                                <div className="cart-pdetal_a">
                                  <h3>Rs. 329.00</h3>
                                </div>
                              </div>

                              <div className="scart-1 odbox">
                                <img
                                  src={myorder1}
                                  alt="Product"
                                />
                                <div className="cart-pdetal">
                                  <h3>
                                    Pure Organio Organic Turmeric Powder
                                    Curcumin Haldi Powder For Cooking and
                                    Drinking
                                  </h3>
                                  <h4>Size: 1 Kg</h4>
                                  <div className="Quantity Quantity_a Quantity_b">
                                    <p>Quantity - 5</p>
                                  </div>
                                </div>
                                <div className="cart-pdetal_a">
                                  <h3>Rs. 750.00</h3>
                                </div>
                              </div>

                              <div className="scart-1 odbox">
                                <img
                                  src={myorder1}
                                  alt="Product"
                                />
                                <div className="cart-pdetal">
                                  <h3>
                                    Pure Organio Organic Turmeric Powder
                                    Curcumin Haldi Powder For Cooking and
                                    Drinking
                                  </h3>
                                  <h4>Size: 500 Gm</h4>
                                  <div className="Quantity Quantity_a Quantity_b">
                                    <p>Quantity - 10</p>
                                  </div>
                                </div>
                                <div className="cart-pdetal_a">
                                  <h3>Rs. 500.00</h3>
                                </div>
                              </div>

                              <div className="order-last">
                                <span>
                                  Order Total <br />
                                  ₹1234
                                </span>
                                <span>
                                  Payment Mode <br />
                                  Wallet-Cash on delivery
                                </span>
                                <span>
                                  Order Status <br />
                                  Fresh Order
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="order-box1">
                              <div className="order-img">
                                <img
                                  src={myorder1}
                                  alt="Order Item"
                                />
                              </div>

                              <div className="order-text1">
                                <h5>Order No-GG/256</h5>
                                <span>3 items</span>
                                <p>ordered on 27-may-22</p>
                              </div>

                              <div className="scart-1 odbox od-1">
                                <img
                                 src={myorder1}
                                  alt="Product"
                                />
                                <div className="cart-pdetal">
                                  <h3>
                                    Pure Organio Organic Turmeric Powder
                                    Curcumin Haldi Powder For Cooking and
                                    Drinking
                                  </h3>
                                  <h4>Size: 350 Gm</h4>
                                  <div className="Quantity Quantity_a Quantity_b">
                                    <p>Quantity - 2</p>
                                  </div>
                                </div>
                                <div className="cart-pdetal_a">
                                  <h3>Rs. 329.00</h3>
                                </div>
                              </div>

                              <div className="scart-1 odbox">
                                <img
                                  src={myorder1}
                                  alt="Product"
                                />
                                <div className="cart-pdetal">
                                  <h3>
                                    Pure Organio Organic Turmeric Powder
                                    Curcumin Haldi Powder For Cooking and
                                    Drinking
                                  </h3>
                                  <h4>Size: 1 Kg</h4>
                                  <div className="Quantity Quantity_a Quantity_b">
                                    <p>Quantity - 5</p>
                                  </div>
                                </div>
                                <div className="cart-pdetal_a">
                                  <h3>Rs. 750.00</h3>
                                </div>
                              </div>

                              <div className="scart-1 odbox">
                                <img
                                  src={myorder1}
                                  alt="Product"
                                />
                                <div className="cart-pdetal">
                                  <h3>
                                    Pure Organio Organic Turmeric Powder
                                    Curcumin Haldi Powder For Cooking and
                                    Drinking
                                  </h3>
                                  <h4>Size: 500 Gm</h4>
                                  <div className="Quantity Quantity_a Quantity_b">
                                    <p>Quantity - 10</p>
                                  </div>
                                </div>
                                <div className="cart-pdetal_a">
                                  <h3>Rs. 500.00</h3>
                                </div>
                              </div>

                              <div className="order-last">
                                <span>
                                  Order Total <br />
                                  ₹1234
                                </span>
                                <span>
                                  Payment Mode <br />
                                  Wallet-Cash on delivery
                                </span>
                                <span>
                                  Order Status <br />
                                  Fresh Order
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="link4"
                      role="tabpanel"
                      aria-labelledby="pills-stocks-tab"
                    >
                      <div className="why-nature-hed stuffed-hed">
                        <h2>Logout</h2>
                        <p>You are about to log out from your account.</p>
                        <div className="submit send-us submit5">
                          <button className="btn-1 btn-2 button-box contact_form_submit-1">
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Account;
