import { Inter } from "next/font/google";
import Link from "next/link";
// import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ProductFooter from "@/components/Product/ProductFooter";
import ProductFooter2 from "@/components/Product/ProductFooter2";
import style from "./index.module.css";
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Flex,
  Stack,
  Button,
  Text,
} from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

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
    id: 5,
    title: "CHOCOLATE SNACKS",
    image: "/Images/Products/Snacks_banner.webp",
    path: "Chocolate_Snacks",
  },
];

export default function Home() {
  return (
    <>
      <Box m="auto" className={style.home_shop}>
        <Image
          m="auto"
          maxH="590px"
          w="1349px"
          src="/Images/Home/home_page_banner.webp"
          alt="home_page"
        />
        <Box>
          <Heading as="h1" fontSize={{base:"55px",md:"127px"}} >SHOP</Heading>
          <Heading as="h3" fontSize={{base:"16px",md:"27px"}}>TAZA CHOLOCALTE!</Heading>
        </Box>
      </Box>
      <SimpleGrid
        maxW="1349px"
        m="auto"
        mt="10px"
        mb="10px"
        columns={{ base: 1, sm: 2, md: 3 }}
        spacing="10px"
      >
        {collectionsArr &&
          collectionsArr.map((item, index) => (
            <Box
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
              <Box className={style.inside_container}>
                <h1>Shops</h1>
                <h1>{item.title}</h1>
              </Box>
              <Box className={style.content}>
                <Box className={style.hover_container}>
                  <h1>{item.title}</h1>
                  <button>
                    <Link href={`${item.path}`}>SHOP NOW</Link>
                  </button>
                </Box>
              </Box>
            </Box>
          ))}
      </SimpleGrid>
      <SimpleGrid
        maxW="1349px"
        m="auto"
        mb="10px"
        gap="10px"
        columns={{ base: 1, md: 2 }}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          h="310px"
          bg="#39bccd"
        >
          <Box
            direction="column"
            justifyContent="center"
            className={style.readStory}
          >
            <Heading as="h3">Read Our Transparency Report</Heading>
            <Text as="p">
              Learn more about how Taza Direct Trade breaks the (chocolate)
              mold!
            </Text>
            <Button
              colorScheme="teal"
              variant="outline"
              rounded="0px"
              fontSize="14px"
              color="black"
              fontWeight="700"
              _hover={{
                color: "#fff",
                bg: "black",
              }}
            >
              {" "}
              Read More
            </Button>
          </Box>
        </Flex>
        <Box h="310px" bg="orange">
          <Image
            w="100%"
            h="100%"
            src="/Images/Home/readStory.webp"
            alt="readStory"
          />
        </Box>
      </SimpleGrid>
      <ProductFooter />
      <ProductFooter2 />
      <Footer />
    </>
  );
}
