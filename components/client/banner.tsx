interface BannerProps {
  // CollectionId?: number | null;
  title: string;
}

import { useEffect, useState } from "react";
import collection from "@/json/collections.json";

export default function Banner({ title }: BannerProps) {
  return (
    <div
      className="pro-banner-outer"
      style={{
        backgroundImage: `url(${"https://raw.githubusercontent.com/AshishKohad27/Taza-Chocolate/main/public/Images/page_banner_6_image.webp"})`,
      }}
    >
      <div className="pro-banner-inner">
        <article className="pro-banner-article">
          <h1>{title}</h1>
        </article>
      </div>
    </div>
  );
}
