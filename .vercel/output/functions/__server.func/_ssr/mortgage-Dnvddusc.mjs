import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Card } from "./card-CK73Pxd9.mjs";
import { I as Input } from "./input-CGJRjVov.mjs";
import { L as Label } from "./label-DlofMHDC.mjs";
import { B as Button } from "./router--t_1eI57.mjs";
import { P as PageHero, C as CTASection } from "./PageShell-BRs3IY8g.mjs";
import "../_libs/sonner.mjs";
import { k as Calculator } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
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
function MortgagePage() {
  const [price, setPrice] = reactExports.useState(5e5);
  const [down, setDown] = reactExports.useState(1e5);
  const [rate, setRate] = reactExports.useState(6.75);
  const [years, setYears] = reactExports.useState(30);
  const principal = price - down;
  const monthlyRate = rate / 100 / 12;
  const n = years * 12;
  const monthly = monthlyRate > 0 ? principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -n)) : principal / n;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Mortgage", title: "Plan Your Purchase with Confidence", subtitle: "Estimate your payment and get connected with vetted local lending partners." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-20 container mx-auto px-6 grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-8 shadow-elegant border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calculator, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl font-bold text-primary", children: "Mortgage Calculator" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Home Price" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: price, onChange: (e) => setPrice(+e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Down Payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: down, onChange: (e) => setDown(+e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Interest Rate (%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", step: "0.01", value: rate, onChange: (e) => setRate(+e.target.value) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Term (years)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "number", value: years, onChange: (e) => setYears(+e.target.value) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 p-6 bg-gradient-subtle rounded-xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground uppercase tracking-wider", children: "Estimated Monthly Payment" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-5xl font-bold text-primary mt-2", children: [
            "$",
            isFinite(monthly) ? Math.round(monthly).toLocaleString() : "—"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Principal & interest only. Taxes and insurance not included." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl font-bold text-primary", children: "Trusted Lending Partners" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Jim Gladden works hand-in-hand with preferred Maryland lenders who close on time and communicate clearly. Whether you're a first-time buyer, jumbo, VA, FHA, or refinancing — we'll introduce you to the right loan officer." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "lg", className: "mt-6", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:jimgladden@boblucidoteam.com", children: "Get a Lender Introduction" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  MortgagePage as component
};
