import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Field, Input, FormCard, SubmitButton, SuccessCard, ErrorNote, useSubmitState } from "@/components/site/FormKit";
import { supabase } from "@/integrations/supabase/client";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/par-q")({
  head: () => ({
    meta: [
      { title: "PAR-Q Form — Atmos Fitness Kota" },
      { name: "description", content: "Complete the Physical Activity Readiness Questionnaire (PAR-Q) online before starting training at Atmos Fitness Kota." },
      { property: "og:title", content: "PAR-Q Form — Atmos Fitness Kota" },
      { property: "og:description", content: "A short health-readiness questionnaire required before your first session." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ParqPage,
});

const QUESTIONS = [
  "Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?",
  "Do you feel pain in your chest when you do physical activity?",
  "In the past month, have you had chest pain when you were not doing physical activity?",
  "Do you lose your balance because of dizziness or do you ever lose consciousness?",
  "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
  "Is your doctor currently prescribing drugs for your blood pressure or heart condition?",
  "Do you know of any other reason why you should not do physical activity?",
];

function ParqPage() {
  const s = useSubmitState();
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({ name: "", phone: "", date_of_birth: "", signature: "", declaration: false });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    s.setError(null);
    s.setLoading(true);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("parq_forms").insert({
      user_id: auth.user?.id ?? null,
      name: form.name.trim(),
      phone: form.phone.trim(),
      date_of_birth: form.date_of_birth || null,
      signature: form.signature.trim() || null,
      declaration: form.declaration,
      answers: QUESTIONS.map((q, i) => ({ question: q, answer: answers[i] ? "Yes" : "No" })),
    });
    s.setLoading(false);
    if (error) s.setError("Could not submit the PAR-Q form. Please try again.");
    else s.setDone(true);
  }

  return (
    <PageShell
      eyebrow="PAR-Q"
      title="Physical Activity Readiness Questionnaire"
      intro="Please answer honestly. If you answer Yes to any question, talk to your doctor before starting an exercise programme."
      image={IMAGES.floorMachines}
    >
      {s.done ? (
        <SuccessCard title="PAR-Q Submitted" message="Thank you. Your readiness questionnaire has been recorded and shared with our training team.">
          <Link to="/" className="btn-primary btn-primary-hover">Back Home <ChevronRight size={16} /></Link>
        </SuccessCard>
      ) : (
        <FormCard onSubmit={onSubmit}>
          <ErrorNote error={s.error} />
          <Field label="Full name">
            <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </Field>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Mobile number">
              <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </Field>
            <Field label="Date of birth">
              <Input type="date" value={form.date_of_birth} onChange={(e) => setForm({ ...form, date_of_birth: e.target.value })} />
            </Field>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/10 p-4">
            {QUESTIONS.map((q, i) => (
              <div key={i} className="flex items-start justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <p className="text-sm leading-[1.55] text-[color:var(--color-body)]">{i + 1}. {q}</p>
                <div className="flex shrink-0 gap-1">
                  {[true, false].map((v) => (
                    <button
                      key={String(v)}
                      type="button"
                      onClick={() => setAnswers({ ...answers, [i]: v })}
                      className={`rounded-lg px-3 py-1.5 text-xs font-bold uppercase ${
                        answers[i] === v
                          ? "bg-[color:var(--color-brand)] text-black"
                          : "border border-white/15 text-white/60"
                      }`}
                    >
                      {v ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Field label="Signature (type your full name)">
            <Input required value={form.signature} onChange={(e) => setForm({ ...form, signature: e.target.value })} placeholder="Type your full name" />
          </Field>
          <label className="flex items-start gap-3 text-sm text-[color:var(--color-body)]">
            <input
              type="checkbox"
              required
              checked={form.declaration}
              onChange={(e) => setForm({ ...form, declaration: e.target.checked })}
              className="mt-1 h-4 w-4 accent-[color:var(--color-brand)]"
            />
            I declare that the information above is true and complete to the best of my knowledge.
          </label>
          <SubmitButton loading={s.loading}>Submit PAR-Q</SubmitButton>
        </FormCard>
      )}
    </PageShell>
  );
}