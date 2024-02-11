"use client";
import FairForAll from "@/components/client/Fair-for-all";
import Banner from "@/components/client/banner";
import Breadcrumbs from "@/components/client/breadcrums";
import FreeShipping from "@/components/client/free-shipping";
import { ProductGrid } from "@/components/client/products/product-grid";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import products from "../../../json/products.json";
import ProductGridSkeleton from "@/components/client/skeleton/product-grid-skeleton";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import collection from "@/json/collections.json";
import useCollectionHook from "@/hooks/collection-hook";

export default function Products() {
  const [loading, setLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();
  const search: string | null = searchParams.get("col");
  const searchNumber: number = search !== null ? parseInt(search, 10) : 0;
  // const [title, setTitle] = useState<string>("Taza Chocolate");
  const [bannerImage, setBannerImage] = useState<string>("");

  // const [title] = await CollectionHook({ CollectionId: searchNumber });
  const { title } = useCollectionHook({ CollectionId: searchNumber });

  useEffect(() => {
    console.log("search:", search);
    let timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [loading]);

  useEffect(() => {

  }, [title]);

  return (
    <div className="product-outer">
      <div className="product-inner">
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
          Third={{
            label: title && title,
            href: `/collections/${title && title}?col=${searchNumber}`,
          }}
        />

        {/* Product Banner */}
        <Banner title={title} />

        {/* Product Description */}
        <div className="pro-desc-outer">
          <div className="site-container">
            <div className="pro-desc-inner">
              <div className="pro-desc-para site-paragraph">
                <p>
                  Our Chocolate Bars take stone ground chocolate to another
                  dimension by mixing incredible flavor combinations into our
                  minimally processed, bold chocolate.
                </p>
                <p>
                  Never run out of your favorites! Subscribe & Save 10%. Change,
                  skip or cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Item */}
        <div className="pro-item-outer">
          <div className="site-container">
            <div className="pro-item-inner">
              {/* Product Grid */}
              {loading ? (
                <ProductGridSkeleton products={products} />
              ) : (
                <ProductGrid products={products} />
              )}
              {/* Pagination */}
              <div className="pro-pagination site-pagination-article">
                <button className="pro-pagination-btns">
                  <FaArrowLeftLong />
                </button>
                <button className="pro-pagination-btns">1</button>
                <button className="pro-pagination-btns ppbtn--current">
                  2
                </button>
                <button className="pro-pagination-btns">3</button>
                <button className="pro-pagination-btns">
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Free Shipping! */}
        <FreeShipping />

        {/* Fair For All */}
        <FairForAll />
      </div>
    </div>
  );
}
