import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { TRAINERS, IMAGES } from "@/data/site";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Our Trainers — Herculean Fitness Club Jhalawar" },
      { name: "description", content: "Meet the coaching team at Herculean Fitness Club Jhalawar — experienced trainers guiding every member on the floor." },
      { property: "og:title", content: "Our Trainers — Herculean Fitness Club Jhalawar" },
      { property: "og:description", content: "Qualified, experienced trainers guiding every member on the floor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TrainersPage,
});

function TrainersPage() {
  return (
    <PageShell
      eyebrow="Our Team"
      title="Trainers & Qualifications"
      intro="Our trainers are on the floor every day to guide your form, plan and progress."
      image={IMAGES.ptSession}
    >
      {TRAINERS.length === 0 && (
        <p className="rounded-3xl border border-dashed border-white/15 bg-[#121212] p-8 text-center text-[15px] text-[color:var(--color-body)]">Our trainer profiles are being updated. Call us or send an enquiry to know who's on the floor for your goal.</p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {TRAINERS.map((t) => (
          <div key={t.name} className="overflow-hidden rounded-3xl border border-white/10 bg-[#121212]">
            <img src={t.img} alt={t.name} loading="lazy" decoding="async" className="h-72 w-full object-cover" />
            <div className="p-6">
              <h2 className="font-display text-2xl uppercase text-white">{t.name}</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-[color:var(--color-brand)]">{t.role}</p>
              <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--color-body)]">{t.bio}</p>
              <Link to="/book-pt" search={{ trainer: t.name }} className="btn-ghost mt-5 !px-4 !py-2 text-xs">
                Book with {t.name.split(" ")[0]} <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}