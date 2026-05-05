import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router--t_1eI57.mjs";
import { o as ArrowRight } from "../_libs/lucide-react.mjs";
function PageHero({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold uppercase tracking-[0.25em] text-xs font-semibold", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-4xl md:text-6xl font-bold mt-4 text-balance", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-primary-foreground/80", children: subtitle })
  ] }) });
}
function CTASection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 bg-gradient-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center text-gold-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-3xl md:text-4xl font-bold", children: "Let's Talk About Your Goals" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-gold-foreground/80 max-w-xl mx-auto", children: "Reach Jim directly personal service, every time." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-4 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "elegant", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", children: [
        "Contact Jim ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "xl", asChild: true, className: "bg-transparent border-gold-foreground/30 text-gold-foreground hover:bg-gold-foreground hover:text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+14103750332", children: "Call (410) 375-0332" }) })
    ] })
  ] }) });
}
export {
  CTASection as C,
  PageHero as P
};
