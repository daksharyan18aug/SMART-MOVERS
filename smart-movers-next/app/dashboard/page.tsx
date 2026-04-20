import BookingTable, { Booking } from "@/components/BookingTable";
import Card from "@/components/Card";
import Container from "@/components/Container";
import Button from "@/components/Button";

const bookings: Booking[] = [
  { id:"b1", date:"2025-04-22", from:"Mumbai", to:"Pune",  pkg:"1 BHK",  status:"Confirmed", amount: 8000 },
  { id:"b2", date:"2025-03-18", from:"Delhi",  to:"Noida", pkg:"2 BHK",  status:"Completed", amount: 14000 },
  { id:"b3", date:"2025-04-30", from:"BLR",    to:"HYD",   pkg:"Vehicle",status:"Pending",   amount: 12000 },
];

const stats = [
  { label: "Total bookings", value: "12",     icon: "📦" },
  { label: "Active moves",   value: "2",      icon: "🚚" },
  { label: "Total spent",    value: "₹84k",   icon: "💳" },
  { label: "Saved",          value: "₹6,200", icon: "🎁" },
];

export default function DashboardPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h1 className="h2">Welcome back, Jane 👋</h1>
            <p className="lead mt-1">Here's a snapshot of your moves.</p>
          </div>
          <Button href="/book">+ New Booking</Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {stats.map(s => (
            <Card key={s.label} className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-brand-50 grid place-items-center text-xl">{s.icon}</div>
              <div>
                <p className="text-xs text-ink-500">{s.label}</p>
                <p className="text-xl font-bold text-ink-900">{s.value}</p>
              </div>
            </Card>
          ))}
        </div>

        <h3 className="h3 mb-4">Recent bookings</h3>
        <BookingTable rows={bookings} />
      </Container>
    </section>
  );
}
