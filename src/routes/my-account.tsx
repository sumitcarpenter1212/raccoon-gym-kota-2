import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LogOut, Loader2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { supabase } from "@/integrations/supabase/client";
import { IMAGES } from "@/data/site";

export const Route = createFileRoute("/my-account")({
  head: () => ({
    meta: [
      { title: "My Account — Fitsters Club Jhalawar" },
      { name: "description", content: "View your Fitsters Club Jhalawar bookings, enquiries, feedback and signed forms in one member dashboard." },
      { property: "og:title", content: "My Account — Fitsters Club Jhalawar" },
      { property: "og:description", content: "Your bookings and submitted forms in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MyAccountPage,
});

type Row = Record<string, unknown> & { id: string; created_at: string };

function MyAccountPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [data, setData] = useState<{ label: string; rows: Row[]; fields: string[] }[]>([]);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        navigate({ to: "/login" });
        return;
      }
      setEmail(sess.session.user.email ?? "");
      const [enq, cls, pt, fb, parq, ptc, tw] = await Promise.all([
        supabase.from("enquiries").select("*").order("created_at", { ascending: false }),
        supabase.from("class_bookings").select("*").order("created_at", { ascending: false }),
        supabase.from("pt_bookings").select("*").order("created_at", { ascending: false }),
        supabase.from("feedback").select("*").order("created_at", { ascending: false }),
        supabase.from("parq_forms").select("*").order("created_at", { ascending: false }),
        supabase.from("pt_contracts").select("*").order("created_at", { ascending: false }),
        supabase.from("trial_waivers").select("*").order("created_at", { ascending: false }),
      ]);
      if (!active) return;
      setData([
        { label: "Enquiries", rows: (enq.data ?? []) as Row[], fields: ["package_interest", "message"] },
        { label: "Group Class Bookings", rows: (cls.data ?? []) as Row[], fields: ["class_type", "preferred_date", "preferred_time", "status"] },
        { label: "PT Bookings", rows: (pt.data ?? []) as Row[], fields: ["trainer", "plan", "preferred_date", "preferred_time", "status"] },
        { label: "Feedback", rows: (fb.data ?? []) as Row[], fields: ["rating", "message"] },
        { label: "PAR-Q Forms", rows: (parq.data ?? []) as Row[], fields: ["date_of_birth", "signature"] },
        { label: "PT Contracts", rows: (ptc.data ?? []) as Row[], fields: ["plan", "sessions", "start_date"] },
        { label: "Trial Waivers", rows: (tw.data ?? []) as Row[], fields: ["trial_date", "emergency_contact"] },
      ]);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [navigate]);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/" });
  }

  return (
    <PageShell eyebrow="Client Area" title="My Account" intro={email ? `Signed in as ${email}` : undefined} image={IMAGES.floorMachines}>
      {loading ? (
        <div className="flex justify-center py-16">
          <Loader2 className="animate-spin text-[color:var(--color-brand)]" size={30} />
        </div>
      ) : (
        <>
          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Link to="/book-group-class" className="btn-ghost">Book Class</Link>
            <Link to="/book-pt" className="btn-ghost">Book PT</Link>
            <Link to="/packages" className="btn-ghost">Packages</Link>
            <button onClick={signOut} className="btn-primary btn-primary-hover">
              <LogOut size={16} /> Log Out
            </button>
          </div>

          <div className="space-y-6">
            {data.map((section) => (
              <div key={section.label} className="rounded-3xl border border-white/10 bg-[#121212] p-6">
                <h2 className="font-display text-xl uppercase text-white">{section.label}</h2>
                {section.rows.length === 0 ? (
                  <p className="mt-3 text-sm text-white/45">Nothing here yet.</p>
                ) : (
                  <div className="mt-4 space-y-3">
                    {section.rows.map((r) => (
                      <div key={r.id} className="rounded-2xl border border-white/10 p-4 text-sm text-[color:var(--color-body)]">
                        <p className="mb-1 text-xs uppercase tracking-widest text-white/40">
                          {new Date(r.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </p>
                        {section.fields
                          .filter((f) => r[f] !== null && r[f] !== undefined && r[f] !== "")
                          .map((f) => (
                            <p key={f}>
                              <span className="text-white/50">{f.replace(/_/g, " ")}: </span>
                              {String(r[f])}
                            </p>
                          ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </PageShell>
  );
}