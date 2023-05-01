import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import BreadCrumbs from "../../../components/BreadCrums/BreadCrums";
import Link from "next/link";
import ProductFooter from "../../../components/Product/ProductFooter";
import Footer from "../../../components/Footer/Footer";
import Nutrition from "../../../components/Product/NutritionCard";
import Navbar from "../../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../../redux/product/product.action";
import { addItemInCart } from "../../../redux/cart/cart.action";

const SinglePageArr = [
  { id: 1, image: "/Images/SinglePage/USDA_organic_color.png" },
  { id: 2, image: "/Images/SinglePage/certified_direct_trade.jpg" },
  { id: 3, image: "/Images/SinglePage/org_Is_always_nonGMO_color_sm.png" },
  { id: 4, image: "/Images/SinglePage/GF_Color_larger.png" },
  { id: 5, image: "/Images/SinglePage/DFVegan_Black.png" },
  { id: 6, image: "/Images/SinglePage/UPareve.png" },
];

export default function SinglePage() {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const router = useRouter();
  const { singleItem, loading, error } = useSelector((store) => store.product);
  const { message } = useSelector((store) => store.cart);
  const toast = useToast();
  // console.log("singleItem:", singleItem);
  // console.log("message:", message);
  // console.log("id:", router.asPath.split("/")[4]);

  useEffect(() => {
    if (message === "Item added in cart successfully") {
      toast({
        title: message,
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    } else if (message === "Product Already Exist") {
      toast({
        title: message,
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [message]);

  useEffect(() => {
    dispatch(getProductById(router.asPath.split("/")[4]));
  }, [router.asPath.split("/")[4]]);

  const handelAddToCart = () => {
    console.log("qty:", qty);
    const payload = {
      productId: singleItem._id,
      quantity: qty,
    };
    dispatch(addItemInCart(payload));
    if (message === "Product Already Exist") {
      toast({
        title: message,
        status: "success",
        position: "top",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Navbar />
      {/* BreadCrums */}
      <BreadCrumbs
        query={router.asPath.split("/")[3]}
        details={{
          flag: true,
          product: router.asPath.split("/")[2],
        }}
      />
      {/* BreadCrums */}

      {/* Single Page */}
      <SimpleGrid
        maxW="1160px"
        p="0px 30px"
        m="auto"
        mt="30px"
        h="auto"
        columns={{ base: 1, md: 2 }}
      >
        <Flex justifyContent="center" alignItems="center" maxW="535px">
          <Image
            w="400px"
            h="400px"
            m="auto"
            src={`${singleItem && singleItem.image}`}
            alt=""
          />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          direction="column"
          maxW="565px"
          m="auto"
          h="auto"
        >
          <Heading as="h1" mb="14px" fontSize="28px">
            {singleItem.title && singleItem.title.toUpperCase()}
          </Heading>
          <Text fontSize="16px" mb="30px">
            {singleItem.description}
          </Text>
          <Flex justifyContent="space-evenly" w="400px" m="auto" mb="40px">
            <Box>
              <Heading as="h1">BAR</Heading>
            </Box>
            <Box>
              <Select value={qty} onChange={(e) => setQty(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Select>
            </Box>
          </Flex>
          <Button w="100%" bg="#2EBBCD" onClick={handelAddToCart}>
            ADD TO CART
          </Button>
        </Flex>
      </SimpleGrid>
      {/* Single Page */}

      {/* Details and Certificate */}
      <SimpleGrid
        maxW="1160px"
        h="342px"
        m="auto"
        columns={{ base: 1, md: 2 }}
        mt="10px"
      >
        <Flex h="100%" m="auto" bg="red.200" maxW="565px">
          <Heading as="h1" fontSize="16px" mb="8px">
            DETAILS
          </Heading>
          <Text fontSize="16px" mb="15px"></Text>
          <Nutrition />
        </Flex>
        <Stack h="100%" m="auto" maxW="565px">
          <Heading as="h1" fontSize="16px" mb="8px">
            CERTIFICATIONS
          </Heading>
          <Text fontSize="16px" mb="15px">
            This product is certified USDA Organic, Direct Trade Certified,
            Non-GMO, Certified Gluten Free, and Kosher Pareve. It is also dairy
            free, soy free, and vegan.
          </Text>

          <SimpleGrid
            gap="25px"
            maxW="565px"
            h={{ base: "auto", md: "111px" }}
            m="auto"
            columns={{ base: 3, md: 6 }}
          >
            {SinglePageArr &&
              SinglePageArr.map((item, index) => (
                <Box key={index} h="107px" w="71px" bg="">
                  <Image w="100%" h="100%" src={item.image} alt={item.id} />
                </Box>
              ))}
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
      {/* Details and Certificate */}

      {/* You May Like This */}
      <Box maxW="1130px" m="auto" mt="30px" mb="40px">
        <Flex
          maxW="1130px"
          m="auto"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h1">You May Like This</Heading>
        </Flex>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }}>
          <Box maxW="366px" h="370px" p="28px 0px" bg="blue.300">
            <Box w="200px" h="200px" m="auto" mb="15px">
              <Image
                w="100%"
                h="200px"
                src="https://cdn.shopify.com/s/files/1/0974/7668/products/Taza_TripleNutCrunch-1080-med_large.jpg?v=1678472248"
                alt=""
              />
            </Box>
            <Flex
              justifyContent="center"
              alignItems="center"
              direction="column"
            >
              <Heading fontSize="16px" as="h1" mb="7px" bg="yellow.200">
                1
              </Heading>
              <Text mb="14px" fontSize="16px">
                $ 5.00
              </Text>

              <Link
                href="#"
                // href={`/collections/${item.category && item.category}/${
                //   item.title &&
                //   item.title.split(" ", 2).join("_").split("%").join("_")
                // }/${item._id}`}
              >
                <Button
                  bg="black"
                  style={{
                    padding: "7px 18px",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    borderRadius: "5px",
                    fontWeight: "800",
                  }}
                  _hover={{
                    bg: "orange",
                  }}
                >
                  BUY
                </Button>
              </Link>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
      {/* You May Like This */}

      {/* ProductFooter */}
      <ProductFooter />
      {/* ProductFooter */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </Box>
  );
}
