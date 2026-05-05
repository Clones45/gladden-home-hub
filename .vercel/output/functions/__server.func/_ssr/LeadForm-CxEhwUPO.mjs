import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Button, c as cn } from "./router--t_1eI57.mjs";
import { I as Input } from "./input-CGJRjVov.mjs";
import { C as Checkbox$1, a as CheckboxIndicator } from "../_libs/radix-ui__react-checkbox.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { a as Check } from "../_libs/lucide-react.mjs";
import { o as objectType, l as literalType, s as stringType } from "../_libs/zod.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Checkbox = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Checkbox$1,
  {
    ref,
    className: cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckboxIndicator, { className: cn("grid place-content-center text-current"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) })
  }
));
Checkbox.displayName = Checkbox$1.displayName;
const schema = objectType({
  name: stringType().trim().min(1, "Name required").max(100),
  email: stringType().trim().email("Valid email required").max(255),
  phone: stringType().trim().min(7, "Phone required").max(30),
  message: stringType().trim().min(1, "Message required").max(1e3),
  consent: literalType(true, { errorMap: () => ({ message: "Consent required" }) })
});
function LeadForm({ compact = false }) {
  const [form, setForm] = reactExports.useState({ name: "", email: "", phone: "", message: "" });
  const [consent, setConsent] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse({ ...form, consent });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you! Jim will be in touch shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setConsent(false);
      setLoading(false);
    }, 700);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: `space-y-3 ${compact ? "" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        placeholder: "Full Name",
        value: form.name,
        onChange: (e) => setForm({ ...form, name: e.target.value }),
        maxLength: 100
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "email",
        placeholder: "Email Address",
        value: form.email,
        onChange: (e) => setForm({ ...form, email: e.target.value }),
        maxLength: 255
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "tel",
        placeholder: "Phone Number",
        value: form.phone,
        onChange: (e) => setForm({ ...form, phone: e.target.value }),
        maxLength: 30
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Textarea,
      {
        placeholder: "How can Jim help you?",
        value: form.message,
        onChange: (e) => setForm({ ...form, message: e.target.value }),
        maxLength: 1e3,
        rows: compact ? 3 : 4
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex gap-2 items-start text-xs text-muted-foreground cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: consent, onCheckedChange: (v) => setConsent(v === true), className: "mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "I consent to receive electronic communications from Jim Gladden and Lucido Global regarding real estate services. Message and data rates may apply." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", size: "lg", className: "w-full", disabled: loading, children: loading ? "Sending..." : "Get More Information" })
  ] });
}
export {
  LeadForm as L
};
