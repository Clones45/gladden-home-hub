import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Camera, Megaphone, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";
import { PageHero, CTASection } from "@/components/PageShell";

export const Route = createFileRoute("/sell")({
  head: () => ({
    meta: [
      { title: "Sell Your Home with Jim Gladden | Lucido Global" },
      { name: "description", content: "Sell your Central Maryland home with Jim Gladden — proven marketing, Guaranteed Sale program, and Lucido Global's local expertise." },
    ],
  }),
  component: SellPage,
});

const steps = [
  { icon: TrendingUp, title: "Strategic Pricing", desc: "Data-driven CMA backed by hyperlocal market intelligence." },
  { icon: Camera, title: "Professional Marketing", desc: "Magazine-quality photography, video, and 3D tours that sell." },
  { icon: Megaphone, title: "Maximum Exposure", desc: "Bright MLS, premium portals, social, and the Lucido Global network." },
  { icon: Handshake, title: "Skilled Negotiation", desc: "Decades of experience protecting your bottom line at the table." },
];

function SellPage() {
  return (
    <div>
      <PageHero eyebrow="Sell" title="Sell Smarter. Sell for More." subtitle="The marketing reach of a top team. The personal service of a trusted neighbor." />

      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">The Selling Process</h2>
          <p className="mt-4 text-muted-foreground">A proven, four-step system designed to get top dollar with less stress.</p>
          <div className="mt-8 space-y-5">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full border-2 border-gold/50 flex items-center justify-center shrink-0 font-bold text-gold text-sm mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-primary">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Card className="p-7 shadow-elegant border-0 self-start sticky top-32">
          <h3 className="font-serif text-2xl font-bold text-primary">Get Your Home's Value</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-5">Free, no-obligation comparative market analysis.</p>
          <LeadForm />
        </Card>
      </section>

      <CTASection />
    </div>
  );
}
