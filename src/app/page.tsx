"use client";
import Header from "@/components/header";
import Login from "@/pages/signup";
import { useEffect, useState } from "react";

export default function Home() {
  const [btn, setBtn] = useState(0);
  useEffect(() => {
    console.log("btn:", btn);
  }, [btn]);

  return (
    <>
      <Header />
      <Login />
    </>
  );
}
