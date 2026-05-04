import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ExternalLink, Bell, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Search Homes | Jim Gladden — Lucido Global" },
      {
        name: "description",
        content:
          "Full IDX home search coming soon. Browse active listings in Sykesville, Eldersburg, Westminster, Columbia, and Frederick MD with Jim Gladden, Realtor.",
      },
    ],
  }),
  component: BuyPage,
});

const areas = [
  { name: "Sykesville", zip: "21784" },
  { name: "Eldersburg", zip: "21784" },
  { name: "Westminster", zip: "21157" },
  { name: "Columbia", zip: "21044" },
  { name: "Frederick", zip: "21701" },
  { name: "Ellicott City", zip: "21042" },
];

function BuyPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)",
          }}
        />
        <div className="relative container mx-auto px-6 py-28 md:py-40 flex flex-col items-center text-center">
          {/* Badge */}

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight max-w-3xl">
            Full Home Search<br />
            <span className="text-gold">Coming Soon</span>
          </h1>

          <p className="mt-6 text-primary-foreground/75 text-lg max-w-xl leading-relaxed">
            We're integrating a live IDX search so you can browse every active listing in Central Maryland
            right here. In the meantime, Jim is ready to help you find exactly what you're looking for.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-4 w-4" /> Talk to Jim Today
              </Link>
            </Button>
            <Button
              variant="outlineLight"
              size="lg"
              asChild
            >
              <a
                href="https://www.zillow.com/agent-profile/X1-ZUZFl5uozbclm3_3g0bk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Browse on Zillow
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Search teaser — disabled but visible */}
      <section className="container mx-auto px-6 -mt-8 relative z-10">
        <Card className="p-5 shadow-elegant flex flex-col md:flex-row gap-3 items-center opacity-60 pointer-events-none select-none">
          <div className="flex items-center gap-2 flex-1 px-4 py-3 border border-border rounded-md bg-muted/40">
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">City, ZIP, address, or community…</span>
          </div>
          <Button variant="hero" size="lg" disabled className="opacity-50">
            Search Homes
          </Button>
        </Card>
        <p className="text-center text-xs text-muted-foreground mt-3">
          Live IDX search powered by Bright MLS — launching soon
        </p>
      </section>

      {/* Areas we serve */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Service Area</span>
            <h2 className="font-serif text-4xl font-bold mt-3 text-primary">
              Communities We Serve
            </h2>
            <p className="mt-4 text-muted-foreground">
              Jim specializes in these Central Maryland neighborhoods. Click any area to search active listings on Zillow right now.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {areas.map((area) => (
              <a
                key={area.name}
                href={`https://www.zillow.com/homes/${encodeURIComponent(area.name + ", MD " + area.zip)}_rb/?searchQueryState=%7B%22filterState%22%3A%7B%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%7D%7D`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-xl border border-border/60 hover:border-gold hover:shadow-card-elegant transition-smooth bg-white"
              >
                <MapPin className="h-4 w-4 text-gold flex-shrink-0" />
                <div>
                  <div className="font-semibold text-primary text-sm group-hover:text-gold transition-smooth">
                    {area.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{area.zip}</div>
                </div>
                <ExternalLink className="h-3 w-3 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-subtle border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-2xl bg-primary text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">
              Don't Wait
            </span>
            <h2 className="font-serif text-4xl font-bold mt-3">
              Ready to Start Your Search?
            </h2>
            <p className="mt-4 text-primary-foreground/75 max-w-lg mx-auto leading-relaxed">
              Jim has access to every listing in Central Maryland — including off-market and coming-soon properties.
              Reach out today and let him do the searching for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:4103750332">
                  <Phone className="mr-2 h-4 w-4" /> 410.375.0332
                </a>
              </Button>
              <Button variant="outlineLight" size="lg" asChild>
                <a href="mailto:jimgladden@boblucidoteam.com">
                  <Mail className="mr-2 h-4 w-4" /> Email Jim
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
