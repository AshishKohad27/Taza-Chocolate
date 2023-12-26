
import Admin_Header from "@/admin/components/header";
import "@/scss/admin-styles.scss";

export default function Dashboard() {
  return (
    <>
      <Admin_Header />
      <main className="dashbord-outer">
        <div className="site-container">
          <div className="dashbord-inner">
            {/* Dashbord Grid */}
            <div className="dash-grid">
              <div className="dash-griditem">
                <a href="admin/dashboard/auth" className="dash-griditem-a">
                  Auth
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
