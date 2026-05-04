import { Link } from "@tanstack/react-router";
import { Phone, Mail, Building2, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NAV = [
  { to: "/buy", label: "Buy" },
  { to: "/sell", label: "Sell" },
  { to: "/services", label: "Services" },
  { to: "/mortgage", label: "Mortgage" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const LANGS = ["English", "Chinese", "French", "Japanese", "Spanish"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("English");

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-5">
            <a href="tel:+14103750332" className="flex items-center gap-1.5 hover:text-gold transition-smooth">
              <Phone className="h-3.5 w-3.5" /> Direct: (410) 375-0332
            </a>
            <a href="tel:+14104656900" className="flex items-center gap-1.5 hover:text-gold transition-smooth">
              <Building2 className="h-3.5 w-3.5" /> Office: (410) 465-6900
            </a>
            <a href="mailto:jimgladden@boblucidoteam.com" className="flex items-center gap-1.5 hover:text-gold transition-smooth">
              <Mail className="h-3.5 w-3.5" /> jimgladden@boblucidoteam.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gold transition-smooth outline-none">
                <Globe className="h-3.5 w-3.5" /> {lang} <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {LANGS.map((l) => (
                  <DropdownMenuItem key={l} onClick={() => setLang(l)}>
                    {l}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/register" className="hover:text-gold transition-smooth">Register</Link>
            <span className="opacity-40">|</span>
            <Link to="/signin" className="hover:text-gold transition-smooth">Sign In</Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-serif text-xl md:text-2xl font-bold text-primary">Jim Gladden</span>
            <span className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium">
              Lucido Global
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeProps={{ className: "text-gold" }}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-smooth"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button variant="hero" size="default" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium py-1"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-3 pt-2 border-t border-border">
                <Link to="/register" className="text-sm">Register</Link>
                <span>|</span>
                <Link to="/signin" className="text-sm">Sign In</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
