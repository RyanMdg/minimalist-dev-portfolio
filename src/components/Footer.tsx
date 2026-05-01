import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{site.name}</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} — All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href={site.socials.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
          <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
