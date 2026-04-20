import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";

const features = [
  { icon: "🛡️", title: "Verified Movers", text: "Every partner is background-checked and insured." },
  { icon: "💰", title: "Transparent Pricing", text: "No hidden fees. See your full quote upfront." },
  { icon: "⚡", title: "Fast Booking", text: "Book a move in under 2 minutes." },
  { icon: "📦", title: "Full Service", text: "Packing, loading, transport and unpacking." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-50 via-white to-white" />
        <div className="absolute -top-32 -right-32 -z-10 h-96 w-96 rounded-full bg-brand-100 blur-3xl opacity-60" />
        <Container className="py-20 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-ink-100 text-xs font-medium text-ink-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" /> Trusted by 10,000+ families
              </span>
              <h1 className="h1 mt-5 text-ink-900">
                Moving made <span className="text-brand-600">effortless.</span>
              </h1>
              <p className="lead mt-5 max-w-xl">
                Book verified movers for your home, office or vehicle in minutes. Transparent pricing, smooth experience, zero stress.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/book" size="lg">Book Your Move →</Button>
                <Button href="/packages" size="lg" variant="secondary">View Packages</Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[["10k+","Moves"],["4.8★","Rating"],["50+","Cities"]].map(([n,l]) => (
                  <div key={l}><p className="text-2xl font-extrabold text-ink-900">{n}</p><p className="text-xs text-ink-500 mt-1">{l}</p></div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-cardHover grid place-items-center text-white text-9xl">🚚</div>
              <Card className="absolute -bottom-6 -left-6 max-w-[220px]">
                <p className="text-xs text-ink-500">Next available</p>
                <p className="font-semibold mt-1">Today, 4:00 PM</p>
                <p className="text-xs text-brand-600 font-medium mt-1">3 movers available</p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURES */}
      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Why SmartMovers" title="Built for a smoother move" subtitle="Everything you need to relocate with confidence." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <Card key={f.title}>
                <div className="text-3xl">{f.icon}</div>
                <h3 className="font-semibold mt-4">{f.title}</h3>
                <p className="text-sm text-ink-500 mt-1">{f.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 p-10 sm:p-14 text-white text-center shadow-cardHover">
            <h2 className="h2">Ready to move?</h2>
            <p className="mt-3 opacity-90 max-w-xl mx-auto">Get your free quote in under a minute.</p>
            <div className="mt-7 flex justify-center gap-3 flex-wrap">
              <Link href="/book" className="bg-white text-brand-700 hover:bg-ink-100 font-semibold rounded-xl h-12 px-7 inline-flex items-center transition-all">Book Now</Link>
              <Link href="/companies" className="border border-white/40 hover:bg-white/10 font-semibold rounded-xl h-12 px-7 inline-flex items-center transition-all">Browse Companies</Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
