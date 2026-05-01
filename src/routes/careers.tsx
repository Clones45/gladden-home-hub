import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero, CTASection } from "@/components/PageShell";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers with the Bob Lucido Team | Jim Gladden" },
      { name: "description", content: "Join Maryland's top-producing real estate team. Open agent and support roles at the Bob Lucido Team — Keller Williams Lucido Agency." },
    ],
  }),
  component: CareersPage,
});

const roles = [
  { title: "Buyer's Agent", type: "Full-time · Ellicott City, MD", desc: "Join a top-producing team with a steady pipeline of qualified leads, world-class training, and admin support." },
  { title: "Listing Agent", type: "Full-time · Ellicott City, MD", desc: "Represent Maryland sellers with the marketing power of the #1 KW Lucido team behind you." },
  { title: "Transaction Coordinator", type: "Full-time · Ellicott City, MD", desc: "Keep our deals moving — manage timelines, vendors, and client communication from contract to close." },
];

function CareersPage() {
  return (
    <div>
      <PageHero eyebrow="Careers" title="Build Your Career With the Best" subtitle="Join Maryland's top-producing real estate team and grow faster than you imagined." />
      <section className="py-20 container mx-auto px-6 max-w-4xl space-y-5">
        {roles.map((r) => (
          <Card key={r.title} className="p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-elegant transition-smooth border-border/60">
            <div>
              <h3 className="font-serif text-xl font-bold text-primary">{r.title}</h3>
              <p className="text-xs uppercase tracking-wider text-gold font-semibold mt-1">{r.type}</p>
              <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
            </div>
            <Button variant="hero" size="lg">Apply</Button>
          </Card>
        ))}
      </section>
      <CTASection />
    </div>
  );
}
