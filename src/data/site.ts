import logoHerculean from "@/assets/herculean-logo.png";
import { PHOTOS, GALLERY_PHOTOS } from "@/data/photos";

export const IMAGES = {
  logo: logoHerculean,
  floorWide: PHOTOS.floorWide,
  floorMachines: PHOTOS.strengthMachines,
  floorOpen: PHOTOS.floorLogoWide,
  cardioBikes: PHOTOS.cardioZone,
  cardioTreadmills: PHOTOS.treadmills,
  cardioWindow: PHOTOS.cardioOpen,
  dumbbells: PHOTOS.dumbbellRacks,
  ptSession: PHOTOS.functionalArea,
  legPress: PHOTOS.legPress,
  cableMember: PHOTOS.machinesWood,
  yogaClass: PHOTOS.studioRoom,
  transformation: PHOTOS.squatRacks,
  flex1: PHOTOS.strengthArea,
  flex2: PHOTOS.plateLoaded,
  danceClass: PHOTOS.benchRack,
  heroBranded: PHOTOS.hero,
  exterior: PHOTOS.exteriorSign,
  cafe: PHOTOS.exteriorCafe,
};

export const PHONE = "+917425074240";
export const PHONE_DISPLAY = "074250 74240";
export const WHATSAPP = "917425074240";
export const MAPS_LINK = "https://maps.app.goo.gl/bP2aZp4Ve9WtJP4g7";
export const INSTAGRAM = "https://www.instagram.com/herculean_fitness_club/";
export const INSTAGRAM_JWR = "https://www.instagram.com/hfc_jwr/";
export const ADDRESS =
  "Darbaar, F-12, Kothi Road, near Balaji Hospital, Anand Vihar, Gayatri Nagar, Jhalawar, Rajasthan 326001";
export const PLUS_CODE = "H5P5+HF Jhalawar, Rajasthan";
export const HOURS = "Open daily · 5:00 AM – 11:00 PM";
export const RATING = { score: "5.0", count: 32 };
export const BRANCHES = [
  { name: "Jhalawar (Main)", desc: "Darbaar Kothi Road, Anand Vihar — Jhalawar district's biggest fitness complex with Nutrihub Cafe inside." },
  { name: "Aklera", desc: "Aklera's biggest gym, on NH-52 Bhopal Naka." },
];


export const GYM_PACKAGES = [
  { n: "01", name: "Monthly", price: "Ask us", period: "Enquire for rates", cat: "Gym Membership", features: ["Full gym access", "Trainer guidance on the floor", "Flexible timings", "Great for starters"], popular: false },
  { n: "02", name: "Quarterly", price: "Ask us", period: "Enquire for rates", cat: "Gym Membership", features: ["3 months of full access", "Trainer guidance", "Better value per month", "Popular with regulars"], popular: true },
  { n: "03", name: "Half Yearly", price: "Ask us", period: "Enquire for rates", cat: "Gym Membership", features: ["6 months of full access", "Trainer guidance", "Save more per month", "Steady progress plan"], popular: false },
  { n: "04", name: "Annual", price: "Ask us", period: "Enquire for rates", cat: "Gym Membership", features: ["Full year access", "Lowest monthly cost", "Trainer guidance", "Priority support"], popular: false },
];

export const GROUP_CLASSES = [
  { name: "Yoga Class", price: "Ask us", period: "", desc: "Guided yoga sessions for flexibility and calm." },
  { name: "Dance Fitness", price: "Ask us", period: "", desc: "Fun, high-energy dance fitness batches." },
];

export const PT_PLANS = [
  { name: "1 Month PT", price: "Ask us", period: "", desc: "One-on-one personal training." },
  { name: "3 Months PT", price: "Ask us", period: "", desc: "Full transformation programme." },
];

export const OFFERS = [
  {
    title: "New Member Offer",
    tag: "Popular",
    desc: "Joining offers run every month at Herculean Fitness Club Jhalawar. Enquire to hear today's rate.",
    price: "Ask us",
  },
  {
    title: "Long-Term Plan Discount",
    tag: "Best Value",
    desc: "Quarterly, half-yearly and annual memberships come at a lower monthly cost.",
    price: "Ask us",
  },
  {
    title: "Free Trial Session",
    tag: "New Members",
    desc: "Try the floor before you join — complete the trial waiver and train with us for a day.",
    price: "Free",
  },
  {
    title: "Class + Gym Combo",
    tag: "Limited",
    desc: "Add a monthly class batch to any gym membership at a combo rate. Ask at the front desk.",
    price: "Ask us",
  },
];

export const TRAINERS: { name: string; role: string; bio: string; img: string }[] = [];

export const GALLERY = [
  imgFloorWide,
  imgFloorMachines,
  imgCardioBikes,
  imgCardioTreadmills,
  imgFloorOpen,
  imgDumbbells,
  imgPtSession,
  imgHeroBranded,
  imgDanceClass,
  imgYogaClass,
  imgLegPress,
  imgCardioWindow,
  imgFlex1,
  imgFlex2,
  imgCableMember,
  imgTransformation,
];

export const TESTIMONIALS: { name: string; role: string; rating: number; quote: string }[] = [];

export const PARQ_QUESTIONS = [
  "Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?",
  "Do you feel pain in your chest when you do physical activity?",
  "In the past month, have you had chest pain when you were not doing physical activity?",
  "Do you lose your balance because of dizziness or do you ever lose consciousness?",
  "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
  "Is your doctor currently prescribing drugs for your blood pressure or heart condition?",
  "Do you know of any other reason why you should not do physical activity?",
];