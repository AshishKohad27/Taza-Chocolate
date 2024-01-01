export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="ph-outer site-mb">
      <div className="site-container">
        <div className="ph-title grid--center">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
