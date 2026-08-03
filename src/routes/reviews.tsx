import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { TESTIMONIALS, IMAGES } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Member Reviews — Herculean Fitness Club Jhalawar" },
      { name: "description", content: "Read genuine member reviews about the equipment, trainers and ambience at Herculean Fitness Club Jhalawar." },
      { property: "og:title", content: "Member Reviews — Herculean Fitness Club Jhalawar" },
      { property: "og:description", content: "What members say about Jhalawar's most spacious fitness club." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <PageShell
      eyebrow="Reviews"
      title="What Our Members Say"
      intro="Genuine reviews from members of Herculean Fitness Club Jhalawar."
      image={IMAGES.floorOpen}
    >
      <div className="mx-auto mb-10 flex max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-[#121212] p-6 text-center">
        <p className="font-display text-5xl text-[color:var(--color-brand)]">5.0</p>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} className="fill-[color:var(--color-brand)] text-[color:var(--color-brand)]" />
          ))}
        </div>
        <p className="mt-2 text-sm text-[color:var(--color-body)]">Average member rating</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="rounded-3xl border border-white/10 bg-[#121212] p-6">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={15} className="fill-[color:var(--color-brand)] text-[color:var(--color-brand)]" />
              ))}
            </div>
            <p className="mt-4 text-[15px] leading-[1.7] text-[color:var(--color-body)]">“{t.quote}”</p>
            <p className="mt-5 font-display text-lg uppercase text-white">{t.name}</p>
            <p className="text-xs uppercase tracking-widest text-white/45">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/feedback" className="btn-primary btn-primary-hover">
          Share Your Feedback <ChevronRight size={16} />
        </Link>
      </div>
    </PageShell>
  );
}