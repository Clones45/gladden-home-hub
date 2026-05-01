import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageHero, CTASection } from "@/components/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Central Maryland Real Estate Blog | Jim Gladden" },
      { name: "description", content: "Local market updates, buyer and seller tips, and senior services insights from Jim Gladden of the Bob Lucido Team." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { tag: "Market Update", title: "Central Maryland Q2 Market Report", excerpt: "Inventory tightens in Howard and Carroll counties as buyer demand stays strong heading into summer.", date: "May 1, 2026" },
  { tag: "Buyer Tips", title: "5 Things to Know Before Buying in Eldersburg", excerpt: "From school districts to commute times — what every buyer should consider in this growing community.", date: "Apr 22, 2026" },
  { tag: "Senior Services", title: "Right-Sizing: A Guide for Maryland Seniors", excerpt: "Practical steps for downsizing with dignity, while maximizing the equity you've built over decades.", date: "Apr 14, 2026" },
  { tag: "Luxury", title: "The State of Maryland Luxury: 2026", excerpt: "Where the high-end market is heading in Howard, Carroll, and Frederick counties this year.", date: "Apr 3, 2026" },
  { tag: "Seller Tips", title: "Staging on a Budget That Sells", excerpt: "Five small investments that consistently return outsized results in our local market.", date: "Mar 25, 2026" },
  { tag: "Community", title: "Why Sykesville Keeps Climbing the 'Best Towns' Lists", excerpt: "Charm, schools, and small-town walkability that today's buyers crave.", date: "Mar 12, 2026" },
];

function BlogPage() {
  return (
    <div>
      <PageHero eyebrow="Blog" title="Central Maryland Insights" subtitle="Honest market updates, real-world tips, and stories from the field." />
      <section className="py-20 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((p) => (
            <Card key={p.title} className="p-7 hover:shadow-elegant transition-smooth border-border/60 group cursor-pointer">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                <BookOpen className="h-3.5 w-3.5" /> {p.tag}
              </span>
              <h3 className="font-serif text-xl font-bold text-primary mt-3 group-hover:text-gold transition-smooth">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{p.date}</span>
                <Link to="/blog" className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-smooth">
                  Read <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <CTASection />
    </div>
  );
}
