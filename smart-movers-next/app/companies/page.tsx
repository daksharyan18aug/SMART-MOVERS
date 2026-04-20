import CompanyCard, { Company } from "@/components/CompanyCard";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const companies: Company[] = [
  { id: "1", name: "BlueArrow Movers",  rating: 4.8, location: "Mumbai",    price: 9500,  logo: "🚚" },
  { id: "2", name: "QuickShift Logistics", rating: 4.6, location: "Delhi",  price: 8800,  logo: "📦" },
  { id: "3", name: "PackPro Services",  rating: 4.9, location: "Bangalore", price: 12000, logo: "🏠" },
  { id: "4", name: "Urban Relocators",  rating: 4.5, location: "Pune",      price: 7500,  logo: "🛻" },
  { id: "5", name: "ShiftMaster",       rating: 4.7, location: "Hyderabad", price: 10500, logo: "🚛" },
  { id: "6", name: "EasyMove Co.",      rating: 4.4, location: "Chennai",   price: 8200,  logo: "📮" },
];

export default function CompaniesPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Partners" title="Verified moving companies" subtitle="Browse top-rated movers in your city." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map(c => <CompanyCard key={c.id} company={c} />)}
        </div>
      </Container>
    </section>
  );
}
