import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Dumbbell,
  Flame,
  Users,
  Building2,
  Sparkles,
  Star,
  Plus,
  Minus,
  MapPin,
  Phone,
  Clock,
  Instagram,
  ChevronRight,
  Check,
  Navigation,
} from "lucide-react";
import { MEMBER_LINKS } from "@/data/member-links";

import logoFitsters from "@/assets/fitsters-logo.jpg";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fitsters Club Jhalawar — Best Gym & Fitness Club in Jhalawar" },
      {
        name: "description",
        content:
          "Fitsters Club Jhalawar — premium gym at Raghuveer Plaza, Mama Bhanja Circle. Gym, yoga, dance & personal training. Open 5 AM–10 PM. Call 84419 84416.",
      },
      { property: "og:title", content: "Fitsters Club Jhalawar — Best Gym in Jhalawar" },
      {
        property: "og:description",
        content:
          "Premium equipment, certified trainers and 5.0★ Google-rated service in the heart of Jhalawar. Memberships from ₹1,800/month.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const PHONE = "+918441984416";
const PHONE_DISPLAY = "+91 84419 84416";
const INSTAGRAM_URL = "https://www.instagram.com/fitsters_jwr/";
const MAPS_LINK = "https://maps.app.goo.gl/4X9uRmA25ZDBSxcW6";
const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#pricing" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { title: "Strength & Muscle", img: imgDumbbells, desc: "Premium plate-loaded machines and a full free-weight zone." },
  { title: "Personal Training", img: imgPtSession, desc: "1-on-1 coaching for fat loss, strength and body recomposition." },
  { title: "Yoga Class", img: imgYogaClass, desc: "Daily yoga batches for mobility, flexibility and recovery." },
  { title: "Dance Class", img: imgDanceClass, desc: "High-energy dance fitness sessions for all levels." },
  { title: "Cardio Zone", img: imgCardioBikes, desc: "Treadmills, cycles and conditioning circuits for endurance." },
  { title: "Functional Training", img: imgFloorWide, desc: "Kettlebells, ropes, turf sprint track and athletic conditioning." },
];

const FEATURES = [
  { icon: Building2, title: "Central Jhalawar Location", desc: "1st Floor, Raghuveer Plaza — right at Mama Bhanja Circle, Saket." },
  { icon: Dumbbell, title: "All-New Premium Equipment", desc: "Spacious floor with brand-new, high-quality machines." },
  { icon: Users, title: "Qualified Trainers", desc: "A head trainer plus three dedicated personal trainers on the floor." },
  { icon: Flame, title: "5.0★ Google Rated", desc: "Members consistently call us the best gym in Jhalawar." },
];

const PRICING = [
  { n: "01", name: "1 Month", price: "Rs.1,800", period: "/30 days", cat: "Gym Membership", features: ["Full gym access", "Floor guidance", "Flexible timings", "Great for starters"], popular: false },
  { n: "02", name: "3 Months + 1 Month", price: "Rs.6,000", period: "/120 days", cat: "Gym Membership", features: ["1 bonus month free", "Full gym access", "Trainer guidance", "Best short-term value"], popular: true },
  { n: "03", name: "6 Months + 1 Month", price: "Rs.8,500", period: "/210 days", cat: "Gym Membership", features: ["1 bonus month free", "Full gym access", "Trainer guidance", "Save more per month"], popular: false },
  { n: "04", name: "12 Months", price: "Rs.12,000", period: "/365 days", cat: "Gym Membership", features: ["Full year access", "Lowest monthly cost", "Trainer guidance", "Priority support"], popular: false },
];

const GROUP_CLASSES = [
  { name: "Yoga Class", price: "Rs.1,000", period: "/30 days", desc: "Daily guided yoga sessions." },
  { name: "Dance Class", price: "Rs.1,500", period: "/30 days", desc: "Fun, high-energy dance fitness." },
];

const PT_PLANS = [
  { name: "1 Month PT", price: "Rs.7,000", period: "/30 days", desc: "One-on-one personal training." },
  { name: "3 Months PT", price: "Rs.18,000", period: "/90 days", desc: "Full transformation programme." },
];

