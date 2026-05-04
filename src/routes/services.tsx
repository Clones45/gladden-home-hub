import { createFileRoute } from "@tanstack/react-router";
import { Heart, Crown, HandHeart, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { PageHero, CTASection } from "@/components/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Specialized Real Estate Services | Jim Gladden" },
      { name: "description", content: "Senior Services, Luxury, H.E.L.P., and Guaranteed Sale programs from Jim Gladden — affiliated with Lucido Global in Central Maryland." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Heart, title: "Senior Services", desc: "Compassionate, patient guidance for downsizing, relocating to active-adult communities, or transitioning into care. We coordinate movers, estate sales, and family communication.", points: ["Right-sizing consultations", "55+ community expertise", "Estate sale coordination", "Family-inclusive process"] },
  { icon: Crown, title: "Luxury", desc: "Discreet, white-glove representation for distinctive Maryland properties. Magazine-grade marketing, global syndication, and a refined buyer network.", points: ["Cinematic photography & video", "Private showings", "Global luxury network", "Confidential transactions"] },
  { icon: HandHeart, title: "H.E.L.P. Program", desc: "Home Equity Leverage Program — leverage the equity in your current home to confidently buy your next, even before yours sells.", points: ["Buy before you sell", "Avoid contingent offers", "Strategic bridge financing", "Stress-free transitions"] },
  { icon: ShieldCheck, title: "Guaranteed Sale", desc: "Move forward with absolute certainty. If your home doesn't sell within the agreed timeframe, Jim's Guaranteed Sale program provides a written buyout offer.", points: ["Written guarantee", "Defined timeframe", "Backed by the program", "Total peace of mind"] },
];

function ServicesPage() {
  return (
    <div>
      <PageHero eyebrow="Services" title="Programs Built Around You" subtitle="Four signature service pillars designed for every stage of life and every kind of move." />
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-7">
        {services.map((s) => (
          <Card key={s.title} className="p-8 hover:shadow-elegant transition-smooth border-border/60 group">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
              <s.icon className="h-7 w-7" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-primary">{s.title}</h2>
            <p className="text-muted-foreground mt-3">{s.desc}</p>
            <ul className="mt-5 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="text-sm flex gap-2"><span className="text-gold">✓</span>{p}</li>
              ))}
            </ul>
          </Card>
        ))}
      </section>
      <CTASection />
    </div>
  );
}
