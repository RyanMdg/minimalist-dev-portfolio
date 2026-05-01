import { projects } from "@/lib/site";

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              02 — Selected Work
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
              Recent projects.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              A handful of live sites and apps I've built and shipped.
            </p>
          </div>
        </div>

        <ul className="border-t border-border">
          {projects.map((p, i) => (
            <li key={p.url} className="border-b border-border">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group grid md:grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 items-center"
              >
                <div className="md:col-span-1 text-sm text-muted-foreground font-mono">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-foreground group-hover:italic transition-all">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-4 text-sm text-muted-foreground">
                  {p.description}
                </div>
                <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3">
                  <div className="hidden md:flex flex-wrap gap-1 justify-end">
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-xs text-muted-foreground border border-border rounded-full px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span
                    aria-hidden
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
