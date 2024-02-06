"use client";
import { ProductGridProps } from "@/constant/client/product";
import Link from "next/link";

export const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <ul className="site-grid">
      {products.map((item, index) => (
        <li
          key={index}
          className={`site-griditem ${
            item.soldProduct ? "site-griditem-sold" : ""
          }`}
        >
          {/* New Product Display */}
          <div className={`${item.newProduct ? "new-product" : ""}`}></div>
          {/* Product Sold Out */}
          <div className={`${item.soldProduct ? "sold-out" : ""}`}></div>
          <Link className="site-griditem-a" href={`/products/${item._id}`}>
            {/* Images */}
            <div className="site-griditem-imgbox">
              <img
                className="site-griditem-img"
                src={item.productImage}
                alt={item.productTitle}
              />
            </div>
            <h6>{item.productTitle}</h6>
            <div className="site-paragraph">
              <p>{item.productPrice}</p>
            </div>
          </Link>
          <Link
            href={`/products/${item._id}`}
            className="site-griditem-a site-griditem-btn"
          >
            <div className="pro-buy">Buy</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
