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
      intro="A look inside our floor — premium machines, spacious layout and the classes that keep members coming back."
      image={IMAGES.heroBranded}
    >
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {GALLERY.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Herculean Fitness Club Jhalawar facility photo ${i + 1}`}
            loading="lazy"
            className="w-full break-inside-avoid rounded-2xl border border-white/10 object-cover"
          />
        ))}
      </div>
    </PageShell>
  );
}