import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { C as Card } from "./_ssr/card-CK73Pxd9.mjs";
import { R as Route, B as Button } from "./_ssr/router--t_1eI57.mjs";
import { C as CTASection } from "./_ssr/PageShell-BRs3IY8g.mjs";
import "./_libs/sonner.mjs";
import { s as ArrowLeft, r as BookOpen, t as User, n as Calendar, l as Clock, o as ArrowRight } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-dropdown-menu.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/radix-ui__react-menu.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "./_libs/radix-ui__react-focus-guards.mjs";
import "./_libs/radix-ui__react-focus-scope.mjs";
import "./_libs/radix-ui__react-popper.mjs";
import "./_libs/floating-ui__react-dom.mjs";
import "./_libs/floating-ui__dom.mjs";
import "./_libs/floating-ui__core.mjs";
import "./_libs/floating-ui__utils.mjs";
import "./_libs/radix-ui__react-arrow.mjs";
import "./_libs/radix-ui__react-use-size.mjs";
import "./_libs/radix-ui__react-portal.mjs";
import "./_libs/radix-ui__react-presence.mjs";
import "./_libs/radix-ui__react-roving-focus.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/aria-hidden.mjs";
import "./_libs/react-remove-scroll.mjs";
import "tslib";
import "./_libs/react-remove-scroll-bar.mjs";
import "./_libs/react-style-singleton.mjs";
import "./_libs/get-nonce.mjs";
import "./_libs/use-sidecar.mjs";
import "./_libs/use-callback-ref.mjs";
const TAG_COLORS = {
  "Market Update": "bg-blue-50 text-blue-700 border-blue-200",
  "Buyer Tips": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Senior Services": "bg-purple-50 text-purple-700 border-purple-200",
  Luxury: "bg-amber-50 text-amber-700 border-amber-200",
  "Seller Tips": "bg-rose-50 text-rose-700 border-rose-200",
  Community: "bg-teal-50 text-teal-700 border-teal-200"
};
const TAG_TEXT = {
  "Market Update": "text-blue-600",
  "Buyer Tips": "text-emerald-600",
  "Senior Services": "text-purple-600",
  Luxury: "text-amber-600",
  "Seller Tips": "text-rose-600",
  Community: "text-teal-600"
};
function BlogPostPage() {
  const {
    post,
    related
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "bg-gradient-subtle border-b border-border", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-3 flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-gold transition-smooth", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-gold transition-smooth", children: "Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium truncate max-w-[240px]", children: post.title })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "py-14 bg-gradient-subtle border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-smooth mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        " Back to Blog"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${TAG_COLORS[post.tag] ?? "bg-gold/10 text-gold border-gold/30"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3 w-3" }),
        " ",
        post.tag
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 leading-tight", children: post.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground leading-relaxed", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5 mt-6 pt-6 border-t border-border text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-4 w-4 text-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Jim Gladden" }),
          ", Realtor · Lucido Global"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-gold" }),
          " ",
          post.date
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-gold" }),
          " ",
          post.readTime
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose prose-lg prose-primary max-w-none\n              prose-headings:font-serif prose-headings:text-primary\n              prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4\n              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-5\n              prose-a:text-gold prose-a:font-medium prose-a:no-underline hover:prose-a:underline\n              prose-strong:text-foreground", dangerouslySetInnerHTML: {
        __html: post.body
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 pt-10 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-7 border-border/60 bg-gradient-subtle flex flex-col sm:flex-row gap-5 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground font-serif font-bold text-2xl", children: "JG" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg font-bold text-primary", children: "Jim Gladden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gold uppercase tracking-widest font-semibold mt-0.5", children: "Realtor · License #665271 · Lucido Global" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-3 leading-relaxed", children: "Jim Gladden is a licensed Maryland real estate agent with over two decades of experience serving buyers, sellers, and seniors across Sykesville, Eldersburg, Westminster, Columbia, and Frederick. He is affiliated with Lucido Global and known for his personalized, one-on-one approach." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Contact Jim" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", children: "About Jim" }) })
          ] })
        ] })
      ] }) })
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 bg-gradient-subtle border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-2xl font-bold text-primary mb-8", children: "More from Jim's Blog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: related.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog/$slug", params: {
        slug: r.slug
      }, className: "block group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 h-full flex flex-col hover:shadow-elegant transition-smooth border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mb-3 ${TAG_TEXT[r.tag] ?? "text-gold"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3 w-3" }),
          " ",
          r.tag
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-lg font-bold text-primary group-hover:text-gold transition-smooth leading-snug flex-1", children: r.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: r.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-smooth", children: [
            "Read ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] }) }, r.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  BlogPostPage as component
};
