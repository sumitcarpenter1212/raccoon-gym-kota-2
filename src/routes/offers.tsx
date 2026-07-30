import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { OFFERS, IMAGES } from "@/data/site";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Latest Offers & Discounts — Fitsters Club Jhalawar" },
      { name: "description", content: "Running offers at Fitsters Club Jhalawar: 3+1 and 6+1 bonus month gym packages, free trial session and yoga combo deals." },
      { property: "og:title", content: "Latest Offers — Fitsters Club Jhalawar" },
      { property: "og:description", content: "Bonus months, free trial session and combo deals on gym membership." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  return (
    <PageShell
      eyebrow="Offers"
      title="Latest Offers"
      intro="Current deals running at Fitsters Club Jhalawar. Offers can change monthly — enquire to lock in today's rate."
      image={IMAGES.cardioTreadmills}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {OFFERS.map((o) => (
          <div key={o.title} className="rounded-3xl border border-white/10 bg-[#121212] p-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand)]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[color:var(--color-brand)]">
              <Flame size={13} /> {o.tag}
            </span>
            <h2 className="mt-4 font-display text-2xl uppercase text-white">{o.title}</h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--color-body)]">{o.desc}</p>
            <p className="mt-5 font-display text-3xl text-[color:var(--color-brand)]">{o.price}</p>
            <Link to="/enquiry" search={{ package: o.title }} className="btn-primary btn-primary-hover mt-6">
              Claim Offer <ChevronRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </PageShell>
  );
}