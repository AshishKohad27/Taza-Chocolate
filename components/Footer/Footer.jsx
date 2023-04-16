import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import style from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { TfiPinterest } from "react-icons/tfi";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";

const FooterObject = {
  Buy: [
    { title: "Chocolate Bars", link: "/collections/Chocolate_Bars" },
    { title: "Chocolate Discs", link: "/collections/Chocolate_Discs" },
    {
      title: "Chocolate Covered",
      link: "/collections/Chocolate_Covered_Treats",
    },
    { title: "Gifts", link: "/collections/Gifts" },
    { title: "Dark Bark", link: "/collections/Dark_Bark" },
    { title: "Bulk and Barking", link: "#" },
    { title: "80% Cacao & Up", link: "#" },
  ],
  Learn: [
    { title: "About Taza", link: "#" },
    { title: "Our Process", link: "#" },
    { title: "Taza Direct Trade", link: "#" },
    { title: "Recipes", link: "#" },
    { title: "Stone Ground Blog", link: "#" },
    { title: "Wholesales", link: "#" },
  ],
  Visit: [
    { title: "Our Factory Store", link: "#" },
    { title: "Tours & Events", link: "#" },
    { title: "Virtual Experience", link: "#" },
  ],
  More: [
    { title: "Contact", link: "#" },
    { title: "FAQs", link: "#" },
    { title: "Shipping Info", link: "#" },
    { title: "Return Policy", link: "#" },
    { title: "Careers", link: "#" },
    { title: "Find Us in Stores", link: "#" },
    { title: "Press", link: "#" },
    { title: "Privacy Policy", link: "#" },
    { title: "Terms of Use", link: "#" },
    { title: "Terms of Sales", link: "#" },
  ],
};

export default function Footer() {
  return (
    <Box maxW="100vw" h="auto" m="auto" className={style.footer}>
      <Box className={style.footer} maxW="1130px" m="auto" h="auto" py="60px">
        {/* upper footer */}
        <SimpleGrid
          borderBottom="2px solid white"
          maxW="1130px"
          h={{ base: "auto", md: "300px" }}
          columns={{ base: 1, sm: 1, md: 2 }}
          // spacing={5}
        >
          <Box>
            <SimpleGrid
              maxW="1130px"
              m="auto"
              columns={{ base: 1, sm: 2, md: 4 }}
              spacing={5}
            >
              <Flex
                justifyContent="start"
                direction="column"
                alignItems={{ base: "center", md: "start" }}
                className={style.title}
              >
                <Heading as="h1" mb="10px">
                  <Link href="/collections">BUY</Link>
                </Heading>
                <Stack alignItems={{ base: "center", md: "start" }}>
                  {FooterObject &&
                    FooterObject.Buy.map((item, index) => (
                      <Text
                        mb="-3px"
                        fontSize="12px"
                        color="#acacac"
                        key={index}
                        _hover={{
                          color: "#fff",
                        }}
                      >
                        <Link href={`${item.link}`}>{item.title}</Link>
                      </Text>
                    ))}
                </Stack>
              </Flex>

              <Flex
                justifyContent="start"
                direction="column"
                alignItems={{ base: "center", md: "start" }}
                className={style.title}
              >
                <Heading as="h1" mb="10px">
                  LEARN
                </Heading>
                <Stack alignItems={{ base: "center", md: "start" }}>
                  {FooterObject &&
                    FooterObject.Learn.map((item, index) => (
                      <Text
                        mb="-3px"
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
                </Stack>
              </Flex>

              <Flex
                justifyContent="start"
                direction="column"
                alignItems={{ base: "center", md: "start" }}
                className={style.title}
              >
                <Heading as="h1" mb="10px">
                  VISIT
                </Heading>
                <Stack alignItems={{ base: "center", md: "start" }}>
                  {FooterObject &&
                    FooterObject.Visit.map((item, index) => (
                      <Text
                        mt="3px"
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
                </Stack>
              </Flex>

              <Flex
                justifyContent="start"
                direction="column"
                alignItems={{ base: "center", md: "start" }}
                className={style.title}
              >
                <Heading as="h1" mb="10px">
                  MORE
                </Heading>
                <Stack alignItems={{ base: "center", md: "start" }}>
                  {FooterObject &&
                    FooterObject.More.map((item, index) => (
                      <Text
                        mb="-3px"
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
                </Stack>
              </Flex>
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
            <Flex mt="10px" gap="10px">
              <Box h="18px" w="18px">
                <FaFacebookF color="#fff" />
              </Box>
              <Box h="18px" w="18px">
                <TiSocialInstagram color="#fff" />
              </Box>
              <Box h="18px" w="18px">
                <TfiPinterest color="#fff" />
              </Box>
              <Box h="18px" w="18px">
                <BsTwitter color="#fff" />
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>
        {/* upper footer */}

        {/* lower footer */}
        <SimpleGrid
          maxW="1130px"
          h="224px"
          m="auto"
          columns={{ base: 1, md: 2 }}
        >
          <Flex
            // m="auto"
            mt="50px"
            w="100%"
            height="80px"
          >
            <Box>
              <Image
                w="77px"
                h="77px"
                src="/Images/Footer/taza-white-footer.webp"
                alt=""
              />
            </Box>
            <Box
              mt="-6px"
              ml="20px"
              w="233px"
              h="93px"
              className={style.footerleftBottom}
            >
              <Box>
                <Heading as="h2">TAZA CHOCOLATE</Heading>
                <Text>561 Windsor Street, Somerville MA 02143</Text>
              </Box>
              <Box>
                <Text>
                  © 2023 Taza Chocolate. All rights reserved. Web design by
                  Jackrabbit
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex justifyContent="flex-end" height="80px" mt="50px">
            <Image
              maxW="387px"
              h="110px"
              src="/Images/Footer/badge-bar-monochrome-2021_400x.png"
              alt=""
            />
          </Flex>
        </SimpleGrid>
        {/* lower footer */}
      </Box>
    </Box>
  );
}
