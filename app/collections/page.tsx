"use client";
import Breadcrumbs from "@/components/client/breadcrums";
import CategoryGrid from "@/components/client/category-grid";
import FreeShipping from "@/components/client/free-shipping";
import PageHeader from "@/components/client/page-header";
import { useRouter } from "next/router";

export default function Collection() {
  // const router = useRouter();
  // console.log({ router });
  
  return (
    <>
      {/* Bread Crumbs */}
      <Breadcrumbs
        First={{
          label: "Home",
          href: "/",
        }}
        Second={{
          label: "Buy",
          href: "/",
        }}
        // Third={{
        //   label: productitem?.productTitle || "",
        //   href: `/products/${productitem?._id}`,
        // }}
      />
      {/* Page Header */}
      <PageHeader title="BUY & SUBSCRIBE" />
      {/* Category Grid */}
      <CategoryGrid />
      {/* FreeShipping */}
      <FreeShipping />
    </>
  );
}
