import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const base =
  "w-full rounded-xl border border-white/15 bg-[#121212] px-4 py-3 text-[15px] text-white placeholder:text-white/35 outline-none transition focus:border-[color:var(--color-brand)]";

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.15em] text-white/70">{label}</span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-white/45">{hint}</span>}
    </label>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${base} ${props.className ?? ""}`} />;
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${base} min-h-[120px] resize-y ${props.className ?? ""}`} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${base} ${props.className ?? ""}`} />;
}

export function SubmitButton({ loading, children }: { loading: boolean; children: React.ReactNode }) {
  return (
    <button type="submit" disabled={loading} className="btn-primary btn-primary-hover disabled:opacity-60">
      {loading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </button>
  );
}

export function SuccessCard({ title, message, children }: { title: string; message: string; children?: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-[color:var(--color-brand)]/40 bg-[#141210] p-8 text-center">
      <CheckCircle2 size={44} className="mx-auto text-[color:var(--color-brand)]" />
      <h2 className="mt-4 font-display text-2xl uppercase text-white">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-[1.6] text-[color:var(--color-body)]">{message}</p>
      {children && <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>}
    </div>
  );
}

export function FormCard({ children, onSubmit }: { children: React.ReactNode; onSubmit: (e: React.FormEvent) => void }) {
  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-2xl space-y-5 rounded-3xl border border-white/10 bg-[#121212] p-6 md:p-8"
    >
      {children}
    </form>
  );
}

export function useSubmitState() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  return { loading, setLoading, done, setDone, error, setError };
}

export function ErrorNote({ error }: { error: string | null }) {
  if (!error) return null;
  return (
    <p className="rounded-xl border border-[color:var(--color-destructive)]/40 bg-[color:var(--color-destructive)]/10 px-4 py-3 text-sm text-white">
      {error}
    </p>
  );
}