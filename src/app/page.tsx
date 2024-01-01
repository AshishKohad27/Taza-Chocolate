"use client";

import FairForAll from "@/components/client/Fair-for-all";
import FreeShipping from "@/components/client/free-shipping";

export default function Home() {
  return (
    <div className="home-outer">
      {/* Category Grid */}
      <div className="cat-outer site-mb">
        <ul className="cat-grid">
          {new Array(
            { title: "Chocolate Discs" },
            { title: "Chocolate Covered Treats" },
            { title: "Smooth & Crunchy Bars" },
            { title: "Bulk & Baking Chocolate" }
          ).map((item, index) => (
            <li className="cat-griditem" key={index}>
              {/* Fixed Container */}
              <div
                className="fixed-cont grid--center"
                style={{
                  backgroundImage: `url(${"/images/page_banner_6_image.webp"})`,
                }}
              >
                <article className="cat-article-box">
                  <h4>Shop</h4>
                  <h2>{item.title}</h2>
                </article>
              </div>
              {/* Dynamic Container */}
              <div className="dyna-cont grid--center">
                <article className="cat-article-box grid--center dyna-cat-article-box">
                  <h2>{item.title}</h2>
                  <a title="Shop Now" className="cat-article-box-a" href="#">
                    Shop now
                  </a>
                </article>
              </div>
            </li>
          ))}
          <li className="cat-griditem"></li>
          <li className="cat-griditem"></li>
          <li className="cat-griditem"></li>
        </ul>
      </div>

      {/* Read Our Transparency Report */}
      <div className="rot-outer grid--center site-mb">
        {/* Left */}
        <article className="rot-left">
          <div className="site-paragraph rot-left-article">
            <h3>Read Our Transparency Report</h3>
            <p>
              Learn more about how Taza Direct Trade breaks the (chocolate)
              mold!
            </p>
            <a className="rot-left-a" href="#readmore">
              Read More
            </a>
          </div>
        </article>
        {/* Right */}
        <div
          className="rot-right"
          style={{
            backgroundImage: `url(${"/images/home_page_feature_module_2.webp"})`,
          }}
        ></div>
      </div>
      {/* Free Shipping */}
      <FreeShipping />
      {/* Fair For All */}
      <FairForAll />
    </div>
  );
}
