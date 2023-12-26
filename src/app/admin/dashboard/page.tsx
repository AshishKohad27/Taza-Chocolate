import "@/scss/admin-styles.scss";

export default function Dashboard() {
  return (
    <>
      <main className="dashbord-outer">
        <div className="site-container">
          <div className="dashbord-inner">
            {/* Dashbord Grid */}
            <div className="dash-grid">
              <div className="dash-griditem">
                <a href="dashboard/auth" className="dash-griditem-a">
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
