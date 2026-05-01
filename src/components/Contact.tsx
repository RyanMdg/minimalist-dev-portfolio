import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { site } from "@/lib/site";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(2000),
});

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email me directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1]">
            Let's build
            <br />
            something good.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Have a project, a role, or just want to say hi? Drop a message — I read everything.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block text-foreground underline underline-offset-4 hover:no-underline"
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
              placeholder="Samantha@company.com"
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

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send message"}
            <span aria-hidden>→</span>
          </button>
        </form>
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
