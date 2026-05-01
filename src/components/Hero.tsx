import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 grain">
      <div className="mx-auto max-w-6xl px-6">
        <p className="reveal text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
          ✦ {site.role} · 2 yrs experience
        </p>
        <h1 className="reveal font-display text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight text-foreground">
          Building the web,
          <br />
          <span className="italic font-light text-muted-foreground">one pixel</span> at a time.
        </h1>
        <p className="reveal mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
          {site.tagline}
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in touch
            <span aria-hidden>→</span>
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-20 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
          </span>
          {site.location}
        </div>
      </div>
    </section>
  );
}
