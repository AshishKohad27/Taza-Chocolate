import { ObjectProduct } from "@/constants/product";
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
  return (
    <div className={style.container}>
      {/* <img src={item.image} alt={item.title} /> */}
      <h1>{item.title}</h1>
      <h1>Price: {item.bar}</h1>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}
