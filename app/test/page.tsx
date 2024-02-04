"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { increment, decrement } from "@/redux/auth/auth-slice";
import { GetAuth } from "@/redux/auth/auth-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Counter() {
  const { value, data, loading, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("data:", data);
  }, [loading, error]);

  const handleIncrement = () => {
    console.log("Increment");
    dispatch(increment());
  };

  const handleDecrement = () => {
    console.log("Decrement");
    dispatch(decrement());
  };

  const handleData = () => {
    dispatch(GetAuth());
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (error) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      Counter: <span>{value}</span>
      <button onClick={handleDecrement}>-</button>
      <div>
        HandelData
        <button className="" onClick={handleData}>
          GetData
        </button>
      </div>
      <div>
        {data &&
          data.map((item: any, index: any) => (
            <div key={index}>
              <h1>
                {index + 1}.{item.question}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}
