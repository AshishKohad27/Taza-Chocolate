"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import Login from "./signup/page";
import Products from "./products/page";

export default function Home() {
  const [btn, setBtn] = useState(0);
  useEffect(() => {
    console.log("btn:", btn);
  }, [btn]);

  return (
    <>
      <Header />
      {/* <Login /> */}
      <Products />
    </>
  );
}
