import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";

export default function Cart() {
  return (
    <>
    <Navbar/>
      <Box maxW="1348px" m="auto">
        <h1>Cart Page</h1>
      </Box>
      <Footer />
    </>
  );
}
