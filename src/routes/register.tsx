import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Register | Jim Gladden" }] }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <div className="py-20 container mx-auto px-6 flex justify-center">
      <Card className="w-full max-w-md p-8 shadow-elegant border-0">
        <h1 className="font-serif text-3xl font-bold text-primary text-center">Create Your Account</h1>
        <p className="text-sm text-muted-foreground text-center mt-2">Save searches, favorite homes, and get instant alerts.</p>
        <form className="mt-6 space-y-4">
          <div><Label>Full Name</Label><Input placeholder="Jane Doe" /></div>
          <div><Label>Email</Label><Input type="email" placeholder="you@example.com" /></div>
          <div><Label>Password</Label><Input type="password" placeholder="••••••••" /></div>
          <Button variant="hero" size="lg" className="w-full">Create Account</Button>
        </form>
        <p className="text-sm text-center mt-5 text-muted-foreground">
          Already have an account? <Link to="/signin" className="text-gold font-semibold">Sign in</Link>
        </p>
      </Card>
    </div>
  );
}
