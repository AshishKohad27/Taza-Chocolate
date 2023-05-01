import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import styles from "./cart.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInCart, updateItemInCart } from "../../redux/cart/cart.action";

export default function WithCartItem({ item }) {
  const { tokenDetails } = useSelector((state) => state.auth);
  //   console.log("tokenDetails:", tokenDetails);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    DeliveryDate();
    //  dispatch(gettokenDetails)
  }, []);

  function DeliveryDate() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date();
    let deliveryDate = d.getDate() + 7;
    let day = deliveryDate;
    let month = d.getMonth() + 1;

    if (deliveryDate < 29) {
      day = deliveryDate;
      month = months[month - 1];
    } else if (
      deliveryDate === 30 &&
      (month === 2 || month === 4 || month === 6 || month === 9 || month === 11)
    ) {
      day = deliveryDate - 30 + 1;
      month = month + 1;
      if (month > 12) {
        month = month - 12;
        month = months[month - 1];
      } else {
        month = months[month - 1];
      }
    } else if (deliveryDate > 29) {
      day = deliveryDate - 30 + 1;
      month = month + 1;
      if (month > 12) {
        month = month - 12;
        month = months[month - 1];
      } else {
        month = months[month - 1];
      }
    }
    setMonth(month);
    setDay(day);
  }

  return (
    <Grid
      h={{ base: "350px", sm: "350px", md: "200px", lg: "200px" }}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(10, 1fr)"
      gap={4}
      className={styles.individualItem}
    >
      <GridItem colSpan={{ base: 10, sm: 10, md: 2 }}>
        <Img maxW="105px" h="105px" src={item && item.image} alt="" />
      </GridItem>
      <GridItem colSpan={{ base: 10, sm: 10, md: 8 }}>
        <Box>
          <Heading maxW="401px" as="h1">
            {item.title}
          </Heading>

          {/* Delete Button */}
          <HandleDelete item={item} tokenDetails={tokenDetails} />
          {/* Delete Button */}
        </Box>
        <Box className={styles.priceMRP}>
          <Box w="256px" maxW="300px">
            {/* <Heading as="h1">
              MRP <span>{`₹${item.mrp}*`}</span>
            </Heading> */}
            <Heading as="h1">{`₹${item.bar}*`}</Heading>
            {/* <Heading as="h1">{`${item.discount} OFF`}</Heading> */}
          </Box>
          <Box>
            <Button
              onClick={() => {
                if (item.quantity === 1) {
                  toast({
                    title: "Minimum 1 quantity required",
                    status: "warning",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });
                  return;
                }
                dispatch(
                  updateItemInCart({
                    productId: item._id,
                    quantity: item.quantity - 1,
                  })
                );
                toast({
                  title: `${item.title} quantity decreased by 1`,
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                  position: "top",
                });
              }}
            >
              -
            </Button>
            <Button>{item.quantity}</Button>
            <Button
              onClick={() => {
                if (item.quantity === 10) {
                  toast({
                    title: "Maximum 10 quantity allowed",
                    status: "warning",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });
                  return;
                }
                dispatch( updateItemInCart({
                  productId: item._id,
                  quantity: item.quantity + 1,
                }));
                toast({
                  title: `${item.title} quantity increased by 1`,
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                  position: "top",
                });
              }}
            >
              +
            </Button>
          </Box>
        </Box>
        <Box>
          <Heading as="h1">
            Approximate Delivery By <span>{day}</span> <span>{month}</span>
          </Heading>
        </Box>
      </GridItem>
    </Grid>
  );
}

function HandleDelete({ item, tokenDetails }) {
  //   console.log("item in deleteFunction:", item);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();

  return (
    <>
      <button onClick={onOpen}>
        <AiOutlineDelete color="red" />
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Remove from Cart?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid
              h="auto"
              templateRows="repeat(1, 1fr)"
              templateColumns="repeat(10, 1fr)"
              gap={4}
              className={styles.individualItem}
            >
              <GridItem colSpan={{ base: 10, sm: 10, md: 3 }}>
                <Img maxW="105px" h="105px" src={item && item.image} alt="" />
              </GridItem>
              <GridItem colSpan={{ base: 10, sm: 10, md: 7 }}>
                <Box>
                  <Heading maxW="401px" as="h1">
                    {item.title}
                  </Heading>
                </Box>
                <Box className={styles.priceMRP}>
                  <Box w="256px" maxW="300px">
                    {/* <Heading as="h1">
                          MRP <span>{`₹${item.mrp}*`}</span>
                        </Heading> */}
                    <Heading as="h1">{`₹${item.bar}*`}</Heading>
                    {/* <Heading as="h1">{`${item.discount} OFF`}</Heading> */}
                  </Box>
                </Box>
              </GridItem>
            </Grid>
            <ModalFooter mt="-15px">
              <Button
                onClick={() => {
                  dispatch(
                    deleteItemInCart({
                      tokenDetailsId: tokenDetails._id,
                      productId: item._id,
                    })
                  );

                  toast({
                    title: "Item removed from cart.",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top",
                  });

                  onClose();
                }}
                colorScheme="red"
                variant="outline"
              >
                Remove
              </Button>
              <Button
                ml="10px"
                variant="outline"
                colorScheme="teal"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
