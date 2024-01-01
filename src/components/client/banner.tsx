interface BannerProps {
  bannerImage: string;
}

export default function Banner({ bannerImage }: BannerProps) {
  return (
    <div
      className="pro-banner-outer"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="pro-banner-inner">
        <article className="pro-banner-article">
          <h1>BARS</h1>
        </article>
      </div>
    </div>
  );
}
