import { korinek, me } from "@/lib/site";
import Showcase from "@/components/Showcase";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-8 pb-20 sm:px-6 lg:pt-10">
      <h1 className="max-w-5xl text-[2.9rem] leading-[0.98] font-semibold tracking-[-0.035em] sm:text-7xl lg:text-[5.25rem]">
        Weby, které vypadají jako ta firma. Ne jako šablona.
      </h1>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          Jsem Michal Segeč, junior frontend vývojář. Pro české firmy a agentury stavím rychlé a
          přístupné weby v Next.js, s opravdovými českými texty místo lorem ipsum.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={`mailto:${me.email}`}
            className="rounded-md bg-ink px-6 py-3.5 font-semibold text-white transition-colors hover:bg-link"
          >
            Napsat e-mail
          </a>
          <a href={korinek.live} className="font-medium text-link underline decoration-2 underline-offset-[6px]">
            Otevřít ukázkový web
          </a>
        </div>
      </div>

      <div className="mt-10">
        <Showcase />
      </div>
    </section>
  );
}
