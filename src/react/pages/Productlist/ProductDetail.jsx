import React from 'react'
import tumeric1 from '../../../assets/images/home1/sri-sagas-turmeric-powder-1kg-front.jpg'
import tumeric2 from '../../../assets/images/home1/sri-sagas-turmeric-powder-100gm-front.jpg'
import tumeric3 from '../../../assets/images/home1/sri-sagas-turmeric-powder-250gm-front.jpg'
import tumeric4 from '../../../assets/images/home1/sri-sagas-turmeric-powder-500gm-front.jpg'
import m1 from '../../../assets/images/home1/sri-sagas-turmeric-powder-1kg-front.jpg'
import m2 from '../../../assets/images/home1/sri-sagas-turmeric-powder-100gm-front.jpg'
import m3 from '../../../assets/images/home1/sri-sagas-turmeric-powder-250gm-front.jpg'
import m4 from '../../../assets/images/home1/sri-sagas-turmeric-powder-500gm-front.jpg'
import back1 from '../../../assets/images/home1/sri-sagas-turmeric-powder-1kg-back.jpg'
import Food1 from '../../../assets/images/home/3.jpg'
import Food2 from '../../../assets/images/home/14.jpg'
import Food3 from '../../../assets/images/home/15.jpg'
import Food4 from '../../../assets/images/home/5.jpg'


