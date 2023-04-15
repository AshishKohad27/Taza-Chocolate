import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import style from "./Footer.module.css";
import { footerObject } from "@/constants/footer";

const FooterObject = {
  Buy: [
    { title: "Gifts", link: "" },
    { title: "Dark Bark", link: "" },
    { title: "Chocolate Bars", link: "" },
    { title: "Chocolate Discs", link: "" },
    { title: "Chocolate Covered", link: "" },
    { title: "Bulk and Barking", link: "" },
    { title: "80% Cacao & Up", link: "" },
  ],
  Learn: [
    { title: "About Taza", link: "" },
    { title: "Our Process", link: "" },
    { title: "Taza Direct Trade", link: "" },
    { title: "Recipes", link: "" },
    { title: "Stone Ground Blog", link: "" },
    { title: "Wholesales", link: "" },
  ],
  Visit: [
    { title: "Our Factory Store", link: "" },
    { title: "Tours & Events", link: "" },
    { title: "Virtual Experience", link: "" },
  ],
  More: [
    { title: "Contact", link: "" },
    { title: "FAQs", link: "" },
    { title: "Shipping Info", link: "" },
    { title: "Return Policy", link: "" },
    { title: "Careers", link: "" },
    { title: "Find Us in Stores", link: "" },
    { title: "Press", link: "" },
    { title: "Privacy Policy", link: "" },
    { title: "Terms of Use", link: "" },
    { title: "Terms of Sales", link: "" },
  ],
};

export default function Footer() {
  return (
    <Box
      maxW="1349px"
      h={{ base: "auto", md: "520px" }}
      m="auto"
      className={style.footer}
    >
      <Box
        className={style.footer}
        maxW="1130px"
        m="auto"
        bg=""
        h="520px"
        py="60px"
      >
        {/* upper footer */}
        <SimpleGrid
          bg=""
          maxW="1130px"
          h="224px"
          columns={{ base: 1, sm: 1, md: 2 }}
          spacing={5}
        >
          <Box bg="" height="">
            <SimpleGrid
              bg=""
              maxW="1130px"
              h="224px"
              columns={{ base: 2, sm: 2, md: 4 }}
              spacing={5}
            >
              <Box bg="" className={style.title}>
                <Heading as="h1" mb="10px">
                  BUY
                </Heading>
                <Box>
                  {FooterObject &&
                    FooterObject.Buy.map((item, index) => (
                      <Text
                        mb="3px"
                        fontSize="12px"
                        color="#acacac"
                        key={index}
                        _hover={{
                          color: "#fff",
                        }}
                      >
                        {item.title}
                      </Text>
                    ))}
                </Box>
              </Box>
              <Box bg="" className={style.title}>
                <Heading as="h1">LEARN</Heading>
                <Box>
                  {FooterObject &&
                    FooterObject.Learn.map((item, index) => (
                      <Text
                        mb="3px"
                        fontSize="12px"
                        color="#acacac"
                        key={index}
                        _hover={{
                          color: "#fff",
                        }}
                      >
                        {item.title}
                      </Text>
                    ))}
                </Box>
              </Box>
              <Box bg="" className={style.title}>
                <Heading as="h1">VISIT</Heading>
                <Box>
                  {FooterObject &&
                    FooterObject.Visit.map((item, index) => (
                      <Text
                        mb="3px"
                        fontSize="12px"
                        color="#acacac"
                        key={index}
                        _hover={{
                          color: "#fff",
                        }}
                      >
                        {item.title}
                      </Text>
                    ))}
                </Box>
              </Box>
              <Box bg="" className={style.title}>
                <Heading as="h1">MORE</Heading>
                <Box>
                  {FooterObject &&
                    FooterObject.More.map((item, index) => (
                      <Text
                        mb="3px"
                        fontSize="12px"
                        color="#acacac"
                        key={index}
                        _hover={{
                          color: "#fff",
                        }}
                      >
                        {item.title}
                      </Text>
                    ))}
                </Box>
              </Box>
            </SimpleGrid>
          </Box>

          <Box className={style.footerSignUpTitle}>
            <Heading as="h1" mb="8px" fontSize="16px" color="white">
              JOIN OUR MAILING LIST{" "}
            </Heading>

            <Flex gap="5px">
              <Input
                h="32px"
                placeholder="Name"
                borderRadius="0px"
                background="#525252"
                _hover={{
                  border: "0px solid",
                }}
              />
              <Input
                h="32px"
                background="#525252"
                _hover={{
                  border: "0px",
                }}
                placeholder="Email"
                borderRadius="0px"
              />
              <Box w="85px">
                <Button
                  h="32px"
                  color="black"
                  background="#2ebbcd"
                  fontSize="10px"
                  ml="2px"
                  fontWeight={800}
                  borderRadius="0px"
                >
                  SIGN UP
                </Button>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
        {/* upper footer */}

        {/* lower footer */}
        <SimpleGrid
          bg="red.300"
          maxW="1130px"
          h="224px"
          columns={{ base: 1, m: 1, md: 2 }}
          spacing={5}
        >
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
        {/* lower footer */}
      </Box>
    </Box>
  );
}
