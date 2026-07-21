import { createFileRoute } from "@tanstack/react-router";
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
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ChevronRight,
  Check,
} from "lucide-react";

import heroImg from "@/assets/gym-building.jpg";
import aboutImg from "@/assets/about.jpg";
import ctaImg from "@/assets/cta.jpg";
import svcBoxing from "@/assets/svc-boxing.jpg";
import svcMuscle from "@/assets/svc-muscle.jpg";
import svcYoga from "@/assets/svc-yoga.jpg";
import svcCardio from "@/assets/svc-cardio.jpg";
import svcCrossfit from "@/assets/svc-crossfit.jpg";
import svcPt from "@/assets/svc-pt.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";
import client5 from "@/assets/client-5.jpg";
import client6 from "@/assets/client-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "24 FITNESS — Premium Triple-Floor Gym in Kota, Rajasthan" },
      {
        name: "description",
        content:
          "Train at Kota's premium 7000+ sq. ft. triple-floor gym. Boxing, strength, cardio, yoga, CrossFit & personal training with certified coaches.",
      },
    ],
  }),
  component: HomePage,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  { title: "Boxing Classes", img: svcBoxing, desc: "Bag work, footwork & combos with certified coaches." },
  { title: "Strength & Muscle", img: svcMuscle, desc: "Progressive overload programs on pro-grade racks." },
  { title: "Yoga & Pilates", img: svcYoga, desc: "Mobility, core control and mindful recovery." },
  { title: "Cardio Training", img: svcCardio, desc: "HIIT, steady-state and conditioning circuits." },
  { title: "CrossFit / Functional", img: svcCrossfit, desc: "WODs, kettlebells, ropes and Olympic lifts." },
  { title: "Personal Training", img: svcPt, desc: "1-on-1 coaching built around your body and goals." },
];

const FEATURES = [
  { icon: Building2, title: "3 Full Training Floors", desc: "7000+ sq. ft. of dedicated strength, cardio & class space." },
  { icon: Dumbbell, title: "Pro-Grade Equipment", desc: "Commercial racks, plate-loaded machines & full free-weight zone." },
  { icon: Users, title: "Certified Coaches", desc: "Nationally certified trainers with 5+ years on the floor." },
  { icon: Flame, title: "Flexible Memberships", desc: "Weekly, monthly and annual plans built around your routine." },
];

const PRICING = [
  {
    n: "01",
    name: "Weekly Pass",
    price: "₹499",
    period: "/week",
    features: ["Full gym access", "Locker facility", "Access to all floors", "Trial-friendly"],
    popular: false,
  },
  {
    n: "02",
    name: "Monthly Pass",
    price: "₹1,499",
    period: "/month",
    features: ["Unlimited gym access", "Trainer guidance", "All group classes", "Locker & shower"],
    popular: true,
  },
  {
    n: "03",
    name: "Annual Pass",
    price: "₹11,999",
    period: "/year",
    features: ["Everything in Monthly", "Priority PT slots", "Free diet consult", "Guest passes ×4"],
    popular: false,
  },
];

const TRAINERS = [
  { name: "Rohan Sharma", role: "Strength & Conditioning", img: trainer1 },
  { name: "Aditi Verma", role: "Yoga & Mobility Coach", img: trainer2 },
  { name: "Vikram Singh", role: "Boxing Head Coach", img: trainer3 },
];

const CLIENTS: { img: string; name: string; tag: string }[] = [
  { img: client1, name: "Rohit & Priya", tag: "New Member Kit" },
  { img: client2, name: "Squad Goals", tag: "Team 24 Fitness" },
  { img: client3, name: "Arjun & Neha", tag: "Couple Membership" },
  { img: client4, name: "Independence Day Meet", tag: "Community Event" },
  { img: client5, name: "Vikram & Sahil", tag: "Transformation Duo" },
  { img: client6, name: "Karan & Aditya", tag: "Consistency Champs" },
];

const TESTIMONIALS = [
  {
    name: "Ankit R.",
    quote:
      "Dropped 12 kg in 5 months. The trainers actually push you and the equipment is next level compared to anywhere else in Kota.",
    role: "Member since 2023",
  },
  {
    name: "Priya S.",
    quote:
      "The women's zone and yoga floor are gorgeous. Coaches are respectful and know their stuff. Best decision I made this year.",
    role: "Yoga & Strength member",
  },
  {
    name: "Manav K.",
    quote:
      "Three floors, zero waiting for equipment. Personal training completely rebuilt my form. Worth every rupee.",
    role: "PT client",
  },
];

