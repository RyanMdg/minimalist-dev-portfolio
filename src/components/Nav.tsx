import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-foreground">
          {site.name.split(" ")[0]}
          <span className="text-muted-foreground">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-foreground px-4 py-1.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Resume
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="w-6 h-[1.5px] bg-foreground mb-1.5" />
          <div className={`w-6 h-[1.5px] bg-foreground transition-all ${open ? "w-3" : "w-4 ml-auto"}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full border border-foreground px-4 py-2 text-sm font-medium text-foreground"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
