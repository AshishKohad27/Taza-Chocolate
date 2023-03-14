import { ObjectProduct } from "@/constants/product";
import { Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import style from "../styles/SingleProduct.module.css";

// {
//   _id,
//   title,
//   description,
//   bar,
//   caseBar,
//   image,
//   category,
//   quantity,
// }: ObjectProduct

export default function SingleProduct({ item }: any): any {
  // console.log("item:", item);
  // return (
  //   // <div className={style.container}>

  //   // </div>

  //   // <Box m="auto" width="1348px">
  //   //   <Grid
  //   //     container
  //   //     margin={"auto"}
  //   //     width="1130px"
  //   //     // spacing={{ xs: 2, md: 3 }}
  //   //     columns={{ xs: 1, sm: 2, md: 3 }}
  //   //   >
  //       {/* {Array.from(Array(6)).map((_, index) => ( */}
  //       <Grid
  //         width="366px"
  //         height="393px"
  //         bgcolor={"red"}
  //         item
  //         spacing="10px"
  //         key={item.title}
  //         m="auto"
  //         mt="10px"
  //         display={"flex"}
  //         justifyContent="center"
  //         alignContent="center"
  //       >
  //         {/* <img src={item.image} alt={item.title} /> */}
  //         <h1>{item.title}</h1>
  //         <h1>Price: {item.bar}</h1>
  //         <button>Delete</button>
  //         <button>Edit</button>
  //       </Grid>
  //       {/* ))} */}
  //     </Grid>
  //   </Box>
  // );
  return (
    // <SimpleGrid
    //   width="366px"
    //   height="393px"
    //   bgcolor={"red"}

    //   spacing="10px"
    //   key={item.title}
    //   m="auto"
    //   mt="10px"
    //   display={"flex"}
    //   justifyContent="start"
    //   alignItems="center"
    //   flexDirection={"column"}
    // >
    //   {/* <img
    //     style={{ width: "200px", height: "200px" }}
    //     src={item.image}
    //     alt={item.title}
    //   /> */}
    //   {/* <Heading
    //     variant="h1"
    //     fontSize="25px"
    //     color="text.secondary"
    //     component="h2"
    //     textAlign={"center"}
    //     fontWeight={"500"}
    //   >
    //     {item.title}
    //   </Heading>
    //   <Typography
    //     variant="h1"
    //     fontSize="25px"
    //     color="text.secondary"
    //     component="h2"
    //     textAlign={"center"}
    //     fontWeight={"500"}
    //   >
    //     {item.bar}
    //   </Typography> */}

    //   {/* <Butto variant="contained">Contained</Butto> */}
    // </SimpleGrid>

    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.

    <SimpleGrid columns={[2, null, 3]} spacing="40px">
      <Box bg="tomato" width="33" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid>
    // <h1>Hello</h1>
  );
}
