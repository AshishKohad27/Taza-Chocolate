import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  background,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import style from "./collections.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/product/product.action";
import Footer from "@/components/Footer/Footer";
import { ChevronRightIcon } from "@chakra-ui/icons";

const collectionArr = [
  {
    query: "Gifts",
    title: "GIFTS",
    image: "/Images/Products/Gifts_banner.webp",
    para1:
      "Taza's intense, pure, and seriously satisfying stone ground chocolate makes for the perfect gift for any occasion, from celebrating a special day to showing gratitude. Unique and striking packaging makes your gift memorable.",
    para2:
      "If you are looking to send 10 or more gifts to separate addresses, as tokens of appreciation or to connect with your remote team, please reach out to the Taza Corporate Gifts Team at corporategifts@tazachocolate.com or call 617-623-0804 x2.  If fewer than 10 gifts are needed, your best bet is to order here on our website.",
  },
  {
    query: "Chocolate_Bars",
    title: "CHOCOLATE BARS",
    image: "/Images/Products/Bars_banner.webp",
    para1:
      "Our Chocolate Bars take stone ground chocolate to another dimension by mixing incredible flavor combinations into our minimally processed, bold chocolate.",
    para2:
      "Never run out of your favorites! Subscribe & Save 10%. Change, skip or cancel anytime.",
  },
  {
    query: "Chocolate_Discs",
    title: "CHOCOLATE DISCS",
    image: "/Images/Products/Discs_banner.webp",
    para1:
      "Inspired by our passion for Mexican chocolate traditions, we hand-carve granite millstones to make these rustic, organic dark Mexican style chocolate discs bursting with bright tastes and gloriously gritty textures.",
    para2:
      "Never run out of your favorites! Subscribe & Save 10%. Change, skip or cancel anytime.",
  },
  {
    query: "Chocolate_Snacks",
    title: "CHOCOLATE SNACKS",
    image: "/Images/Products/Snacks_banner.webp",
    para1:
      "Taza Chocolate snacks pair organic, stone ground dark chocolate with nutrition-packed super food ingredients like almonds, coconut, and crispy puffed quinoa. Feel good about your snacks!",
    para2: "",
  },
  {
    title: "SMOOTH & CRUNCHY BARS",
    image: "/Images/Products/Smooth_Crunchy_BARS_banner.webp",
    para1:
      "Our NEW Smooth & Crunchy bars pair silky smooth 70% dark chocolate with lots of irresistibly crunchy mix-ins!",
    para2: "",
  },
];
export default function CollectionsProducts() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data } = useSelector((store) => store.product);
  console.log("data:", data);

  useEffect(() => {
    let payload = router.query.id;
    dispatch(getProduct(payload));
  }, [dispatch, router.query.id]);

  let appendData = collectionArr.filter(
    (item) => item.query === router.query.id
  );
  return (
    <>
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
              <BreadcrumbLink href="/collections">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href="#">Buy</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage >
              <BreadcrumbLink fontWeight="600" >{router.query.id}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
        {/* Banner */}
        {appendData &&
          appendData.map((item, index) => (
            <Box key={index}>
              <Box
                bg=""
                maxW="1359px"
                h="320px"
                className={style.imageDiv}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                {/* <Image h="320px" m="auto" src={item.image} alt={item.image} /> */}
                <Heading as="h1" fontSize="60px" className={style.imageHeading}>
                  {item.title}
                </Heading>
              </Box>
              <Box m="auto" mt="30px" bg="" maxW="920px" className={style.para}>
                <Heading as="h1">{item.para1}</Heading>
                <Heading as="h1">{item.para2}</Heading>
              </Box>
            </Box>
          ))}
        {/* Banner */}

        {/* Products Appends */}
        <SimpleGrid
          w="1099.98px"
          m="auto"
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing="0px"
          border="2px solid white"
        >
          {data &&
            data.map((item, index) => (
              <Box key={index} bg="" h="370.47px" p="25px 0px">
                <Flex
                  h="200px"
                  mb="15px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Image
                    h="200px"
                    w="200px"
                    src={item.image}
                    alt={item.title}
                  />
                </Flex>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <Text
                    fontSize="16px"
                    fontWeight="600"
                    mb="7px"
                    color="#2D2D2D"
                  >
                    {item.title}
                  </Text>
                  <Text fontSize="16px" mb="15px" color="#2D2D2D">
                    ₹{item.bar}
                  </Text>
                  <button
                    style={{
                      padding: "7px 18px",
                      background: "#0D0D0D",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      borderRadius: "5px",
                      fontWeight: "800",
                    }}
                  >
                    BUY
                  </button>
                </Flex>
              </Box>
            ))}
        </SimpleGrid>
        {/* Products Appends */}
      </Box>
      <Footer />
    </>
  );
}
