import SingleProduct from "@/components/SingleProduct";

import { TReducerStateProduct } from "@/constants/product";
import { getProduct } from "@/redux/product/product.action";
import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/Product.module.css";

export default function Product() {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, data }: TReducerStateProduct = useSelector(
    (store: any) => store.product
  );
  console.log("loading:", loading);
  console.log("data:", data);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <Box>
      
    </Box>
    // <SimpleGrid
    //   w="1130px"
    //   m="auto"
    //   columns={{ sm: 2, md: 3 }}
    //   border={"1px solid white"}
    // >
    //   {data &&
    //     data.map((item, index) => (
    //       <Flex
    //         m="auto"
    //         justifyContent={"center"}
    //         alignItems="center "
    //         flexDirection="column"
    //         key={index}
    //         bg="tomato"
    //         width="376px"
    //         height="372px"
    //         p="28px 0px"
    //         border={"1px solid black"}
    //       >
    //         {/* <Image w="200px" h="200px" src={item.image} alt={item.title} /> */}
    //         <Text fontSize="16px">{item.title}</Text>
    //         <Text fontSize="16px">{item.bar}</Text>
    //         <Button>Buy</Button>
    //       </Flex>
    //     ))}
    // </SimpleGrid>
  );
}
