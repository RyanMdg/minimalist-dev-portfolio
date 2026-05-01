import { experience } from "@/lib/site";
import ProfileTwo from "../../public/profile_2.png";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-16 gap-20">
        <div className="md:col-span-8 flex flex-col justify-center">
          <img src={ProfileTwo} alt="MysecondProfile" />
        </div>
        <div className="md:col-span-8">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-12">
            Two years, lots of shipping.
          </h2>
          <ol className="relative border-l border-border pl-8 space-y-12">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-foreground" />
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {e.period}
                </p>
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {e.role} <span className="text-muted-foreground font-light">— {e.company}</span>
                </h3>
                <p className="mt-3 text-muted-foreground max-w-2xl leading-relaxed">
                  {e.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
