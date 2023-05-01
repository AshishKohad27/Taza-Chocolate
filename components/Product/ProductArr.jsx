import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

export default function ProductArr({ item }) {
  console.log("item in product:", item);
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