export default function ProductDetail() {
  return (
    <>
    <section className="detail-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="detail-img">
              <div className="small-img">
                <div className="nev-section" id="exTab1">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item1 active">
                      <a
                        className="nav-link1 NEWS-one "
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        data-target="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        <img src={tumeric1} />
                      </a>
                    </li>
                    <li className="nav-item1">
                      <a
                        className="nav-link1 NEWS-one"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        data-target="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        <img src={tumeric2}/>
                      </a>
                    </li>
                    <li className="nav-item1">
                      <a
                        className="nav-link1 NEWS-one "
                        id="pills-profile-tab1"
                        data-toggle="pill"
                        href="#pills-profile1"
                        data-target="#pills-profile1"
                        role="tab"
                        aria-controls="pills-profile1"
                        aria-selected="false"
                      >
                        <img src={tumeric3} />
                      </a>
                    </li>
                    <li className="nav-item1">
                      <a
                        className="nav-link1 NEWS-one"
                        id="pills-contact-tab1"
                        data-toggle="pill"
                        href="#pills-contact1"
                        data-target="#pills-contact1"
                        role="tab"
                        aria-controls="pills-contact1"
                        aria-selected="false"
                      >
                        <img src={tumeric4} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tab-content big" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <div className="big-img">
                    <a
                      href={m1}
                      data-fancybox="product"
                      data-caption="Products"
                    >
                      <img
                        src={m1}
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="flor-img">
                    <a
                      href={m2}
                      data-fancybox="product"
                      data-caption="Products"
                    >
                      <img
                        src={m2}
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="pills-profile1"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab1"
                >
                  <div className="big-img">
                    <a
                      href={m3}
                      data-fancybox="product"
                      data-caption="Products"
                    >
                      <img
                        src={m3}
                        alt="img"
                      />
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact1"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab1"
                >
                  <div className="flor-img">
                    <a
                      href={m4}
                      data-fancybox="product"
                      data-caption="Products"
                    >
                      <img
                        src={m4}
                        alt="img"
                      />
                    </a>
                    <a
                      href={back1}
                      data-fancybox="product"
                      data-caption="Products"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-text">
              <div className="star-svg">
                <a href="">
                  <svg
                    className="w-[20px] h-[20px]"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
                  </svg>
                </a>
              </div>
              <div className="pro-text-detail">
                <h3>
                  {" "}
                  Pure Organio Organic Turmeric Powder Curcumin Haldi Powder For
                  Cooking and Drinking{" "}
                </h3>
                <h4>
                  Rs. 329.00 <span> Rs. 396.00 </span>
                </h4>
                <h5> Tax included.</h5>
                <h6> Size: 350 Gm </h6>
                <div className="opsen">
                  <p className="active">
                    <a href="">350 Gm</a>
                  </p>
                  <p>
                    <a href="">1 kg</a>
                  </p>
                  <p>
                    <a href="">100 Gm</a>
                  </p>
                </div>
              </div>
              <div className="Quantity">
                <p>Quantity </p>
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
              <div className="bay-div">
                <h3>Buy more save more!</h3>
                <div className="item-box">
                  <div className="item">
                    <div className="item-text">
                      <h6>2 item(s) get 10% OFF</h6>
                      <p>on each product</p>
                    </div>
                    <div className="item-butt">
                      <p>
                        <a href="">Add</a>
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="item">
                    <div className="item-text">
                      <h6>2 item(s) get 10% OFF</h6>
                      <p>on each product</p>
                    </div>
                    <div className="item-butt">
                      <p>
                        <a href="">Add</a>
                      </p>
                    </div>
                    <hr />
                  </div>
                  <div className="item">
                    <div className="item-text">
                      <h6>2 item(s) get 10% OFF</h6>
                      <p>on each product</p>
                    </div>
                    <div className="item-butt">
                      <p>
                        <a href="">Add</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="share-box">
                <p>
                  <a href="">
                    <svg
                      className="w-[20px] h-[20px] up-dow"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm200.72-276.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 220 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.72-20.24z"
                        className=""
                      />{" "}
                    </svg>{" "}
                    Compare
                  </a>
                </p>
                <p>
                  <a href="">
                    <svg
                      className="w-[20px] h-[20px]"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z" />
                    </svg>
                    Ask a question{" "}
                  </a>
                </p>
                <p>
                  <a href="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={16}
                      fill="none"
                      viewBox="0 0 14 16"
                    >
                      <path
                        fill="#000"
                        d="M11 10c.8333 0 1.5417.2917 2.125.875.5833.5833.875 1.2917.875 2.125 0 .8333-.2917 1.5417-.875 2.125-.5833.5833-1.2917.875-2.125.875-.8333 0-1.54167-.2917-2.125-.875C8.29167 14.5417 8 13.8333 8 13c0-.3125.04167-.6146.125-.9062l-3.0625-1.9063C4.47917 10.7292 3.79167 11 3 11c-.83333 0-1.54167-.2917-2.125-.875C.291667 9.54167 0 8.83333 0 8c0-.83333.291667-1.54167.875-2.125C1.45833 5.29167 2.16667 5 3 5c.79167 0 1.47917.27083 2.0625.8125L8.125 3.90625C8.04167 3.61458 8 3.3125 8 3c0-.83333.29167-1.54167.875-2.125C9.45833.291667 10.1667 0 11 0c.8333 0 1.5417.291667 2.125.875C13.7083 1.45833 14 2.16667 14 3c0 .83333-.2917 1.54167-.875 2.125C12.5417 5.70833 11.8333 6 11 6c-.7917 0-1.47917-.27083-2.0625-.8125L5.875 7.09375c.1875.60417.1875 1.20833 0 1.8125l3.0625 1.90625C9.52083 10.2708 10.2083 10 11 10zm1.0625-8.0625C11.7708 1.64583 11.4167 1.5 11 1.5c-.4167 0-.7708.14583-1.0625.4375C9.64583 2.22917 9.5 2.58333 9.5 3s.14583.77083.4375 1.0625c.2917.29167.6458.4375 1.0625.4375.4167 0 .7708-.14583 1.0625-.4375.2917-.29167.4375-.64583.4375-1.0625s-.1458-.77083-.4375-1.0625zm-10.125 7.125C2.22917 9.35417 2.58333 9.5 3 9.5s.77083-.14583 1.0625-.4375S4.5 8.41667 4.5 8s-.14583-.77083-.4375-1.0625S3.41667 6.5 3 6.5s-.77083.14583-1.0625.4375S1.5 7.58333 1.5 8s.14583.77083.4375 1.0625zm8 5c.2917.2917.6458.4375 1.0625.4375.4167 0 .7708-.1458 1.0625-.4375.2917-.2917.4375-.6458.4375-1.0625 0-.4167-.1458-.7708-.4375-1.0625-.2917-.2917-.6458-.4375-1.0625-.4375-.4167 0-.7708.1458-1.0625.4375C9.64583 12.2292 9.5 12.5833 9.5 13c0 .4167.14583.7708.4375 1.0625z"
                      />
                    </svg>
                    Share
                  </a>
                </p>
              </div>
              <hr />
              <div className="bougt">
                <h5>Frequently bought together</h5>
                <p>
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={19}
                    fill="none"
                    viewBox="0 0 18 19"
                  >
                    <path
                      fill="#DA3F3F"
                      d="M17.4375 7.49219C17.8125 8.00781 18 8.59375 18 9.25s-.1875 1.2539-.5625 1.793c-.375.5156-.8555.8789-1.4414 1.0898.2578.5625.3281 1.1719.2109 1.8281-.0937.6329-.375 1.1836-.8437 1.6524-.4688.4687-1.0195.75-1.6524.8437-.6328.1172-1.2421.0469-1.8281-.2109-.1406.3984-.3516.7383-.6328 1.0195-.2812.3047-.6211.5391-1.0195.7032-.37503.1874-.78519.2812-1.2305.2812-.65625 0-1.25391-.1875-1.79297-.5625-.51562-.375-.87891-.8555-1.08984-1.4414-.58594.2578-1.19531.3281-1.82813.2109-.63281-.0937-1.18359-.375-1.65234-.8437-.46875-.4688-.76172-1.0195-.87891-1.6524-.09375-.6562-.01172-1.2656.2461-1.8281C1.41797 11.9219.9375 11.5586.5625 11.043.1875 10.5039 0 9.90625 0 9.25s.1875-1.24219.5625-1.75781c.375-.53906.85547-.91407 1.44141-1.125-.25782-.5625-.33985-1.16016-.2461-1.79297.11719-.65625.41016-1.21875.87891-1.6875.46875-.46875 1.01953-.75 1.65234-.84375.65625-.11719 1.26563-.04688 1.82813.21094.21093-.58594.57422-1.06641 1.08984-1.44141C7.74609.4375 8.34375.25 9 .25s1.2422.1875 1.7578.5625c.5391.375.9141.85547 1.125 1.44141.5625-.25782 1.1602-.32813 1.793-.21094.6562.09375 1.2187.375 1.6875.84375.4687.46875.75 1.03125.8437 1.6875.1172.63281.0469 1.23047-.2109 1.79297.5859.21093 1.0664.58594 1.4414 1.125zM7.52344 6.22656C7.3125 5.99219 7.05469 5.875 6.75 5.875s-.57422.11719-.80859.35156C5.73047 6.4375 5.625 6.69531 5.625 7s.10547.57422.31641.80859c.23437.21094.5039.31641.80859.31641s.5625-.10547.77344-.31641C7.75781 7.57422 7.875 7.30469 7.875 7s-.11719-.5625-.35156-.77344zm-.35156 6.04684l4.85152-4.85152c.2578-.25782.2578-.51563 0-.77344l-.4218-.42188c-.2578-.25781-.5157-.25781-.7735 0L5.97656 11.0781c-.25781.2578-.25781.5157 0 .7735l.42188.4218c.25781.2578.51562.2578.77344 0zm3.26952.0352c.2344.2109.5039.3164.8086.3164.3047 0 .5625-.1055.7734-.3164.2344-.2344.3516-.5039.3516-.8086 0-.3047-.1172-.5625-.3516-.7734-.2109-.2344-.4687-.3516-.7734-.3516-.3047 0-.5742.1172-.8086.3516-.2109.2109-.3164.4687-.3164.7734 0 .3047.1055.5742.3164.8086z"
                    />
                  </svg>
                  You will get 5% OFF on each product
                </p>
                <div className="pri-box">
                  <h4>
                    Total price: <span>Rs. 0.00</span>
                  </h4>
                  <h3>
                    <a href="">Add selected item(s)</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="description-section">
      <div className="container">
        <div className="description-tab">
          <div className="nev-section" id="exTab1">
            <ul className="nav nav-pills " id="pills-tab" role="tablist">
              <li className="nav-item2">
                <a
                  className="nav-link2 active"
                  id="description1"
                  data-toggle="pill"
                  href="#pills-description"
                  data-target="#pills-description"
                  role="tab"
                  aria-controls="pills-description"
                  aria-selected="false"
                >
                  Product description{" "}
                </a>
              </li>
              <li className="nav-item2">
                <a
                  className="nav-link2"
                  id="description2"
                  data-toggle="pill"
                  href="#pills-Return"
                  data-target="#pills-Return"
                  role="tab"
                  aria-controls="pills-Return"
                  aria-selected="false"
                >
                  Shipping &amp; Return{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content description-tabdetal" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-description"
            role="tabpanel"
            aria-labelledby="description1"
          >
            <div className="description-text">
              <p>
                {" "}
                Our turmeric powder is definitely something you should try. It is
                made from Natural sun dried process followed by Hand pounding for
                fine turmeric powder. It is commonly know as Haldi Powder in every
                Indian kitchen.
              </p>
              <p>
                {" "}
                <span>A LOT OF USES</span> - Turmeric is a highly versatile spice
                that can be added to meals in a range of ways, including into
                spice mixtures such as curry or barbecue rub, making a homemade
                dressing using part oil, part vinegar, and seasonings including
                turmeric, changing up your go-to marinades by adding turmeric.
                Turmeric is frequently used in Thai curries and other savory
                dishes, and used in recipes for meat, seafood, vegetables,
                noodles, and soups.{" "}
              </p>
              <p>
                {" "}
                <span>100% ORGANIC TURMERIC SPICE</span> - Organic Turmeric Powder
                also known as Haldi Powder is the Indian spices made from the
                ground roots of the turmeric, made with hand pounding process,
                with bright yellow color and made with hand pounding process. It
                is the best Indian spices with particular attention to organic
                turmeric powder, its properties, and its uses so that you can
                become a lover of Indian spices{" "}
              </p>
              <p>
                {" "}
                <span>HEALTHY CHOICE</span> - Turmeric powder is produced from
                pure turmeric rhizomes and is packed with curcumin, a strong
                antioxidant with powerful anti-inflammatory properties. Turmeric
                can support joint health, a strong digestive system, and natural
                healing.{" "}
              </p>
              <h6>Specifications:</h6>
              <ul>
                <li> Natural plant-based superfood </li>
                <li> Loaded with vitamins, minerals, and plant sterols </li>
                <li>Non-GMO</li>
                <li>100% Raw - No additives</li>
                <li>Product Type: Herb</li>
                <li> Known to support healthy joints, digestion, and more </li>
                <li> Organic and certified by Npop and Indian organic </li>
              </ul>
              <h6> PACKAGE INCLUDES: </h6>
              <ul>
                <li> 1 x Turmeric Powder</li>
              </ul>
              <h6> Notes: </h6>
              <ul>
                <li> Store in airtight containers, out of sunlight.</li>
              </ul>
              <h6>
                {" "}
                You are just one step from making the right decision. DON’T WAIT
                and ORDER NOW!{" "}
              </h6>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Return"
            role="tabpanel"
            aria-labelledby="description2"
          >
            <div className="Shipping-text">
              <p>
                {" "}
                Shipping cost is based on weight. Just add products to your cart
                and use the Shipping Calculator to see the shipping price.{" "}
              </p>
              <p>
                {" "}
                We want you to be 100% satisfied with your purchase. Items can be
                returned or exchanged within 30 days of delivery.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="food-section">
      <div className="container">
        <div className="fud-centar">
          <div className="row justify-content-center food-box">
            <div className="col-md-3">
              <div className="food-img">
                <img src={Food1} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="food-text">
                <h6>
                  {" "}
                  Pure Organio Turmeric Powder Organic Pure Hand Pounded Haldi
                  Powder Gluten Free Indian Spice High Curcumin Content (350 Gm){" "}
                </h6>
                <p>
                  {" "}
                  ● ORGANIC TURMERIC POWDER (CURCUMA LONGA) - With superior
                  quality, free of synthetic additives like pesticides, colors, ,
                  preservatives, chemical fertilizers, and dyes this 100% raw
                  bright yellow spice powder is made from the root of the turmeric
                  plant
                </p>
                <p>
                  ● PERFECT CHOICE FOR EVERY KITCHEN – Improve your cooking and
                  add some taste and good flavor in your favorite dishes with this
                  organic spice. Used in many Indian and Middle East traditional
                  cooking, so this is definitely something you should hang on your
                  spice rack{" "}
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="cent-img">
                <img src={Food2} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="cent-img cent-imga">
                <img src={Food3} />
              </div>
            </div>
          </div>
          <div className="row justify-content-center food-box">
            <div className="col-md-3">
              <div className="food-img">
                <img src={Food1} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="food-text1">
                <h2> JUST THE RIGHT FOOD SUPPLEMENT</h2>
                <p>
                  Make your food more delicious with this haldi powder adding a
                  flavor that is savory and somewhat bitter. It goes perfectly
                  with chicken, fish, legumes, and in curries, and may be combined
                  with turmeric, paprika, cumin, fennel and coriander{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center food-box">
            <div className="col-md-3">
              <div className="food-img">
                <img src={Food1} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="food-text1 food-text2">
                <h2> GREAT FOR YOUR SKIN</h2>
                <p>
                  This ancient beauty secret and has been used as a natural remedy
                  to reduce dark spots, blemishes, and acne so if you like perfect
                  skin this is a MUST HAVE!{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3">
              <div className="food-img">
                <img src={Food1} />
              </div>
            </div>
            <div className="col-md-5">
              <div className="food-text1">
                <h2> FEEL THE BENEFITS </h2>
                <p>
                  Are you having issues with your digestive system? With powerful
                  anti-inflammatory properties. Turmeric can support joint health,
                  a strong digestive, to treat inflammatory conditions, skin
                  diseases, wounds, pain relief, improve your thinking and memory
                  skills, system and provide a natural healing.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center food-box1">
            <div className="col-md-7">
              <div className="cent-img">
                <img src={Food4} />
              </div>
            </div>
            <div className="col-md-7">
              <div className="cent-img">
                <img src={Food4}  />
              </div>
            </div>
            <div className="col-md-7">
              <div className="cent-img">
                <img src={Food4}  />
              </div>
            </div>
            <div className="col-md-7">
              <div className="cent-img">
                <img src={Food4}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}
