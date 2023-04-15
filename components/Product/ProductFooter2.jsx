import { Box, Flex, Text } from "@chakra-ui/react";
import style from "./ProductFooter.module.css";
import Link from "next/link";

export default function ProductFooter2() {
  return (
    <Flex
      m="auto"
      h="600px"
      maxW="1349px"
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundImage: `url('/Images/Products/Product_footer_image_banner.webp')`,
      }}
      mb="10px"
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column" m="auto" w="674px" h="300px" className={style.container2}>
        <Flex  justifyContent="center" alignItems="center" m="auto" maxW="614px" h="185px">
          <Box className={style.float2}>Fair for all</Box>
          <Text as="p">
            WE BELIEVE BOTH FARMER AND CHOCOLATE MAKER SHOULD SHARE THE REWARD
            OF MAKING A GREAT PRODUCT
          </Text>
        </Flex>
        <Link className={style.learnMore} href="#">Learn More</Link>
      </Flex>
    </Flex>
  );
}
