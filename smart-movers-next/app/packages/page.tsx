import Container from "@/components/Container";
import PackageCard, { PackageItem } from "@/components/PackageCard";
import SectionHeading from "@/components/SectionHeading";

const packages: PackageItem[] = [
  { id: "1bhk",    name: "1 BHK Move",        icon: "🏠", price: 8000,  description: "Perfect for studios and small homes.", features: ["Up to 8 boxes","2 movers + 1 vehicle","Basic packing","Same-city move"] },
  { id: "2bhk",    name: "2 BHK Move",        icon: "🏡", price: 14000, description: "Most popular for families.", popular: true, features: ["Up to 18 boxes","3 movers + 1 large vehicle","Full packing & unpacking","Furniture disassembly"] },
  { id: "office",  name: "Office Relocation", icon: "🏢", price: 25000, description: "For teams up to 30 people.", features: ["IT equipment handling","After-hours moves","Insurance included","Dedicated coordinator"] },
  { id: "vehicle", name: "Vehicle Transport", icon: "🚗", price: 12000, description: "Bikes & cars across cities.", features: ["GPS tracked","Door-to-door","Full insurance","5–7 day delivery"] },
];

export default function PackagesPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Pricing" title="Choose your perfect move" subtitle="Transparent packages. No hidden fees." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map(p => <PackageCard key={p.id} pkg={p} />)}
        </div>
      </Container>
    </section>
  );
}
