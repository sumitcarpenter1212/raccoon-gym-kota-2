import { Link } from "@tanstack/react-router";
import { ArrowLeft, Phone, MapPin, Instagram } from "lucide-react";
import { IMAGES, PHONE, PHONE_DISPLAY, ADDRESS, INSTAGRAM, MAPS_LINK } from "@/data/site";
import { MEMBER_LINKS } from "@/data/member-links";

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src={IMAGES.logo}
        alt="Herculean Fitness Club Jhalawar logo"
        width={128}
        height={128}
        className="h-12 w-12 rounded-full object-cover drop-shadow-[0_0_18px_rgba(245,115,14,0.55)]"
      />
      <span className="flex flex-col leading-none">
        <span className="wordmark-3d whitespace-nowrap text-[20px] tracking-[0.06em] md:text-[23px]">
          <span className="text-[color:var(--color-brand)]">Herculean</span>
          <span className="ml-1.5 text-white">Club</span>
        </span>
        <span className="wordmark-sub mt-[7px] flex items-center gap-2 text-[11px] tracking-[0.34em]">
          <span className="h-px w-5 bg-[color:var(--color-brand)]/70" />
          Jhalawar
        </span>
      </span>
    </span>
  );
}

export function PageShell({
  title,
  eyebrow,
  intro,
  image,
  children,
}: {
  title: string;
  eyebrow?: string;
  intro?: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[color:var(--color-background)]">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0A0A0A]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Link to="/" className="flex items-center">
            <Wordmark />
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/" className="btn-ghost !px-4 !py-2 text-xs">
              <ArrowLeft size={14} /> Home
            </Link>
            <a href={`tel:${PHONE}`} className="btn-primary btn-primary-hover !px-4 !py-2 text-xs">
              <Phone size={14} /> Call
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/5">
        {image && (
          <>
            <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[color:var(--color-background)]" />
          </>
        )}
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center md:px-8 md:py-20">
          {eyebrow && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">{eyebrow}</p>
          )}
          <h1 className="text-h2 font-black text-white">{title}</h1>
          {intro && <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-[1.6] text-[color:var(--color-body)]">{intro}</p>}
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">{children}</main>

      <footer className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-[1.6] text-[color:var(--color-body)]">{ADDRESS}</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-[color:var(--color-body)]">
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 hover:text-white">
                <Phone size={15} /> {PHONE_DISPLAY}
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <MapPin size={15} /> Get Directions
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <Instagram size={15} /> @fitsters_jwr
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[color:var(--color-brand)]">Member Services</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-[color:var(--color-body)] sm:grid-cols-3">
              {MEMBER_LINKS.map((l) => (
                <Link key={l.to} to={l.to} className="hover:text-[color:var(--color-brand)]">
                  {l.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45 md:px-8">
          © {new Date().getFullYear()} Herculean Fitness Club Jhalawar. All rights reserved.
        </div>
      </footer>
    </div>
  );
}