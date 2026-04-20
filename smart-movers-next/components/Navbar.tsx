"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const links = [
  { href: "/packages",  label: "Packages" },
  { href: "/companies", label: "Companies" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-ink-100">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display font-extrabold text-xl">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-brand-600 text-white">📦</span>
          <span>Smart<span className="text-brand-600">Movers</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink-700 hover:text-brand-600 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button href="/login" variant="ghost" size="sm">Sign in</Button>
          <Button href="/book" size="sm">Book Now</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden h-10 w-10 grid place-items-center rounded-lg hover:bg-ink-100" aria-label="Menu">
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-100 bg-white">
          <div className="container-x py-4 flex flex-col gap-2">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-ink-700 font-medium">
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button href="/login" variant="secondary" size="sm" className="flex-1">Sign in</Button>
              <Button href="/book" size="sm" className="flex-1">Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
