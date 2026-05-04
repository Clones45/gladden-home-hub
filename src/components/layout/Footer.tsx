import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import teamLogo from "@/assets/team-logo.webp";
import realtorEhoLogos from "@/assets/realtor-eho-logos.png";
import kwLogo from "@/assets/KwLogo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl font-bold">Jim Gladden</h3>
          <p className="text-xs tracking-[0.25em] uppercase text-gold mt-1">Lucido Global</p>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Your Central Maryland neighborhood expert for buying, selling, and renting.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-smooth">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" /> 9251 Baltimore National Pike, Suite D, Ellicott City, MD 21042</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> Direct: (410) 375-0332</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" /> Office: (410) 465-6900</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" /> jimgladden@boblucidoteam.com</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/buy" className="hover:text-gold transition-smooth">Buy a Home</Link></li>
            <li><Link to="/sell" className="hover:text-gold transition-smooth">Sell a Home</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-smooth">Services</Link></li>
            <li><Link to="/mortgage" className="hover:text-gold transition-smooth">Mortgage</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-smooth">Market Blog</Link></li>
          </ul>
        </div>


      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-8 text-xs text-primary-foreground/60 space-y-3">

          {/* Partner / Affiliation Logos */}
          <div className="flex flex-wrap items-center gap-8 pt-4 border-t border-white/10">
            <a
              href="https://boblucidoteam.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bob Lucido Team"
              className="transition-opacity opacity-90 hover:opacity-100"
            >
              <img src={teamLogo} alt="Bob Lucido Team" className="h-16 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </a>
            <a
              href="https://www.nar.realtor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="National Association of Realtors & Equal Housing Opportunity"
              className="transition-opacity opacity-90 hover:opacity-100"
            >
              <img src={realtorEhoLogos} alt="Realtor & Equal Housing Opportunity" className="h-16 w-auto object-contain" style={{ filter: "invert(1)" }} />
            </a>
            <a
              href="https://kw.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Keller Williams"
              className="transition-opacity opacity-90 hover:opacity-100"
            >
              <img src={kwLogo} alt="Keller Williams" className="h-16 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} />
            </a>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-3 border-t border-white/10">
            <span>© {new Date().getFullYear()} Jim Gladden · Lucido Global</span>
            <a href="#" className="hover:text-gold">Terms of Service</a>
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Cookie Policy</a>
            <a href="#" className="hover:text-gold">Sitemap</a>
            <a href="#" className="hover:text-gold">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
