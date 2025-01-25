import React from "react";
import ourproduct1 from "../../assets/images/about/Artboard_3_720x.jpg"
import imga1 from "../../assets/images/home/1.png"
import imga2 from "../../assets/images/home/No_Chemicals_Pesticides_180x.png"
import imga3 from "../../assets/images/home/Preserves_the_Environment_180x.png"
import imga4 from "../../assets/images/home/Certified_Organic_Sources_180x.png"
import direct1 from "../../assets/images/about/1_900x.jpg"
import direct2 from "../../assets/images/about/2_900x.jpg"
import direct3 from "../../assets/images/about/Fo_Trust_1_900x.jpg"
import direct4 from "../../assets/images/about/Fo_Symble_1_900x.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* about section  */}
      <section className="about-section">
        <div className="container">
          <div className="about-text">
            <div className="about-header">
              <h1>About us</h1>
            </div>
            <div className="breadcrumb-one">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About us
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* who section  */}
      <section className="who-section">
        <div className="container">
          <div className="who-text">
            <h2>Who We Are?</h2>
            <p>
              Pure Organio was established in 2020 and is heavily inspired by
              the Indian Prime Minister's Make in India concept. The idea behind
              it is to foster growth in India, increase competitiveness, and
              strengthen India's economy. The founders of Pure Organio create
              opportunities for Indian farmers to sell and promote their
              world-class products by providing an online platform. Right now,
              is a perfect time to start something like this, since large
              numbers of households are finally going online in India, which
              gives them more opportunity to sell their products. The focus is
              on providing pure organic products that are certified and Made in
              India. But why is it so important to the founders to ensure that
              the products are organic? And why should you even consider
              switching to organic products? Let's find out.
            </p>
          </div>
        </div>
      </section>

      {/* out products section  */}
      <section className="our-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="our-img">
                <img src={ourproduct1} alt="Our Product" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="our-text our-text_a">
                <h2>Our Products</h2>
                <p>
                  Now, you might wonder what does pure organic product stand
                  for? A pure organic product is defined as a good in the
                  production of which no pesticides, no chemical fertilizer, and
                  no harmful chemicals were used. Additionally, the product does
                  not contain additives or preservatives. Pure Organio promises
                  all of their products to be certified products which comply
                  with their high standards. Many people believe that organic
                  products are healthier than conventionally produced products.
                  Even though it is not scientifically proven that organic
                  products have more nutrients than normal products, it is clear
                  that the lack of chemicals and pesticides is much better for
                  the human body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* imga section  */}
      <section className="imga-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="why-text">
                <img src={imga1} alt="High Nutritional Value" />
                <p>
                  High Nutritional <br /> Value
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="why-text">
                <img
                  src={imga2}
                  alt="No Chemicals & Pesticides"
                />
                <p>
                  No Chemicals <br /> & Pesticides
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="why-text">
                <img
                  src={imga3}
                  alt="Preserves the Environment"
                />
                <p>
                  Preserves the <br /> Environment
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="why-text">
                <img
                  src={imga4}
                  alt="Certified Organic Sources"
                />
                <p>
                  Certified Organic <br /> Sources
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* direct sections mix  */}
      <section className="direct-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="our-img direct-img">
                <img
                src={direct1}
                  alt="Direct Sourced From Farmers"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="our-text direct-text">
                <h2>
                  Direct Sourced <br />
                  From Farmers
                </h2>
                <p>
                  We just obtain 100% affirmed Organic items, straightforwardly
                  from individual farmers, farmer gatherings or Farmers Producer
                  Companies. Our Close coordination with them to guarantees
                  moral Organic practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="direct-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="our-img direct-img">
                <img
                  src={direct2}
                  alt="Hand Pounded Products"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="our-text direct-text">
                <h2>Hand Pounded Products</h2>
                <p>
                  We Use Traditional Hand Pounded Method To Maintain High
                  nutrient Value Of Products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="last-img">
                <img
                  src={direct3}
                  alt="Trust Symbol"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="last-img">
                <img src={direct4} alt="Symbol" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* text section  */}
      <section className="aboutpro-section">
        <div className="container">
          <div className="about-pro">
            <h2>About Certified Products</h2>

            <p>
              {" "}
              But how does Pure Organio ensure that all of the products are up
              to their expectations? There is organic certification that helps
              producers of organic food get certified through internationally
              accredited certification institutions such as Control Union,
              Onecert, IMO, Indocert, and others. That makes the process of
              verifying organic products much easier and less costly. The label
              of the organic certification aims at quality assurance and fraud
              prevention. Accordingly, "certified organic" products assure
              customers worldwide of the excellence of the goods. The standards
              are determined and supervised in India by APEDA, which was
              established in India in 1985. The standard is called the NPOP –
              National Programme for Organic Production.{" "}
            </p>

            <p>
              {" "}
              There has been a clear change towards higher consumption of
              organic goods. Now you might be wondering why the world is
              changing towards buying more organic products from companies like
              Pure Organio? There are various advantages for you, but also for
              the environment and the rest of the world. With the increased
              economic prosperity in recent years, people began to care more
              about their well being the same as the environmental issues all
              around us.
            </p>

            <p>
              {" "}
              The organic farmers behind the products of Pure Organio have
              decided to dedicate themselves to keeping the planet Earth in a
              sustainable state. In order to achieve that, they grow their
              products while avoiding the use of chemicals and pesticides and
              therefore keeping the water clean and the air clear. Keeping the
              soil alive is of high importance to all organic farmers, and by
              growing crops the natural way and fostering an organism-rich soil,
              companies employing organic farmers like Pure Organio ensure that
              Earth keeps on giving to us humans. The soil is kept alive and in
              equilibrium by implementing a culture of composting, natural pest
              control, and other natural farming practices. Additionally, Pure
              Organio's farmers know and study climate and the natural cycles in
              order to cultivate produce in a sustainable and eco-friendly way.
              There are a few techniques which farmers have to utilize if they
              want to be classified as an organic farmer. One of these processes
              is the practice of rotating crops.
            </p>

            <p>
              {" "}
              But what does that mean? Contrary to mono-cropping where farmers
              grow the same crop on the same field year after year, in rotating
              crops, the plants are grown on a different field each year. As
              Pure Organio grows various plants like ginger and turmeric, they
              make sure to take turns on different fields. That assures that the
              soil is not stripped of nutrients as each plant contributes a
              different nutrient back to the soil, and it is therefore
              replenished. This also results in no need to use insecticides as
              the natural habitat of damaging insects is destroyed with
              constantly changing plants. Another way Pure Organio protects the
              environment is by using cover crops. These are plants that
              preserve the soil, replenish nutrients, impede damaging weed
              growth, and trap moisture. As a consequence of that, they attract
              microflora and fauna, which in turn hinders the growth of
              problematic vermin, such as fungi or insects. However, not all
              insects are negative for farmers. Pure Organio's farmers even
              release beneficial insects which function as natural pest control.
              This use of natural predators of the pest insects eradicates the
              need for chemical insecticides, which would damage the environment
              and have negative effects on people's health.
            </p>

            <p>
              {" "}
              Talking about health, there is another great advantage of organic
              products such as organic ginger or organic turmeric over
              non-organic ones. As Pure Organio makes sure that the offered
              products contain no additives or preservatives, they are
              especially beneficial to your health. The produce which goes into
              the organic products of Pure Organio is grown sustainably, which
              gives them their natural taste. The carefully grown plants contain
              a higher amount of vitamins and minerals than their comparable
              non-organic counterparts, and they are even richer in
              antioxidants. Due to farming without toxic pesticides and
              insecticides, the Pure Organio products present no harm to your
              health. On the contrary, they boost your immune system and reduce
              your risk of disease.
            </p>

            <p>
              {" "}
              Switching to organic products is clearly not only a great choice
              for a sustainable future of planet Earth, but also for your
              personal health. The choice you make as a consumer when buying
              Pure Organio is one towards a better future, where the Earth is
              given the chance to regenerate, and the soil we live on is used
              responsibly. Supporting smaller companies like Pure Organio who
              make an effort to contribute to making the world a more
              sustainable place and try to make you as healthy as possible is
              your way to improve your life and feel good about it.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
