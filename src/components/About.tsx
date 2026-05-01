import { skills } from "@/lib/site";
import Profile from "../../public/profile.png";
import { FadeIn, FadeInStagger, FadeInItem } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* Profile image — stacks on top on mobile */}
          <FadeIn direction="right" className="w-full flex justify-center md:justify-start">
            <img
              src={Profile}
              alt="Ryan Deguia"
              className="w-64 sm:w-80 md:w-full max-w-sm object-cover rounded-sm"
            />
          </FadeIn>

          {/* Text content */}
          <div className="space-y-6">
            <FadeIn delay={0.05}>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
                A developer who cares about the details.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="gap-5 flex flex-col text-muted-foreground text-sm md:text-base leading-relaxed">
                <span>
                  I'm a web developer with 2 years of experience building production web apps for
                  startups, small businesses, and educational platforms.
                </span>
                <span>
                  I focus on clean interfaces, performant front-ends, and pragmatic full-stack
                  solutions — most of my recent work uses React, Next.js, Tailwind, and modern
                  hosting on Vercel.
                </span>
                <span>
                  I work with AI-assisted development tools like Claude Code as part of my workflow
                  — not to replace thinking, but to move faster, catch issues earlier, and ship
                  better code.
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="pt-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Tech I work with
                </p>
                <FadeInStagger className="flex flex-wrap gap-2" stagger={0.04}>
                  {skills.map((s) => (
                    <FadeInItem key={s}>
                      <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-foreground hover:border-foreground transition-colors">
                        {s}
                      </span>
                    </FadeInItem>
                  ))}
                </FadeInStagger>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
