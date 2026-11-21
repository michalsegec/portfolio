import Image from "next/image";
import { korinek } from "@/lib/site";

// A case study tells a story: what was needed, what I built, what came out of it.
// Agencies read this to see how you THINK, not only what the site looks like.
const built = [
  "Kalkulačka ceny koupelny: pět otázek, cenové rozpětí a délka prací. Výpočet je v samostatné funkci, oddělený od vzhledu.",
  "Posuvník před/po, který funguje myší, prstem i klávesnicí.",
  "Poptávkový formulář přes server action: kontrola na serveru, ochrana proti spamu, srozumitelné chyby. Výsledek kalkulačky se do něj vyplní sám.",
  "Cookie lišta podle českých pravidel: odmítnout jde stejně snadno jako povolit a měření se spustí až po souhlasu.",
];

const results = [
  "PageSpeed 100 ve všech čtyřech kategoriích na mobilu i počítači, hlavní obsah na mobilu za 1,7 s.",
  "Kontrast WCAG AA, celý web jde ovládat klávesnicí.",
  "Web jsem prošel očima tří typických návštěvníků a podle toho opravil deset věcí, například jsem přidal sekci o lidech, kteří k zákazníkovi přijdou.",
];

export default function CaseStudy() {
  return (
    <section id="prace" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <h2 className="text-4xl leading-[1.05] font-semibold tracking-[-0.03em] sm:text-6xl">Kořínek Renovace</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Ukázkový web pro smyšlenou brněnskou firmu, která rekonstruuje koupelny. Next.js 15, React,
          TypeScript a Tailwind CSS, nasazeno na Vercelu.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-medium">
          <a href={korinek.live} className="text-link underline decoration-2 underline-offset-[6px]">
            Živý web
          </a>
          <a href={korinek.code} className="text-link underline decoration-2 underline-offset-[6px]">
            Kód na GitHubu
          </a>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-12 lg:col-span-7">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">Zadání</h3>
              <p className="mt-3 max-w-[38rem] text-lg leading-relaxed text-ink-soft">
                Zákazník, který chce novou koupelnu, se bojí tří věcí: že nebude znát cenu, že se
                práce protáhne a že nepozná, jestli je firma spolehlivá. Web má na všechny tři
                odpovědět během první minuty.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">Co jsem postavil</h3>
              <ul className="mt-4 max-w-[38rem] space-y-3">
                {built.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-link" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">Výsledek</h3>
              <ul className="mt-4 max-w-[38rem] space-y-3">
                {results.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-link" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Two real screenshots: the phone version and the calculator */}
          <div className="grid grid-cols-5 gap-4 self-start lg:sticky lg:top-10 lg:col-span-5">
            <figure className="col-span-2">
              <Image
                src="/work/korinek-mobile.png"
                alt="Web Kořínek na mobilu: nahoře fotka koupelny, pod ní nadpis a tlačítko Spočítat cenu koupelny"
                width={1170}
                height={2532}
                sizes="(min-width: 1024px) 180px, 40vw"
                className="w-full rounded-lg border border-line"
              />
              <figcaption className="mt-2 text-sm text-ink-soft">Mobil</figcaption>
            </figure>
            <figure className="col-span-3">
              <Image
                src="/work/korinek-calculator.png"
                alt="Kalkulačka na webu Kořínek: volby velikosti a vybavení koupelny a zelený panel s orientační cenou"
                width={2880}
                height={1800}
                sizes="(min-width: 1024px) 280px, 60vw"
                className="aspect-[3/4] w-full rounded-lg border border-line object-cover object-[75%_40%]"
              />
              <figcaption className="mt-2 text-sm text-ink-soft">Kalkulačka ceny</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
