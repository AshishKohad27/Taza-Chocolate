import React from "react";
import styles from "./Css/Footer.module.css";
export default function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.FooterTop}>
                <div className={styles.FooterLeft}>
                    <div>
                        <h1>BUY</h1>
                        <p>Gifts</p>
                        <p>Dark Bark</p>
                        <p>Chocolate Bars</p>
                        <p>Chocolate Discs</p>
                        <p>Chocolate Covered</p>
                        <p>Bulk and Baking</p>
                        <p>80% Cacao & Up</p>
                    </div>
                    <div>
                        <h1>LEARN</h1>
                        <p>About Taza</p>
                        <p>Our Process</p>
                        <p>Taza Direct Trade</p>
                        <p>Recipes</p>
                        <p>Stone Ground Blog</p>
                        <p>Wholesale</p>
                    </div>
                    <div>
                        <h1>VISIT</h1>
                        <p>Our Factory Store</p>
                        <p>Tours & Events</p>
                    </div>
                    <div>
                        <h1>MORE</h1>
                        <p>Contact Us</p>
                        <p>FAQs</p>
                        <p>Shipping Info</p>
                        <p>Return Policy</p>
                        <p>Careers</p>
                        <p>Find Us in Stores</p>
                        <p>Press</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Terms of Sale</p>
                    </div>
                </div>
                <div className={styles.FooterRight}>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
            <div className={styles.FooterBottom}>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0974/7668/t/16/assets/taza-white-footer.png?v=122262238396631087871647983724" alt="" />
                    <div>
                        <div>
                            <h1>TAZA CHOCOLATE</h1>
                            <p>561 Windsor Street, Somerville MA 02143</p>
                        </div>
                        <div>
                            <p>© 2022 Taza Chocolate. All rights reserved.</p>
                            <p> Web design by Jackrabbit</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://cdn.shopify.com/s/files/1/0974/7668/files/badge-bar-monochrome-2021_400x.png?v=1616597753" alt="" />
                </div>
            </div>
        </div>
    )
}