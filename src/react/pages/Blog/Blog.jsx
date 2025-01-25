import React from "react";
import blog2 from "../../../assets/images/home/Pureorganio_forbes_india_540x.jpg"
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <div className="about-header">
              <h1>Blog </h1>
            </div>

            <div className="breadcrumb-one">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    Blog
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* blog  */}
      <section className="blog-section-wrapper">
        <div className="container-fluid">
          <div className="blog-section-inner">
            <div className="row">
              <div className="col-md-4">
                <div className="blog-box">
                  <div className="image-box">
                    <Link to="/blogdetail">
                      <img
                        src={blog2}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="title-box">
                    <Link to="/blogdetail">Blog title goes here...</Link>
                  </div>
                  <div className="details">
                    <h6>February 20, 2024</h6>
                  </div>
                  <div className="para-wrapper">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias, optio non animi tempora repellendus quia harum dda nemo corrupti molestiae, cupiditate...
                    </p>
                  </div>
                  <div className="readmore">
                    <Link to="/blogdetail">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-box">
                  <div className="image-box">
                    <Link to="/blogdetail">
                      <img
                        src={blog2}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="title-box">
                    <Link to="/blogdetail">Blog title goes here...</Link>
                  </div>
                  <div className="details">
                    <h6>February 20, 2024</h6>
                  </div>
                  <div className="para-wrapper">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias, optio non animi tempora repellendus quia harum dda nemo corrupti molestiae, cupiditate...
                    </p>
                  </div>
                  <div className="readmore">
                    <Link to="/blogdetail">Read More</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="blog-box">
                  <div className="image-box">
                    <Link to="/blogdetail">
                      <img
                        src={blog2}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="title-box">
                    <Link to="/blogdetail">Blog title goes here...</Link>
                  </div>
                  <div className="details">
                    <h6>February 20, 2024</h6>
                  </div>
                  <div className="para-wrapper">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias, optio non animi tempora repellendus quia harum dda nemo corrupti molestiae, cupiditate...
                    </p>
                  </div>
                  <div className="readmore">
                    <Link to="/blogdetail">Read More</Link>
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

export default Blog;
