import Button from "./Button";
import Card from "./Card";

export interface Company {
  id: string; name: string; rating: number; location: string; price: number; reviews?: number; logo?: string;
}

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <Card className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-brand-50 grid place-items-center text-xl">{company.logo ?? "🚚"}</div>
          <div>
            <h3 className="font-semibold text-ink-900">{company.name}</h3>
            <p className="text-xs text-ink-500 flex items-center gap-1 mt-0.5">📍 {company.location}</p>
          </div>
        </div>
        <span className="shrink-0 inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
          ⭐ {company.rating.toFixed(1)}
        </span>
      </div>
      <div className="mt-5 flex items-end justify-between">
        <div>
          <p className="text-xs text-ink-500">Starting from</p>
          <p className="text-xl font-bold text-brand-700">₹{company.price.toLocaleString()}</p>
        </div>
        <Button href={`/book?company=${company.id}`} size="sm">Book Now</Button>
      </div>
    </Card>
  );
}
