import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <Box display={"flex"} justifyContent="center" width="1348px" m="auto">
    //   <Grid container>
    //     <Grid item bgcolor="red" height={"400px"} xs={2}>
    //       <Link
    //         href={{
    //           pathname: "/collection",
    //           query: { keyword: "bar" },
    //         }}
    //       >
    //         Chocolate Bar
    //       </Link>
    //     </Grid>
    //     <Grid item bgcolor="blue" height={"400px"} xs={2}>
    //       <Link
    //         href={{
    //           pathname: "/collection",
    //           query: { keyword: "disc" },
    //         }}
    //       >
    //         Chocolate Disc
    //       </Link>
    //     </Grid>
    //     <Grid item bgcolor="red" height={"400px"} xs={2}>
    //       <Link
    //         href={{
    //           pathname: "/collection",
    //           query: { keyword: "gift_collection" },
    //         }}
    //       >
    //         Gifts & Collections
    //       </Link>
    //     </Grid>
    //     <Grid item bgcolor="blue" height={"400px"} xs={2}>
    //       <h1>xs=8</h1>
    //     </Grid>
    //   </Grid>
    // </Box>
    <>
      <Navbar />
      {/* <h1>Home Page</h1> */}
      <Footer />
    </>
  );
}
