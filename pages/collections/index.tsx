import { Box, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function Collections() {
  return (
    <Box>
      <Link
        href={{
          pathname: "/collections/[slug]",
          query: { slug: "Chocolate_Bars" },
        }}
      >
        Chocolate Bars
      </Link>

      <Link
        href={{
          pathname: "/collections/[slug]",
          query: { slug: "Chocolate_Discs" },
        }}
      >
        Chocolate Discs
      </Link>

      <Link
        href={{
          pathname: "/collections/[slug]",
          query: { slug: "Chocolate_Snacks" },
        }}
      >
        Chocolate Snacks
      </Link>

      <Link
        href={{
          pathname: "/collections/[slug]",
          query: { slug: "Gifts" },
        }}
      >
        Gifts
      </Link>
    </Box>
  );
}
