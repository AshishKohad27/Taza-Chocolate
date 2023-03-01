import SingleProduct from "@/components/SingleProduct";
import { TReducerStateProduct } from "@/constants/product";
import { getProduct } from "@/redux/product/product.action";
import { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, data }: TReducerStateProduct = useSelector(
    (store: any) => store.product
  );
  console.log("loading:", loading);
  console.log("data:", data);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error...</h1>;
  }
  return (
    <div>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <SingleProduct item={item} />
          </div>
        ))}
    </div>
  );
}
