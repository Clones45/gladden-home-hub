import { createFileRoute } from "@tanstack/react-router";
import { Search, MapPin, Bed, Bath, Maximize } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PageHero, CTASection } from "@/components/PageShell";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy a Home in Central Maryland | Jim Gladden" },
      { name: "description", content: "Search active listings across Sykesville, Eldersburg, Westminster, Columbia, and Frederick MD with Jim Gladden of the Bob Lucido Team." },
    ],
  }),
  component: BuyPage,
});

const listings = [
  { img: property1, price: "$825,000", address: "825 Caren Dr, Eldersburg, MD", beds: 5, baths: 4, sqft: "4,200", type: "Single Family" },
  { img: property2, price: "$489,000", address: "112 Sykesville Way, Sykesville, MD", beds: 3, baths: 2.5, sqft: "2,150", type: "Townhouse" },
  { img: property3, price: "$1,275,000", address: "8 Westminster Ridge, Westminster, MD", beds: 6, baths: 5, sqft: "6,800", type: "Luxury Estate" },
  { img: property1, price: "$619,000", address: "402 Columbia Pkwy, Columbia, MD", beds: 4, baths: 3, sqft: "3,100", type: "Single Family" },
  { img: property2, price: "$365,000", address: "27 Frederick Mews, Frederick, MD", beds: 2, baths: 2, sqft: "1,480", type: "Condo" },
  { img: property3, price: "$1,950,000", address: "Lakeside Estate, Sykesville, MD", beds: 7, baths: 6, sqft: "8,200", type: "Luxury Estate" },
];

function BuyPage() {
  return (
    <div>
      <PageHero
        eyebrow="Buy"
        title="Find Your Next Home in Central Maryland"
        subtitle="Browse active IDX listings, save favorites, and tour with Jim — your local expert."
      />

      <section className="container mx-auto px-6 -mt-10 relative z-10">
        <Card className="p-6 shadow-elegant flex flex-col md:flex-row gap-3">
          <div className="flex items-center gap-2 flex-1 px-3 border border-border rounded-md">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="City, ZIP, address, or community" className="border-0 focus-visible:ring-0" />
          </div>
          <Button variant="hero" size="lg">Search Homes</Button>
        </Card>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8">Active Listings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {listings.map((p, i) => (
              <Card key={i} className="overflow-hidden group hover:shadow-elegant transition-smooth border-border/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.address} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase bg-gold text-gold-foreground rounded-sm">Active</span>
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-white/90 text-primary rounded-sm">{p.type}</span>
                </div>
                <div className="p-6">
                  <div className="font-serif text-2xl font-bold text-primary">{p.price}</div>
                  <div className="flex items-center text-sm text-muted-foreground mt-1"><MapPin className="h-3.5 w-3.5 mr-1" />{p.address}</div>
                  <div className="flex gap-5 mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-gold" /> {p.beds} bd</span>
                    <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-gold" /> {p.baths} ba</span>
                    <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-gold" /> {p.sqft} sqft</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground text-center">
            Listings powered by Bright MLS IDX. Information deemed reliable but not guaranteed.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
