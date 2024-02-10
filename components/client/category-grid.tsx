import Link from "next/link";

export default function CategoryGrid() {
  return (
    <div className="cat-outer site-mb">
      <ul className="cat-grid">
        {new Array(
          { title: "Chocolate Discs" },
          { title: "Chocolate Covered Treats" },
          { title: "Smooth & Crunchy Bars" },
          { title: "Bulk & Baking Chocolate" },
          { title: "Smooth & Crunchy Bars" },
          { title: "Bulk & Baking Chocolate" }
        ).map((item, index) => (
          <li className="cat-griditem" key={index}>
            {/* Fixed Container */}
            <div
              className="fixed-cont grid--center"
              style={{
                backgroundImage: `url(${"https://raw.githubusercontent.com/AshishKohad27/Taza-Chocolate/main/public/Images/page_banner_6_image.webp"})`,
              }}
            >
              <article className="cat-article-box">
                <h4>Shop</h4>
                <h2>{item.title}</h2>
              </article>
            </div>
            {/* Dynamic Container */}
            <div className="dyna-cont grid--center">
              <article className="cat-article-box grid--center dyna-cat-article-box">
                <h2>{item.title}</h2>
                <Link
                  title="Shop Now"
                  className="cat-article-box-a"
                  href={`/collections/${item.title}`}
                >
                  Shop now
                </Link>
              </article>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
