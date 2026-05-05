import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-CK73Pxd9.mjs";
import { P as PageHero, C as CTASection } from "./PageShell-BRs3IY8g.mjs";
import "../_libs/sonner.mjs";
import { H as Heart, f as Crown, g as HandHeart, S as ShieldCheck } from "../_libs/lucide-react.mjs";
import "./router--t_1eI57.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
const services = [{
  icon: Heart,
  title: "Senior Services",
  desc: "Compassionate, patient guidance for downsizing, relocating to active-adult communities, or transitioning into care. We coordinate movers, estate sales, and family communication.",
  points: ["Right-sizing consultations", "55+ community expertise", "Estate sale coordination", "Family-inclusive process"]
}, {
  icon: Crown,
  title: "Luxury",
  desc: "Discreet, white-glove representation for distinctive Maryland properties. Magazine-grade marketing, global syndication, and a refined buyer network.",
  points: ["Cinematic photography & video", "Private showings", "Global luxury network", "Confidential transactions"]
}, {
  icon: HandHeart,
  title: "H.E.L.P. Program",
  desc: "Home Equity Leverage Program — leverage the equity in your current home to confidently buy your next, even before yours sells.",
  points: ["Buy before you sell", "Avoid contingent offers", "Strategic bridge financing", "Stress-free transitions"]
}, {
  icon: ShieldCheck,
  title: "Guaranteed Sale",
  desc: "Move forward with absolute certainty. If your home doesn't sell within the agreed timeframe, Jim's Guaranteed Sale program provides a written buyout offer.",
  points: ["Written guarantee", "Defined timeframe", "Backed by the program", "Total peace of mind"]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Services", title: "Programs Built Around You", subtitle: "Four signature service pillars designed for every stage of life and every kind of move." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 container mx-auto px-6 grid md:grid-cols-2 gap-7", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 hover:shadow-elegant transition-smooth border-border/60 group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl font-bold text-primary", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: s.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: s.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-sm flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "✓" }),
        p
      ] }, p)) })
    ] }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  ServicesPage as component
};
