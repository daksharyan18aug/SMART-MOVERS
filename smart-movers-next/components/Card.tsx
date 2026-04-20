export default function Card({ children, className = "", hoverable = true }: { children: React.ReactNode; className?: string; hoverable?: boolean }) {
  return (
    <div
      className={`bg-white border border-ink-100 rounded-2xl shadow-card p-6 transition-all duration-300 ${
        hoverable ? "hover:shadow-cardHover hover:-translate-y-1 hover:border-brand-200" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
