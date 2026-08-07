import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Star, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Field, Input, TextArea, FormCard, SubmitButton, SuccessCard, ErrorNote, useSubmitState } from "@/components/site/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Feedback — Atmos Fitness Kota" },
      { name: "description", content: "Share your genuine suggestions with Atmos Fitness Kota so we can keep improving equipment, classes and service." },
      { property: "og:title", content: "Feedback — Atmos Fitness Kota" },
      { property: "og:description", content: "Rate your experience and tell us how we can improve." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  const s = useSubmitState();
  const [rating, setRating] = useState(5);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    s.setError(null);
    s.setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("feedback").insert({
      user_id: auth.user?.id ?? null,
      name: form.name.trim(),
      phone: form.phone.trim() || null,
      rating,
      message: form.message.trim(),
    });
    s.setLoading(false);
    if (error) s.setError("Could not submit feedback. Please try again.");
    else s.setDone(true);
  }

  return (
    <PageShell
      eyebrow="Feedback"
      title="Give Us Your Suggestions"
      intro="Your honest feedback helps us improve the floor, the classes and the service."
      image={IMAGES.floorOpen}
    >
      {s.done ? (
        <SuccessCard title="Thank You" message="Your feedback has been recorded. We genuinely read every suggestion.">
          <Link to="/" className="btn-primary btn-primary-hover">Back Home <ChevronRight size={16} /></Link>
        </SuccessCard>
      ) : (
        <FormCard onSubmit={onSubmit}>
          <ErrorNote error={s.error} />
          <Field label="Your rating">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" onClick={() => setRating(n)} aria-label={`${n} star`}>
                  <Star
                    size={30}
                    className={n <= rating ? "fill-[color:var(--color-brand)] text-[color:var(--color-brand)]" : "text-white/25"}
                  />
                </button>
              ))}
            </div>
          </Field>
          <Field label="Full name">
            <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </Field>
          <Field label="Mobile number (optional)">
            <Input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="10-digit mobile number" />
          </Field>
          <Field label="Your suggestions">
            <TextArea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What did you like, and what can we do better?" />
          </Field>
          <SubmitButton loading={s.loading}>Submit Feedback</SubmitButton>
        </FormCard>
      )}
    </PageShell>
  );
}