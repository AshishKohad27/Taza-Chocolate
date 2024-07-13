"use client";
import { useEffect, useState } from "react";
import { GetCategoryAction } from "@/redux/category/category-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Auth_Form_Edit } from "@/components/admin/users-form/auth-form-edit";
import { Auth_Form_Delete } from "@/components/admin/users-form/auth-form-delete";
import CategoryTable from "@/components/admin/data-table/category-table";
import { pageProps } from "@/constant/client/client-global";

const intialState: pageProps = {
  search: "",
  page: 1,
  limit: 10,
  orderBy: "",
  order: "",
};

export default function Category_Dashboard() {
  const { data, total, loading, error } = useAppSelector(
    (state) => state.category
  );
  const dispatch = useAppDispatch();

  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  useEffect(() => {
    dispatch(GetCategoryAction(intialState));
  }, [isRefresh, dispatch]);

  //   useEffect(() => {
  //     // console.log("data:", data);
  //     console.log("loading:", loading);
  //   }, [loading, error, isRefresh]);

  const handleRefresh = () => {
    setIsRefresh(!isRefresh);
  };

  //   if (loading) {
  //     return <h1>Loading...</h1>;
  //   } else
  return (
    <section className="admin-module-outer">
      <div className="admin-module inner">
        {/* Details */}
        {/*  */}
        <article className="admin-module-title admin-header">
          <div className="site-container">
            <h1>Auth DashBoard</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <div className="auth-btn-box">{/* <Admin_Form_Create /> */}</div>
            <div>{/* <button onClick={handleRefresh}>Refresh</button> */}</div>
          </div>
        </article>
        {/* Table for Users */}

        <CategoryTable
          data={data}
          handleRefresh={handleRefresh}
          loading={loading}
          total={total}
        />
      </div>
    </section>
  );
}
