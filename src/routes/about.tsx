import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Users, Award, Heart, Calendar, HandHeart } from "lucide-react";
import { PageHero, CTASection } from "@/components/PageShell";
import jimPortrait from "@/assets/JimPhotos/IMG_86421777402955.jpg";
import jimField1 from "@/assets/JimPhotos/IMG_71011777402954.jpg";
import jimField2 from "@/assets/JimPhotos/IMG_23201777402953.jpg";
import jimField3 from "@/assets/JimPhotos/IMG_93791777402955.jpg";
import jimField4 from "@/assets/JimPhotos/IMG_94941777402955.jpg";
import jimBooth from "@/assets/JimPhotos/IMG_36171777402953.jpg";
import jimTruck from "@/assets/JimPhotos/IMG_46951777402953.jpg";
import jimDog from "@/assets/JimPhotos/IMG_55621777402954.jpg";
import jimFamily from "@/assets/JimPhotos/IMG_92641777402955.jpg";
import jimMug from "@/assets/JimPhotos/IMG_62941777402954.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jim Gladden | Realtor — Lucido Global" },
      { name: "description", content: "Meet Jim Gladden — Central Maryland's trusted real estate agent with Lucido Global. Learn his story, his values, and why hundreds of families choose Jim." },
    ],
  }),
  component: AboutPage,
});

const sections = [
  { icon: Users, title: "Meet Jim", body: "Jim Gladden is a dedicated solo agent affiliated with Lucido Global bringing personalized, one-on-one service backed by one of Maryland's most respected real estate organizations." },
  { icon: Award, title: "Jim's Story", body: "With over two decades of experience in Central Maryland, Jim has built a reputation on integrity, local knowledge, and a genuine passion for helping families find their perfect home." },
  { icon: Heart, title: "Jim's Why", body: "Jim believes a home is more than a transaction it's the backdrop of life's most important moments. That belief drives every call, every showing, and every negotiation." },
  { icon: Calendar, title: "Community Events", body: "Community shred days, first-time-buyer seminars, senior right-sizing workshops, and seasonal client appreciation events Jim shows up where it matters." },
  { icon: HandHeart, title: "Jim's Network", body: "Vetted lenders, inspectors, contractors, movers, and estate planners Jim's trusted referral network provides a complete concierge experience for every client." },
];

function AboutPage() {
  return (
    <div>
      <PageHero eyebrow="About Jim" title="Built on Trust. Driven by Results." subtitle="Get to know Jim Gladden Central Maryland's dedicated real estate agent and your trusted guide to buying, selling, and investing." />

      {/* Jim Bio + Portrait */}
      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={jimPortrait}
            alt="Jim Gladden, Bob Lucido Team — Under Contract!"
            className="rounded-2xl shadow-elegant w-full max-w-md mx-auto object-cover object-top"
            loading="lazy"
          />
          {/* Fun accent */}
          <div className="absolute -bottom-4 -right-4 md:right-0 rounded-xl overflow-hidden shadow-elegant w-28 h-28 md:w-36 md:h-36 border-4 border-white">
            <img
              src={jimMug}
              alt="Everything I touch turns to SOLD Jim's motto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="font-serif text-4xl font-bold text-primary">Jim Gladden</h2>
          <p className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mt-2">Lucido Global</p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            With more than two decades serving Central Maryland, Jim has built his practice on the
            simple idea that great service is personal. From first-time buyers to luxury sellers and
            seniors planning the next chapter, every client gets Jim's full attention backed by the
            marketing power and resources of the region's top-producing team.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Jim specializes in Sykesville, Eldersburg, Westminster, Columbia, and Frederick and
            knows these communities street-by-street. When he's not negotiating deals, you'll find
            him supporting local schools and small businesses across Carroll and Howard counties.
          </p>
        </div>
      </section>

      {/* In the Field — yard sign gallery */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">In the Field</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-primary">Signs of Success</h2>
            <p className="mt-3 text-muted-foreground">Under Contract, Coming Soon, Sold Jim's signs are a familiar sight across Central Maryland neighborhoods.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[jimField1, jimField2, jimField3, jimField4].map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl shadow-card-elegant">
                <img
                  src={src}
                  alt={`Jim Gladden in the field — yard sign ${i + 1}`}
                  className="w-full aspect-square md:aspect-[3/4] object-cover group-hover:scale-105 transition-smooth"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Presence */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Community Presence</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-primary">Jim in the Community</h2>
            <p className="mt-3 text-muted-foreground">From open house booths to community events Jim shows up across Central Maryland, every day.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={jimBooth}
                alt="Jim Gladden's Bob Lucido Team open house booth setup with marketing materials"
                className="w-full h-72 object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                <span className="text-white font-serif font-bold">Open House Ready</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={jimTruck}
                alt="Bob Lucido Team Let's Talk Real Estate branded moving truck"
                className="w-full h-72 object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                <span className="text-white font-serif font-bold">Let's Talk Real Estate.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More About Us cards */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">More About Jim</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s) => (
              <Card key={s.title} className="p-7 hover:shadow-elegant transition-smooth border-border/60 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Side */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">The Personal Side</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-primary">Beyond the Business Card</h2>
            <p className="mt-3 text-muted-foreground">Jim is more than a Realtor, he's a neighbor, a family man, and a proud dog dad.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={jimFamily}
                alt="Jim Gladden with family enjoying Maryland waterfront"
                className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                <span className="text-white font-serif font-bold">Maryland Living ⛵</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={jimDog}
                alt="Jim's dog — the office mascot!"
                className="w-full h-64 object-cover object-center group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-5">
                <span className="text-white font-serif font-bold text-sm">The real office mascot 🐾</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
