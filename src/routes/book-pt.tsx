import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Field, Input, TextArea, Select, FormCard, SubmitButton, SuccessCard, ErrorNote, useSubmitState } from "@/components/site/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { TRAINERS, PT_PLANS, IMAGES } from "@/data/site";

export const Route = createFileRoute("/book-pt")({
  validateSearch: (search: Record<string, unknown>) => ({
    trainer: typeof search.trainer === "string" ? search.trainer : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book A Personal Training Session — Herculean Fitness Club Jhalawar" },
      { name: "description", content: "Book one-on-one personal training at Herculean Fitness Club Jhalawar. Choose your trainer, plan and preferred slot." },
      { property: "og:title", content: "Book Personal Training — Herculean Fitness Club Jhalawar" },
      { property: "og:description", content: "One-on-one coaching with a dedicated trainer and a plan built for your goal." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPtPage,
});

const SLOTS = ["06:00 AM", "07:00 AM", "08:00 AM", "10:00 AM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"];

function BookPtPage() {
  const { trainer: presetTrainer } = Route.useSearch();
  const s = useSubmitState();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    trainer: presetTrainer ?? "",
    plan: PT_PLANS[0]?.name ?? "",
    goal: "",
    preferred_date: "",
    preferred_time: SLOTS[0],
    notes: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    s.setError(null);
    s.setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("pt_bookings").insert({
      user_id: auth.user?.id ?? null,
      name: form.name.trim(),
      phone: form.phone.trim(),
      trainer: form.trainer || null,
      plan: form.plan || null,
      goal: form.goal.trim() || null,
      preferred_date: form.preferred_date || null,
      preferred_time: form.preferred_time || null,
      notes: form.notes.trim() || null,
    });
    s.setLoading(false);
    if (error) s.setError("Could not book your session. Please try again or call us.");
    else s.setDone(true);
  }

  return (
    <PageShell
      eyebrow="Personal Training"
      title="Book A PT Session"
      intro="One-on-one coaching with a dedicated trainer, a structured plan and full form correction."
      image={IMAGES.ptSession}
    >
      {s.done ? (
        <SuccessCard title="PT Request Sent" message="Your personal training request has been received. Your trainer will confirm the slot with you shortly.">
          <Link to="/trainers" className="btn-ghost">Meet The Trainers</Link>
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
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Preferred trainer">
              <Select value={form.trainer} onChange={(e) => setForm({ ...form, trainer: e.target.value })}>
                <option value="">Any available trainer</option>
                {TRAINERS.map((t) => (
                  <option key={t.name} value={t.name}>{t.name}</option>
                ))}
              </Select>
            </Field>
            <Field label="PT plan">
              <Select value={form.plan} onChange={(e) => setForm({ ...form, plan: e.target.value })}>
                {PT_PLANS.map((p) => (
                  <option key={p.name} value={p.name}>{p.name} — {p.price}</option>
                ))}
              </Select>
            </Field>
          </div>
          <Field label="Your goal">
            <Input value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} placeholder="Fat loss, muscle gain, strength, rehab..." />
          </Field>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Preferred date">
              <Input type="date" value={form.preferred_date} onChange={(e) => setForm({ ...form, preferred_date: e.target.value })} />
            </Field>
            <Field label="Preferred time">
              <Select value={form.preferred_time} onChange={(e) => setForm({ ...form, preferred_time: e.target.value })}>
                {SLOTS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </Select>
            </Field>
          </div>
          <Field label="Notes (optional)">
            <TextArea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Injuries, medical conditions or anything your trainer should know" />
          </Field>
          <SubmitButton loading={s.loading}>Request PT Session</SubmitButton>
        </FormCard>
      )}
    </PageShell>
  );
}