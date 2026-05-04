import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart, Crown, HandHeart, ShieldCheck, MapPin, Bed, Bath, Maximize,
  ArrowRight, Star, Award, Home, Users, Calendar, BookOpen, Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";
import { blogPosts } from "@/data/blogPosts";
import heroHome from "@/assets/hero-home.jpg";
import jimPortrait from "@/assets/JimPhotos/IMG_86421777402955.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import client1 from "@/assets/JimPhotos/IMG_14051777402953.jpg";
import client2 from "@/assets/JimPhotos/IMG_23061777402953.jpg";
import client3 from "@/assets/JimPhotos/IMG_72461777402954.jpg";
import client4 from "@/assets/JimPhotos/IMG_77781777402954.jpg";
import client5 from "@/assets/JimPhotos/IMG_62351777402954.jpg";
import client6 from "@/assets/JimPhotos/IMG_96261777402955.jpg";
import client7 from "@/assets/JimPhotos/IMG_87941777402955.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jim Gladden — Your Central Maryland Neighborhood Expert" },
      { name: "description", content: "Buy, sell, or invest with Jim Gladden — affiliated with Lucido Global. Specialized in Senior Services, Luxury, H.E.L.P., and Guaranteed Sale programs across Central Maryland." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Heart, title: "Senior Services", desc: "Compassionate guidance for downsizing, relocation, and life-stage transitions tailored to seniors and their families." },
  { icon: Crown, title: "Luxury", desc: "White-glove representation for distinctive properties — strategic marketing, global reach, complete discretion." },
  { icon: HandHeart, title: "H.E.L.P.", desc: "Home Equity Leverage Program — unlock the equity in your current home to confidently buy your next." },
  { icon: ShieldCheck, title: "Guaranteed Sale", desc: "Your home sold — guaranteed. Move forward with certainty backed by Jim's Guaranteed Sale program." },
];



const areas = ["Sykesville", "Eldersburg", "Westminster", "Columbia", "Frederick"];
const propertyTypes = ["Single Family Homes", "Townhouses", "Condos", "Luxury Estates", "55+ Communities"];

const aboutLinks = [
  { icon: Users, label: "Meet Jim" },
  { icon: Award, label: "Jim's Story" },
  { icon: Heart, label: "Jim's Why" },
  { icon: Calendar, label: "Community Events" },
  { icon: HandHeart, label: "Jim's Network" },
];



