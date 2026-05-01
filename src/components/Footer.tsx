import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left — brand + tagline */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-foreground text-background text-sm font-bold rounded-sm">
                {site.name.charAt(0)}
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">{site.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Building clean, fast web experiences for real clients.
            </p>
            <p className="mt-6 text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} {site.name} — All rights reserved.
            </p>
          </div>

          {/* Right — social circles */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Find me</span>
            <div className="flex items-center gap-3">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
              >
                Gh
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
              >
                In
              </a>
              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
              >
                X
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-200"
              >
                @
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
