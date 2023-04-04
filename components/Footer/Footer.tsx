import { Box } from "@chakra-ui/react";
import style from "./Footer.module.css";
import { footerObject } from "@/constants/footer";

const FooterObject: footerObject = {
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
    <Box maxW="1349px" h="520px" m="auto" bg="red.200">
      <Box
        className={style.footer}
        maxW="1130px"
        m="auto"
        bg="green.200"
        h="520px"
      >
        {/* upper footer */}
        <Box></Box>
        {/* upper footer */}

        {/* lower footer */}
        <Box></Box>
        {/* lower footer */}
      </Box>
    </Box>
  );
}
