export default function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-10 sm:mb-14`}>
      {eyebrow && <p className="text-sm font-semibold text-brand-600 tracking-wide uppercase mb-3">{eyebrow}</p>}
      <h2 className="h2 text-ink-900">{title}</h2>
      {subtitle && <p className="lead mt-4">{subtitle}</p>}
    </div>
  );
}
