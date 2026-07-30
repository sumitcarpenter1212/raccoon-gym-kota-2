import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Field, Input, Select, FormCard, SubmitButton, SuccessCard, ErrorNote, useSubmitState } from "@/components/site/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { PT_PLANS, IMAGES, PHONE_DISPLAY } from "@/data/site";

export const Route = createFileRoute("/pt-contract")({
  head: () => ({
    meta: [
      { title: "Personal Training Contract — Fitsters Club Jhalawar" },
      { name: "description", content: "Read and sign the personal training agreement of Fitsters Club Jhalawar online — sessions, validity, cancellation and conduct terms." },
      { property: "og:title", content: "PT Contract — Fitsters Club Jhalawar" },
      { property: "og:description", content: "Sign your personal training agreement digitally." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PtContractPage,
});

const TERMS = [
  "Personal training sessions are non-transferable and valid only for the package duration purchased.",
  "Sessions must be cancelled at least 4 hours in advance, otherwise the session is treated as consumed.",
  "Arriving late reduces the session time; the session still ends at the scheduled time.",
  "Fees once paid are non-refundable. Packages may be paused only for medical reasons with proof.",
  "The client confirms they have completed the PAR-Q and disclosed all medical conditions and injuries.",
  "The client trains at their own risk and follows the trainer's instructions on form, load and technique.",
  "Fitsters Club Jhalawar is not liable for personal belongings or for injury caused by ignoring trainer guidance.",
  "Club rules on timing, dress code, hygiene and equipment handling apply at all times.",
];

function PtContractPage() {
  const s = useSubmitState();
  const [form, setForm] = useState({ name: "", phone: "", plan: PT_PLANS[0]?.name ?? "", sessions: "", start_date: "", signature: "", agreed: false });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    s.setError(null);
    s.setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("pt_contracts").insert({
      user_id: auth.user?.id ?? null,
      name: form.name.trim(),
      phone: form.phone.trim(),
      plan: form.plan || null,
      sessions: form.sessions.trim() || null,
      start_date: form.start_date || null,
      signature: form.signature.trim(),
      agreed: form.agreed,
    });
    s.setLoading(false);
    if (error) s.setError("Could not submit the contract. Please try again.");
    else s.setDone(true);
  }

  return (
    <PageShell
      eyebrow="PT Contract"
      title="Personal Training Agreement"
      intro={`Please read the terms below carefully before signing. For any clarification call us on ${PHONE_DISPLAY}.`}
      image={IMAGES.dumbbells}
    >
      <div className="mx-auto mb-8 max-w-2xl rounded-3xl border border-white/10 bg-[#121212] p-6 md:p-8">
        <h2 className="font-display text-xl uppercase text-white">Terms & Conditions</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-[1.65] text-[color:var(--color-body)]">
          {TERMS.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ol>
        <p className="mt-5 text-xs text-white/45">Queries: {PHONE_DISPLAY}</p>
      </div>

      {s.done ? (
        <SuccessCard title="Contract Signed" message="Your signed personal training agreement has been recorded. Our team will reach out to schedule your first session.">
          <Link to="/book-pt" className="btn-ghost">Book A Session</Link>
          <Link to="/" className="btn-primary btn-primary-hover">Back Home <ChevronRight size={16} /></Link>
        </SuccessCard>
      ) : (
        <FormCard onSubmit={onSubmit}>
          <ErrorNote error={s.error} />
          <Field label="Full name">
            <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </Field>
          <Field label="Mobile number">
            <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </Field>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="PT plan">
              <Select value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })}>
                {PT_PLANS.map((p) => (
                  <option key={p.name} value={p.name}>{p.name} — {p.price}</option>
                ))}
              </Select>
            </Field>
            <Field label="Number of sessions">
              <Input value={form.sessions} onChange={(e) => setForm({ ...form, sessions: e.target.value })} placeholder="e.g. 12 sessions" />
            </Field>
          </div>
          <Field label="Start date">
            <Input type="date" value={form.start_date} onChange={(e) => setForm({ ...form, start_date: e.target.value })} />
          </Field>
          <Field label="Signature (type your full name)">
            <Input required value={form.signature} onChange={(e) => setForm({ ...form, signature: e.target.value })} placeholder="Type your full name" />
          </Field>
          <label className="flex items-start gap-3 text-sm text-[color:var(--color-body)]">
            <input
              type="checkbox"
              required
              checked={form.agreed}
              onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
              className="mt-1 h-4 w-4 accent-[color:var(--color-brand)]"
            />
            I have read, understood and agree to all the terms of this personal training agreement.
          </label>
          <SubmitButton loading={s.loading}>Sign Contract</SubmitButton>
        </FormCard>
      )}
    </PageShell>
  );
}