import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { PageHero, CTASection } from "@/components/PageShell";
import { useState } from "react";

export const Route = createFileRoute("/mortgage")({
  head: () => ({
    meta: [
      { title: "Mortgage Calculator & Lending Partners | Jim Gladden" },
      { name: "description", content: "Estimate your monthly payment and connect with trusted Central Maryland lenders through the Bob Lucido Team." },
    ],
  }),
  component: MortgagePage,
});

function MortgagePage() {
  const [price, setPrice] = useState(500000);
  const [down, setDown] = useState(100000);
  const [rate, setRate] = useState(6.75);
  const [years, setYears] = useState(30);

  const principal = price - down;
  const monthlyRate = rate / 100 / 12;
  const n = years * 12;
  const monthly = monthlyRate > 0 ? (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n)) : principal / n;

  return (
    <div>
      <PageHero eyebrow="Mortgage" title="Plan Your Purchase with Confidence" subtitle="Estimate your payment and get connected with vetted local lending partners." />
      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <Card className="p-8 shadow-elegant border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center"><Calculator className="h-6 w-6 text-gold-foreground" /></div>
            <h2 className="font-serif text-2xl font-bold text-primary">Mortgage Calculator</h2>
          </div>
          <div className="space-y-4">
            <div><Label>Home Price</Label><Input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} /></div>
            <div><Label>Down Payment</Label><Input type="number" value={down} onChange={(e) => setDown(+e.target.value)} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><Label>Interest Rate (%)</Label><Input type="number" step="0.01" value={rate} onChange={(e) => setRate(+e.target.value)} /></div>
              <div><Label>Term (years)</Label><Input type="number" value={years} onChange={(e) => setYears(+e.target.value)} /></div>
            </div>
          </div>
          <div className="mt-7 p-6 bg-gradient-subtle rounded-xl text-center">
            <div className="text-sm text-muted-foreground uppercase tracking-wider">Estimated Monthly Payment</div>
            <div className="font-serif text-5xl font-bold text-primary mt-2">${isFinite(monthly) ? Math.round(monthly).toLocaleString() : "—"}</div>
            <p className="text-xs text-muted-foreground mt-2">Principal & interest only. Taxes and insurance not included.</p>
          </div>
        </Card>
        <div>
          <h2 className="font-serif text-3xl font-bold text-primary">Trusted Lending Partners</h2>
          <p className="mt-4 text-muted-foreground">
            The Bob Lucido Team works hand-in-hand with preferred Maryland lenders who close on time and
            communicate clearly. Whether you're a first-time buyer, jumbo, VA, FHA, or refinancing — we'll
            introduce you to the right loan officer.
          </p>
          <Button variant="hero" size="lg" className="mt-6" asChild>
            <a href="mailto:jimgladden@boblucidoteam.com">Get a Lender Introduction</a>
          </Button>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
