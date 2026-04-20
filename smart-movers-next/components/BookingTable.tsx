export interface Booking { id: string; date: string; from: string; to: string; pkg: string; status: "Pending"|"Confirmed"|"Completed"; amount: number; }

const statusColor: Record<Booking["status"], string> = {
  Pending:   "bg-amber-50 text-amber-700",
  Confirmed: "bg-blue-50 text-blue-700",
  Completed: "bg-green-50 text-green-700",
};

export default function BookingTable({ rows }: { rows: Booking[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink-100 bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-ink-100/60 text-ink-700">
          <tr>{["Date","From","To","Package","Status","Amount"].map(h=>(
            <th key={h} className="text-left font-semibold px-4 py-3">{h}</th>
          ))}</tr>
        </thead>
        <tbody className="divide-y divide-ink-100">
          {rows.map(r => (
            <tr key={r.id} className="hover:bg-ink-100/40 transition-colors">
              <td className="px-4 py-3">{r.date}</td>
              <td className="px-4 py-3">{r.from}</td>
              <td className="px-4 py-3">{r.to}</td>
              <td className="px-4 py-3">{r.pkg}</td>
              <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColor[r.status]}`}>{r.status}</span></td>
              <td className="px-4 py-3 font-semibold">₹{r.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
