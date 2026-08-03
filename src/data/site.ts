import logoHerculean from "@/assets/fitsters-logo.jpg";
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

export const PHONE = "+918441984416";
export const PHONE_DISPLAY = "+91 84419 84416";
export const MAPS_LINK = "https://maps.app.goo.gl/4X9uRmA25ZDBSxcW6";
export const INSTAGRAM = "https://www.instagram.com/fitsters_jwr/";
export const ADDRESS =
  "1st Floor, Raghuveer Plaza, near Mama Bhanja Circle, Saket, Jhalawar, Rajasthan 326001";

export const GYM_PACKAGES = [
  { n: "01", name: "1 Month", price: "Rs.1,800", period: "/30 days", cat: "Gym Membership", features: ["Full gym access", "Floor guidance", "Flexible timings", "Great for starters"], popular: false },
  { n: "02", name: "3 Months + 1 Month", price: "Rs.6,000", period: "/120 days", cat: "Gym Membership", features: ["1 bonus month free", "Full gym access", "Trainer guidance", "Best short-term value"], popular: true },
  { n: "03", name: "6 Months + 1 Month", price: "Rs.8,500", period: "/210 days", cat: "Gym Membership", features: ["1 bonus month free", "Full gym access", "Trainer guidance", "Save more per month"], popular: false },
  { n: "04", name: "12 Months", price: "Rs.12,000", period: "/365 days", cat: "Gym Membership", features: ["Full year access", "Lowest monthly cost", "Trainer guidance", "Priority support"], popular: false },
];

export const GROUP_CLASSES = [
  { name: "Yoga Class", price: "Rs.1,000", period: "/30 days", desc: "Daily guided yoga sessions." },
  { name: "Dance Class", price: "Rs.1,500", period: "/30 days", desc: "Fun, high-energy dance fitness." },
];

export const PT_PLANS = [
  { name: "1 Month PT", price: "Rs.7,000", period: "/30 days", desc: "One-on-one personal training." },
  { name: "3 Months PT", price: "Rs.18,000", period: "/90 days", desc: "Full transformation programme." },
];

export const OFFERS = [
  {
    title: "3 + 1 Month Free",
    tag: "Most Popular",
    desc: "Take the 3-month gym package at Rs.6,000 and train a 4th month completely free.",
    price: "Rs.6,000",
  },
  {
    title: "6 + 1 Month Free",
    tag: "Best Value",
    desc: "Six months of full access at Rs.8,500 with one bonus month added on top.",
    price: "Rs.8,500",
  },
  {
    title: "Free Trial Session",
    tag: "New Members",
    desc: "Try the floor before you join — complete the trial waiver and train with us for a day.",
    price: "Free",
  },
  {
    title: "Yoga + Gym Combo",
    tag: "Limited",
    desc: "Add a monthly yoga batch to any gym membership at a discounted combo rate. Ask at the front desk.",
    price: "Ask us",
  },
];

export const TRAINERS = [
  { name: "Arjan Singh", role: "Head Trainer", bio: "Specialises in fat loss, weight loss and body recomposition.", img: imgPtSession },
  { name: "Mahesh Verma", role: "Personal Trainer", bio: "Strength training and weight loss for all populations — athletes to seniors.", img: imgCableMember },
  { name: "Adnan", role: "Personal Trainer", bio: "A powerful role model demonstrating strength, discipline and resilience.", img: imgLegPress },
  { name: "Tanveer Singh", role: "Personal Trainer", bio: "Highly skilled professional dedicated to helping members reach their goals.", img: imgFlex1 },
];

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

export const TESTIMONIALS = [
  { name: "Akshit Nagar", role: "Google Review", rating: 5, quote: "Best gym of Jhalawar. Most spacious, all new and premium quality equipments, reasonable prices and great ambience." },
  { name: "Rahul Mittal", role: "Google Review", rating: 5, quote: "As a beginner I joined Herculean Fitness Club last month — totally satisfied with trainers and quality equipment. Best gym of Jhalawar with a friendly atmosphere. In just one month this became my habit. Full 5 out of 5." },
  { name: "Reshma Verma", role: "Google Review", rating: 5, quote: "I recently joined this newly opened gym and I'm super satisfied with the trainers and their services. They developed real consistency and dedication in me towards my fitness goal. I suggest everyone come and join this crowd." },
  { name: "Shailly Singh", role: "Google Review", rating: 5, quote: "This is by far the greatest gym in Jhalawar. The staff is super amazing!! If you really feel like joining a gym, this should be it!!" },
  { name: "Pooja Nayak", role: "Google Review", rating: 5, quote: "One of the finest gyms in Jhalawar. The knowledge and behaviour of the staff is impressive. Gym is fully equipped with high quality machines and great ambience." },
];

export const PARQ_QUESTIONS = [
  "Has your doctor ever said that you have a heart condition and that you should only do physical activity recommended by a doctor?",
  "Do you feel pain in your chest when you do physical activity?",
  "In the past month, have you had chest pain when you were not doing physical activity?",
  "Do you lose your balance because of dizziness or do you ever lose consciousness?",
  "Do you have a bone or joint problem that could be made worse by a change in your physical activity?",
  "Is your doctor currently prescribing drugs for your blood pressure or heart condition?",
  "Do you know of any other reason why you should not do physical activity?",
];