import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { IMAGES } from "@/data/site";
import { GALLERY_PHOTOS } from "@/data/photos";


export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — Atmos Fitness Kota Gym" },
      { name: "description", content: "Real photos of Atmos Fitness Kota — training floor, cardio zone, strength equipment, yoga and dance classes." },
      { property: "og:title", content: "Photo Gallery — Atmos Fitness Kota" },
      { property: "og:description", content: "Inside look at Kota's most spacious gym floor and facilities." },
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
      intro="Real photos from Atmos Fitness Kota — premium machines, a spacious floor, the cardio deck and Nutrihub Cafe at the entrance."
      image={IMAGES.heroBranded}
    >
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {GALLERY_PHOTOS.map((g, i) => (
          <figure key={i} className="break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#121212]">
            <img
              src={g.src}
              alt={`${g.caption} — Atmos Fitness Kota`}
              loading="lazy" decoding="async"
              className="w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-[13px] leading-[1.5] text-[color:var(--color-body)]">{g.caption}</figcaption>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
