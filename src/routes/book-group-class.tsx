import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Field, Input, TextArea, Select, FormCard, SubmitButton, SuccessCard, ErrorNote, useSubmitState } from "@/components/site/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { GROUP_CLASSES, IMAGES } from "@/data/site";

export const Route = createFileRoute("/book-group-class")({
  head: () => ({
    meta: [
      { title: "Book A Group Class — Fitsters Club Jhalawar" },
      { name: "description", content: "Reserve your spot in yoga, dance fitness or functional group classes at Fitsters Club Jhalawar." },
      { property: "og:title", content: "Book A Group Class — Fitsters Club Jhalawar" },
      { property: "og:description", content: "Pick a class, date and time slot and we'll confirm your seat." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookGroupClassPage,
});

const SLOTS = ["06:00 AM", "07:00 AM", "08:00 AM", "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"];

function BookGroupClassPage() {
  const s = useSubmitState();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    class_name: GROUP_CLASSES[0]?.name ?? "Yoga",
    preferred_date: "",
    preferred_time: SLOTS[0],
    notes: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    s.setError(null);
    s.setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("class_bookings").insert({
      user_id: auth.user?.id ?? null,
      name: form.name.trim(),
      phone: form.phone.trim(),
      class_name: form.class_name,
      preferred_date: form.preferred_date,
      preferred_time: form.preferred_time,
      notes: form.notes.trim() || null,
    });
    s.setLoading(false);
    if (error) s.setError("Could not book the class. Please try again or call us.");
    else s.setDone(true);
  }

  return (
    <PageShell
      eyebrow="Group Class"
      title="Book A Group Class Session"
      intro="Yoga, dance fitness and functional group sessions. Choose your class and slot — we'll confirm on call."
      image={IMAGES.yogaClass}
    >
      {s.done ? (
        <SuccessCard title="Booking Requested" message="Your group class request is with our team. We'll confirm your slot shortly.">
          <Link to="/packages" className="btn-ghost">View Class Fees</Link>
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
          <Field label="Class">
            <Select value={form.class_name} onChange={(e) => setForm({ ...form, class_name: e.target.value })}>
              {GROUP_CLASSES.map((c) => (
                <option key={c.name} value={c.name}>{c.name}</option>
              ))}
              <option value="Functional Training">Functional Training</option>
            </Select>
          </Field>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Preferred date">
              <Input required type="date" value={form.preferred_date} onChange={(e) => setForm({ ...form, preferred_date: e.target.value })} />
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
            <TextArea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any injury, experience level or special request" />
          </Field>
          <SubmitButton loading={s.loading}>Request Booking</SubmitButton>
        </FormCard>
      )}
    </PageShell>
  );
}