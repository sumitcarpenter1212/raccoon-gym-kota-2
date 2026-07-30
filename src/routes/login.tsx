import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Field, Input, FormCard, SubmitButton, ErrorNote, useSubmitState } from "@/components/site/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Member Login — Fitsters Club Jhalawar" },
      { name: "description", content: "Log in to your Fitsters Club Jhalawar member account to view your bookings, enquiries and submitted forms." },
      { property: "og:title", content: "Member Login — Fitsters Club Jhalawar" },
      { property: "og:description", content: "Access your membership dashboard and booking history." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const s = useSubmitState();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [form, setForm] = useState({ email: "", password: "", full_name: "", phone: "" });
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/my-account" });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    s.setError(null);
    setNotice(null);
    s.setLoading(true);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email: form.email.trim(), password: form.password });
      s.setLoading(false);
      if (error) return s.setError(error.message);
      navigate({ to: "/my-account" });
    } else {
      const { error } = await supabase.auth.signUp({
        email: form.email.trim(),
        password: form.password,
        options: {
          emailRedirectTo: `${window.location.origin}/my-account`,
          data: { full_name: form.full_name.trim(), phone: form.phone.trim() },
        },
      });
      s.setLoading(false);
      if (error) return s.setError(error.message);
      setNotice("Account created. Check your email to confirm, then sign in.");
      setMode("signin");
    }
  }

  async function google() {
    s.setError(null);
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (result.error) return s.setError("Google sign-in failed. Please try again.");
    if (result.redirected) return;
    navigate({ to: "/my-account" });
  }

  return (
    <PageShell
      eyebrow="Client Login"
      title={mode === "signin" ? "Member Login" : "Create Member Account"}
      intro="Log in to track your bookings, enquiries and signed forms in one place."
      image={IMAGES.floorOpen}
    >
      <FormCard onSubmit={onSubmit}>
        <ErrorNote error={s.error} />
        {notice && (
          <p className="rounded-xl border border-[color:var(--color-brand)]/40 bg-[color:var(--color-brand)]/10 px-4 py-3 text-sm text-white">
            {notice}
          </p>
        )}

        <button type="button" onClick={google} className="btn-ghost w-full justify-center">
          Continue with Google
        </button>
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/35">
          <span className="h-px flex-1 bg-white/10" /> or <span className="h-px flex-1 bg-white/10" />
        </div>

        {mode === "signup" && (
          <>
            <Field label="Full name">
              <Input required value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} />
            </Field>
            <Field label="Mobile number">
              <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </Field>
          </>
        )}
        <Field label="Email">
          <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
        </Field>
        <Field label="Password">
          <Input required type="password" minLength={6} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Minimum 6 characters" />
        </Field>
        <SubmitButton loading={s.loading}>{mode === "signin" ? "Log In" : "Create Account"}</SubmitButton>

        <p className="text-center text-sm text-[color:var(--color-body)]">
          {mode === "signin" ? "New member?" : "Already have an account?"}{" "}
          <button type="button" onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="font-bold text-[color:var(--color-brand)]">
            {mode === "signin" ? "Create an account" : "Log in"}
          </button>
        </p>
      </FormCard>

      <div className="mt-8 text-center">
        <Link to="/enquiry" className="btn-ghost">
          Not a member yet? Send an enquiry <ChevronRight size={16} />
        </Link>
      </div>
    </PageShell>
  );
}