import { motion } from "framer-motion";
import { site } from "@/lib/site";

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export function Hero() {
  return (
    <section id="top" className="justify-center flex pt-36 pb-24 md:pt-44 md:pb-32 grain">
      <div className="mx-auto max-w-6xl px-6 flex flex-col justify-center items-center">
        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.95] tracking-tight text-foreground"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={item}
        >
          Building the web,
          <br />
          <span className="italic font-light text-muted-foreground">one pixel</span> at a time.
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={item}
        >
          {site.tagline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={item}
        >
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
        </motion.div>
      </div>
    </section>
  );
}
