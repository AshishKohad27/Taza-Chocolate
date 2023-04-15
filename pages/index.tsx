import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
// import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProductFooter from "@/components/Product/ProductFooter";
import ProductFooter2 from "@/components/Product/ProductFooter2";
import style from "./index.module.css";
import { SimpleGrid } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

const collectionsArr = [
  {
    id: 1,
    title: "Chocolate Bars",
    path: "/collections/Chocolate_Bars",
    image: "/Images/Products/Bars_banner.webp",
  },
  {
    id: 2,
    title: "Chocolate Disc",
    path: "/collections/Chocolate_Discs",
    image: "/Images/Products/Discs_banner.webp",
  },
  {
    id: 5,
    title: "CHOCOLATE SNACKS",
    image: "/Images/Products/Snacks_banner.webp",
    path: "Chocolate_Snacks",
  },
];

export default function Home() {
  return (
    <>
      <SimpleGrid
        mt="10px"
        mb="10px"
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing="10px"
      >
        {collectionsArr &&
          collectionsArr.map((item, index) => (
            <div
              className={style.box}
              key={index}
              // style={{
              //   backgroundImage: `url${"item.image"}`,
              // }}
            >
              <img
              
                // src="https://cdn.shopify.com/s/files/1/0974/7668/t/16/assets/page_banner_6_image.jpg?v=107305128139824397671661403560"
                src={`${item.image}`}
                alt=""
              />
              <div className={style.inside_container}>
                <h1>Shops</h1>
                <h1>{item.title}</h1>
              </div>
              <div className={style.content}>
                <div className={style.hover_container}>
                  <h1>{item.title}</h1>
                  <button>
                    <Link href={`${item.path}`}>SHOP NOW</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </SimpleGrid>
      <ProductFooter />
      <ProductFooter2 />
      <Footer />
    </>
  );
}
