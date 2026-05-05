import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone required").max(30),
  message: z.string().trim().min(1, "Message required").max(1000),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent required" }) }),
});

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ ...form, consent });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/jimgladden@boblucidoteam.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Message: form.message,
          _subject: "New Lead from Jim Gladden Website",
          _captcha: "false",
          _template: "table"
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Thank you! Jim will be in touch shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setConsent(false);
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again or call Jim directly.");
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-3 ${compact ? "" : ""}`}>
      <Input
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        maxLength={100}
      />
      <Input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        maxLength={255}
      />
      <Input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        maxLength={30}
      />
      <Textarea
        placeholder="How can Jim help you?"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        maxLength={1000}
        rows={compact ? 3 : 4}
      />
      <label className="flex gap-2 items-start text-xs text-muted-foreground cursor-pointer">
        <Checkbox checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
        <span>
          I consent to receive electronic communications from Jim Gladden and Lucido Global
          regarding real estate services. Message and data rates may apply.
        </span>
      </label>
      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Get More Information"}
      </Button>
    </form>
  );
}
