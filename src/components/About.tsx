import { site, skills } from "@/lib/site";
import Profile from "../../public/profile.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border grid grid-cols-2">
      <div className=" flex justify-center">
        <img src={Profile} alt="My-Profile" className=" w-96" />
      </div>
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-6">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight">
            A developer who cares about the details.
          </h2>
          <p className=" gap-5 flex flex-col">
            <span>
              I'm a web developer with 2 years of experience building production web apps for
              startups, small businesses, and educational platforms.
            </span>
            <span>
              I focus on clean interfaces, performant front-ends, and pragmatic full-stack solutions
              — most of my recent work uses React, Next.js, Tailwind, and modern hosting on Vercel.
            </span>
            <span>
              I work with AI-assisted development tools like Claude Code as part of my workflow —
              not to replace thinking, but to move faster, catch issues earlier, and ship better
              code.
            </span>
          </p>

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
