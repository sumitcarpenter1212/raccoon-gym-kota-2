import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Field, Input, FormCard, SubmitButton, SuccessCard, ErrorNote, useSubmitState } from "@/components/site/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/trial-waiver")({
  head: () => ({
    meta: [
      { title: "Trial Waiver & Release Form — Atmos Fitness Kota" },
      { name: "description", content: "Sign the trial waiver and release form online to book your free trial session at Atmos Fitness Kota." },
      { property: "og:title", content: "Trial Waiver — Atmos Fitness Kota" },
      { property: "og:description", content: "Complete the release form and claim your free trial session." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrialWaiverPage,
});

const WAIVER = [
  "I understand that a trial session involves physical exertion and carries an inherent risk of injury.",
  "I confirm that I am medically fit to take part and have disclosed any condition that may affect my safety.",
  "I take full responsibility for my own health and safety during the trial session.",
  "I release Atmos Fitness Kota, its owners, trainers and staff from liability for injury or loss arising from my participation, except in the case of proven negligence.",
  "I agree to follow all instructions given by the trainers and all club rules while on the premises.",
  "I understand that the trial session is a one-time complimentary session and does not include membership benefits.",
];

function TrialWaiverPage() {
  const s = useSubmitState();
  const [form, setForm] = useState({ name: "", phone: "", age: "", emergency_contact: "", trial_date: "", signature: "", agreed: false });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    s.setError(null);
    s.setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("trial_waivers").insert({
      user_id: auth.user?.id ?? null,
      name: form.name.trim(),
      phone: form.phone.trim(),
      age: form.age ? Number(form.age) : null,
      emergency_contact: form.emergency_contact.trim() || null,
      trial_date: form.trial_date || null,
      signature: form.signature.trim(),
      agreed: form.agreed,
    });
    s.setLoading(false);
    if (error) s.setError("Could not submit the waiver. Please try again.");
    else s.setDone(true);
  }

  return (
    <PageShell
      eyebrow="Trial Waiver"
      title="Trial Waiver & Release Form"
      intro="Complete this short release form to book your complimentary trial session on our floor."
      image={IMAGES.cardioWindow}
    >
      <div className="mx-auto mb-8 max-w-2xl rounded-3xl border border-white/10 bg-[#121212] p-6 md:p-8">
        <h2 className="font-display text-xl uppercase text-white">Release Of Liability</h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-[1.65] text-[color:var(--color-body)]">
          {WAIVER.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      {s.done ? (
        <SuccessCard title="Waiver Signed" message="Your trial waiver has been recorded. Come in on your chosen date and our team will take it from there.">
          <Link to="/offers" className="btn-ghost">See Offers</Link>
          <Link to="/" className="btn-primary btn-primary-hover">Back Home <ChevronRight size={16} /></Link>
        </SuccessCard>
      ) : (
        <FormCard onSubmit={onSubmit}>
          <ErrorNote error={s.error} />
          <Field label="Full name">
            <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </Field>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Mobile number">
              <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </Field>
            <Field label="Age">
              <Input type="number" min={10} max={100} value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Emergency contact">
              <Input value={form.emergency_contact} onChange={(e) => setForm({ ...form, emergency_contact: e.target.value })} placeholder="Name & number" />
            </Field>
            <Field label="Trial date">
              <Input type="date" value={form.trial_date} onChange={(e) => setForm({ ...form, trial_date: e.target.value })} />
            </Field>
          </div>
          <Field label="Signature (type your full name)">
            <Input required value={form.signature} onChange={(e) => setForm({ ...form, signature: e.target.value })} />
          </Field>
          <label className="flex items-start gap-3 text-sm text-[color:var(--color-body)]">
            <input
              type="checkbox"
              required
              checked={form.agreed}
              onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
              className="mt-1 h-4 w-4 accent-[color:var(--color-brand)]"
            />
            I have read and accept the waiver and release terms above.
          </label>
          <SubmitButton loading={s.loading}>Submit Waiver</SubmitButton>
        </FormCard>
      )}
    </PageShell>
  );
}