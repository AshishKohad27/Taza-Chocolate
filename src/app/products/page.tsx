import FairForAll from "@/components/client/Fair-for-all";
import Banner from "@/components/client/banner";
import Breadcrumbs from "@/components/client/breadcrums";
import FreeShipping from "@/components/client/free-shipping";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
export default function Products() {
  return (
    <div className="product-outer">
      <div className="product-inner">
        {/* BreadCrums */}
        <Breadcrumbs First="Home" Second="Buy" Third="Bars" />
        {/* Product Banner */}
        <Banner bannerImage={"/images/page_banner_6_image.webp"} />
        {/* Product Description */}
        <div className="pro-desc-outer">
          <div className="site-container">
            <div className="pro-desc-inner">
              <div className="pro-desc-para site-paragraph">
                <p>
                  Our Chocolate Bars take stone ground chocolate to another
                  dimension by mixing incredible flavor combinations into our
                  minimally processed, bold chocolate.
                </p>
                <p>
                  Never run out of your favorites! Subscribe & Save 10%. Change,
                  skip or cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Product Item */}
        <div className="pro-item-outer">
          <div className="site-container">
            <div className="pro-item-inner">
              {/* Product Grid */}
              <ul className="site-grid">
                {new Array(
                  { newProduct: false, soldProduct: true },
                  { newProduct: true, soldProduct: false },
                  {},
                  {},
                  {},
                  {}
                ).map((item, index) => (
                  <li
                    className={`site-griditem ${
                      item.soldProduct ? "site-griditem-sold" : ""
                    }`}
                  >
                    {/* New Product Display */}
                    <div
                      className={`${item.newProduct ? "new-product" : ""}`}
                    ></div>
                    {/* Product Sold Out */}
                    <div
                      className={`${item.soldProduct ? "sold-out" : ""}`}
                    ></div>
                    <a className="site-griditem-a" href="#">
                      {/* Images */}
                      <div className="site-griditem-imgbox">
                        <img
                          className="site-griditem-img"
                          src="https://www.tazachocolate.com/cdn/shop/products/Taza_TisTheSeason_Bundle_Shopify_large.jpg?v=1665694674"
                          alt=""
                        />
                      </div>
                      <h6>70% Deliciously Dark</h6>
                      <div className="site-paragraph">
                        <p>$ 5.00</p>
                      </div>
                    </a>
                    <a href="#" className="site-griditem-a site-griditem-btn">
                      <div className="pro-buy">Buy</div>
                    </a>
                  </li>
                ))}
              </ul>
              {/* Pagination */}
              <div className="pro-pagination site-pagination-article">
                <button className="pro-pagination-btns">
                  <FaArrowLeftLong />
                </button>
                <button className="pro-pagination-btns">1</button>
                <button className="pro-pagination-btns ppbtn--current">
                  2
                </button>
                <button className="pro-pagination-btns">3</button>
                <button className="pro-pagination-btns">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Free Shipping! */}
        <FreeShipping />

        {/* Fair For All */}
        <FairForAll />
      </div>
    </div>
  );
}
