export default function PageContainer({ children }) {
  return (
    <div className="container py-4">
      <div className="pt-5">
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
}