function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[700px] flex items-center">
        <img
          src={heroHome}
          alt="Luxury Maryland home at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto relative z-10 px-6 py-20 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 text-white">
            <span className="inline-block bg-gold/90 text-gold-foreground px-4 py-1.5 text-xs uppercase tracking-[0.25em] font-semibold rounded-sm">
              Lucido Global · Central Maryland
            </span>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
              Your Central Maryland <span className="text-gold">Neighborhood Expert</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              Trusted guidance for buying, selling, and renting across Sykesville, Eldersburg,
              Westminster, Columbia, and Frederick.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/buy">Search Homes <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button variant="outlineLight" size="xl" asChild>
                <Link to="/sell">What's My Home Worth?</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-gold fill-gold" /> Top-Producing Agent</div>
              <div className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> 20+ Years Experience</div>
              <div className="flex items-center gap-2"><Home className="h-4 w-4 text-gold" /> Hundreds of Families Served</div>
            </div>
          </div>

          <Card className="lg:col-span-2 p-7 shadow-elegant border-0">
            <div className="mb-5">
              <h3 className="font-serif text-2xl font-bold text-primary">Get More Information</h3>
              <p className="text-sm text-muted-foreground mt-1">Jim personally responds within hours.</p>
            </div>
            <LeadForm />
          </Card>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-28 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Specialized Services</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-primary">
              Four Pillars of Service
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tailored programs designed to meet you exactly where you are in your real estate journey.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Card key={s.title} className="p-8 hover:shadow-elegant transition-smooth border-border/60 flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-subtle rounded-2xl p-10 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">Service Areas</span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-primary">
                  Top-Selling Communities Across Central Maryland
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Deep local roots and decades of transactions — Jim knows these neighborhoods street by street.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area) => (
                  <div key={area} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-gold transition-smooth shadow-card-elegant">
                    <MapPin className="h-5 w-5 text-gold" />
                    <span className="font-medium text-primary">{area}, MD</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-border">
              <span className="text-sm font-semibold text-muted-foreground mr-2">Property Types:</span>
              {propertyTypes.map((t) => (
                <span key={t} className="px-3 py-1.5 bg-card text-sm rounded-full border border-border text-foreground/80">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HAPPY CLIENTS GALLERY */}
      <section className="py-20 lg:py-28 bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold inline-flex items-center gap-2">
              <Camera className="h-4 w-4" /> Happy Clients
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-primary">
              Moments Worth Celebrating
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every closing is a milestone. Here are just a few of the families Jim has helped find their next chapter.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={client2}
                alt="Jim Gladden celebrating a Just Closed! moment with happy clients at Lakeside Title"
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                <span className="text-white font-serif font-bold text-lg">Just Closed! 🎉</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-card-elegant">
              <img
                src={client5}
                alt="Happy new homeowners celebrating their closing"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-card-elegant">
              <img
                src={client4}
                alt="Happy client at Just Settled celebration"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-card-elegant">
              <img
                src={client6}
                alt="Jim Gladden holding Another Home Sold! sign with happy client"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-4">
                <span className="text-white text-xs font-bold uppercase tracking-wider">#LucidoSOLD</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-card-elegant">
              <img
                src={client1}
                alt="Jim with happy clients after closing"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-card-elegant">
              <img
                src={client3}
                alt="Happy clients at Lakeside Title Company after closing"
                className="w-full aspect-square object-cover group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-elegant">
              <img
                src={client7}
                alt="Jim Gladden celebrating with a group of happy clients"
                className="w-full h-52 md:h-64 object-cover object-center group-hover:scale-105 transition-smooth"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5">
                <span className="text-white font-serif font-bold">Building community, one home at a time.</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">See More About Jim <ArrowRight className="ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={jimPortrait}
              alt="Jim Gladden, Realtor — Lucido Global"
              className="rounded-2xl shadow-elegant w-full max-w-md mx-auto object-cover object-top"
              loading="lazy"
              width={896}
              height={1152}
            />
            <div className="absolute -bottom-6 -right-2 md:right-10 bg-gold text-gold-foreground p-6 rounded-xl shadow-gold max-w-[220px]">
              <div className="font-serif text-3xl font-bold">20+</div>
              <div className="text-xs uppercase tracking-wider font-semibold">Years serving Central Maryland</div>
            </div>
          </div>

          <div>
            <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">About Jim</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 leading-tight">
              Built on trust. Earned, one neighbor at a time.
            </h2>
            <p className="mt-5 text-primary-foreground/80 leading-relaxed">
              As a licensed agent affiliated with Lucido Global, Jim Gladden brings warm, community-focused service paired with the marketing power and technology of one of Maryland's most respected real estate organizations. From first-time buyers to luxury sellers and seniors right-sizing for the next chapter, Jim brings the same care to every client.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {aboutLinks.map((l) => (
                <Link
                  key={l.label}
                  to="/about"
                  className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-gold hover:text-gold-foreground transition-smooth text-sm font-medium border border-white/10"
                >
                  <l.icon className="h-4 w-4" />
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
              <Button variant="outlineLight" size="lg" asChild>
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">From the Blog</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 text-primary">Local Market Insights</h2>
            </div>
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">All Articles <ArrowRight /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {blogPosts.slice(0, 3).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="block group">
                <Card className="p-7 h-full flex flex-col hover:shadow-elegant transition-smooth border-border/60">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold uppercase tracking-wider">
                    <BookOpen className="h-3.5 w-3.5" /> {p.tag}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-primary mt-3 group-hover:text-gold transition-smooth flex-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.excerpt}</p>
                  <div className="mt-5 text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-smooth">
                    Read article <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-gold">
        <div className="container mx-auto px-6 text-center text-gold-foreground">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready to make your next move?</h2>
          <p className="mt-3 text-gold-foreground/80 max-w-xl mx-auto">
            Whether you're buying, selling, or just exploring — let's talk.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 justify-center">
            <Button variant="elegant" size="xl" asChild>
              <Link to="/contact">Contact Jim Today</Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="bg-transparent border-gold-foreground/30 text-gold-foreground hover:bg-gold-foreground hover:text-gold">
              <a href="tel:+14103750332">Call (410) 375-0332</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
