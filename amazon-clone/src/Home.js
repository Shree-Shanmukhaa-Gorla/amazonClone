import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="prime"
        ></img>

        <div className="home__row">
          <Product id="2321341" title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback " price={29.99} image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY327_QL65_.jpg" rating={5}  />
          <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} rating={4} image="https://m.media-amazon.com/images/I/612ZBnygMxL._AC_UY327_QL65_.jpg" />
        </div>

        <div className="home__row">
          <Product id="4903850" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_UY327_QL65_.jpg" />
          <Product id="23445930" title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" rating={5} price={98.99} image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY327_QL65_.jpg" />
          <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Generation)" rating={4} price={598.99} image="https://m.media-amazon.com/images/I/81MF389-9gS._AC_UY327_QL65_.jpg"/>
        </div>

        <div className="home__row">
          <Product id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} rating={4} image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_UY327_QL65_.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
