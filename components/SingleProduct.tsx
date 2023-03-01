import { ObjectProduct } from "@/constants/product";
import style from "../styles/Product.module.css";

export default function SingleProduct({
  _id,
  title,
  description,
  bar,
  caseBar,
  image,
  category,
  quantity,
}: ObjectProduct) {
  return <div className={style.container}></div>;
}
