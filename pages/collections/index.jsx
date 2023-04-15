import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import style from "./collections.module.css";
import ProductFooter from "@/components/Product/ProductFooter";
import Footer from "@/components/Footer/Footer";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";

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
    id: 3,
    title: "Chocolate Covered Teats",
    path: "/collections/Chocolate_Covered_Treats",
    image: "/Images/Products/Chocolate_Covered_Treats_banner.webp",
  },
  {
    id: 4,
    title: "SMOOTH & CRUNCHY BARS",
    image: "/Images/Products/Smooth_Crunchy_BARS_banner.webp",
    path: "#",
  },
  {
    id: 5,
    title: "CHOCOLATE SNACKS",
    image: "/Images/Products/Snacks_banner.webp",
    path: "Chocolate_Snacks",
  },
  {
    id: 6,
    title: "GIFTS",
    image: "/Images/Products/Gifts_banner.webp",
    path: "Gifts",
  },
  {
    id: 7,
    title: "CHOCOLATE COVERED TREATS",
    image: "/Images/Products/Chocolate_Covered_Treats_banner.webp",
    path: "#",
  },
  {
    id: 8,
    title: "DARK BARK",
    image: "/Images/Products/Dark_Bark_banner.webp",
    path: "#",
  },
  {
    id: 8,
    title: "BULK & BAKING CHOCOLATE",
    image: "/Images/Products/Bulk_Baking_Chocolate_banner.webp",
    path: "#",
  },
];

export default function Collections() {
  return (
    <Box>
      {/* bread crumbs */}

      <Box maxW="1099.99px" m="auto">
        <Breadcrumb
          p="0px 30px"
          // bg="red"
          spacing="8px"
          separator={<ChevronRightIcon color="#979797" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/collections">Buy</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      {/* Banner */}

      <Box bg="#2EBBCD" maxW="" h="157px" m="auto" className={style.BuyHeading}>
        <h1>BUY & SUBSCRIBE</h1>
      </Box>

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
              <Image
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
      <Footer />
    </Box>
  );
}
