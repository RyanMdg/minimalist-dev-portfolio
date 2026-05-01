import { site, skills } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            01 — About
          </p>
        </div>
        <div className="md:col-span-8 space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            A developer who cares about the details.
          </h2>
          {site.about.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {p}
            </p>
          ))}

          <div className="pt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Tech I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-foreground hover:border-foreground transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
