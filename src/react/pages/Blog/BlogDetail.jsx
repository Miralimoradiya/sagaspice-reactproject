import React from 'react'
import img1 from "../../../assets/images/home/Pureorganio_forbes_india_540x.jpg"
import { Link } from "react-router-dom";

const BlogDetail = () => {
  return (
    <>
      {/* about section  */}
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <div className="about-header">
              <h1>Blog Details</h1>
            </div>
            <div className="breadcrumb-one">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Blog Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>


      {/* blog details  */}
<section class="blog-detail-section">
    <div class="content-container">
        <div class="blog-inner">
            <div class="row">
                <div class="offset-md-2"></div>
                <div class="col-md-8">
                    <div class="blog-card">
                        <div class="image-container">
                            <img src={img1} alt="" />
                        </div>
                        <div class="heading-container">
                            <h3>Blog title goes here... Blog title goes here... Blog title goes here...</h3>
                        </div>
                        <div class="date-container">
                            <h6>February 20, 2024</h6>
                        </div>
                        <div class="content-wrapper">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestias, optio non animi tempora repellendus quia harum consequuntur nemo corrupti molestiae, cupiditate, sapiente perferendis ex? Debitis mollitia quasi in deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloribus natus inventore non nihil libero aspernatur repellat, recusandae dolore, officia fugit ullam assumenda ipsam optio? Temporibus cumque nulla atque commodi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis magni tenetur voluptatum enim aperiam consequuntur cum sint nam, ipsam nulla omnis eos culpa iure a distinctio accusantium assumenda quisquam in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque modi id veritatis voluptatibus illum aperiam eveniet quo, quidem accusamus impedit laudantium iste. Temporibus iure deleniti ut et impedit? Aperiam, culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, atque obcaecati quisquam saepe a reiciendis asperiores. Quo reprehenderit nostrum corporis accusantium rerum, voluptas sint, quas ipsam impedit cum animi sed?</p>
                        </div>
                    </div>
                </div>
                <div class="offset-md-2"></div>
            </div>
        </div>
    </div>
</section>

    </>
  )
}

export default BlogDetail
