"use client";
import "@/scss/admin-styles.scss";
import Admin_Form_Create from "../../../components/admin/users-form/admin-form-create";
import Admin_Form_Edit from "../../../components/admin/users-form/admin-form-edit";
import Admin_Form_Delete from "../../../components/admin/users-form/admin-form-delete";

export default function Auth_Dashboard() {
  return (
    <section className="admin-module-outer">
      <div className="admin-module inner">
        <article className="admin-module-title admin-header">
          <div className="site-container">
            <h1>Auth DashBoard</h1>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <div className="auth-btn-box">
              <Admin_Form_Create />
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
                <tr>
                  <td>Ashish Kohad</td>
                  <td>ashishkohad@gmail.com</td>
                  <td>Admin</td>
                  <td>{/* <Admin_Form_Edit /> */}</td>
                  <td>{/* <Admin_Form_Delete /> */}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