const FAQS = [
  { q: "Do you offer a trial pass?", a: "Yes. We offer a single-day and a 3-day trial pass so you can experience all three floors before joining." },
  { q: "Can I freeze my membership?", a: "Monthly and annual members can freeze their plan for up to 15 and 30 days respectively per year." },
  { q: "Are personal trainers included?", a: "Every plan includes floor guidance. Dedicated 1-on-1 PT packages can be added at member-only rates." },
  { q: "What are your timings?", a: "We're open 5:00 AM to 10:00 PM, seven days a week. Please confirm current hours by phone." },
  { q: "Do you have women-only sessions?", a: "Yes — dedicated women-only class slots run daily on the yoga and cardio floors." },
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
          style={{
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
            width: s.size,
            height: s.size,
          }}
        />
      ))}
    </div>
  );
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-2xl tracking-wide ${className}`}>
      <span className="text-[color:var(--color-brand)]">24</span>
      <span className="text-white">FITNESS</span>
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
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[15px] font-medium text-white/80 transition hover:text-[color:var(--color-brand)]"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden btn-primary btn-primary-hover lg:inline-flex">
          Contact Us
        </a>
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
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary btn-primary-hover mt-2">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36 pb-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#121212]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(245,115,14,0.25), transparent 55%)`,
          }}
        />
      </div>
      <Embers />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-4">
        <div className="relative z-10 order-2 lg:order-1">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            <Sparkles size={14} className="text-[color:var(--color-brand)]" />
            Premium Gym · Kota, Rajasthan
          </p>
          <h1 className="text-hero font-black text-white">
            <span className="block text-[color:var(--color-brand)]">Train Your</span>
            <span className="block">Body, Transform</span>
            <span className="block text-[color:var(--color-brand)]">Your Life!</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Step into 24 FITNESS — Kota's premium triple-floor, 7000+ sq. ft. training facility. Certified coaches, world-class
            equipment and a community that pushes you every single session.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="btn-primary btn-primary-hover">
              Join Now <ChevronRight size={18} />
            </a>
            <a href="#services" className="btn-ghost">
              View Services
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              ["7000+", "Sq. Ft. Facility"],
              ["3", "Training Floors"],
              ["15+", "Certified Coaches"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-white md:text-4xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 lg:order-2 lg:-mr-6">
          <div className="absolute -inset-10 rounded-[2.5rem] bg-[color:var(--color-brand)]/25 blur-3xl" aria-hidden />
          <div className="absolute -inset-10 rounded-[2.5rem] bg-cyan-500/10 blur-3xl" aria-hidden />
          <img
            src={heroImg}
            alt="Muscular athlete flexing in a dramatic gym setting at 24 FITNESS"
            width={1024}
            height={1600}
            className="relative w-full max-w-[640px] mx-auto rounded-3xl object-cover shadow-[0_30px_80px_-20px_rgba(245,115,14,0.45)] ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Pilates", "Cardio", "Plank", "Deadlift", "Boxing", "Yoga", "CrossFit", "Muscle Building"];
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
            24 FITNESS is Kota's most complete premium gym — three dedicated floors of strength, cardio and studio training
            packed into 7000+ sq. ft. Every rack, every class and every coach is built around one goal: helping you become the
            strongest version of yourself.
          </p>
          <a href="#contact" className="btn-primary btn-primary-hover mt-8">
            About Us <ChevronRight size={18} />
          </a>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[color:var(--color-brand-glow)]/20 blur-3xl" aria-hidden />
          <img
            src={aboutImg}
            alt="Muscular trainer at 24 FITNESS"
            width={1000}
            height={1200}
            loading="lazy"
            className="relative w-full rounded-3xl object-cover"
          />
          <div className="absolute right-0 top-8 hidden w-64 space-y-3 md:block">
            {[
              ["15+", "Certified Trainers"],
              ["2000+", "Happy Members"],
              ["7000+", "Sq. Ft. Facility"],
            ].map(([n, l]) => (
              <div
                key={l}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121212]/90 px-5 py-4 backdrop-blur"
              >
                <div className="h-1 flex-1 rounded-full bg-[color:var(--color-brand)]/80" />
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60">{l}</div>
                  <div className="font-display text-3xl text-white">{n}</div>
                </div>
              </div>
            ))}
          </div>
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
            From heavy strength floors to calming yoga studios — every program is coached, structured and built for real results.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />
              <div className="relative flex h-full flex-col justify-between p-6">
                <h3 className="font-display text-2xl uppercase text-white md:text-[26px]">{s.title}</h3>
                <div>
                  <p className="mb-4 max-w-xs text-sm text-[color:var(--color-body)]">{s.desc}</p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[color:var(--color-brand)]"
                  >
                    Learn more <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary btn-primary-hover">
            View All Services
          </a>
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
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Membership</p>
            <h2 className="text-h2 font-black text-white">Membership Rates</h2>
          </div>
          <p className="text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Explore our flexible plans built for consistency and results. Every plan gives you full access to all three floors
            and professional coaching.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING.map((p) => (
            <div
              key={p.n}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.popular
                  ? "border-[color:var(--color-brand)] bg-[#121212] shadow-[0_0_60px_-20px_rgba(245,115,14,0.5)] md:-translate-y-4"
                  : "border-white/10 bg-[#121212]"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-[color:var(--color-brand)] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  Most Popular
                </span>
              )}
              <div className="font-display text-5xl text-white/20">{p.n}</div>
              <h3 className="mt-2 font-display text-2xl uppercase text-white">{p.name}</h3>
              <ul className="mt-6 flex-1 space-y-3 text-[15px] text-[color:var(--color-body)]">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--color-brand)]/20 text-[color:var(--color-brand)]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                <div>
                  <div className="font-display text-4xl text-white">{p.price}</div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{p.period}</div>
                </div>
                <a href="#contact" className="btn-primary btn-primary-hover !px-5 !py-3">
                  Join
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section className="relative bg-[#0d0d0d] py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Our Team</p>
          <h2 className="text-h2 font-black text-white">Meet Our Certified Trainers</h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            The team behind every transformation at 24 FITNESS — nationally certified, deeply experienced and always on the floor.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRAINERS.map((t) => (
            <div key={t.name} className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl uppercase text-white">{t.name}</h3>
                <p className="text-sm text-[color:var(--color-brand)]">{t.role}</p>
                <div className="mt-4 flex gap-2">
                  <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]">
                    <Instagram size={15} />
                  </a>
                  <a href="#" aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]">
                    <Facebook size={15} />
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

