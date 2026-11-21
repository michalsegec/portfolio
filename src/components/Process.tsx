// How I work. These are real steps in order, so numbering them is fine here.
const steps = [
  { title: "Obsah dřív než design", text: "Nejdřív zjistím, kdo web čte a čeho se bojí. Teprve potom řeším barvy a písmo." },
  { title: "Návrh rovnou v kódu", text: "Stavím po sekcích a každou hned zkouším na mobilu i na počítači." },
  { title: "Kontrola", text: "Rychlost v PageSpeed, ovládání klávesnicí, kontrast a průchod webem očima zákazníka." },
  { title: "Nasazení", text: "GitHub a Vercel. Každá změna je za minutu online a dá se vrátit zpět." },
];

export default function Process() {
  return (
    <section className="border-t border-line bg-paper-deep/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <h2 className="text-3xl leading-tight font-semibold tracking-[-0.025em] sm:text-4xl">Jak pracuji</h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-ink pt-5">
              <span aria-hidden="true" className="text-sm font-semibold text-link">
                {i + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
