import logoHerculean from "@/assets/herculean-logo.png";
import imgFloorWide from "@/assets/gm-floor-wide.jpg";
import imgFloorMachines from "@/assets/gm-floor-machines.jpg";
import imgFloorOpen from "@/assets/gm-floor-open.jpg";
import imgCardioBikes from "@/assets/gm-cardio-bikes.jpg";
import imgCardioTreadmills from "@/assets/gm-cardio-treadmills.jpg";
import imgCardioWindow from "@/assets/gm-cardio-window.jpg";
import imgDumbbells from "@/assets/gm-dumbbells.jpg";
import imgPtSession from "@/assets/gm-pt-session.jpg";
import imgLegPress from "@/assets/gm-legpress.jpg";
import imgCableMember from "@/assets/gm-cable-member.jpg";
import imgYogaClass from "@/assets/gm-yoga-class.jpg";
import imgTransformation from "@/assets/gm-transformation.jpg";
import imgFlex1 from "@/assets/gm-flex-1.jpg";
import imgFlex2 from "@/assets/gm-flex-2.jpg";
import imgDanceClass from "@/assets/gm-dance-class.jpg";
import imgHeroBranded from "@/assets/gm-hero-branded.jpg";

export const IMAGES = {
  logo: logoHerculean,
  floorWide: imgFloorWide,
  floorMachines: imgFloorMachines,
  floorOpen: imgFloorOpen,
  cardioBikes: imgCardioBikes,
  cardioTreadmills: imgCardioTreadmills,
  cardioWindow: imgCardioWindow,
  dumbbells: imgDumbbells,
  ptSession: imgPtSession,
  legPress: imgLegPress,
  cableMember: imgCableMember,
  yogaClass: imgYogaClass,
  transformation: imgTransformation,
  flex1: imgFlex1,
  flex2: imgFlex2,
  danceClass: imgDanceClass,
  heroBranded: imgHeroBranded,
};

export const PHONE = "+919000000000";
export const PHONE_DISPLAY = "Phone coming soon";
export const MAPS_LINK = "https://maps.app.goo.gl/bP2aZp4Ve9WtJP4g7";
export const INSTAGRAM = "https://www.instagram.com/herculean_fitness_club/";
export const ADDRESS =
  "Jhalawar, Rajasthan — full address updating soon";

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