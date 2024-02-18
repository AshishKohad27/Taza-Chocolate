"use client";
import { useEffect, useState } from "react";
import { GetAuth } from "@/redux/auth/auth-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Auth_Form_Edit } from "@/components/admin/users-form/auth-form-edit";
import { Auth_Form_Delete } from "@/components/admin/users-form/auth-form-delete";
import AdminTable from "@/components/admin/data-table/table";

export default function Category_Dashboard() {
  //   const { data, loading, error } = useAppSelector((state) => state.auth);
  //   const dispatch = useAppDispatch();

  //   const [isRefresh, setIsRefresh] = useState<boolean>(false);

  //   useEffect(() => {
  //     dispatch(GetAuth());
  //   }, [isRefresh, dispatch]);

  //   useEffect(() => {
  //     // console.log("data:", data);
  //     console.log("loading:", loading);
  //   }, [loading, error, isRefresh]);

  //   const handleRefresh = () => {
  //     setIsRefresh(!isRefresh);
  //   };

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
            <div>
              {/* <button onClick={handleRefresh}>Refresh</button> */}
            </div>
          </div>
        </article>
        {/* Table for Users */}

        <AdminTable />
      </div>
    </section>
  );
}
