import "@/scss/admin-styles.scss";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-red-500">
        <main className="dashbord-outer">
          <div className="site-container">
            <div className="dashbord-inner">
              {/* Dashbord Grid */}
              <div className="dash-grid">
                <div className="dash-griditem">
                  <a href="/admin/dashboard/auth" className="dash-griditem-a">
                    Auth
                  </a>
                </div>
                <div className="dash-griditem">
                  <a href="/admin/dashboard/order" className="dash-griditem-a">
                    Order
                  </a>
                </div>
                <div className="dash-griditem">
                  <a href="/admin/dashboard/category" className="dash-griditem-a">
                    Category
                  </a>
                </div>
                <div className="dash-griditem">
                  <a href="/admin/dashboard/product" className="dash-griditem-a">
                    Product
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="col-span-2 bg-green-500">{children}</div>
    </div>
  );
}
