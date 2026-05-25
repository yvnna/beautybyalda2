import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main>
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
        {/* Hero image — replace src with your actual photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundColor: "#2C1F17",
          }}
        />

        {/* Subtle dark overlay at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Hero text — bottom left, matching reference style */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-16 md:pb-20 flex flex-col items-start max-w-2xl">
          <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tight mb-4">
            Beauty by<br />Alda
          </h1>
          <p className="text-white/70 text-[11px] tracking-[0.2em] uppercase font-sans mb-8 max-w-xs leading-relaxed">
            Professional makeup artistry for bridal,<br />
            editorial &amp; special events.
          </p>
          <Link
            href="/portfolio"
            className="text-white text-[11px] tracking-[0.2em] uppercase font-sans hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            OUR WORK
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Bottom right link — matching reference style */}
        <div className="absolute bottom-16 md:bottom-20 right-8 md:right-14">
          <a
            href="/contact#book"
            className="text-white text-[11px] tracking-[0.2em] uppercase font-sans hover:opacity-70 transition-opacity flex items-center gap-2"
          >
            BOOK A SESSION
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
