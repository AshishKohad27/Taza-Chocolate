import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import {    Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text } from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { useEffect } from "react";
import { getCartItem } from "@/redux/cart/cart.action";
import Link from "next/link";
import styles from "./cart.module.css"
import { BsChevronRight } from "react-icons/bs";
import EmptyCart from "../../components/Cart/EmptyCart";
import WithCartItem from "../../components/Cart/WithCartItem";
import AddAddress from "../../components/Cart/AddAddress";
import BillSummary from "../../components/Cart/BillSummary";
import LoadingItem from "../../components/Cart/LoadingItem";

export default function Cart() {
  const dispatch= useDispatch();
  const { CartItems, loading, error, message, errorMessage } = useSelector(
    (store) => store.cart
  );
//   console.log("CartItems:", CartItems);
//   console.log("message:", message);
  // console.log("loading:", loading);

  useEffect(() => {
    dispatch(getCartItem());
  }, []);

  return (
    <>
      <Navbar />
      <Box maxW="1348px" h="auto" m="auto" pb="50px">
        {/* <Heading as="h1">Cart Page</Heading> */}
        <Box maxW="1349px" className={styles.cart}>
                <Box maxW="1269px" className={styles.heading}>
                    <Box maxW="100px">
                        <Heading as="h1">
                            <Link href="#">Home</Link>
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
                                                {loading ? <LoadingItem /> : <WithCartItem item={item} />}
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
                                    <span>{CartItems.length > 0 ? ` ₹ ${CartItems.reduce((a, b) => a + b.bar * b.quantity, 0).toFixed(2)
                                        }` : 0}</span>
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
                            {CartItems.length > 0 ? (
                                <BillSummary data={CartItems} />
                            ) : null}
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
      <Footer />
    </>
  );
}
