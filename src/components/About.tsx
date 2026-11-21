// What I can do, grouped. Only list things you can explain in an interview.
const skills = [
  { group: "Technologie", items: "Next.js (App Router), React, TypeScript, Tailwind CSS, GSAP" },
  { group: "Kvalita", items: "Přístupnost WCAG AA, Core Web Vitals, SEO pro Google i Seznam" },
  { group: "Česká specifika", items: "Cookie lišta podle zákona, GDPR u formulářů, IČO a obchodní rejstřík v patičce" },
  { group: "Nástroje", items: "Git, GitHub, Vercel, Lighthouse a PageSpeed Insights" },
];

export default function About() {
  return (
    <section id="o-mne" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <h2 className="text-3xl leading-tight font-semibold tracking-[-0.025em] sm:text-4xl">O mně</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Hledám spolupráci s agenturou na DPP: hotové sekce podle vašeho návrhu, úpravy
            existujících webů nebo menší weby od začátku.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Každý web před odevzdáním kontroluji: rychlost v PageSpeed, přístupnost a zobrazení na
            mobilu i na počítači.
          </p>
        </div>

        <dl className="divide-y divide-line border-y border-line lg:col-span-7">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="font-semibold">{s.group}</dt>
              <dd className="leading-relaxed text-ink-soft">{s.items}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
