import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Users, Award, Heart, Calendar, HandHeart } from "lucide-react";
import { PageHero, CTASection } from "@/components/PageShell";
import jimPortrait from "@/assets/jim-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jim Gladden | Bob Lucido Team" },
      { name: "description", content: "Meet Jim Gladden, his story, his why, the Bob Lucido Team, our partners, and upcoming community events in Central Maryland." },
    ],
  }),
  component: AboutPage,
});

const sections = [
  { icon: Users, title: "Meet Our Team", body: "Jim partners with a full team of marketing, transaction, and client-care specialists at the Bob Lucido Team — Keller Williams Lucido Agency's #1 group." },
  { icon: Award, title: "Our Story", body: "Founded by industry legend Bob Lucido, our team has helped tens of thousands of Maryland families achieve their real estate goals over more than three decades." },
  { icon: Heart, title: "Our Why", body: "We believe a home is more than a transaction — it's the backdrop of life's most important moments. That belief drives every interaction." },
  { icon: Calendar, title: "Events", body: "Community shred days, first-time-buyer seminars, senior right-sizing workshops, and seasonal client appreciation gatherings throughout the year." },
  { icon: HandHeart, title: "Our Partners", body: "Vetted lenders, inspectors, contractors, movers, and estate planners — a complete concierge network for every client." },
];

function AboutPage() {
  return (
    <div>
      <PageHero eyebrow="About" title="Built on Trust. Powered by a Team." subtitle="Get to know Jim Gladden, the Bob Lucido Team, and the people who make every move possible." />

      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <img src={jimPortrait} alt="Jim Gladden portrait" className="rounded-2xl shadow-elegant w-full max-w-md mx-auto" loading="lazy" />
        <div>
          <h2 className="font-serif text-4xl font-bold text-primary">Jim Gladden</h2>
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mt-2">License ID 665271 · Bob Lucido Team</p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            With more than two decades serving Central Maryland, Jim has built his practice on the
            simple idea that great service is personal. From first-time buyers to luxury sellers and
            seniors planning the next chapter, every client gets Jim's full attention — backed by the
            marketing power and resources of the region's top-producing team.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Jim specializes in Sykesville, Eldersburg, Westminster, Columbia, and Frederick — and
            knows these communities street-by-street. When he's not negotiating deals, you'll find
            him supporting local schools and small businesses across Carroll and Howard counties.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">More About Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Card key={s.title} className="p-7 hover:shadow-elegant transition-smooth border-border/60">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-4">
                  <s.icon className="h-6 w-6 text-gold-foreground" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
