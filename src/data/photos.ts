// Real photos of Atmos Fitness Kota (Google Business Profile), CDN-hosted.
import { assetUrl } from "@/lib/asset-url";
import a0 from "@/assets/atmos/atmos_0.jpg.asset.json";
import a1 from "@/assets/atmos/atmos_1.jpg.asset.json";
import a2 from "@/assets/atmos/atmos_2.jpg.asset.json";
import a3 from "@/assets/atmos/atmos_3.jpg.asset.json";
import a4 from "@/assets/atmos/atmos_4.jpg.asset.json";
import a5 from "@/assets/atmos/atmos_5.jpg.asset.json";
import a6 from "@/assets/atmos/atmos_6.jpg.asset.json";
import a7 from "@/assets/atmos/atmos_7.jpg.asset.json";
import a8 from "@/assets/atmos/atmos_8.jpg.asset.json";
import a9 from "@/assets/atmos/atmos_9.jpg.asset.json";
import a10 from "@/assets/atmos/atmos_10.jpg.asset.json";
import a11 from "@/assets/atmos/atmos_11.jpg.asset.json";
import a12 from "@/assets/atmos/atmos_12.jpg.asset.json";
import a13 from "@/assets/atmos/atmos_13.jpg.asset.json";
import a14 from "@/assets/atmos/atmos_14.jpg.asset.json";
import a15 from "@/assets/atmos/atmos_15.jpg.asset.json";
import a16 from "@/assets/atmos/atmos_16.jpg.asset.json";
import a17 from "@/assets/atmos/atmos_17.jpg.asset.json";
import a18 from "@/assets/atmos/atmos_18.jpg.asset.json";
import a19 from "@/assets/atmos/atmos_19.jpg.asset.json";

// Preserve important previous photo
import aExteriorPremium from "@/assets/gm/exterior-premium.jpg.asset.json";

export const PHOTOS = {
  hero: assetUrl(a16.url), // Large indoor wide shot
  exteriorFacade: assetUrl(a17.url),
  exteriorPremium: assetUrl(aExteriorPremium.url),
  strengthArea: assetUrl(a0.url),
  cardioZone: assetUrl(a1.url),
  functionalArea: assetUrl(a2.url),
  machines: assetUrl(a3.url),
  dumbbells: assetUrl(a4.url),
  reception: assetUrl(a5.url),
  entrance: assetUrl(a6.url),
  interior1: assetUrl(a7.url),
  interior2: assetUrl(a8.url),
  interior3: assetUrl(a9.url),
  interior4: assetUrl(a10.url),
  interior5: assetUrl(a11.url),
  interior6: assetUrl(a12.url),
  interior7: assetUrl(a13.url),
  interior8: assetUrl(a14.url),
  interior9: assetUrl(a15.url),
  interior10: assetUrl(a18.url),
  interior11: assetUrl(a19.url),
};

/** Ordered gallery — best / highest-impact shots first. */
export const GALLERY_PHOTOS: { src: string; caption: string }[] = [
  { src: PHOTOS.hero, caption: "Spacious training hall with premium equipment" },
  { src: PHOTOS.strengthArea, caption: "Professional strength training zone" },
  { src: PHOTOS.cardioZone, caption: "Modern cardio deck with variety of machines" },
  { src: PHOTOS.functionalArea, caption: "Functional and core training area" },
  { src: PHOTOS.machines, caption: "Advanced circuit training circuit" },
  { src: PHOTOS.dumbbells, caption: "Extensive free weight and dumbbell section" },
  { src: PHOTOS.reception, caption: "Welcoming reception and member lounge" },
  { src: PHOTOS.entrance, caption: "Grand entrance of Atmos Fitness Kota" },
  { src: PHOTOS.interior1, caption: "High-end fitness infrastructure" },
  { src: PHOTOS.interior2, caption: "Optimized space for group workouts" },
  { src: PHOTOS.interior3, caption: "Premium lifting platforms and racks" },
  { src: PHOTOS.interior4, caption: "Clean and well-maintained training floor" },
  { src: PHOTOS.interior5, caption: "Top-tier cardio equipment lineup" },
  { src: PHOTOS.interior6, caption: "Dynamic lighting and professional atmosphere" },
  { src: PHOTOS.exteriorFacade, caption: "Atmos Fitness Kota - Exterior View" },
  { src: PHOTOS.interior7, caption: "Advanced strength building stations" },
  { src: PHOTOS.interior8, caption: "Dedicated space for personal training" },
  { src: PHOTOS.interior9, caption: "Member lockers and premium amenities" },
  { src: PHOTOS.interior10, caption: "Expertly designed workout zones" },
  { src: PHOTOS.interior11, caption: "Experience the elite fitness community" },
];
