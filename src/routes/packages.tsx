import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { GYM_PACKAGES, GROUP_CLASSES, PT_PLANS, IMAGES } from "@/data/site";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Membership Packages & Fees — Herculean Fitness Club Jhalawar" },
      { name: "description", content: "Gym membership from Rs.1,800/month, yoga & dance classes from Rs.1,000 and personal training from Rs.7,000 at Herculean Fitness Club Jhalawar." },
      { property: "og:title", content: "Membership Packages — Herculean Fitness Club Jhalawar" },
      { property: "og:description", content: "Gym, group class and personal training packages with transparent pricing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <PageShell
      eyebrow="Packages"
      title="Find A Package That Suits You"
      intro="Transparent pricing, no hidden charges. Pick a plan and enquire online — our team will confirm everything for you."
      image={IMAGES.floorMachines}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {GYM_PACKAGES.map((p) => (
          <div
            key={p.n}
            className={`relative flex flex-col rounded-3xl border p-6 ${
              p.popular ? "border-[color:var(--color-brand)] bg-[#161310]" : "border-white/10 bg-[#121212]"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-6 rounded-full bg-[color:var(--color-brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                Most Popular
              </span>
            )}
            <p className="text-xs uppercase tracking-[0.25em] text-white/45">{p.cat}</p>
            <h2 className="mt-2 font-display text-2xl uppercase text-white">{p.name}</h2>
            <p className="mt-3 font-display text-3xl text-[color:var(--color-brand)]">
              {p.price}
              <span className="ml-1 text-sm text-white/50">{p.period}</span>
            </p>
            <ul className="mt-5 flex-1 space-y-2 text-sm text-[color:var(--color-body)]">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <Check size={16} className="mt-0.5 shrink-0 text-[color:var(--color-brand)]" /> {f}
                </li>
              ))}
            </ul>
            <Link to="/enquiry" search={{ package: `Gym — ${p.name}` }} className="btn-primary btn-primary-hover mt-6 w-full">
              Enquire <ChevronRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#121212] p-7">
          <h2 className="font-display text-2xl uppercase text-white">Group Classes</h2>
          <div className="mt-5 space-y-4">
            {GROUP_CLASSES.map((c) => (
              <div key={c.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 p-4">
                <div>
                  <p className="font-display text-lg uppercase text-white">{c.name}</p>
                  <p className="text-sm text-[color:var(--color-body)]">{c.desc}</p>
                </div>
                <p className="shrink-0 font-display text-xl text-[color:var(--color-brand)]">
                  {c.price}
                  <span className="ml-1 text-xs text-white/50">{c.period}</span>
                </p>
              </div>
            ))}
          </div>
          <Link to="/book-group-class" className="btn-primary btn-primary-hover mt-6">
            Book Group Class <ChevronRight size={16} />
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#121212] p-7">
          <h2 className="font-display text-2xl uppercase text-white">Personal Training</h2>
          <div className="mt-5 space-y-4">
            {PT_PLANS.map((c) => (
              <div key={c.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 p-4">
                <div>
                  <p className="font-display text-lg uppercase text-white">{c.name}</p>
                  <p className="text-sm text-[color:var(--color-body)]">{c.desc}</p>
                </div>
                <p className="shrink-0 font-display text-xl text-[color:var(--color-brand)]">
                  {c.price}
                  <span className="ml-1 text-xs text-white/50">{c.period}</span>
                </p>
              </div>
            ))}
          </div>
          <Link to="/book-pt" className="btn-primary btn-primary-hover mt-6">
            Book PT Session <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </PageShell>
  );
}