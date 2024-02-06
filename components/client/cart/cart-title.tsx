interface CartTitleProps {
  label: string;
}

export default function CartTitle({ label }: CartTitleProps) {
  return (
    <div className="site-title">
      <h1>{label}</h1>
    </div>
  );
}
