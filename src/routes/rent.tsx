import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/LeadForm";
import { Card } from "@/components/ui/card";
import { PageHero, CTASection } from "@/components/PageShell";

export const Route = createFileRoute("/rent")({
  head: () => ({
    meta: [
      { title: "Rentals in Central Maryland | Jim Gladden" },
      { name: "description", content: "Find rental homes, townhomes, and condos across Central Maryland with Jim Gladden of the Bob Lucido Team." },
    ],
  }),
  component: RentPage,
});

function RentPage() {
  return (
    <div>
      <PageHero eyebrow="Rent" title="Rentals Across Central Maryland" subtitle="Single-family, townhomes, and condos — short and long-term options." />
      <section className="py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-serif text-3xl font-bold text-primary">Renter & Landlord Services</h2>
          <p className="mt-4 text-muted-foreground">
            Whether you're searching for the right rental or need a trusted partner to lease and manage
            your investment property, Jim and the Bob Lucido Team make it simple.
          </p>
          <ul className="mt-6 space-y-3 text-foreground/80">
            <li>• Curated rental search across Howard, Carroll, and Frederick counties</li>
            <li>• Tenant screening and lease preparation for landlords</li>
            <li>• Investor consultations on cash flow and appreciation</li>
            <li>• Smooth move-in coordination and local resources</li>
          </ul>
        </div>
        <Card className="p-7 shadow-elegant border-0">
          <h3 className="font-serif text-2xl font-bold text-primary">Inquire About Rentals</h3>
          <p className="text-sm text-muted-foreground mt-1 mb-5">Tell us what you're looking for.</p>
          <LeadForm />
        </Card>
      </section>
      <CTASection />
    </div>
  );
}
