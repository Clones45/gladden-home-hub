import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";
import { PageHero } from "@/components/PageShell";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Jim Gladden | Lucido Global — Central Maryland Realtor" },
      { name: "description", content: "Reach Jim Gladden directly — phone, email, or stop by our Ellicott City office. Personal service, fast response." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div>
      <PageHero eyebrow="Contact" title="Let's Start the Conversation" subtitle="Jim personally reads every message and responds within hours." />
      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          <Card className="p-6 flex items-start gap-5 border-border/60 group hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">Phone</h3>
              <p className="text-sm text-muted-foreground">Direct: <a href="tel:+14103750332" className="text-gold font-medium">(410) 375-0332</a></p>
              <p className="text-sm text-muted-foreground">Office: <a href="tel:+14104656900" className="text-gold font-medium">(410) 465-6900</a></p>
            </div>
          </Card>
          <Card className="p-6 flex items-start gap-5 border-border/60 group hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">Email</h3>
              <a href="mailto:jimgladden@boblucidoteam.com" className="text-sm text-gold font-medium">jimgladden@boblucidoteam.com</a>
            </div>
          </Card>
          <Card className="p-6 flex items-start gap-5 border-border/60 group hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">Office</h3>
              <p className="text-sm text-muted-foreground">9251 Baltimore National Pike, Suite D<br />Ellicott City, MD 21042</p>
            </div>
          </Card>
          <Card className="p-6 flex items-start gap-5 border-border/60 group hover:shadow-elegant transition-smooth">
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-primary">Hours</h3>
              <p className="text-sm text-muted-foreground">Mon–Fri 8am–8pm · Sat–Sun 9am–6pm</p>
            </div>
          </Card>
        </div>
        <Card className="p-7 shadow-elegant border-0">
          <h2 className="font-serif text-2xl font-bold text-primary">Send Jim a Message</h2>
          <p className="text-sm text-muted-foreground mt-1 mb-5">All fields required. Personal response within hours.</p>
          <LeadForm />
        </Card>
      </section>
    </div>
  );
}
