import "@/scss/admin-styles.scss";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <a href="/admin/dashboard" title="back">
        Back
      </a>
      {children}
    </div>
  );
}
