import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300 mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-white font-display font-extrabold text-xl mb-3">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-brand-600">📦</span>
            SmartMovers
          </div>
          <p className="text-sm leading-relaxed">Reliable, transparent moving services across the country. Backed by verified partners.</p>
        </div>

        {[
          { title: "Product", items: [["/packages","Packages"],["/companies","Companies"],["/book","Book"]] },
          { title: "Company",  items: [["/about","About"],["/contact","Contact"],["/careers","Careers"]] },
          { title: "Legal",    items: [["/terms","Terms"],["/privacy","Privacy"],["/refund","Refund"]] },
        ].map(col => (
          <div key={col.title}>
            <h4 className="text-white font-semibold mb-3">{col.title}</h4>
            <ul className="space-y-2 text-sm">
              {col.items.map(([href,label]) => (
                <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs flex flex-col md:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} SmartMovers. All rights reserved.</p>
          <p>Made with ♥ for smoother moves.</p>
        </div>
      </div>
    </footer>
  );
}
