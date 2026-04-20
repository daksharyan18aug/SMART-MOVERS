"use client";
import { FormEvent, useState } from "react";
import Button from "./Button";

const input = "w-full h-11 px-4 rounded-xl border border-ink-100 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition";
const label = "text-sm font-medium text-ink-700 mb-1.5 block";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setLoading(true); setTimeout(()=>setLoading(false),1200); }
  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2"><label className={label}>Full name</label><input className={input} placeholder="Jane Doe" required /></div>
      <div><label className={label}>Phone</label><input className={input} placeholder="+91 98xxxxxx" required /></div>
      <div><label className={label}>Email</label><input type="email" className={input} placeholder="you@email.com" required /></div>
      <div><label className={label}>From</label><input className={input} placeholder="Pickup city" required /></div>
      <div><label className={label}>To</label><input className={input} placeholder="Drop city" required /></div>
      <div><label className={label}>Move date</label><input type="date" className={input} required /></div>
      <div>
        <label className={label}>Package</label>
        <select className={input} required defaultValue="">
          <option value="" disabled>Select…</option>
          <option>1 BHK</option><option>2 BHK</option><option>Office</option><option>Vehicle</option>
        </select>
      </div>
      <div className="sm:col-span-2"><label className={label}>Notes</label><textarea rows={4} className={`${input} h-auto py-3`} placeholder="Anything we should know?" /></div>
      <div className="sm:col-span-2 flex justify-end pt-2">
        <Button type="submit" size="lg" disabled={loading}>{loading ? "Booking…" : "Confirm Booking →"}</Button>
      </div>
    </form>
  );
}