const TRAINERS = [
  { name: "Arjan Singh", role: "Head Trainer", bio: "Specialises in fat loss, weight loss and body recomposition.", img: imgPtSession },
  { name: "Mahesh Verma", role: "Personal Trainer", bio: "Strength training and weight loss for all populations — athletes to seniors.", img: imgCableMember },
  { name: "Adnan", role: "Personal Trainer", bio: "A powerful role model demonstrating strength, discipline and resilience.", img: imgLegPress },
  { name: "Tanveer Singh", role: "Personal Trainer", bio: "Highly skilled professional dedicated to helping members reach their goals.", img: imgFlex1 },
];

const GALLERY = [
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

const TESTIMONIALS = [
  { name: "Akshit Nagar", role: "Google Review", quote: "Best gym of Jhalawar. Most spacious, all new and premium quality equipments, reasonable prices and great ambience." },
  { name: "Rahul Mittal", role: "Google Review", quote: "As a beginner I joined Fitsters gym last month — totally satisfied with trainers and quality equipment. Best gym of Jhalawar with a friendly atmosphere. In just one month this became my habit. Full 5 out of 5." },
  { name: "Reshma Verma", role: "Google Review", quote: "I recently joined this newly opened gym and I'm super satisfied with the trainers and their services. They developed real consistency and dedication in me towards my fitness goal. I suggest everyone come and join this crowd." },
  { name: "Shailly Singh", role: "Google Review", quote: "This is by far the greatest gym in Jhalawar. The staff is super amazing!! If you really feel like joining a gym, this should be it!!" },
  { name: "Pooja Nayak", role: "Google Review", quote: "One of the finest gyms in Jhalawar. The knowledge and behaviour of the staff is impressive. Gym is fully equipped with high quality machines and great ambience." },
];

const FAQS = [
  { q: "What are your timings?", a: "Fitsters Club Jhalawar is open daily from 5:00 AM to 10:00 PM." },
  { q: "Where exactly are you located?", a: "1st Floor, Raghuveer Plaza, near Mama Bhanja Circle, Saket, Jhalawar, Rajasthan 326001. Tap 'Get Directions' for the Google Maps route." },
  { q: "How much is a monthly membership?", a: "Gym membership starts at Rs.1,800 for 30 days. Longer packages include bonus months — 3+1 months for Rs.6,000 and 6+1 months for Rs.8,500." },
  { q: "Do you offer personal training?", a: "Yes. Personal training is Rs.7,000 for 1 month and Rs.18,000 for 3 months, with dedicated 1-on-1 coaching." },
  { q: "Do you have group classes?", a: "Yes — Yoga at Rs.1,000/month and Dance Class at Rs.1,500/month. You can book a group class session online." },
  { q: "How do I check my billing details?", a: "Use the Client Login on our member portal to view your billing and membership details anytime." },
];

function Embers() {
  const [seeds] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({
      left: `${(i * 37) % 100}%`,
      delay: `${(i * 0.7) % 12}s`,
      duration: `${8 + (i % 6)}s`,
      size: 2 + (i % 3),
    })),
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {seeds.map((s, i) => (
        <span
          key={i}
          className="ember"
          style={{ left: s.left, animationDelay: s.delay, animationDuration: s.duration, width: s.size, height: s.size }}
        />
      ))}
    </div>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src={logoFitsters}
        alt="Fitsters Club Jhalawar logo"
        width={160}
        height={160}
        className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover drop-shadow-[0_0_18px_rgba(245,115,14,0.55)]"
      />
      <span className="flex flex-col leading-none">
        <span className="wordmark-3d whitespace-nowrap text-[22px] tracking-[0.06em] md:text-[26px]">
          <span className="text-[color:var(--color-brand)]">Fitsters</span>
          <span className="ml-1.5 text-white">Club</span>
        </span>
        <span className="wordmark-sub mt-[7px] flex items-center gap-2 text-[11px] tracking-[0.34em] md:text-[12px]">
          <span className="h-px w-5 bg-[color:var(--color-brand)]/70" />
          Jhalawar
        </span>
      </span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#home" className="flex items-center">
          <Wordmark />
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[15px] font-medium text-white/80 transition hover:text-[color:var(--color-brand)]">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fitsters Club Jhalawar on Instagram"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
          >
            <Instagram size={22} />
          </a>
          <a href={`tel:${PHONE}`} className="btn-primary btn-primary-hover inline-flex">
            <Phone size={16} /> Call Now
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden">
          <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#121212] p-6">
            <div className="flex flex-col gap-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold uppercase tracking-wide text-white/85 hover:text-[color:var(--color-brand)]"
                >
                  {n.label}
                </a>
              ))}
              <a href={`tel:${PHONE}`} className="btn-primary btn-primary-hover mt-2">
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function VideoHero() {
  return (
    <section id="showreel" className="relative w-full overflow-hidden">
      <div className="relative h-[100svh] min-h-[560px] w-full">
        <video
          src={heroVideo.url}
          poster={imgFloorWide}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Fitsters Club Jhalawar training floor showreel"
          className="absolute inset-0 h-full w-full object-cover bg-black"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85" aria-hidden />
        <div
          className="absolute inset-0 opacity-70"
          style={{ backgroundImage: `radial-gradient(circle at 70% 40%, rgba(245,115,14,0.35), transparent 60%)` }}
          aria-hidden
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center md:px-8">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/85 backdrop-blur-sm">
            <Sparkles size={14} className="text-[color:var(--color-brand)]" />
            Fitsters Athletic Club · Jhalawar
          </p>
          <h1 className="text-hero font-black text-white drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
            <span className="block">Sweat.</span>
            <span className="block text-[color:var(--color-brand)]">Strength.</span>
            <span className="block">Success.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.6] text-white/85 md:text-lg">
            Jhalawar's most spacious fitness club — all-new premium equipment, qualified trainers and an atmosphere that
            keeps you coming back.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/enquiry" className="btn-primary btn-primary-hover">
              Enquire Now <ChevronRight size={18} />
            </Link>
            <a href="#pricing" className="btn-ghost">
              View Packages
            </a>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-center gap-6 px-4 text-[10px] font-bold uppercase tracking-[0.35em] text-white/70 md:text-xs">
            <span>Train Hard</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--color-brand)]" />
            <span>Live Strong</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--color-brand)]" />
            <span>Fitsters</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#121212]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{ backgroundImage: `radial-gradient(circle at 70% 30%, rgba(245,115,14,0.25), transparent 55%)` }}
        />
      </div>
      <Embers />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-4">
        <div className="relative z-10 order-2 lg:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <Sparkles size={14} className="text-[color:var(--color-brand)]" />
            Fitness Centre · Jhalawar, Rajasthan
          </p>
          <h1 className="text-hero font-black text-white">
            <span className="block text-[color:var(--color-brand)]">Train Your</span>
            <span className="block">Body, Transform</span>
            <span className="block text-[color:var(--color-brand)]">Your Life!</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Welcome to Fitsters Club Jhalawar — 1st Floor, Raghuveer Plaza, near Mama Bhanja Circle. Premium machines,
            qualified trainers, yoga & dance classes and personal training, all under one roof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="btn-primary btn-primary-hover">
              Join Now <ChevronRight size={18} />
            </a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Navigation size={16} /> Get Directions
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              ["5.0★", "Google Rating"],
              ["4", "Expert Trainers"],
              ["5AM–10PM", "Open Daily"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl text-white md:text-3xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 lg:order-2 lg:-mr-6">
          <div className="absolute -inset-10 rounded-[2.5rem] bg-[color:var(--color-brand)]/25 blur-3xl" aria-hidden />
          <img
            src={imgHeroBranded}
            alt="Fitsters Club Jhalawar branded training floor with kettlebells, battle ropes and power racks"
            width={1024}
            height={1280}
            className="relative w-full max-w-[640px] mx-auto rounded-3xl object-cover shadow-[0_30px_80px_-20px_rgba(245,115,14,0.45)] ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}

function QuickActions() {
  return (
    <section id="members" className="relative bg-[#0d0d0d] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Member Services</p>
          <h2 className="text-h2 font-black text-white">Everything In One Tap</h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Enquiries, bookings, class slots and forms — all handled right here on this site.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBER_LINKS.map((a) => (
            <Link
              key={a.title}
              to={a.to}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#121212] p-5 transition hover:border-[color:var(--color-brand)]/60 hover:bg-[#161310]"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-brand)]/15 text-[color:var(--color-brand)]">
                <a.icon size={20} />
              </span>
              <span className="flex-1">
                <span className="block font-display text-lg uppercase text-white">{a.title}</span>
                <span className="mt-1 block text-sm leading-[1.5] text-[color:var(--color-body)]">{a.desc}</span>
              </span>
              <ChevronRight size={18} className="mt-3 text-white/30 transition group-hover:translate-x-1 group-hover:text-[color:var(--color-brand)]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Yoga", "Dance", "Cardio", "Deadlift", "Strength", "Personal Training", "Fat Loss", "Muscle Building"];
  const Row = ({ items, cls, reverse }: { items: string[]; cls: string; reverse?: boolean }) => (
    <div className={`overflow-hidden py-4 ${cls}`}>
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {[...items, ...items, ...items].map((w, i) => (
          <span key={i} className="mx-6 flex items-center gap-6 whitespace-nowrap font-display text-2xl uppercase tracking-widest md:text-3xl">
            {w}
            <Sparkles size={18} className="opacity-80" />
          </span>
        ))}
      </div>
    </div>
  );
  return (
    <div className="relative -my-2 py-8">
      <div className="rotate-[-3deg]">
        <Row items={items} cls="bg-[color:var(--color-brand)] text-black" />
      </div>
      <div className="mt-[-24px] rotate-[2deg]">
        <Row items={items.slice().reverse()} cls="bg-[#1a1512] text-white border-y border-white/10" reverse />
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Our Story</p>
          <h2 className="text-hero font-black text-white">
            <span className="block">Pushing Your</span>
            <span className="block">Limits</span>
            <span className="block text-[color:var(--color-brand)]">Further.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-[color:var(--color-body)]">
            Fitsters Club is Jhalawar's premium fitness destination — a spacious, well-ventilated floor packed with all-new
            commercial equipment. Whether your goal is fat loss, strength or simply a healthier routine, our head trainer and
            personal training team build the plan around you.
          </p>
          <a href="#contact" className="btn-primary btn-primary-hover mt-8">
            Visit Us <ChevronRight size={18} />
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[color:var(--color-brand-glow)]/20 blur-3xl" aria-hidden />
          <img
            src={imgFloorMachines}
            alt="Inside Fitsters Club Jhalawar"
            width={1000}
            height={1200}
            loading="lazy"
            className="relative w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">
            <Sparkles size={14} /> Our Services
          </p>
          <h2 className="text-h2 font-black text-white">Discover Our Fitness Programs</h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Gym training, group classes and personal coaching — structured, guided and built for real results.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <h3 className="font-display text-2xl uppercase text-white md:text-[26px]">{s.title}</h3>
                <div>
                  <p className="mb-4 max-w-xs text-sm text-[color:var(--color-body)]">{s.desc}</p>
                  <a href="#pricing" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[color:var(--color-brand)]">
                    See pricing <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="relative border-y border-white/5 bg-[#0A0A0A] py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-[#121212] p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--color-brand)]/15 text-[color:var(--color-brand)]">
                <f.icon size={22} />
              </div>
              <h3 className="font-display text-xl uppercase text-white">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.6] text-[color:var(--color-body)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Packages</p>
            <h2 className="text-h2 font-black text-white">Membership Rates</h2>
          </div>
          <p className="text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Official Fitsters Club packages. Longer plans include bonus months — pick the one that fits your goal and enquire
            online in seconds.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING.map((p) => (
            <div
              key={p.n}
              className={`relative flex flex-col rounded-3xl border p-7 ${
                p.popular
                  ? "border-[color:var(--color-brand)] bg-[#121212] shadow-[0_0_60px_-20px_rgba(245,115,14,0.5)] lg:-translate-y-4"
                  : "border-white/10 bg-[#121212]"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-7 rounded-full bg-[color:var(--color-brand)] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  Most Popular
                </span>
              )}
              <div className="font-display text-5xl text-white/20">{p.n}</div>
              <h3 className="mt-2 font-display text-xl uppercase text-white">{p.name}</h3>
              <p className="text-xs uppercase tracking-widest text-white/40">{p.cat}</p>
              <ul className="mt-6 flex-1 space-y-3 text-[15px] text-[color:var(--color-body)]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand)]/20 text-[color:var(--color-brand)]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="font-display text-3xl text-white">{p.price}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{p.period}</div>
                <Link
                  to="/enquiry"
                  search={{ package: `Gym — ${p.name}` }}
                  className="btn-primary btn-primary-hover mt-4 w-full justify-center !px-5 !py-3"
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
            <h3 className="font-display text-2xl uppercase text-white">Group Classes</h3>
            <div className="mt-6 space-y-4">
              {GROUP_CLASSES.map((c) => (
                <div key={c.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div>
                    <div className="font-display text-lg uppercase text-white">{c.name}</div>
                    <div className="text-sm text-[color:var(--color-body)]">{c.desc}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl text-[color:var(--color-brand)]">{c.price}</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/50">{c.period}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/book-group-class" className="btn-primary btn-primary-hover mt-6">
              Book Group Class
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
            <h3 className="font-display text-2xl uppercase text-white">Personal Training</h3>
            <div className="mt-6 space-y-4">
              {PT_PLANS.map((c) => (
                <div key={c.name} className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 p-5">
                  <div>
                    <div className="font-display text-lg uppercase text-white">{c.name}</div>
                    <div className="text-sm text-[color:var(--color-body)]">{c.desc}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl text-[color:var(--color-brand)]">{c.price}</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/50">{c.period}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/book-pt" className="btn-primary btn-primary-hover mt-6">
              Book PT Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section id="trainers" className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Our Team</p>
          <h2 className="text-h2 font-black text-white">Meet Our Trainers</h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            The team behind every transformation at Fitsters Club Jhalawar.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRAINERS.map((t) => (
            <div key={t.name} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <img src={t.img} alt={`${t.name} — ${t.role}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-xl uppercase text-white">{t.name}</h3>
                <p className="text-sm text-[color:var(--color-brand)]">{t.role}</p>
                <p className="mt-2 text-[13px] leading-[1.5] text-white/70">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-[color:var(--color-brand)] blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Photo Gallery</p>
            <h2 className="text-hero font-black leading-[0.9] text-white">
              INSIDE <span className="text-[color:var(--color-brand)]">FITSTERS</span>
              <br />
              CLUB JHALAWAR
            </h2>
          </div>
          <p className="text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            A look at our facilities — the spacious training floor, premium machines and the community that makes Fitsters
            the best gym in Jhalawar.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#141210]">
              <img
                src={src}
                alt={`Fitsters Club Jhalawar facility photo ${i + 1}`}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { k: "5.0★", v: "Google Rating" },
            { k: "4", v: "Trainers" },
            { k: "17h", v: "Open Daily" },
            { k: "Rs.1,800", v: "From / Month" },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-[#141210] p-6 text-center">
              <p className="font-display text-3xl text-[color:var(--color-brand)]">{s.k}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-body)]">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Testimonials</p>
          <h2 className="text-h2 font-black text-white">Real Google Reviews</h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Rated <span className="font-bold text-white">5.0★</span> on Google by members of Fitsters Club Jhalawar.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col rounded-3xl border border-white/10 bg-[#121212] p-8">
              <div className="mb-4 flex gap-1 text-[color:var(--color-brand)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="flex-1 text-[16px] leading-[1.7] text-white/90">"{t.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-display text-lg uppercase text-white">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            View More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}

function BigCta() {
  return (
    <section className="relative overflow-hidden">
      <img src={imgCardioTreadmills} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 md:px-8 md:py-36">
        <div className="max-w-2xl">
          <h2 className="text-hero font-black uppercase text-white">
            Ready to Join <br />
            <span className="text-[color:var(--color-brand)]">Fitsters Club</span> Jhalawar?
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Walk in for a trial session today. Meet the trainers, tour the floor and see why Fitsters is Jhalawar's
            highest-rated fitness club.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="btn-primary btn-primary-hover">
              <Phone size={16} /> Call {PHONE_DISPLAY}
            </a>
            <Link to="/trial-waiver" className="btn-ghost">
              Trial Waiver Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">FAQ</p>
          <h2 className="text-h2 font-black text-white">Questions? Answered.</h2>
        </div>
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-[#121212]">
                <button onClick={() => setOpen(active ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left">
                  <span className="font-display text-lg uppercase text-white md:text-xl">{f.q}</span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand)]/15 text-[color:var(--color-brand)]">
                    {active ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {active && <div className="px-6 pb-6 text-[16px] leading-[1.7] text-[color:var(--color-body)]">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Contact</p>
          <h2 className="text-h2 font-black text-white">Get In Touch</h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Visit us at Raghuveer Plaza, Mama Bhanja Circle, Jhalawar — or send an enquiry and we'll call you back.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
              <h3 className="font-display text-2xl uppercase text-white">Visit The Club</h3>
              <ul className="mt-6 space-y-4 text-[15px] text-[color:var(--color-body)]">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 shrink-0 text-[color:var(--color-brand)]" />
                  1st Floor, Raghuveer Plaza, near Mama Bhanja Circle, Saket, Jhalawar, Rajasthan 326001
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[color:var(--color-brand)]" />
                  <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE_DISPLAY}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-[color:var(--color-brand)]" /> Open daily · 5:00 AM – 10:00 PM
                </li>
                <li className="flex items-center gap-3">
                  <Instagram size={18} className="text-[color:var(--color-brand)]" />
                  <a href="https://www.instagram.com/fitsters_jwr/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    @fitsters_jwr
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/enquiry" className="btn-primary btn-primary-hover">
                  Send Enquiry
                </Link>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  <Navigation size={16} /> Google Directions
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
              <h3 className="font-display text-xl uppercase text-white">Member Forms</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link to="/par-q" className="btn-ghost !px-4 !py-2 text-sm">PAR-Q</Link>
                <Link to="/pt-contract" className="btn-ghost !px-4 !py-2 text-sm">PT Contract</Link>
                <Link to="/trial-waiver" className="btn-ghost !px-4 !py-2 text-sm">Trial Waiver</Link>
                <Link to="/feedback" className="btn-ghost !px-4 !py-2 text-sm">Feedback</Link>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Fitsters Club Jhalawar location"
              src="https://www.google.com/maps?q=Fitsters+Club+Jhalawar&ll=24.591914,76.1563261&z=17&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808] pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 pb-12 md:grid-cols-4 md:px-8">
        <div className="col-span-2 md:col-span-1">
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-[1.7] text-[color:var(--color-body)]">
            Fitsters Athletic Club — Jhalawar's premium gym at Mama Bhanja Circle. Train hard. Live strong.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-body)]">
            <li><a href="#about" className="hover:text-[color:var(--color-brand)]">About</a></li>
            <li><a href="#pricing" className="hover:text-[color:var(--color-brand)]">Packages</a></li>
            <li><a href="#gallery" className="hover:text-[color:var(--color-brand)]">Gallery</a></li>
            <li><a href="#contact" className="hover:text-[color:var(--color-brand)]">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-white">Members</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-body)]">
            <li><Link to="/login" className="hover:text-[color:var(--color-brand)]">Client Login</Link></li>
            <li><Link to="/book-group-class" className="hover:text-[color:var(--color-brand)]">Book Group Class</Link></li>
            <li><Link to="/book-pt" className="hover:text-[color:var(--color-brand)]">Book PT Session</Link></li>
            <li><Link to="/offers" className="hover:text-[color:var(--color-brand)]">Offers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-white">Reach Us</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-body)]">
            <li><a href={`tel:${PHONE}`} className="hover:text-[color:var(--color-brand)]">{PHONE_DISPLAY}</a></li>
            <li>5:00 AM – 10:00 PM daily</li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href="https://www.instagram.com/fitsters_jwr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              <Instagram size={16} />
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]"
            >
              <MapPin size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} Fitsters Club Jhalawar — All Rights Reserved.</div>
          <div className="flex gap-6">
            <Link to="/feedback" className="hover:text-white">Feedback</Link>
            <Link to="/enquiry" className="hover:text-white">Enquiry</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main>
        <VideoHero />
        <Hero />
        <QuickActions />
        <Marquee />
        <About />
        <Services />
        <Features />
        <Pricing />
        <Trainers />
        <Gallery />
        <Testimonials />
        <BigCta />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
