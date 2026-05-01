import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { site } from "@/lib/site";
import { toast } from "sonner";
import { FadeIn } from "./FadeIn";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(2000),
});

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showForm, setShowForm] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }

    const { serviceId, templateId, publicKey } = site.emailjs;
    if (!serviceId || serviceId.startsWith("YOUR_")) {
      toast.error("EmailJS isn't configured yet. Add your keys in src/lib/site.ts");
      return;
    }

    try {
      setLoading(true);
      await emailjs.sendForm(serviceId, templateId, formRef.current!, { publicKey });
      toast.success("Message sent — I'll get back to you soon.");
      formRef.current?.reset();
      setShowForm(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  }

  function handleStampClick() {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <section id="contact" className="border-t border-border">
      {/* CTA block */}
      <div className="relative overflow-hidden py-28 md:py-40 flex flex-col items-center justify-center text-center px-6">
        {/* Scribble left */}
        <svg
          aria-hidden
          className="absolute left-[4%] top-1/2 -translate-y-1/2 w-48 md:w-64 text-foreground/8 pointer-events-none select-none"
          viewBox="0 0 220 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M180 30 C140 10, 60 50, 40 90 C20 130, 80 160, 60 180" />
          <path d="M160 15 C110 40, 30 70, 50 115 C70 155, 140 140, 120 175" />
          <path d="M190 60 C150 45, 80 80, 70 120 C60 155, 110 165, 90 185" />
        </svg>

        {/* Scribble right */}
        <svg
          aria-hidden
          className="absolute right-[4%] top-1/2 -translate-y-1/2 w-48 md:w-64 text-foreground/8 pointer-events-none select-none"
          viewBox="0 0 220 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M40 30 C80 10, 160 50, 180 90 C200 130, 140 160, 160 180" />
          <path d="M60 15 C110 40, 190 70, 170 115 C150 155, 80 140, 100 175" />
          <path d="M30 60 C70 45, 140 80, 150 120 C160 155, 110 165, 130 185" />
        </svg>

        <FadeIn>
          <h2 className="relative font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-2xl">
            Anything in Mind?
            <br />
            Let&apos;s Talk
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <button
            onClick={handleStampClick}
            aria-label="Open contact form"
            className="group mt-14 relative flex items-center justify-center w-36 h-36 focus:outline-none"
          >
            <span className="relative z-10 flex flex-col items-center justify-center w-22 h-22 rounded-full bg-foreground text-background text-center leading-snug transition-transform duration-200 group-hover:scale-[0.96]">
              <span className="text-[10px] font-bold uppercase tracking-wider">I&apos;M</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">READY TO</span>
              <span className="text-[10px] font-bold uppercase tracking-wider">TALK</span>
              <span className="mt-0.5 text-sm font-light">↗</span>
            </span>
          </button>
        </FadeIn>
      </div>

      {/* Contact form — revealed when stamp is clicked */}
      <div
        id="contact-form"
        style={{ maxHeight: showForm ? "900px" : "0px" }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        aria-hidden={!showForm}
      >
        <div className="border-t border-border py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                04 — Contact
              </p>
              <h3 className="mt-4 font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.1]">
                Let&apos;s build
                <br />
                something good.
              </h3>
              <p className="mt-6 text-muted-foreground max-w-md text-sm leading-relaxed">
                Have a project, a role, or just want to say hi? Drop a message — I read everything.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-5 inline-block text-sm text-foreground underline underline-offset-4 hover:no-underline"
              >
                {site.email}
              </a>
            </div>

            <form ref={formRef} onSubmit={onSubmit} className="md:col-span-7 space-y-6" noValidate>
              <Field label="Name" name="name" error={errors.name}>
                <input
                  name="name"
                  type="text"
                  maxLength={100}
                  autoComplete="name"
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="Samantha Eunice"
                />
              </Field>
              <Field label="Email" name="email" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  maxLength={255}
                  autoComplete="email"
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors"
                  placeholder="samantha@company.com"
                />
              </Field>
              <Field label="Message" name="message" error={errors.message}>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={2000}
                  className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                  placeholder="Tell me about your project…"
                />
              </Field>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send message"}
                  <span aria-hidden>→</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <div className="mt-1">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
