import Button from "./Button";
import Card from "./Card";

export interface PackageItem {
  id: string; name: string; price: number; description: string;
  features: string[]; popular?: boolean; icon?: string;
}

export default function PackageCard({ pkg }: { pkg: PackageItem }) {
  return (
    <Card className={`relative flex flex-col ${pkg.popular ? "ring-2 ring-brand-500" : ""}`}>
      {pkg.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <div className="text-3xl mb-3">{pkg.icon ?? "📦"}</div>
      <h3 className="h3 text-ink-900">{pkg.name}</h3>
      <p className="text-ink-500 text-sm mt-1">{pkg.description}</p>
      <div className="mt-5">
        <span className="text-4xl font-extrabold text-ink-900">₹{pkg.price.toLocaleString()}</span>
        <span className="text-ink-500 text-sm"> /move</span>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-ink-700 flex-1">
        {pkg.features.map(f => (
          <li key={f} className="flex gap-2"><span className="text-brand-600">✓</span>{f}</li>
        ))}
      </ul>
      <Button href={`/book?package=${pkg.id}`} className="mt-6 w-full" variant={pkg.popular ? "primary" : "secondary"}>
        Choose Package
      </Button>
    </Card>
  );
}
