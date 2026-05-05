import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-CK73Pxd9.mjs";
import { B as Button } from "./router--t_1eI57.mjs";
import { P as PageHero, C as CTASection } from "./PageShell-BRs3IY8g.mjs";
import "../_libs/sonner.mjs";
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
import "../_libs/lucide-react.mjs";
const roles = [{
  title: "Buyer's Agent",
  type: "Full-time · Ellicott City, MD",
  desc: "Join a top-producing team with a steady pipeline of qualified leads, world-class training, and admin support."
}, {
  title: "Listing Agent",
  type: "Full-time · Ellicott City, MD",
  desc: "Represent Maryland sellers with the marketing power of the #1 KW Lucido team behind you."
}, {
  title: "Transaction Coordinator",
  type: "Full-time · Ellicott City, MD",
  desc: "Keep our deals moving — manage timelines, vendors, and client communication from contract to close."
}];
function CareersPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Careers", title: "Build Your Career With the Best", subtitle: "Join Maryland's top-producing real estate team and grow faster than you imagined." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 container mx-auto px-6 max-w-4xl space-y-5", children: roles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-7 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-elegant transition-smooth border-border/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl font-bold text-primary", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-gold font-semibold mt-1", children: r.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: r.desc })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", children: "Apply" })
    ] }, r.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  CareersPage as component
};
