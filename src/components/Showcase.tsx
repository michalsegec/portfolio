"use client"; // GSAP runs in the browser, so this part is a client component

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Grey boxes that copy the layout of the Kořínek hero (positions in % of the screenshot).
// Together they look like a template / wireframe that the real design "replaces".
const boxes = [
  { left: 11.7, top: 2.6, width: 11.4, height: 2.4 }, // logo
  { left: 33.6, top: 3.0, width: 32.5, height: 1.8 }, // menu
  { left: 76.9, top: 1.8, width: 11.6, height: 4.4 }, // phone button
  { left: 11.7, top: 20, width: 43, height: 6.6 }, // headline line 1
  { left: 11.7, top: 28.4, width: 43, height: 6.6 }, // headline line 2
  { left: 11.7, top: 36.8, width: 31, height: 6.6 }, // headline line 3
  { left: 11.7, top: 46.6, width: 38, height: 1.9 }, // text lines
  { left: 11.7, top: 50.2, width: 38, height: 1.9 },
  { left: 11.7, top: 53.8, width: 31, height: 1.9 },
  { left: 11.7, top: 61, width: 15.2, height: 6.2 }, // button
  { left: 11.7, top: 75.8, width: 37, height: 1.9 }, // trust line
  { left: 58.3, top: 17, width: 30, height: 60 }, // photo
];

export default function Showcase() {
  const root = useRef<HTMLDivElement>(null);

  // THE one motion moment of the site: a blue line wipes the template away
  // and reveals the finished website underneath. Plays once on load, about 1.5 s.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ delay: 0.5, defaults: { ease: "power2.inOut" } });
        tl.fromTo(".wire", { clipPath: "inset(0 0 0 0%)" }, { clipPath: "inset(0 0 0 100%)", duration: 1.4 })
          .fromTo(".wipe-line", { left: "0%", opacity: 1 }, { left: "100%", duration: 1.4 }, "<")
          .to(".wipe-line", { opacity: 0, duration: 0.25 });
      });

      // People who turn off motion: show the finished site straight away
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".wire, .wipe-line", { display: "none" });
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_20px_60px_-30px_rgba(18,20,23,0.35)]">
      {/* Simple browser bar with the real address: it tells you this is a live website */}
      <div className="flex items-center border-b border-line bg-paper px-4 py-2.5 text-sm text-ink-soft">
        <span className="truncate">korinek-renovace.vercel.app</span>
      </div>

      <div className="relative aspect-[16/10]">
        <Image
          src="/work/korinek-desktop.png"
          alt="Úvodní obrazovka webu Kořínek Renovace: nadpis Koupelna hotová za tři týdny, cenu víte předem, a fotka koupelny"
          fill
          priority
          sizes="(min-width: 1200px) 1100px, 100vw"
          className="object-cover object-top"
        />

        {/* The "template" on top. Hidden for screen readers: it's only decoration. */}
        <div aria-hidden="true" className="wire absolute inset-0 hidden bg-paper-deep motion-safe:block">
          {boxes.map((b, i) => (
            <span
              key={i}
              className="absolute rounded-[3px] bg-wire"
              style={{ left: `${b.left}%`, top: `${b.top}%`, width: `${b.width}%`, height: `${b.height}%` }}
            />
          ))}
        </div>
        <span aria-hidden="true" className="wipe-line absolute inset-y-0 hidden w-0.5 bg-link motion-safe:block" />
      </div>

      {/* If JavaScript is off, never leave the template covering the real site */}
      <noscript>
        <style>{`.wire, .wipe-line { display: none !important; }`}</style>
      </noscript>
    </div>
  );
}
