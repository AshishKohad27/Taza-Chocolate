import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

export default function BreadCrumbs({ query, details }) {
  return (
    <Box
      m="auto"
      bg=""
      h="50px"
      borderBottom="1px solid grey"
      borderTop="1px solid grey"
    >
      <SimpleGrid
        columns={{ base: 1 }}
        maxW="1099.99px"
        m="auto"
        pt="12px"
        boxSize="box-Border"
      >
        <Breadcrumb
          p="0px 30px"
          fontFamily="sans-serif"
          // bg="red"
          spacing="8px"
          separator={<ChevronRightIcon color="#979797" />}
          fontSize="16px"
          color="gray.500"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">HOME</BreadcrumbLink>
          </BreadcrumbItem>

          {!details.flag ? (
            <BreadcrumbItem>
              <BreadcrumbLink href="/collections">BUY</BreadcrumbLink>
            </BreadcrumbItem>
          ) : null}

          {details.flag ? (
            <BreadcrumbItem>
              <BreadcrumbLink href={`/collections/${details.product}`}>
                {details.product}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ) : null}

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight="600">{query}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </SimpleGrid>
    </Box>
  );
}
