import { me } from "@/lib/site";

const links = [
  { href: "#prace", label: "Práce" },
  { href: "#o-mne", label: "O mně" },
  { href: "#kontakt", label: "Kontakt" },
];

// Short page, so no hamburger menu: three links fit even on a phone
export default function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
      <a href="#" className="font-semibold tracking-[-0.01em]">
        {me.name}
      </a>
      <nav aria-label="Hlavní menu">
        <ul className="flex gap-5 text-[0.95rem] sm:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ink-soft transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
