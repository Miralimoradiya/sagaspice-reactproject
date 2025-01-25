import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "../../assets/images/logo/Sagas-Spices(1).png"
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {
  const productpg = () => {
    // Add functionality to navigate to the products page if needed
  };

  return (
    <header>
      <div id="main-top"></div>
      <div className="top-but">
        <a href="#main-top"><FaArrowUp /></a>
      </div>

      <div className="headRw_f3 theme1 smsEmailTop">
        <div className="wrap container">
          <div className="right-head fo">
            <div className="icon"><span></span></div>
            <ul className="dropdown smsEmail">
              <li className="dib xlarge">
                <table className="top-head mt3px">
                  <tbody>
                    <tr>
                      <td><FontAwesomeIcon icon={faEnvelope} className="xxlarge vam" style={{ color: 'white' }} /></td>
                      <td>
                        <span className="di fw6">
                          <a href="mailto:export@shrisagas.com" target="_blank" rel="noopener noreferrer">export@shrisagas.com</a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li className="dib xlarge">
                <table className="top-head mt3px">
                  <tbody>
                    <tr>
                      <td><FontAwesomeIcon icon={faPhone} className="vam" style={{ lineHeight: '18px', fontSize: '0.9em', color: 'white' }} /></td>
                      <td>
                        <span className="di fw6">
                          <a href="tel:+919833075244" target="_blank" rel="noopener noreferrer">+91 98330 75244</a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li className="dib fr">
                <div className="bn gstNo mr15px" style={{ paddingTop: '3px' }}> GST No. <span className="dib fw6">27AADCP3082B1ZQ</span></div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="container d-flex justify-content-between">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className="menu">
            <ul>
            <li className="hover-underline">
            <Link to="/">Home</Link>
          </li>
              <li className="dropdown hover-underline">
                <a href="#" onClick={productpg} className="dropdown-toggle icon-arrow" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
                <i className="fas fa-angle-down icon-arrow"></i>
                <div className="dropdown-content submenu">
                  <div className="row">
                    <div className="left_tegs col-md-12">
                      <div className="row">
                        <div className="col-md-6 fast_a">
                          <Link to="/listpage"><h5> Grounded Spices</h5></Link>
                          <div className="column col-md-6 column_a column_c">
                            <Link  to="/listpage"><h6>Turmeric Powder</h6></Link>
                            <ul className="senter">
                              <li><Link  to="/listpage">1%-2% Curcumin</Link></li>
                              <li><Link  to="/listpage">2% - 3% Curcumin</Link></li>
                              <li><Link  to="/listpage">3%-4% Curcumin</Link></li>
                            </ul>
                            <a href="#"><h6>Chilli Powder</h6></a>
                            <ul className="senter">
                              <li><a href="#">Extra Hot Chilli Powder</a></li>
                              <li><a href="#">Hot Chilli Powder</a></li>
                              <li><a href="#">Red Chilli Powder</a></li>
                            </ul>
                            <a href="#"><h6>Curcumin Extract</h6></a>
                            <ul>
                              <li><a href="#">Curcumin Extract</a></li>
                            </ul>
                          </div>

                          <div className="column col-md-6 column_a">
                            <a href="#"><h6>Powder</h6></a>
                            <ul>
                              <li><a href="#">Black Pepper Powder</a></li>
                              <li><a href="#">Cumin Powder</a></li>
                              <li><a href="#">Coriander Powder</a></li>
                              <li><a href="#">Fennel Powder</a></li>
                              <li><a href="#">Mustard Powder</a></li>
                              <li><a href="#">Garam Masala Powder</a></li>
                            </ul>
                          </div>
                        </div>

                        <div className="col-md-6 fast_b">
                          <a href="#"><h5>Whole Spices</h5></a>
                          <div className="column col-md-6 column_b column_c">
                            <a href="#"><h6>Turmeric Finger</h6></a>
                            <ul className="senter">
                              <li><a href="#">Turmeric Finger</a></li>
                            </ul>
                            <a href="#"><h6>Seeds</h6></a>
                            <ul>
                              <li><a href="#">Black Pepper Seeds</a></li>
                              <li><a href="#">Coriander Seeds</a></li>
                              <li><a href="#">Cumin Seeds</a></li>
                              <li><a href="#">Fennel Seeds</a></li>
                            </ul>
                          </div>
                          <div className="column col-md-6 column_b">
                            <a href="#"><h6>Chilli</h6></a>
                            <ul className="senter">
                              <li><a href="#">Red Chilli</a></li>
                              <li><a href="#">Guntur Dry Red Chilli</a></li>
                            </ul>
                            <a href="#"><h6>Clove Pods</h6></a>
                            <ul className="senter">
                              <li><a href="#">Clove Pods</a></li>
                            </ul>
                            <a href="#"><h6>Masala</h6></a>
                            <ul>
                              <li><a href="#">Whole Garam Masala</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="hover-underline">
                <Link to="/about">About</Link>
              </li>
              <li className="hover-underline"><Link  to="/blog">Blog</Link></li>
              <li className="hover-underline">
            <Link to="/contact">ContactUs</Link>
          </li>
            </ul>
            <div className="hamburger"><span></span></div>
            <div className="dimmer"></div>
          </nav>
          <div className="nav-search search-switch search-box">
            <a href="#exampleModalCenter" className="search-btn" data-toggle="modal" data-target="#exampleModalCenter">
              <FontAwesomeIcon icon={faSearch} />
            </a>
          </div>

          {/* Search Modal */}
          <div className="search-modal">
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <form action="" method="post">
                      <input type="text" name="search" className="search" id="search" placeholder="Search here....." />
                      <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="icon-menu">
            <Link to="/account">
              {/* Account Icon */}
              <svg className="w-[20px] h-[20px] one" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
              </svg>
            </Link>
            <Link to="/login">
              {/* Login Icon */}
              <svg className="w-[20px] h-[20px] two" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
              </svg>
            </Link>
            <Link id="myBtn" to="/cart">
              {/* Custom Icon */}
              <svg className="w-[20px] h-[20px] three" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M352 128C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128H0v304c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V128h-96zM224 48c44.112 0 80 35.888 80 80H144c0-44.112 35.888-80 80-80zm176 384c0 17.645-14.355 32-32 32H80c-17.645 0-32-14.355-32-32V176h48v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h160v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h48v256z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
