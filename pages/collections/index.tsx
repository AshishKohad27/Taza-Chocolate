import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import style from "./collections.module.css";
import ProductFooter from "@/components/Product/ProductFooter";
import Footer from "@/components/Footer/Footer";
import { ChevronRightIcon } from "@chakra-ui/icons";

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
    image: "",
  },
  {
    id: 1,
    title: "BARS",
    image: "",
  },
  {
    id: 1,
    title: "BARS",
    image: "",
  },
  {
    id: 1,
    title: "BARS",
    image: "",
  },
  {
    id: 1,
    title: "BARS",
    image: "",
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
      <SimpleGrid mt="10px" mb="10px" columns={{ base: 1, sm: 2, md: 3 }} spacing="10px">
        {collectionsArr &&
          collectionsArr.map((item, index) => (
            <div
              className={style.contaier}
              key={index}
              style={{
                backgroundImage: `url${"item.image"}`,
              }}
            >
              <div className={style.inside_container}>
                <h1>Shops</h1>
                <h1>{item.title}</h1>
              </div>

              <div className={style.hover_container}>
                <h1>{item.title}</h1>
                <button>
                  <Link href={`${item.path}`}>SHOP NOW</Link>
                </button>
              </div>
            </div>
          ))}
      </SimpleGrid>
      <ProductFooter/>
      <Footer/>
    </Box>
  );
}
