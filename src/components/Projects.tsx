import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            Recent projects.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl">
            A handful of live sites and apps I've built and shipped.
          </p>
        </FadeIn>
      </div>

      {/* Full-width editorial project list */}
      <div className="border-t border-border">
        {projects.map((p, i) => {
          const imageLeft = i % 2 === 0;
          return (
            <motion.div
              key={p.url}
              className="border-b border-border"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.65,
                delay: 0.05,
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
              }}
            >
              {/* Stack on mobile, side-by-side on md+ */}
              <div className="flex flex-col md:grid md:grid-cols-5 min-h-0 md:min-h-[440px]">

                {/* Image — always on top on mobile */}
                <div
                  className={cn(
                    "w-full md:col-span-3 overflow-hidden bg-muted aspect-video md:aspect-auto",
                    imageLeft ? "md:order-1" : "md:order-2",
                  )}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                {/* Text column */}
                <div
                  className={cn(
                    "md:col-span-2 flex flex-col justify-between py-8 px-6 md:py-12 md:px-12",
                    imageLeft
                      ? "md:order-2 md:border-l border-border"
                      : "md:order-1 md:border-r border-border",
                  )}
                >
                  <div>
                    <span className="text-sm text-muted-foreground">{p.tags[0]}</span>
                    <h3 className="font-display text-2xl md:text-4xl lg:text-[2.75rem] font-semibold tracking-tight mt-3 leading-[1.1]">
                      {p.title}.
                    </h3>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed md:max-w-xs">
                      {p.description}
                    </p>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${p.title}`}
                    className="mt-8 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-foreground text-foreground text-xl hover:bg-foreground hover:text-background transition-all duration-200"
                  >
                    ↗
                  </a>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
