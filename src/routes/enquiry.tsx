import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Field, Input, TextArea, Select, FormCard, SubmitButton, SuccessCard, ErrorNote, useSubmitState } from "@/components/site/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { GYM_PACKAGES, GROUP_CLASSES, PT_PLANS, IMAGES } from "@/data/site";

export const Route = createFileRoute("/enquiry")({
  validateSearch: (search: Record<string, unknown>) => ({
    package: typeof search.package === "string" ? search.package : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Enquiry — Fitsters Club Jhalawar" },
      { name: "description", content: "Send an enquiry to Fitsters Club Jhalawar about gym memberships, group classes and personal training packages." },
      { property: "og:title", content: "Enquiry — Fitsters Club Jhalawar" },
      { property: "og:description", content: "Tell us your goal and we'll suggest the right package for you." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnquiryPage,
});

function EnquiryPage() {
  const { package: preset } = Route.useSearch();
  const s = useSubmitState();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    package_interest: preset ?? "",
    message: "",
  });

  const options = [
    ...GYM_PACKAGES.map((p) => `Gym — ${p.name}`),
    ...GROUP_CLASSES.map((c) => `Group Class — ${c.name}`),
    ...PT_PLANS.map((p) => `Personal Training — ${p.name}`),
  ];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    s.setError(null);
    s.setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("enquiries").insert({
      user_id: auth.user?.id ?? null,
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      package_interest: form.package_interest || null,
      message: form.message.trim() || null,
    });
    s.setLoading(false);
    if (error) s.setError("Could not send your enquiry. Please try again or call us.");
    else s.setDone(true);
  }

  return (
    <PageShell
      eyebrow="Enquiry"
      title="Get To Know Our Packages"
      intro="Fill this short form and our team will get back to you with the right plan, timings and pricing."
      image={IMAGES.floorWide}
    >
      {s.done ? (
        <SuccessCard title="Enquiry Received" message="Thank you! Our team at Fitsters Club Jhalawar will contact you shortly on the number you provided.">
          <Link to="/packages" className="btn-ghost">View Packages</Link>
          <Link to="/" className="btn-primary btn-primary-hover">Back Home <ChevronRight size={16} /></Link>
        </SuccessCard>
      ) : (
        <FormCard onSubmit={onSubmit}>
          <ErrorNote error={s.error} />
          <Field label="Full name">
            <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </Field>
          <Field label="Mobile number">
            <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile number" />
          </Field>
          <Field label="Email (optional)">
            <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </Field>
          <Field label="Interested in">
            <Select value={form.package_interest} onChange={(e) => setForm({ ...form, package_interest: e.target.value })}>
              <option value="">Not sure yet</option>
              {options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </Select>
          </Field>
          <Field label="Your message" hint="Tell us your fitness goal or preferred timing.">
            <TextArea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="I want to lose weight and train in the evening..." />
          </Field>
          <SubmitButton loading={s.loading}>Send Enquiry</SubmitButton>
        </FormCard>
      )}
    </PageShell>
  );
}