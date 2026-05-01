import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className=" flex justify-center gap-12 mb-20">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
              Recent projects.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              A handful of live sites and apps I've built and shipped.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width editorial project list */}
      <div className="border-t border-border">
        {projects.map((p, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <div key={p.url} className="border-b border-border pb-20 mx-20">
              <div className="grid md:grid-cols-5 min-h-[440px]">
                {/* Text column */}
                <div
                  className={cn(
                    "md:col-span-2 flex flex-col justify-between py-12 px-8 md:px-12",
                    imageLeft
                      ? "md:order-2 border-t md:border-t-0 md:border-l border-border"
                      : "md:order-1 md:border-r border-border",
                  )}
                >
                  <div>
                    <span className="text-sm text-muted-foreground">{p.tags[0]}</span>
                    <h3 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight mt-3 leading-[1.1]">
                      {p.title}.
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                      {p.description}
                    </p>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${p.title}`}
                    className="mt-8 inline-flex items-center justify-center w-16 h-16 rounded-full border border-foreground text-foreground text-xl hover:bg-foreground hover:text-background transition-all duration-200"
                  >
                    ↗
                  </a>
                </div>

                {/* Image column */}
                <div
                  className={cn(
                    "md:col-span-3 overflow-hidden bg-muted",
                    imageLeft ? "md:order-1" : "md:order-2",
                  )}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
