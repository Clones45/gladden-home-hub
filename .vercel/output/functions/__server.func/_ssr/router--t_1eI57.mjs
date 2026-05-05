import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as SubTrigger2, a as SubContent2, P as Portal2, C as Content2, I as Item2, b as CheckboxItem2, c as ItemIndicator2, R as RadioItem2, L as Label2, d as Separator2, e as Root2, T as Trigger } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { C as ChevronRight, a as Check, b as Circle, P as Phone, B as Building2, M as Mail, G as Globe, c as ChevronDown, X, d as Menu, F as Facebook, I as Instagram, L as Linkedin, e as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/radix-ui__react-compose-refs.mjs";
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
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-gold text-gold-foreground shadow-gold hover:brightness-110 transition-smooth font-semibold",
        gold: "bg-gold text-gold-foreground hover:bg-gold/90 transition-smooth font-medium",
        elegant: "bg-primary text-primary-foreground shadow-elegant hover:bg-primary-glow transition-smooth",
        outlineLight: "border border-white/40 text-white bg-white/5 backdrop-blur hover:bg-white/15 transition-smooth"
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
const NAV = [
  { to: "/buy", label: "Buy" },
  { to: "/sell", label: "Sell" },
  { to: "/services", label: "Services" },
  { to: "/mortgage", label: "Mortgage" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" }
];
const LANGS = ["English", "Chinese", "French", "Japanese", "Spanish"];
function Header() {
  const [open, setOpen] = reactExports.useState(false);
  const [lang, setLang] = reactExports.useState("English");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block bg-primary text-primary-foreground text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between px-6 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+14103750332", className: "flex items-center gap-1.5 hover:text-gold transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5" }),
          " Direct: (410) 375-0332"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+14104656900", className: "flex items-center gap-1.5 hover:text-gold transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-3.5 w-3.5" }),
          " Office: (410) 465-6900"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:jimgladden@boblucidoteam.com", className: "flex items-center gap-1.5 hover:text-gold transition-smooth", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
          " jimgladden@boblucidoteam.com"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuTrigger, { className: "flex items-center gap-1 hover:text-gold transition-smooth outline-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
            " ",
            lang,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "end", children: LANGS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => setLang(l), children: l }, l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "hover:text-gold transition-smooth", children: "Register" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "|" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signin", className: "hover:text-gold transition-smooth", children: "Sign In" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/95 backdrop-blur border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex items-center justify-between px-6 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex flex-col leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xl md:text-2xl font-bold text-primary", children: "Jim Gladden" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] md:text-xs tracking-[0.25em] uppercase text-gold font-medium", children: "Lucido Global" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-7", children: NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            activeProps: { className: "text-gold" },
            className: "text-sm font-medium text-foreground/80 hover:text-gold transition-smooth",
            children: item.label
          },
          item.to
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "default", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Get Started" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "lg:hidden p-2",
            onClick: () => setOpen(!open),
            "aria-label": "Toggle menu",
            children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
          }
        )
      ] }),
      open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-border bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-4 flex flex-col gap-3", children: [
        NAV.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: item.to,
            onClick: () => setOpen(false),
            className: "text-sm font-medium py-1",
            children: item.label
          },
          item.to
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2 border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/register", className: "text-sm", children: "Register" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signin", className: "text-sm", children: "Sign In" })
        ] })
      ] }) })
    ] })
  ] });
}
const teamLogo = "/assets/team-logo-C6kgKNOW.webp";
const realtorEhoLogos = "/assets/realtor-eho-logos-CKmCjy3F.png";
const kwLogo = "/assets/KwLogo-5-XHIY3s.png";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-primary-foreground mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl font-bold", children: "Jim Gladden" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs tracking-[0.25em] uppercase text-gold mt-1", children: "Lucido Global" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-primary-foreground/75", children: "Your Central Maryland neighborhood expert for buying, selling, and renting." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", className: "p-2 rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm uppercase tracking-wider mb-4 text-gold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 shrink-0 mt-0.5" }),
            " 9251 Baltimore National Pike, Suite D, Ellicott City, MD 21042"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0 mt-0.5" }),
            " Direct: (410) 375-0332"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 shrink-0 mt-0.5" }),
            " Office: (410) 465-6900"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 shrink-0 mt-0.5" }),
            " jimgladden@boblucidoteam.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-sm uppercase tracking-wider mb-4 text-gold", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/buy", className: "hover:text-gold transition-smooth", children: "Buy a Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sell", className: "hover:text-gold transition-smooth", children: "Sell a Home" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-gold transition-smooth", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/mortgage", className: "hover:text-gold transition-smooth", children: "Mortgage" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "hover:text-gold transition-smooth", children: "Market Blog" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-8 text-xs text-primary-foreground/60 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-8 pt-4 border-t border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://boblucidoteam.com",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Bob Lucido Team",
            className: "transition-opacity opacity-90 hover:opacity-100",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: teamLogo, alt: "Bob Lucido Team", className: "h-16 w-auto object-contain", style: { filter: "brightness(0) invert(1)" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.nar.realtor/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "National Association of Realtors & Equal Housing Opportunity",
            className: "transition-opacity opacity-90 hover:opacity-100",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: realtorEhoLogos, alt: "Realtor & Equal Housing Opportunity", className: "h-16 w-auto object-contain", style: { filter: "invert(1)" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://kw.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Keller Williams",
            className: "transition-opacity opacity-90 hover:opacity-100",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: kwLogo, alt: "Keller Williams", className: "h-16 w-auto object-contain", style: { filter: "brightness(0) invert(1)" } })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-5 gap-y-2 pt-3 border-t border-white/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Jim Gladden · Lucido Global"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Terms of Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Cookie Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Sitemap" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Accessibility" })
      ] })
    ] }) })
  ] });
}
const appCss = "/assets/styles-DbWvKw-X.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$e = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jim Gladden — Central Maryland Real Estate Expert | Lucido Global" },
      { name: "description", content: "Jim Gladden, licensed Maryland real estate agent with Lucido Global. Buy, sell, and invest in Sykesville, Eldersburg, Westminster, Columbia, and Frederick MD." },
      { name: "author", content: "Jim Gladden" },
      { property: "og:title", content: "Jim Gladden — Central Maryland Real Estate Expert" },
      { property: "og:description", content: "Your Central Maryland neighborhood expert for buying, selling, and renting." },
      { property: "og:type", content: "website" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
  ] });
}
const $$splitComponentImporter$d = () => import("./signin-DC-0JX1H.mjs");
const Route$d = createFileRoute("/signin")({
  head: () => ({
    meta: [{
      title: "Sign In | Jim Gladden"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./services-Cbvp3Zyy.mjs");
const Route$c = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Specialized Real Estate Services | Jim Gladden"
    }, {
      name: "description",
      content: "Senior Services, Luxury, H.E.L.P., and Guaranteed Sale programs from Jim Gladden — affiliated with Lucido Global in Central Maryland."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./sell-BEUqGYOc.mjs");
const Route$b = createFileRoute("/sell")({
  head: () => ({
    meta: [{
      title: "Sell Your Home with Jim Gladden | Lucido Global"
    }, {
      name: "description",
      content: "Sell your Central Maryland home with Jim Gladden — proven marketing, Guaranteed Sale program, and Lucido Global's local expertise."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./rent-CVFFYpxR.mjs");
const Route$a = createFileRoute("/rent")({
  head: () => ({
    meta: [{
      title: "Rentals in Central Maryland | Jim Gladden"
    }, {
      name: "description",
      content: "Find rental homes, townhomes, and condos across Central Maryland with Jim Gladden of the Bob Lucido Team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./register-DJt3qiW0.mjs");
const Route$9 = createFileRoute("/register")({
  head: () => ({
    meta: [{
      title: "Register | Jim Gladden"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./mortgage-Dnvddusc.mjs");
const Route$8 = createFileRoute("/mortgage")({
  head: () => ({
    meta: [{
      title: "Mortgage Calculator & Lending Partners | Jim Gladden"
    }, {
      name: "description",
      content: "Estimate your monthly payment and connect with trusted Central Maryland lenders through Jim Gladden — affiliated with Lucido Global."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./contact-B1ymIvmm.mjs");
const Route$7 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Jim Gladden | Lucido Global — Central Maryland Realtor"
    }, {
      name: "description",
      content: "Reach Jim Gladden directly — phone, email, or stop by our Ellicott City office. Personal service, fast response."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./careers-YLCyBmkD.mjs");
const Route$6 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers with the Bob Lucido Team | Jim Gladden"
    }, {
      name: "description",
      content: "Join Maryland's top-producing real estate team. Open agent and support roles at the Bob Lucido Team — Keller Williams Lucido Agency."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./buy-K5Cqhkgp.mjs");
const Route$5 = createFileRoute("/buy")({
  head: () => ({
    meta: [{
      title: "Search Homes | Jim Gladden — Lucido Global"
    }, {
      name: "description",
      content: "Full IDX home search coming soon. Browse active listings in Sykesville, Eldersburg, Westminster, Columbia, and Frederick MD with Jim Gladden, Realtor."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./blog-BFsOu0JM.mjs");
const Route$4 = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-OHJRnr9K.mjs");
const Route$3 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Jim Gladden | Realtor — Lucido Global"
    }, {
      name: "description",
      content: "Meet Jim Gladden — Central Maryland's trusted real estate agent with Lucido Global. Learn his story, his values, and why hundreds of families choose Jim."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-hdhQ1_ex.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Jim Gladden — Your Central Maryland Neighborhood Expert"
    }, {
      name: "description",
      content: "Buy, sell, or invest with Jim Gladden — affiliated with Lucido Global. Specialized in Senior Services, Luxury, H.E.L.P., and Guaranteed Sale programs across Central Maryland."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BQ1y3KQG.mjs");
const Route$1 = createFileRoute("/blog/")({
  head: () => ({
    meta: [{
      title: "Central Maryland Real Estate Blog | Jim Gladden, Realtor"
    }, {
      name: "description",
      content: "Local market reports, buyer and seller tips, senior services insights, and community spotlights from Jim Gladden — your Central Maryland real estate expert."
    }, {
      name: "author",
      content: "Jim Gladden"
    }, {
      property: "og:title",
      content: "Central Maryland Real Estate Blog | Jim Gladden"
    }, {
      property: "og:description",
      content: "Honest market updates, buyer tips, and community stories from Jim Gladden, Realtor — serving Sykesville, Eldersburg, Westminster, Columbia & Frederick, MD."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const blogPosts = [
  {
    slug: "central-maryland-q2-market-report",
    tag: "Market Update",
    title: "Central Maryland Q2 Market Report",
    excerpt: "Inventory tightens in Howard and Carroll counties as buyer demand stays strong heading into summer.",
    date: "May 1, 2026",
    dateISO: "2026-05-01",
    readTime: "5 min read",
    metaTitle: "Central Maryland Q2 2026 Real Estate Market Report | Jim Gladden, Realtor",
    metaDescription: "Jim Gladden's Q2 2026 housing market update for Howard and Carroll counties, MD — inventory, pricing trends, and what buyers and sellers should do right now.",
    keywords: ["Central Maryland real estate 2026", "Howard County housing market", "Carroll County homes for sale", "Maryland home prices"],
    body: `
      <p>As we move into Q2 2026, the Central Maryland real estate market continues to show remarkable strength — particularly in Howard and Carroll counties. If you're thinking about buying or selling in Sykesville, Eldersburg, Westminster, or Columbia, here's what you need to know.</p>

      <h2>Inventory Remains at Historic Lows</h2>
      <p>Months of supply in Howard County sits at approximately <strong>1.4 months</strong> — well below the 4–6 months of a balanced market. Carroll County is slightly looser at 1.8 months. For buyers, that means real competition. For sellers, it means serious pricing power.</p>
      <p>Correctly priced, well-presented homes in the $500k–$700k range are routinely drawing multiple offers within the first weekend. I've personally seen 6+ offers with aggressive escalation clauses on properties in Eldersburg and Sykesville.</p>

      <h2>Median Prices Continue to Rise</h2>
      <p>Year-over-year, median sale prices in Howard County are up approximately <strong>6.2%</strong>, now around $625,000 for single-family homes. Carroll County is up ~5.8%, landing near $475,000. These gains reflect sustained demand — not speculation — driven by population growth and the stable Baltimore-Washington job corridor.</p>

      <h2>Days on Market Are Shrinking</h2>
      <p>Average days on market in Howard County is under 10 days. In hot Eldersburg and Columbia zip codes, well-priced homes go under contract in 3–5 days. This is one of the fastest markets I've seen in over two decades of Central Maryland real estate.</p>

      <h2>What Buyers Should Do Right Now</h2>
      <p>Get fully pre-approved — not just pre-qualified — before you tour anything. When we find the right home, you may have 48 hours or less to act. I help my buyers build smart, competitive offers that sellers actually want to accept.</p>

      <h2>What Sellers Should Do Right Now</h2>
      <p>Strategic pricing — just slightly below perceived market value — consistently creates bidding wars and nets above-ask results. My sellers are typically closing 2–5% over list price in the current environment. If you're thinking about selling, <a href="/contact">contact me for a free Comparative Market Analysis</a>.</p>

      <h2>Looking Ahead to Q3</h2>
      <p>Mortgage rates have stabilized, and buyers who sat out 2025 are re-entering the market. My advice: don't wait. Central Maryland rewards decisive action. <a href="/contact">Let's map out your strategy together.</a></p>
    `
  },
  {
    slug: "5-things-to-know-before-buying-in-eldersburg",
    tag: "Buyer Tips",
    title: "5 Things to Know Before Buying in Eldersburg",
    excerpt: "From school districts to commute times — what every buyer should consider in this growing community.",
    date: "Apr 22, 2026",
    dateISO: "2026-04-22",
    readTime: "4 min read",
    metaTitle: "Buying a Home in Eldersburg, MD — 5 Must-Know Tips | Jim Gladden, Realtor",
    metaDescription: "Thinking about buying a home in Eldersburg, Maryland? Jim Gladden shares 5 essential things every buyer needs to know about schools, commutes, neighborhoods, and the local market.",
    keywords: ["Eldersburg MD homes for sale", "buying a home in Eldersburg", "Carroll County real estate", "Eldersburg schools neighborhoods"],
    body: `
      <p>Eldersburg has quietly become one of Carroll County's most sought-after communities — and for good reason. Top-rated schools, easy access to Routes 26 and 32, and a genuine small-town feel make it a perennial favorite. Here are five things every buyer should know before starting their search here.</p>

      <h2>1. The Schools Are Genuinely Excellent</h2>
      <p>Eldersburg is served by Carroll County Public Schools, one of Maryland's consistently top-ranked districts. Liberty High School has earned national recognition for academics and athletics. Elementary assignments depend on your exact address — something I always verify for my buyers before we tour a home.</p>

      <h2>2. Your Commute Options Are Better Than You Think</h2>
      <p>Route 26 connects directly to I-695 (Baltimore Beltway) in under 20 minutes. Route 32 gives quick access to Columbia and the I-95 corridor. Many buyers are pleasantly surprised at how manageable the commute is compared to living inside the Beltway — with substantially more home for the money.</p>

      <h2>3. Prices Have Been Rising — But Value Remains</h2>
      <p>Median home prices in Eldersburg have climbed roughly 5–7% year-over-year, but compared to Howard County and Anne Arundel County, you still get significantly more square footage per dollar. The $400k–$600k range offers excellent single-family options with real yards and mature neighborhoods.</p>

      <h2>4. New Construction Is Limited — Act on Resale</h2>
      <p>Eldersburg is largely built out. New construction opportunities are rare, which puts pressure on the resale market. When a good home hits the market, it doesn't last. Working with an agent who knows the area's micro-neighborhoods — like Liberty Commons, Linton Springs, and the areas around Eldersburg Elementary — is a real advantage.</p>

      <h2>5. Community Matters Here</h2>
      <p>Eldersburg has a strong community identity. Farmers markets, local sports leagues, Liberty Road corridor shops, and proximity to Piney Run Park make this feel like a real neighborhood — not a suburb. Buyers who move here tend to stay for decades.</p>

      <p>Ready to start your Eldersburg home search? <a href="/buy">Browse available listings</a> or <a href="/contact">reach out to Jim directly</a> for a personalized buyer consultation.</p>
    `
  },
  {
    slug: "right-sizing-guide-for-maryland-seniors",
    tag: "Senior Services",
    title: "Right-Sizing: A Guide for Maryland Seniors",
    excerpt: "Practical steps for downsizing with dignity, while maximizing the equity you've built over decades.",
    date: "Apr 14, 2026",
    dateISO: "2026-04-14",
    readTime: "6 min read",
    metaTitle: "Right-Sizing for Maryland Seniors — Downsizing Guide | Jim Gladden, Realtor",
    metaDescription: "Jim Gladden's practical guide for Maryland seniors thinking about downsizing. How to right-size with dignity, maximize home equity, and navigate the transition smoothly.",
    keywords: ["Maryland senior downsizing", "right-sizing home Maryland", "senior real estate services Carroll County", "55+ communities Maryland"],
    body: `
      <p>After decades of building equity in your home, the decision to right-size is one of the most significant financial and emotional moves you'll make. I specialize in Senior Services real estate, and I've guided hundreds of Maryland families through this transition with patience, clarity, and respect. Here's what you need to know.</p>

      <h2>What "Right-Sizing" Really Means</h2>
      <p>Right-sizing isn't about settling for less — it's about freeing yourself. Moving from a four-bedroom home to a well-designed two-bedroom can dramatically reduce maintenance costs, utility bills, and the mental burden of upkeep, while unlocking substantial equity to fund the next chapter of your life.</p>

      <h2>Step 1: Start With a Home Valuation</h2>
      <p>Before you make any decisions, you need to know what your home is actually worth in today's market. In the current Central Maryland environment, many seniors are discovering their homes have appreciated significantly — often 30–50% over the last five to seven years. <a href="/contact">A free Comparative Market Analysis from Jim</a> gives you that foundation.</p>

      <h2>Step 2: Understand Your Options</h2>
      <p>Your next home could be a smaller single-family home in the same community, an active-adult 55+ community like Gatherings at Snowden Overlook in Columbia or The Greens at Linganore in Frederick, or a low-maintenance condo or townhome. Each has different HOA structures, tax implications, and lifestyle profiles. I walk every senior client through these tradeoffs in plain language.</p>

      <h2>Step 3: Coordinate the Transition</h2>
      <p>One of the biggest fears seniors express is the logistics: "What do I do with 30 years of belongings?" My Senior Services approach includes connections to trusted estate sale coordinators, senior move managers, and donation organizations across Carroll and Howard counties. You don't have to figure this out alone.</p>

      <h2>Step 4: Time the Sale Strategically</h2>
      <p>In most cases, you'll want to sell your current home and close on your new one in close sequence. I specialize in coordinating simultaneous transactions so you're never caught without a place to go — and never paying two mortgages at once.</p>

      <h2>A Note on Family Involvement</h2>
      <p>Families often play an important role in this decision. I welcome and encourage family members to join consultations. Transparency and patience are core to how I work with senior clients. There's no rush, no pressure — just honest guidance when you're ready.</p>

      <p><a href="/services">Learn more about Jim's Senior Services program</a> or <a href="/contact">call Jim directly</a> to have a no-obligation conversation about your situation.</p>
    `
  },
  {
    slug: "state-of-maryland-luxury-2026",
    tag: "Luxury",
    title: "The State of Maryland Luxury: 2026",
    excerpt: "Where the high-end market is heading in Howard, Carroll, and Frederick counties this year.",
    date: "Apr 3, 2026",
    dateISO: "2026-04-03",
    readTime: "5 min read",
    metaTitle: "Maryland Luxury Real Estate Market 2026 | Jim Gladden, Realtor",
    metaDescription: "Jim Gladden's 2026 overview of the luxury real estate market in Howard, Carroll, and Frederick counties, Maryland — price trends, buyer profiles, and what's selling.",
    keywords: ["Maryland luxury homes 2026", "luxury real estate Howard County", "Frederick County luxury market", "Carroll County luxury homes"],
    body: `
      <p>The luxury segment of Central Maryland's real estate market — broadly defined as homes priced above $800,000 — is telling a fascinating story in 2026. While the overall market has seen appreciation, the high-end segment has evolved in ways that require a more nuanced approach for both buyers and sellers.</p>

      <h2>Howard County: The Established Luxury Stronghold</h2>
      <p>Howard County remains the region's luxury leader, with neighborhoods like River Hill, Clarksville, and Turf Valley regularly producing sales in the $1M–$2.5M range. Demand in this segment has been driven largely by professional couples, corporate relocations tied to the Columbia/Route 29 corridor, and executives who want proximity to BWI and DC without city prices.</p>
      <p>Inventory in the $1M+ category has improved slightly — up about 12% from last year's historic lows — giving luxury buyers more selection without eliminating seller leverage entirely.</p>

      <h2>Frederick County: The Rising Star</h2>
      <p>Frederick is the most interesting luxury story of 2026. The $700k–$1.2M segment is growing rapidly, driven by migration from Montgomery County and D.C. buyers who discovered during remote-work years that they could get exceptional homes in Frederick's countryside for a fraction of what they were spending closer to the city.</p>
      <p>Communities like Monrovia, the Urbana area, and estates along Yellow Springs Road are attracting a new tier of buyer who prioritizes land, privacy, and architectural character.</p>

      <h2>Carroll County: Understated Luxury</h2>
      <p>Carroll County's luxury market is smaller but steady. Equestrian properties, large custom colonials in Westminster's country corridors, and estates near Sykesville regularly trade in the $700k–$1.3M range. These properties attract buyers who want genuine acreage and privacy — something increasingly rare at this price point closer to the metro.</p>

      <h2>What Luxury Sellers Need to Know</h2>
      <p>Marketing a luxury property requires a different approach. Professional photography is table stakes — I provide cinematic video, drone aerials, and 3D Matterport tours as standard. Digital syndication through luxury networks like Luxury Portfolio International amplifies reach globally. And pricing strategy at this tier must be surgical: overpricing a luxury home by even 5% can result in months of market time that stigmatizes the listing.</p>

      <h2>What Luxury Buyers Should Expect</h2>
      <p>Expect thoughtful, unhurried representation. I don't rush luxury clients. I take the time to understand your must-haves versus wish-list, your lifestyle goals, and your timeline — then build a curated search strategy around that. Many of my luxury transactions happen quietly, before a property ever hits the MLS.</p>

      <p>If you're exploring the luxury market in Central Maryland, <a href="/contact">let's have a private conversation</a> about what's available and what's coming.</p>
    `
  },
  {
    slug: "staging-on-a-budget-that-sells",
    tag: "Seller Tips",
    title: "Staging on a Budget That Sells",
    excerpt: "Five small investments that consistently return outsized results in our local market.",
    date: "Mar 25, 2026",
    dateISO: "2026-03-25",
    readTime: "4 min read",
    metaTitle: "Home Staging Tips That Sell in Maryland | Jim Gladden, Realtor",
    metaDescription: "Jim Gladden's practical staging tips for Central Maryland home sellers. Five budget-friendly investments that consistently return more money at closing.",
    keywords: ["home staging Maryland", "selling a home in Carroll County", "how to sell your home faster Maryland", "home staging tips sellers"],
    body: `
      <p>You don't need to spend $10,000 on staging to sell your Central Maryland home for top dollar. In a market as active as Howard and Carroll counties right now, smart preparation beats expensive staging every time. Here are the five investments that consistently return the most value for my sellers.</p>

      <h2>1. Deep Clean Everything (Budget: $200–$400)</h2>
      <p>Nothing turns buyers off faster than a dirty home — and nothing impresses them more than one that is impeccably clean. Hire a professional deep-cleaning crew to hit every surface, including inside appliances, baseboards, windows, and grout. This single investment returns more per dollar than almost anything else you can do.</p>

      <h2>2. Refresh the Front Door and Entry (Budget: $50–$150)</h2>
      <p>Curb appeal drives the first impression that sets the emotional tone for an entire showing. A freshly painted front door (black, navy, and deep red are perennially strong choices), clean shutters, a new welcome mat, and fresh mulch in the beds cost very little but dramatically elevate perceived value. Buyers decide how they feel about a home in the first 10 seconds.</p>

      <h2>3. Depersonalize and Declutter (Budget: $0–$100 for bins/storage)</h2>
      <p>Your home's job during showings is to let buyers imagine their own lives there — not to showcase yours. Remove family photos, excess furniture, personal collections, and anything that makes spaces feel smaller or more specific to you. Rent a small storage unit for a month if needed. Buyers pay more for homes that feel spacious and neutral.</p>

      <h2>4. Repaint in Warm Neutrals (Budget: $300–$800 DIY / $800–$2,000 professional)</h2>
      <p>Fresh, neutral paint is one of the highest-ROI improvements you can make. If your walls have bold colors or dated tones, a fresh coat in a warm greige or soft white instantly modernizes the space. I can recommend specific colors that photograph well and appeal to the widest buyer pool in our market.</p>

      <h2>5. Invest in Professional Photography (Budget: $200–$400 — I cover this)</h2>
      <p>Over 95% of buyers begin their search online. Your listing photos are your first showing, and they determine whether someone schedules a tour or scrolls past. Professional real estate photography — including HDR wide-angle interior shots and a well-staged hero shot of the front exterior — consistently generates more showings, more offers, and higher sale prices. When you list with me, professional photography is always included.</p>

      <p>Ready to sell? <a href="/sell">Learn more about my seller process</a> or <a href="/contact">schedule a free home valuation consultation</a>.</p>
    `
  },
  {
    slug: "why-sykesville-keeps-climbing-best-towns-lists",
    tag: "Community",
    title: "Why Sykesville Keeps Climbing the 'Best Towns' Lists",
    excerpt: "Charm, schools, and small-town walkability that today's buyers crave.",
    date: "Mar 12, 2026",
    dateISO: "2026-03-12",
    readTime: "4 min read",
    metaTitle: "Why Sykesville, MD Is One of Maryland's Best Towns | Jim Gladden, Realtor",
    metaDescription: "Jim Gladden explores why Sykesville, Maryland keeps earning 'Best Towns' recognition — its walkable Main Street, excellent schools, and strong community make it one of Central Maryland's most desirable places to live.",
    keywords: ["Sykesville Maryland homes", "best towns Maryland", "Sykesville real estate", "living in Sykesville MD"],
    body: `
      <p>If you haven't visited Sykesville recently, you might be surprised. This small Carroll County town — population around 5,000 — has earned national "Best Town" recognition multiple times, and the people who live here will tell you it's well deserved. As someone who has sold dozens of homes in and around Sykesville, I've watched it blossom into one of Central Maryland's most desirable addresses.</p>

      <h2>Main Street: A Genuine Small-Town Downtown</h2>
      <p>Sykesville's historic Main Street is the real thing — not a manufactured lifestyle center. Independent restaurants, boutique shops, an art gallery, a wine bar, and the beloved Baldwin's Station event venue (a restored B&O Railroad depot) line a walkable, charming corridor that feels like it belongs in a different era. On warm evenings, you'll find locals on porches, kids on bikes, and a sense of community that's genuinely rare.</p>

      <h2>Excellent Schools Drive Family Demand</h2>
      <p>Sykesville feeds into the Carroll County Public School system, with South Carroll High School serving as the local high school. South Carroll has strong academic programs, active sports, and a close-knit student community. Elementary options in the area are consistently well-rated. For families, Sykesville consistently delivers on the school quality that drives home-buying decisions.</p>

      <h2>Outdoor Access Is Exceptional</h2>
      <p>Patapsco Valley State Park runs along the town's eastern edge, offering miles of trails, fishing, and river access. The Liberty Reservoir watershed provides a natural buffer that protects the town's green, open character. For buyers who want outdoor access without sacrificing community amenities, Sykesville is genuinely rare.</p>

      <h2>Housing Values Remain Accessible — For Now</h2>
      <p>Sykesville's secret is starting to get out. Median home prices have appreciated steadily, but the town still offers significant value compared to comparable communities in Howard County or Anne Arundel County. Charming colonials, Craftsman-style homes, and historic properties are still available in the $350k–$600k range — a window that I expect to continue narrowing as more buyers discover what's here.</p>

      <h2>The People Make It</h2>
      <p>More than anything else, what buyers tell me after they've lived in Sykesville for a year is: "We love our neighbors." Community events like the annual Sykesville Street Dance, farmers markets, and local festivals create a social fabric that's increasingly hard to find. This is a town where people know each other — and that matters.</p>

      <p>Interested in calling Sykesville home? <a href="/buy">Browse current listings in the area</a> or <a href="/contact">reach out to Jim</a> for a personalized neighborhood tour.</p>
    `
  }
];
function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
function getRelatedPosts(currentSlug, count = 3) {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
const $$splitComponentImporter = () => import("../_slug-B1ckJCsn.mjs");
const Route = createFileRoute("/blog/$slug")({
  head: ({
    params
  }) => {
    const post = getPostBySlug(params.slug);
    if (!post) return {
      meta: [{
        title: "Post Not Found | Jim Gladden"
      }]
    };
    return {
      meta: [{
        title: post.metaTitle
      }, {
        name: "description",
        content: post.metaDescription
      }, {
        name: "author",
        content: "Jim Gladden"
      }, {
        name: "keywords",
        content: post.keywords.join(", ")
      }, {
        property: "og:title",
        content: post.metaTitle
      }, {
        property: "og:description",
        content: post.metaDescription
      }, {
        property: "og:type",
        content: "article"
      }, {
        property: "article:author",
        content: "Jim Gladden"
      }, {
        property: "article:published_time",
        content: post.dateISO
      }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.dateISO,
          dateModified: post.dateISO,
          author: {
            "@type": "Person",
            name: "Jim Gladden",
            jobTitle: "Licensed Real Estate Agent",
            worksFor: {
              "@type": "Organization",
              name: "Lucido Global"
            }
          },
          publisher: {
            "@type": "Organization",
            name: "Jim Gladden — Central Maryland Real Estate"
          },
          keywords: post.keywords.join(", ")
        })
      }]
    };
  },
  loader: ({
    params
  }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return {
      post,
      related: getRelatedPosts(params.slug)
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SigninRoute = Route$d.update({
  id: "/signin",
  path: "/signin",
  getParentRoute: () => Route$e
});
const ServicesRoute = Route$c.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$e
});
const SellRoute = Route$b.update({
  id: "/sell",
  path: "/sell",
  getParentRoute: () => Route$e
});
const RentRoute = Route$a.update({
  id: "/rent",
  path: "/rent",
  getParentRoute: () => Route$e
});
const RegisterRoute = Route$9.update({
  id: "/register",
  path: "/register",
  getParentRoute: () => Route$e
});
const MortgageRoute = Route$8.update({
  id: "/mortgage",
  path: "/mortgage",
  getParentRoute: () => Route$e
});
const ContactRoute = Route$7.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$e
});
const CareersRoute = Route$6.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$e
});
const BuyRoute = Route$5.update({
  id: "/buy",
  path: "/buy",
  getParentRoute: () => Route$e
});
const BlogRoute = Route$4.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$e
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const BlogIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => BlogRoute
});
const BlogSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogSlugRoute,
  BlogIndexRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute: BlogRouteWithChildren,
  BuyRoute,
  CareersRoute,
  ContactRoute,
  MortgageRoute,
  RegisterRoute,
  RentRoute,
  SellRoute,
  ServicesRoute,
  SigninRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Route as R,
  blogPosts as b,
  cn as c,
  router as r
};
