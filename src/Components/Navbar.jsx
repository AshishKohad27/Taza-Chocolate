import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Css/Navbar.module.css";

const links = [
  { path: "/", title: "Home" },
  { path: "/products", title: "Products" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
  { path: "/faqs", title: "FAQ's" },
  { path: "/cart", title: "Cart" },
  { path: "/login", title: "Login" },
  { path: "/singup", title: "SingUp" },
];

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      
      <div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0974/7668/t/16/assets/logo.png?v=107020486410659523981647983566"
            alt="logoTaza"
          />
        </div>
        <div className={styles.NavLinks}>
          {links.map((ele) => (
            <NavLink key={ele.path} to={ele.path} end
              className={({ isActive }) => {
                return isActive ? styles.active : styles.default;
              }}
            >
              {ele.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
