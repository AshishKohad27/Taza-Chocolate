"use client";

import Breadcrumbs from "@/components/client/breadcrums";
import FreeShipping from "@/components/client/free-shipping";
import { ProductGrid } from "@/components/client/products/product-grid";
import ProjectTitle from "@/components/client/products/project-title";
import products from "../../../json/products.json";
import { useEffect, useState } from "react";
import { ProductItemProps } from "@/constant/client/product";

interface SingleProductPageProps {
  productId: string;
}
export default function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [productitem, setProductItem] = useState<ProductItemProps>();
  const ProductId = params.id;
  console.log("ProductId:", ProductId);

  useEffect(() => {
    const filterProduct = products.filter(({ _id }) => _id === params.id);
    // console.log("filterProduct:", filterProduct);
    setProductItem(filterProduct[0]);
  }, []);

  console.log("item:", productitem);
  return (
    <div className="product-outer">
      <div className="product-inner">
        {/* BreadCrums */}
        <Breadcrumbs
          First={{
            label: "Home",
            href: "/",
          }}
          Second={{
            label: "Buy",
            href: "/",
          }}
          Third={{
            label: productitem?.productTitle || "",
            href: `/products/${productitem?._id}`,
          }}
        />

        {/* Products Single Details */}
        <div className="pro-single-details-outer">
          <div className="site-container">
            <div className="pro-single-details-inner">
              {/* Left */}
              <div className="pro-sd-left"></div>
              {/* Right */}
              <div className="pro-sd-right">
                {/* Title */}
                <div className="pro-sd-title">
                  <ProjectTitle label={productitem?.productTitle || ""} />
                </div>
                {/* Desc */}
                <div className="pro-desc-para">
                  <p>{productitem?.productDescription || ""}</p>
                </div>
                {/* Select */}
                <div className="selector-wrapper">
                  <label htmlFor="productSelect-option-0">Select</label>
                  <select
                    className="single-option-selector"
                    data-option="option1"
                    id="productSelect-option-0"
                  >
                    <option value="Bar">Bar</option>
                    <option value="Case - 10 Bars">Case - 10 Bars</option>
                  </select>
                </div>
                {/* Seperator */}
                <div className="separator"></div>
                {/* Quantity */}
                <div className="pro-sd-qty-cont">
                  <div className="pro-price">
                    <p>{productitem?.productPrice || ""}</p>
                  </div>
                  <div className="qty-wrap">
                    <label htmlFor="Quantity">QTY</label>
                    <input
                      type="number"
                      id="Quantity"
                      name="quantity"
                      min="1"
                      max="5"
                      className="quantity-selector"
                    />
                  </div>
                </div>

                {/* Add to Cart */}
                <div className="add-to-cart-wrapper">
                  {/* Add to cart Message */}
                  <div className="add-to-cart-message">
                    {/* Message */}
                    <span>
                      <svg
                        version="1.2"
                        baseProfile="tiny"
                        id="Icons"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="23px"
                        height="30px"
                        viewBox="0 0 30 30"
                      >
                        <path
                          d="M28.802,1.875c-9.8,7.417-19.199,17.338-19.199,17.338L2.83,13.125L0,16.007c2.783,2.617,9.233,9.528,11.415,12.118
                               C17.556,17.865,23.939,10.215,30,3.219L28.802,1.875z"
                        ></path>
                      </svg>
                      ITEM(S) ADDED TO CART SUCCESSFULLY!
                    </span>
                    {/* Cart Page */}
                    <a
                      className="view-cart-btn"
                      href="/cart"
                      title="View Your Cart"
                    >
                      View Your Cart
                    </a>
                  </div>
                  {/* Free Ship Message */}
                  <div className="free-ship-message site-paragraph">
                    <p>
                      <span>$29.00</span> Away From FREE Shipping!
                    </p>
                  </div>
                  {/* Add to cart Button */}
                  <button className="add-to-cart-btn" type="button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="pro-item-outer">
          <div className="site-container">
            <div className="pro-item-inner">
              <ProductGrid products={products} />
            </div>
          </div>
        </div>

        {/* Free Shipping! */}
        <FreeShipping />
      </div>
    </div>
  );
}