function Gallery() {
  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Facility</p>
            <h2 className="text-h2 font-black text-white">Inside 24 FITNESS</h2>
          </div>
          <p className="text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            A real look inside our triple-floor facility — heavy strength zones, cardio decks, class studios and everything in
            between.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border border-white/10 ${
                i === 0 || i === 5 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={g}
                alt={`Gym facility ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
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
          <h2 className="text-h2 font-black text-white">What Our Members Say</h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
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
      </div>
    </section>
  );
}

function BigCta() {
  return (
    <section className="relative overflow-hidden">
      <img src={ctaImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-28 md:px-8 md:py-36">
        <div className="max-w-2xl">
          <h2 className="text-hero font-black uppercase text-white">
            Ready to Join <br />
            <span className="text-[color:var(--color-brand)]">The 24 FITNESS</span> Family?
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-[color:var(--color-body)]">
            Walk in for a trial session today. Meet the coaches, tour all three floors and see why 24 FITNESS is Kota's premium
            training home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary btn-primary-hover">
              Contact Us
            </a>
            <a href="#pricing" className="btn-ghost">
              View Plans
            </a>
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
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg uppercase text-white md:text-xl">{f.q}</span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand)]/15 text-[color:var(--color-brand)]">
                    {active ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {active && (
                  <div className="px-6 pb-6 text-[16px] leading-[1.7] text-[color:var(--color-body)]">{f.a}</div>
                )}
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
            Drop us a message or visit our facility in Rama Krishna Puram, Kota — we're on the floor daily.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch shortly.");
            }}
            className="rounded-3xl border border-white/10 bg-[#121212] p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-white/70">
                Name
                <input
                  required
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[color:var(--color-brand)]"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/70">
                Phone
                <input
                  required
                  className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[color:var(--color-brand)]"
                  placeholder="Phone number"
                />
              </label>
            </div>
            <label className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              Email
              <input
                type="email"
                required
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[color:var(--color-brand)]"
                placeholder="you@email.com"
              />
            </label>
            <label className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              Message
              <textarea
                required
                rows={4}
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-[color:var(--color-brand)]"
                placeholder="Tell us about your goals..."
              />
            </label>
            <button type="submit" className="btn-primary btn-primary-hover mt-6 w-full">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
              <h3 className="font-display text-2xl uppercase text-white">Visit The Facility</h3>
              <ul className="mt-6 space-y-4 text-[15px] text-[color:var(--color-body)]">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-[color:var(--color-brand)]" />
                  Rama Krishna Puram, near Ahinsa Circle, Kota, Rajasthan, India
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-[color:var(--color-brand)]" /> [Add phone number]
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-[color:var(--color-brand)]" /> hello@24fitness.in
                </li>
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-[color:var(--color-brand)]" /> Mon–Sun · 5:00 AM – 10:00 PM
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="24 FITNESS location"
                src="https://www.google.com/maps?q=Ahinsa+Circle+Kota+Rajasthan&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
            Premium triple-floor gym in Kota, Rajasthan. Train harder. Transform faster.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-body)]">
            <li><a href="#about" className="hover:text-[color:var(--color-brand)]">About</a></li>
            <li><a href="#contact" className="hover:text-[color:var(--color-brand)]">Contact</a></li>
            <li><a href="#gallery" className="hover:text-[color:var(--color-brand)]">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-body)]">
            <li>Yoga & Pilates</li>
            <li>Muscle Building</li>
            <li>Boxing Classes</li>
            <li>Personal Training</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-white">Follow</h4>
          <div className="mt-4 flex gap-2">
            <a href="#" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-[color:var(--color-brand)] hover:text-[color:var(--color-brand)]">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} 24 FITNESS — All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
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
        <Hero />
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
