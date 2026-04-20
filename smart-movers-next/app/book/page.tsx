import BookingForm from "@/components/BookingForm";
import Card from "@/components/Card";
import Container from "@/components/Container";

export default function BookPage() {
  return (
    <section className="py-16 sm:py-20 bg-ink-100/50 min-h-[80vh]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="h2 text-ink-900">Book your move</h1>
            <p className="lead mt-3">Fill in a few details — we'll handle the rest.</p>
          </div>
          <Card hoverable={false} className="p-6 sm:p-10">
            <BookingForm />
          </Card>
        </div>
      </Container>
    </section>
  );
}
