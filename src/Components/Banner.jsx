import React from "react";
import styles from "./Css/Banner.module.css";
export default function Banner() {
    return (
        <div className={styles.Banner}>
            <h1>Free Shipping on orders $50+</h1>
            <p>Free shipping on orders over $50. Offer applicable to contiguous US addresses only. Total order price must be over $50 AFTER any discounts are applied.</p>
        </div>
    )
}