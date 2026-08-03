import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GALLERY, IMAGES } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Herculean Fitness Club Jhalawar Gym" },
      { name: "description", content: "Real photos of Herculean Fitness Club Jhalawar — training floor, cardio zone, strength equipment, yoga and dance classes." },
      { property: "og:title", content: "Photo Gallery — Herculean Fitness Club Jhalawar" },
      { property: "og:description", content: "Inside look at Jhalawar's most spacious gym floor and facilities." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <PageShell
      eyebrow="Photo Gallery"
      title="Our Facilities"
      intro="Real photos from Herculean Fitness Club Jhalawar — premium machines, a spacious floor, the cardio deck and Nutrihub Cafe at the entrance."
      image={IMAGES.heroBranded}
    >
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {GALLERY_PHOTOS.map((g, i) => (
          <figure key={i} className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
            <img
              src={g.src}
              alt={`${g.caption} — Herculean Fitness Club Jhalawar`}
              loading="lazy"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[13px] leading-[1.5] text-[color:var(--color-body)]">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
