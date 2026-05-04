import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen } from "lucide-react";
import { PageHero, CTASection } from "@/components/PageShell";
import { blogPosts } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Central Maryland Real Estate Blog | Jim Gladden, Realtor" },
      {
        name: "description",
        content:
          "Local market reports, buyer and seller tips, senior services insights, and community spotlights from Jim Gladden — your Central Maryland real estate expert.",
      },
      { name: "author", content: "Jim Gladden" },
      { property: "og:title", content: "Central Maryland Real Estate Blog | Jim Gladden" },
      {
        property: "og:description",
        content: "Honest market updates, buyer tips, and community stories from Jim Gladden, Realtor — serving Sykesville, Eldersburg, Westminster, Columbia & Frederick, MD.",
      },
    ],
  }),
  component: BlogIndexPage,
});

const TAG_COLORS: Record<string, string> = {
  "Market Update": "text-blue-600",
  "Buyer Tips": "text-emerald-600",
  "Senior Services": "text-purple-600",
  Luxury: "text-amber-600",
  "Seller Tips": "text-rose-600",
  Community: "text-teal-600",
};

function BlogIndexPage() {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Central Maryland Insights"
        subtitle="Honest market updates, buyer and seller tips, and community stories from Jim Gladden — your neighborhood expert."
      />

      <section className="py-20 container mx-auto px-6">
        {/* Featured post */}
        <div className="mb-12">
          <Link to="/blog/$slug" params={{ slug: blogPosts[0].slug }} className="block group">
            <Card className="overflow-hidden border-border/60 hover:shadow-elegant transition-smooth">
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${TAG_COLORS[blogPosts[0].tag] ?? "text-gold"}`}>
                    <BookOpen className="h-3.5 w-3.5" /> {blogPosts[0].tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{blogPosts[0].date}</span>
                  <span className="text-xs text-muted-foreground">· {blogPosts[0].readTime}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary group-hover:text-gold transition-smooth leading-tight">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-primary group-hover:gap-3 transition-smooth">
                  Read full article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Post grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.slice(1).map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block group">
              <Card className="p-7 h-full flex flex-col hover:shadow-elegant transition-smooth border-border/60">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${TAG_COLORS[p.tag] ?? "text-gold"}`}>
                    <BookOpen className="h-3.5 w-3.5" /> {p.tag}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary group-hover:text-gold transition-smooth leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{p.date} · {p.readTime}</span>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-smooth">
                    Read <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
