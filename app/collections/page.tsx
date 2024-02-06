import Breadcrumbs from "@/components/client/breadcrums";
import CategoryGrid from "@/components/client/category-grid";
import FreeShipping from "@/components/client/free-shipping";
import PageHeader from "@/components/client/page-header";

export default function Collection() {
  return (
    <>
      {/* Bread Crumbs */}
      {/* <Breadcrumbs First="Home" Second="Buy" Third="" /> */}
      {/* Page Header */}
      <PageHeader title="BUY & SUBSCRIBE" />
      {/* Category Grid */}
      <CategoryGrid />
      {/* FreeShipping */}
      <FreeShipping />
    </>
  );
}
