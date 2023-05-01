import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { use, useEffect } from "react";
import { getCartItem } from "@/redux/cart/cart.action";
import Link from "next/link";
import styles from "./cart.module.css";
import { BsChevronRight } from "react-icons/bs";
import EmptyCart from "../../components/Cart/EmptyCart";
import WithCartItem from "../../components/Cart/WithCartItem";
import AddAddress from "../../components/Cart/AddAddress";
import BillSummary from "../../components/Cart/BillSummary";
import LoadingItem from "../../components/Cart/LoadingItem";
import { similarProduct } from "../../redux/cart/cart.action";

export default function Cart() {
  const dispatch = useDispatch();
  const { CartItems, loading, relatedProducts } = useSelector(
    (store) => store.cart
  );
  //   console.log("CartItems:", CartItems);
  console.log("CartItems:", CartItems);
  console.log("relatedProducts:", relatedProducts);

  useEffect(() => {
    dispatch(getCartItem());
    dispatch(similarProduct());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Box maxW="1348px" h="auto" m="auto" pb="50px">
        {/* <Heading as="h1">Cart Page</Heading> */}
        <Box maxW="1349px" className={styles.cart}>
          <Box maxW="1269px" className={styles.heading}>
            <Box maxW="100px">
              <Heading as="h1">
                <Link href="/">Home</Link>
              </Heading>
              <Text>
                <BsChevronRight />
              </Text>
              <Heading as="h1">
                <Link href="#">Cart</Link>
              </Heading>
            </Box>
          </Box>
          <Box maxW="1269px" m="auto" className={styles.totalItem}>
            <Grid
              h="auto "
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap="37px"
            >
              <GridItem
                colSpan={{ base: 5, sm: 5, md: 3 }}
                className={styles.cartList}
              >
                <Box h="73px">
                  <Heading as="h1">
                    <span>{CartItems.length > 0 ? CartItems.length : 0}</span>
                    Items in your Cart
                  </Heading>
                </Box>

                {CartItems.length === 0 ? (
                  <EmptyCart />
                ) : (
                  <Box className={styles.withCartItem}>
                    {/* Mapping of CartItems Over Here */}
                    {CartItems &&
                      CartItems.map((item, index) => (
                        <div key={index}>
                          {loading ? (
                            <LoadingItem />
                          ) : (
                            <WithCartItem item={item} />
                          )}
                        </div>
                      ))}
                  </Box>
                )}
              </GridItem>

              <GridItem
                colSpan={{ base: 5, sm: 5, md: 2 }}
                className={styles.cartTotal}
              >
                <Box h="73px">
                  <Heading as="h1">
                    Cart total:
                    <span>
                      {CartItems.length > 0
                        ? ` ₹ ${CartItems.reduce(
                            (a, b) => a + b.bar * b.quantity,
                            0
                          ).toFixed(2)}`
                        : 0}
                    </span>
                  </Heading>
                </Box>
                {CartItems.length > 0 ? (
                  <Box h="177px" className={styles.coupons}>
                    <Box h="100px">
                      <Box maxW="60px" w="60px" h="52px" bg="">
                        <Image
                          maxW="28px"
                          h="28px"
                          src="https://assets.pharmeasy.in/web-assets/images/cartCoupon.svg"
                          alt="cartcoupon"
                        />
                      </Box>
                      <Box
                        w={{ base: "", sm: "200px", md: "201px", lg: "371px" }}
                        maxW="371px"
                        h="52px"
                      >
                        {/* <Heading as="h1">Apply Coupons</Heading> */}
                        {/* <ApplyCoupons /> */}
                        <BsChevronRight />
                      </Box>
                    </Box>

                    {/* Drawer Trial */}
                    <AddAddress />
                    {/* Drawer Trial */}
                  </Box>
                ) : (
                  <Box h="96px">
                    <Button w={{ base: "", sm: "", md: "280px", lg: "420px" }}>
                      Proceed to Checkout
                    </Button>
                  </Box>
                )}

                {/* Billing Summary */}
                {CartItems.length > 0 ? <BillSummary data={CartItems} /> : null}
                {/* Billing Summary */}

                {/* Saving  */}
                {/* 
                            {CartItems.length > 0 ? (
                                <Box className={styles.saving}>
                                    <Box>
                                        <Image
                                            src="https://assets.pharmeasy.in/web-assets/images/icRupee.svg"
                                            alt="rupee"
                                        />
                                    </Box>
                                    <Box w="400px">
                                        <Heading as="h1">
                                            Total savings of <span>₹{(CartItems.reduce((a, b) => a + b.productId.mrp * b.quantity, 0) - CartItems.reduce((a, b) => a + b.productId.bar * b.quantity, 0)).toFixed(2)}</span> on this Order
                                        </Heading>
                                      
                                    </Box>
                                </Box>
                            ) : null} */}
                {/* Saving  */}
              </GridItem>
            </Grid>
          </Box>

          {/* {CartItems.length > 0 ? (
                    <ReactElasticCarousel
                        heading={"Customers who bought above items also bought"}
                    />
                ) : null}

                {CartItems.length > 0 ? (
                    <ReactElasticCarousel heading={"Previously Browsed Items"} />
                ) : null} */}

          {/* <Box className={styles.termCondition} maxW="1248px" m="auto" mt="50px">
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={GoPrimitiveDot} color="green.500" />A licensed
                            pharmacy would be delivering your order basis availability of
                            product & fastest delivery.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GoPrimitiveDot} color="green.500" />
                            Prices are indicative and may change after billing.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GoPrimitiveDot} color="green.500" />
                            PharmEasy is a technology platform to connect sellers and buyers and
                            is not involved in sales of any product. Offer for sale on the
                            products and services are provided/sold by the sellers only. For
                            detail read Terms and Conditions
                        </ListItem>
                    </List>
                </Box> */}
        </Box>
      </Box>
      <Box maxW="1348px" m="auto">
        <Heading as="h1" ml="50px" fontSize="30px">Similar Products</Heading>
        <SimpleGrid columns={{ base: 2, sm:3, md: 5 }}>
          {relatedProducts &&
            relatedProducts.map((item, index) => (
              <ProductArr key={index} item={item} />
            ))}
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
}

function ProductArr({ item }) {
  // console.log("item Product:", item);
  return (
    <Box h="370.47px" p="25px 0px" m="auto">
      <Flex h="200px" mb="15px" justifyContent="center" alignItems="center">
        <Image h="200px" w="200px" src={item.image} alt={item.title} />
      </Flex>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Text fontSize="16px" fontWeight="600" mb="7px" color="#2D2D2D">
          {item.title}
        </Text>
        <Text fontSize="16px" mb="15px" color="#2D2D2D">
          ₹{item.bar}
        </Text>
        <Link
          href={`/collections/${item.category && item.category}/${
            item.title &&
            item.title.split(" ", 2).join("_").split("%").join("_")
          }/${item._id}`}
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
  );
}
