import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <div className="about-header">
              <h1>Contact US</h1>
            </div>

            <div className="breadcrumb-one">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    Contact us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* form  */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="Opportunities-left">
                <h5>We would love to hear from you.</h5>
                <p>
                  If you’ve got great products you're making or looking to work
                  with us then drop us a line.
                </p>
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
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control form-control_3"
                        placeholder="Name"
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="email"
                        className="form-control form-control_3"
                        placeholder="Email"
                        name="email"
                        id="email"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="tel"
                        className="form-control form-control_3"
                        placeholder="Phone No."
                        name="phone"
                        id="phone"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control form-control_3"
                        placeholder="Subject"
                        name="subject"
                        id="subject"
                        required
                      />
                    </div>
                  </div>
                  <div className="row row-2">
                    <div className="col-12">
                      <textarea
                        rows="4"
                        className="form-control form-control_3 form-control_0"
                        placeholder="Message"
                        name="message"
                        id="message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className=""
                      name="contact[saveInfo]"
                      id="save-info"
                    />
                    <label htmlFor="save-info" className="">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  <div className="submit send-us">
                    <button
                      type="submit"
                      className="btn button-box contact_form_submit-1"
                    >
                      Submit Now
                    </button>
                  </div>
                  <div id="contact_form_msg_box" className="mt-3"></div>
                </form>
              </div>
            </div>
            <div className="col-md-5">
              <div className="addres">
                <h5>Address</h5>
                <p>
                  301, RadhaSwami Summit, Gopi Cinema Rd, above fincare Bank,
                  Anand, Gujarat 388001
                </p>
                <h5>Information</h5>
                <p style={{ marginBottom: 0 }}>
                  <span>Mo: </span>
                  <a href="tel:+919316787074">+91 93167 87074</a>
                </p>
                <p>
                  <span>Mail: </span>
                  <a href="mailto:info@srisagas.com">info@srisagas.com</a>
                </p>
                <h5>Opening Hours</h5>
                <p>
                  Monday to Saturday <br /> 9am - 10pm
                </p>
                <h5>Social Media</h5>
                <div className="social-media-links social-media-links1">
                  <a
                    target="_blank"
                    className="aa"
                    href="https://www.facebook.com/Pureorganio/"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/pureorganio/?hl=en"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href="https://twitter.com/pureorganio?lang=en"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
