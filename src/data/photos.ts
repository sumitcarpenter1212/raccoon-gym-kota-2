// Real photos of Atmos Fitness Kota (Google Business Profile), CDN-hosted.
import { assetUrl } from "@/lib/asset-url";
import aBenchRack from "@/assets/gm/bench-rack.jpg.asset.json";
import aCardioOpen from "@/assets/gm/cardio-open.jpg.asset.json";
import aCardioZone from "@/assets/gm/cardio-zone.jpg.asset.json";
import aDumbbellRacks from "@/assets/gm/dumbbell-racks.jpg.asset.json";
import aExteriorBuilding from "@/assets/gm/exterior-building.jpg.asset.json";
import aExteriorCafe from "@/assets/gm/exterior-cafe.jpg.asset.json";
import aExteriorFacade from "@/assets/gm/exterior-facade.jpg.asset.json";
import aExteriorSign from "@/assets/gm/exterior-sign.jpg.asset.json";
import aExteriorSign2 from "@/assets/gm/exterior-sign-2.jpg.asset.json";
import aExteriorPremium from "@/assets/gm/exterior-premium.jpg.asset.json";
import aFloorLogoWide from "@/assets/gm/floor-logo-wide.jpg.asset.json";
import aFloorWide from "@/assets/gm/floor-wide.jpg.asset.json";
import aFunctionalArea from "@/assets/gm/functional-area.jpg.asset.json";
import aHero from "@/assets/gm/hero-hf-logo.jpg.asset.json";
import aLegPress from "@/assets/gm/leg-press.jpg.asset.json";
import aMachinesWood from "@/assets/gm/machines-wood.jpg.asset.json";
import aPlateLoaded from "@/assets/gm/plate-loaded.jpg.asset.json";
import aSquatRacks from "@/assets/gm/squat-racks.jpg.asset.json";
import aStrengthArea from "@/assets/gm/strength-area.jpg.asset.json";
import aStrengthMachines from "@/assets/gm/strength-machines.jpg.asset.json";
import aStudioRoom from "@/assets/gm/studio-room.jpg.asset.json";
import aTreadmills from "@/assets/gm/treadmills.jpg.asset.json";

export const PHOTOS = {
  hero: assetUrl(aHero.url),
  floorLogoWide: assetUrl(aFloorLogoWide.url),
  floorWide: assetUrl(aFloorWide.url),
  strengthMachines: assetUrl(aStrengthMachines.url),
  strengthArea: assetUrl(aStrengthArea.url),
  plateLoaded: assetUrl(aPlateLoaded.url),
  squatRacks: assetUrl(aSquatRacks.url),
  benchRack: assetUrl(aBenchRack.url),
  dumbbellRacks: assetUrl(aDumbbellRacks.url),
  legPress: assetUrl(aLegPress.url),
  machinesWood: assetUrl(aMachinesWood.url),
  functionalArea: assetUrl(aFunctionalArea.url),
  cardioZone: assetUrl(aCardioZone.url),
  cardioOpen: assetUrl(aCardioOpen.url),
  treadmills: assetUrl(aTreadmills.url),
  studioRoom: assetUrl(aStudioRoom.url),
  exteriorSign: assetUrl(aExteriorSign.url),
  exteriorSign2: assetUrl(aExteriorSign2.url),
  exteriorBuilding: assetUrl(aExteriorBuilding.url),
  exteriorCafe: assetUrl(aExteriorCafe.url),
  exteriorFacade: assetUrl(aExteriorFacade.url),
  exteriorPremium: assetUrl(aExteriorPremium.url),
};

/** Ordered gallery — best / highest-impact shots first. */
export const GALLERY_PHOTOS: { src: string; caption: string }[] = [
  { src: PHOTOS.hero, caption: "The HFC training floor under the signature ceiling logo" },
  { src: PHOTOS.cardioZone, caption: "Cardio zone with treadmills, cycles and window views" },
  { src: PHOTOS.dumbbellRacks, caption: "Full dumbbell racks and free-weight zone" },
  { src: PHOTOS.floorLogoWide, caption: "Wide view of the strength floor" },
  { src: PHOTOS.strengthMachines, caption: "Premium plate-loaded strength machines" },
  { src: PHOTOS.treadmills, caption: "Treadmill row on the cardio deck" },
  { src: PHOTOS.machinesWood, caption: "Selectorised machine circuit" },
  { src: PHOTOS.strengthArea, caption: "Racks, benches and pressing stations" },
  { src: PHOTOS.legPress, caption: "Leg press and lower-body equipment" },
  { src: PHOTOS.squatRacks, caption: "Squat racks and Olympic plate storage" },
  { src: PHOTOS.functionalArea, caption: "Functional training and cable area" },
  { src: PHOTOS.plateLoaded, caption: "Hammer-style plate-loaded stations" },
  { src: PHOTOS.benchRack, caption: "Bench press and rack setup" },
  { src: PHOTOS.floorWide, caption: "Spacious wooden-floor training hall" },
  { src: PHOTOS.cardioOpen, caption: "Open cardio and stretching space" },
  { src: PHOTOS.studioRoom, caption: "Dedicated studio room for group classes" },
  { src: PHOTOS.exteriorSign, caption: "Atmos Fitness signage on Kothi Road" },
  { src: PHOTOS.exteriorCafe, caption: "Nutrihub Cafe at the gym entrance" },
  { src: PHOTOS.exteriorFacade, caption: "Club facade, Anand Vihar, Kota" },
  { src: PHOTOS.exteriorBuilding, caption: "The HFC building on Darbaar Kothi Road" },
  { src: PHOTOS.exteriorSign2, caption: "Street view of the club entrance" },
];
