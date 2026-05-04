import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="bg-primary text-primary-foreground py-20 lg:py-28">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold">{eyebrow}</span>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 text-balance">{title}</h1>
        <p className="mt-5 text-lg text-primary-foreground/80">{subtitle}</p>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-gold">
      <div className="container mx-auto px-6 text-center text-gold-foreground">
        <h2 className="font-serif text-3xl md:text-4xl font-bold">Let's Talk About Your Goals</h2>
        <p className="mt-3 text-gold-foreground/80 max-w-xl mx-auto">
          Reach Jim directly personal service, every time.
        </p>
        <div className="mt-7 flex flex-wrap gap-4 justify-center">
          <Button variant="elegant" size="xl" asChild>
            <Link to="/contact">Contact Jim <ArrowRight className="ml-1" /></Link>
          </Button>
          <Button variant="outline" size="xl" asChild className="bg-transparent border-gold-foreground/30 text-gold-foreground hover:bg-gold-foreground hover:text-gold">
            <a href="tel:+14103750332">Call (410) 375-0332</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
