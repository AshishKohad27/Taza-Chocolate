import { Box, Flex, Text } from "@chakra-ui/react";
import style from "./ProductFooter.module.css";

export default function ProductFooter() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      maxW="1349px"
      h="272px"
      m="auto"
      className={style.container}
      p="20px 30px 10px"
      mb="10px"
    >
      <Flex
        w="1100px"
        h="96px"
        m="auto"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Box className={style.float}>Free Shipping!</Box>
        <Text
          maxW="938px"
          as="p"
          fontSize={{ base: "14px", md: "18px" }}
          fontWeight="600"
          m="auto"
        >
          Get FREE SHIPPING on orders $49+! (Total order price must be over $49
          AFTER any discounts are applied.) Contiguous US states only.
        </Text>
      </Flex>
    </Flex>
  );
}
