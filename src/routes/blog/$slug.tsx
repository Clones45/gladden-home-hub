import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, BookOpen, Clock, User, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/PageShell";
import { getPostBySlug, getRelatedPosts, type BlogPost } from "@/data/blogPosts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) return { meta: [{ title: "Post Not Found | Jim Gladden" }] };
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { name: "author", content: "Jim Gladden" },
        { name: "keywords", content: post.keywords.join(", ") },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "article:author", content: "Jim Gladden" },
        { property: "article:published_time", content: post.dateISO },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.dateISO,
            dateModified: post.dateISO,
            author: {
              "@type": "Person",
              name: "Jim Gladden",
              jobTitle: "Licensed Real Estate Agent",
              worksFor: { "@type": "Organization", name: "Lucido Global" },
            },
            publisher: {
              "@type": "Organization",
              name: "Jim Gladden — Central Maryland Real Estate",
            },
            keywords: post.keywords.join(", "),
          }),
        },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post, related: getRelatedPosts(params.slug) };
  },
  component: BlogPostPage,
});

const TAG_COLORS: Record<string, string> = {
  "Market Update": "bg-blue-50 text-blue-700 border-blue-200",
  "Buyer Tips": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Senior Services": "bg-purple-50 text-purple-700 border-purple-200",
  Luxury: "bg-amber-50 text-amber-700 border-amber-200",
  "Seller Tips": "bg-rose-50 text-rose-700 border-rose-200",
  Community: "bg-teal-50 text-teal-700 border-teal-200",
};

const TAG_TEXT: Record<string, string> = {
  "Market Update": "text-blue-600",
  "Buyer Tips": "text-emerald-600",
  "Senior Services": "text-purple-600",
  Luxury: "text-amber-600",
  "Seller Tips": "text-rose-600",
  Community: "text-teal-600",
};

function BlogPostPage() {
  const { post, related } = Route.useLoaderData() as { post: BlogPost; related: BlogPost[] };

  return (
    <div>
      {/* Breadcrumb */}
      <nav className="bg-gradient-subtle border-b border-border" aria-label="Breadcrumb">
        <div className="container mx-auto px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-gold transition-smooth">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-gold transition-smooth">Blog</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate max-w-[240px]">{post.title}</span>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-14 bg-gradient-subtle border-b border-border">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-smooth mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${TAG_COLORS[post.tag] ?? "bg-gold/10 text-gold border-gold/30"}`}>
            <BookOpen className="h-3 w-3" /> {post.tag}
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-5 mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-gold" />
              <span className="font-medium text-foreground">Jim Gladden</span>, Realtor · Lucido Global
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold" /> {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-14">
        <div className="container mx-auto px-6 max-w-3xl">
          <div
            className="prose prose-lg prose-primary max-w-none
              prose-headings:font-serif prose-headings:text-primary
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-5
              prose-a:text-gold prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          {/* Author Bio Card */}
          <div className="mt-14 pt-10 border-t border-border">
            <Card className="p-7 border-border/60 bg-gradient-subtle flex flex-col sm:flex-row gap-5 items-start">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-serif font-bold text-2xl">
                JG
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-primary">Jim Gladden</p>
                <p className="text-xs text-gold uppercase tracking-widest font-semibold mt-0.5">Realtor · License #665271 · Lucido Global</p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  Jim Gladden is a licensed Maryland real estate agent with over two decades of experience serving buyers, sellers, and seniors across Sykesville, Eldersburg, Westminster, Columbia, and Frederick. He is affiliated with Lucido Global and known for his personalized, one-on-one approach.
                </p>
                <div className="flex gap-3 mt-4">
                  <Button variant="hero" size="sm" asChild>
                    <Link to="/contact">Contact Jim</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/about">About Jim</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-14 bg-gradient-subtle border-t border-border">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-2xl font-bold text-primary mb-8">More from Jim's Blog</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r: BlogPost) => (
                <Link key={r.slug} to="/blog/$slug" params={{ slug: r.slug }} className="block group">
                  <Card className="p-6 h-full flex flex-col hover:shadow-elegant transition-smooth border-border/60">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-3 ${TAG_TEXT[r.tag] ?? "text-gold"}`}>
                      <BookOpen className="h-3 w-3" /> {r.tag}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-primary group-hover:text-gold transition-smooth leading-snug flex-1">
                      {r.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{r.date}</span>
                      <span className="text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-smooth">
                        Read <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
