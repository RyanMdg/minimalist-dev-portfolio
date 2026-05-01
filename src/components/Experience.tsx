import { experience } from "@/lib/site";
import ProfileTwo from "../../public/profile_2.png";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* Profile image — top on mobile */}
          <FadeIn direction="right" className="w-full flex justify-center md:block">
            <img
              src={ProfileTwo}
              alt="Ryan Deguia"
              className="w-64 sm:w-80 md:w-full max-w-sm object-cover"
            />
          </FadeIn>

          {/* Experience timeline */}
          <div>
            <FadeIn>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-10 md:mb-12">
                Two years, lots of shipping.
              </h2>
            </FadeIn>

            <FadeInStagger className="relative border-l border-border pl-8 space-y-10 md:space-y-12" stagger={0.15}>
              {experience.map((e) => (
                <FadeInItem key={e.role}>
                  <li className="relative list-none">
                    <span className="absolute -left-9 top-2 w-3 h-3 rounded-full bg-foreground" />
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                      {e.period}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl font-medium tracking-tight">
                      {e.role}{" "}
                      <span className="text-muted-foreground font-light">— {e.company}</span>
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {e.description}
                    </p>
                  </li>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

        </div>
      </div>
    </section>
  );
}
