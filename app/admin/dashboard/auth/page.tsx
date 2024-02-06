"use client";
import { useEffect, useState } from "react";
import { GetAuth } from "@/redux/auth/auth-action";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Auth_Form_Edit } from "@/components/admin/users-form/auth-form-edit";
import { Auth_Form_Delete } from "@/components/admin/users-form/auth-form-delete";

export default function Auth_Dashboard() {
  const { data, loading, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [isRefresh, setIsRefresh] = useState<boolean>(false);

  useEffect(() => {
    dispatch(GetAuth());
  }, [isRefresh, dispatch]);

  useEffect(() => {
    // console.log("data:", data);
    console.log("loading:", loading);
  }, [loading, error, isRefresh]);

  const handleRefresh = () => {
    setIsRefresh(!isRefresh);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else
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
                <button onClick={handleRefresh}>Refresh</button>
              </div>
            </div>
          </article>
          {/* Table for Users */}
          <div className="table-container">
            <div className="site-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td>Ashish Kohad</td>
                    <td>ashishkohad@gmail.com</td>
                    <td>Admin</td>
                    <td>
                      <Auth_Form_Edit />
                    </td>
                    <td><Admin_Form_Delete /></td>
                  </tr> */}

                  {data &&
                    data.map((item) => (
                      <tr key={item._id}>
                        <td>
                          {item.first_name} {item.last_name}
                        </td>
                        <td>ashishkohad@gmail.com</td>
                        <td>{item.role}</td>
                        <td>
                          <Auth_Form_Edit AuthId={item._id} />
                        </td>
                        <td>
                          <Auth_Form_Delete AuthId={item._id} />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
}
