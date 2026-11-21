import { me } from "@/lib/site";

// The end of the page: one clear action. The e-mail itself is the big headline.
export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <footer id="kontakt" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-10 sm:px-6 lg:pt-28">
        <h2 className="text-3xl leading-tight font-semibold tracking-[-0.025em] sm:text-4xl">
          Máte malý projekt nebo zkušební úkol?
        </h2>
        <a
          href={`mailto:${me.email}`}
          className="mt-6 inline-block text-[1.65rem] leading-tight font-semibold tracking-[-0.02em] break-all underline decoration-white/30 decoration-2 underline-offset-8 transition-colors hover:decoration-white sm:text-5xl lg:text-6xl"
        >
          {me.email}
        </a>
        <p className="mt-6 text-lg text-white/80">Odpovím do 24 hodin.</p>

        <div className="mt-20 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row sm:justify-between">
          <p>© {year} {me.name}</p>
          <a href={me.github} className="hover:text-white hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
