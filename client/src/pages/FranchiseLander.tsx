/**
 * LOCAL HANDYMAN — FRANCHISE RECRUITMENT LANDING PAGE
 * Design: Orange (#F04E23) + Dark Navy (#1C2B4A) + White — Montserrat/Barlow Condensed
 * Modeled on: Monty's disruptor hook + TruBlue 3-path entry + Kona Ice social proof
 * FDD COMPLIANCE: No earnings claims, no revenue figures, no financial projections
 * Sections: Nav → Hero+Form → Why Now → Why LH → How It Works → Franchisee Proof → Investment → FAQ → Final CTA
 */
import { useState, useEffect, useRef } from "react";
import { ChevronDown, CheckCircle, Play, MapPin, TrendingUp, Shield, Users, DollarSign, Clock, Star, Phone, Mail, ArrowRight } from "lucide-react";


// Scroll reveal animation component
function Reveal({ children, delay = 0, className = "" }: { children: any; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setVisible(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTimeout(() => setVisible(true), delay); observer.unobserve(el); } },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const LH_ORANGE = "#F04E23";
const HANDYMAN_1987_IMG = "/manus-storage/lh-1987-bg-clean_9dba94aa.jpg";
const LH_NAVY = "#1C2B4A";
const LOGO_URL = "/manus-storage/handymanlogo_d9f89eaa.png";
const HERO_IMG = "/manus-storage/lh-franchise-hero-v2_6c1b7f20.jpg";
const OWNER_IMG = "/manus-storage/lh-franchise-owner-v2_ff931b44.jpg";
const NIKKI_IMG = "/manus-storage/LocalHandyman-_Apr26-400x400_51f410f6.jpg";
const CHUNKCHUNK_IMG = "/manus-storage/lh-chunkchunk-ad_8623bf04.jpg";


const HERO_FULLBLEED = "/manus-storage/lh-hero-fullbleed_cd3bc2e2.jpg";

// Real LH franchisee photos from Google Drive
// Real LH franchisee work photos (correct branding)
const PHOTO_CAULKING = "/manus-storage/loc-13-image-1781038744882_mq74hesy_884fdd46_2483a293.png";
const PHOTO_BASEBOARD = "/manus-storage/loc-22-image-1784834356703_mrxwajmn_86eeb15d_a86325b9.png";
const PHOTO_PRESSURE_WASH = "/manus-storage/loc-5-image-1780506589508_mpybnh38_63a6a0d7_b46aa351.png";
const PHOTO_DECK_RAILING = "/manus-storage/loc-19-image-1780507361162_mpyc40i2_13c55fff_79953019.png";
const PHOTO_REPAIR_1 = "/manus-storage/loc-49-image-1780942860891_mq5jea8r_f2757d34_c37a95d1.png";
const PHOTO_REPAIR_2 = "/manus-storage/loc-33-image-1785778462623_msdie0f3_bd924dd6_4f444d6d.png";
const PHOTO_REPAIR_3 = "/manus-storage/loc-49-image-1784829542283_mrxtfcsr_45d5640d_a3b026a6.png";
const PHOTO_REPAIR_4 = "/manus-storage/loc-13-image-1780935139706_mq5essje_381bacb4_423239b3.png";
const PHOTO_BEFORE_AFTER_OKC = "/manus-storage/cohort2_v6_oklahoma_city_86eb4b43_bc45edfb.webp";
const PHOTO_BEFORE_AFTER_PIT = "/manus-storage/cohort2_v6_pittsburgh_de73f969_5e27a5b7.webp";
const PHOTO_BEFORE_AFTER_CLT = "/manus-storage/cohort2_v6_north_charlotte_0f724800_bb836084.webp";

// Real franchisee team photos from Supabase (correct LH branding)
const PHOTO_ATLANTA_VAN = "/manus-storage/atlanta_team_1_eaff8329.jpg";
const PHOTO_ATLANTA_TEAM = "/manus-storage/atlanta_team_3_38aba96a.jpg";
const PHOTO_RALEIGH_OWNER = "/manus-storage/raleigh_team_1_23719365.jpg";
const PHOTO_RALEIGH_TEAM = "/manus-storage/raleigh_team_2_8585b8f5.jpg";
const PHOTO_CALGARY_TEAM = "/manus-storage/calgary_team_1_46bfda53.jpg";
const HERO_VAN_TECH = "/manus-storage/lh-hero-v3_1e396437.jpg";



function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.7s cubic-bezier(0.23,1,0.32,1), transform 0.7s cubic-bezier(0.23,1,0.32,1)";
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const faqs = [
  { q: "Do I need trades experience to own a Local Handyman franchise?", a: "No. We provide the systems; you provide the leadership. Our most successful franchisees come from operations, sales, and management backgrounds — not the trades. You hire and manage the skilled technicians." },
  { q: "What is the total investment to get started?", a: "We recommend a minimum of $350,000–$400,000 in liquid capital for first-year sustainability. This covers the $60,000 franchise fee, vehicle and wrap, tools, marketing materials, and operating reserves to support you through your first year of growth. Financing options are available and will be discussed on your discovery call." },
  { q: "What are the royalties?", a: "6%–10% royalty depending on annual revenues. This includes ongoing field support, your dedicated franchise success coach, national marketing campaigns, and access to our proprietary booking and CRM software." },
  { q: "What financing options are available?", a: "Financing options are available and will be discussed in detail on your discovery call. We want to ensure every new partner is properly capitalized for long-term success." },
  { q: "How quickly can I be operational?", a: "Most franchisees are fully operational within 60\u201390 days of signing. Our proprietary 60-day Momentum program turns franchise owners into business owners \u2014 covering cashflow, sales, marketing, and operations." },
  { q: "Will I have exclusive territorial rights?", a: "Yes. For the territory or territories you purchase, you have exclusive rights. You also have the first right of refusal on adjacent territories for 12 months." },
  { q: "How do I find and hire handymen?", a: "We have proven systems and processes to help you find and hire the right people for your van(s). You are never alone in this process \u2014 our team supports hiring from day one." },
  { q: "What marketing support do you provide?", a: "Focused quick-launch tactics including print, offline, web, social media, and online tools. All websites, design, SEO, copywriting, and content are managed by Local Handyman Group. We also have regular marketing calls with all franchise owners to discuss what\u2019s working." },
  { q: "What training and support programs do you offer?", a: "We offer a proprietary 60-day Momentum program that turns Franchise Owners into Business Owners and helps them fully understand all aspects of the business from Cashflow, Sales, Marketing and Operations. Plus, we have multiple training and collaboration calls each month to fully support in all areas of business." },
  { q: "Will there be ongoing training for new products, services, or updates?", a: "Yes. We have frequent system-wide calls with all Franchise Owners to share updates, new services, and best practices across the network." },
  { q: "Can franchisees contribute ideas or participate in local marketing efforts?", a: "Absolutely. We have regular marketing calls with all the Franchise Owners to discuss what is working and new initiatives to implement." },
  { q: "Can I speak with current franchisees?", a: "Yes. We are more than happy to make introductions to our current franchise owners during the discovery period so you can learn directly from their experience." },
];

const steps = [
  { num: "01", title: "Submit Your Info", desc: "Fill out the short form below. Takes 90 seconds. No obligation." },
  { num: "02", title: "Discovery Call", desc: "A 20-minute call with our franchise team. We'll answer every question and walk you through the numbers." },
  { num: "03", title: "Review the FDD", desc: "We send you the Franchise Disclosure Document. Take your time — no pressure." },
  { num: "04", title: "Territory Agreement", desc: "Sign your agreement, complete training, and launch your Local Handyman location." },
];

const whyItems = [
  { icon: Users, title: "You're the Conductor, Not the Technician", desc: "You don't swing a hammer. You don't need to be 'handy.' You hire skilled tradespeople and direct the business — like a conductor leads an orchestra." },
  { icon: Shield, title: "No Trades Experience Required", desc: "Our most successful owners come from corporate, sales, and operations backgrounds. You bring leadership. We bring the systems, training, and playbooks." },
  { icon: TrendingUp, title: "Scalable to 4 Vans", desc: "Build to four vans per territory in 12–18 months. Multiple revenue streams: residential repairs, commercial contracts, and recurring service plans." },
  { icon: DollarSign, title: "$600B+ Market, Bar on the Floor", desc: "Your competition uses paper invoices and whiteboard scheduling. Less than 1% of revenue goes to technology. The opportunity is massive." },
  { icon: MapPin, title: "Protected Territory", desc: "Your territory is yours exclusively. First right of refusal on adjacent territories for 12 months as you grow." },
  { icon: Clock, title: "60-Day Momentum Launch", desc: "Our proprietary 60-day program turns you from franchise owner to business owner — covering cashflow, sales, marketing, and operations." },
];

function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", zip: "", capitalConfirm: false });

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-14 h-14 mx-auto mb-4" style={{ color: LH_ORANGE }} />
        <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: "Montserrat, sans-serif" }}>Application Received!</h3>
        <p className="text-white/80 text-sm">A member of our franchise team will reach out within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide block mb-1" style={{ color: "#1C2B4A" }}>First Name *</label>
          <input required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})}
            className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:bg-white transition-all"
            placeholder="First name" />
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide block mb-1" style={{ color: "#1C2B4A" }}>Last Name *</label>
          <input required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})}
            className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:bg-white transition-all"
            placeholder="Last name" />
        </div>
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide block mb-1" style={{ color: "#1C2B4A" }}>Email Address *</label>
        <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
          className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:bg-white transition-all"
          placeholder="your@email.com" />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide block mb-1" style={{ color: "#1C2B4A" }}>Phone Number *</label>
        <input required type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
          className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:bg-white transition-all"
          placeholder="(555) 000-0000" />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wide block mb-1" style={{ color: "#1C2B4A" }}>Zip / Postal Code *</label>
        <input required value={form.zip} onChange={e => setForm({...form, zip: e.target.value})}
          className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:border-orange-400 focus:bg-white transition-all"
          placeholder="Enter your zip or postal code" />
      </div>
      <div className="flex items-start gap-2 py-1">
        <input required type="checkbox" id="capitalConfirm" checked={form.capitalConfirm} onChange={e => setForm({...form, capitalConfirm: e.target.checked})}
          className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-orange-500" />
        <label htmlFor="capitalConfirm" className="text-xs text-gray-600 leading-tight">
          I confirm I have access to a minimum of <strong>$350,000 in liquid capital</strong> or equivalent financing capacity.
        </label>
      </div>
      <button type="submit"
        className="w-full py-4 rounded-xl font-black text-white text-base uppercase tracking-wider transition-all duration-150 active:scale-[0.98] hover:brightness-110"
        style={{ backgroundColor: LH_ORANGE, fontFamily: "Montserrat, sans-serif", letterSpacing: "0.08em" }}>
        CHECK AVAILABILITY →
      </button>
      <p className="text-gray-400 text-xs text-center">No obligation. No broker fees. 100% confidential.</p>
    </form>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-orange-600 transition-colors group">
        <span className="font-bold text-sm md:text-base" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>{q}</span>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: LH_ORANGE }} />
      </button>
      {open && <p className="pb-5 text-gray-600 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function FranchiseLander() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Montserrat, Open Sans, sans-serif" }}>
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <img src={LOGO_URL} alt="Local Handyman" className="h-9 w-auto" />
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-600">
            <a href="#why-now" className="hover:text-orange-600 transition-colors">Why Now</a>
            <a href="#how-it-works" className="hover:text-orange-600 transition-colors">How It Works</a>
            <a href="#investment" className="hover:text-orange-600 transition-colors">Investment</a>
            <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
          </div>
          <a href="#apply"
            className="px-5 py-2.5 rounded-lg text-white text-sm font-black uppercase tracking-wide transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: LH_ORANGE, fontFamily: "Montserrat, sans-serif" }}>
            Apply Now
          </a>
        </div>
      </nav>

      {/* ── HERO + FORM — full-bleed Kona-style ── */}
      <section id="apply" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-bleed background */}
        <div className="absolute inset-0">
          <img src={HERO_VAN_TECH} alt="" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(28,43,74,0.90) 0%, rgba(28,43,74,0.70) 45%, rgba(28,43,74,0.20) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(28,43,74,0.55) 0%, transparent 45%)" }} />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center">
            {/* Left — Copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                style={{ backgroundColor: `${LH_ORANGE}33`, color: LH_ORANGE, border: `1px solid ${LH_ORANGE}66` }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: LH_ORANGE }} />
                Territories Available Now
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-4 md:mb-6 uppercase"
                style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.02em", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
                Dominate a<br />$600B Industry<br />
                <span style={{ color: LH_ORANGE }}>Still Running on Pencil & Paper.</span>
              </h1>

              <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-lg" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
                McKinsey ranks the trades as the 2nd-to-last digitized industry on Earth. For forward-thinking investors, this is the dip — recession-proof, AI-proof, and backed by $600B in annual demand. This window won't be open forever.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                {["$600B+ Market", "Protected Territory", "60-Day Launch", "No Trades Experience Required"].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: LH_ORANGE }} />
                    <span className="text-white font-semibold text-sm" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                {([["13K+", "Customers Served"], ["4.9★", "Google Rating"], ["BBB A+", "Accredited"]] as [string,string][]).map(([val, label], i) => (
                  <div key={label} className="flex items-center gap-3">
                    {i > 0 && <div className="w-px h-8 bg-white/30 hidden sm:block" />}
                    <div>
                      <div className="text-2xl font-black" style={{ color: i === 2 ? LH_ORANGE : "white", fontFamily: "Montserrat, sans-serif", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>{val}</div>
                      <div className="text-white/60 text-xs uppercase tracking-wide">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form floats on hero */}
            <div className="rounded-2xl p-6 md:p-8 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.97)", boxShadow: "0 24px 80px rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.6)" }}>
              <div className="mb-5">
                <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ fontFamily: "Montserrat, sans-serif", color: "#1C2B4A" }}>
                  See If Your Territory Is Available
                </h2>
                
              </div>
              <ApplicationForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY NOW ── */}

      <section id="why-now" className="py-20" style={{ backgroundColor: "#FFF8F5" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>The Investment Thesis</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              Own a Business That AI<br />Will Never Replace.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              $600 billion in annual demand. Recession-proof. AI-proof. And the competition is still running on paper and pencil. High demand, slow to adopt technology, and safe from disruption — this is the rare business that only grows as everything else gets automated away.
            </p>
          </div>

          {/* Video placeholder */}
          <div className="rounded-2xl overflow-hidden relative cursor-pointer group max-w-3xl mx-auto mb-12"
            style={{ backgroundColor: LH_NAVY, aspectRatio: "16/9" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{ backgroundColor: LH_ORANGE }}>
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <p className="text-white font-bold text-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>Watch: The Local Handyman Opportunity</p>
              <p className="text-white/60 text-sm mt-1">3 minutes · Franchise overview</p>
            </div>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)" }} />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white"
              style={{ backgroundColor: LH_ORANGE }}>
              VIDEO PLACEHOLDER
            </div>
          </div>

          {/* Your Competition Is Stuck in 1987 — Clean Two Column */}
          <div className="rounded-2xl overflow-hidden shadow-sm mt-12" style={{ border: "1px solid #e5e7eb" }}>
            <div className="grid md:grid-cols-2">
              {/* Left — 1987 handyman image */}
              <div className="relative min-h-[400px] md:min-h-[600px]">
                <img src={HANDYMAN_1987_IMG} alt="Handyman stuck in 1987 — paper invoices, cash, no technology" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="font-black text-2xl md:text-3xl uppercase text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    Your Competition<br />Is Stuck in 1987
                  </h4>
                </div>
              </div>
              {/* Right — Bottom 7% headline + evidence */}
              <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>McKinsey Global Institute</p>
                <h3 className="text-4xl md:text-5xl font-black mb-2" style={{ color: LH_ORANGE, fontFamily: "Montserrat, sans-serif" }}>
                  Bottom 7%
                </h3>
                <p className="text-lg font-bold mb-2" style={{ color: LH_NAVY }}>
                  Technology Adoption
                </p>
                <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                  The home services industry ranks lower than 93% of all industries in technology adoption. Most operators still run on paper, cash, and word-of-mouth — spending less than 1% of revenue on IT.
                </p>

                <div className="space-y-3">
                  {[
                    { fact: "Carbon-copy invoices", detail: "Triplicate paper forms, no digital records" },
                    { fact: "Cash & check only", detail: "No digital payments, no receipts" },
                    { fact: "28% of calls missed", detail: "No answering system — customers hang up" },
                    { fact: "Whiteboard scheduling", detail: "No online booking, no dispatch software" },
                    { fact: "One van, one person", detail: "No scalability, no growth plan" },
                    { fact: "<1% IT spending", detail: "Less than any other industry on Earth" },
                    { fact: "No CRM or follow-up", detail: "Customer calls once, never hears back" },
                    { fact: "Word-of-mouth only", detail: "No website, no reviews, no presence" },
                  ].map(item => (
                    <div key={item.fact} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full shrink-0 mt-2" style={{ backgroundColor: LH_ORANGE }} />
                      <div>
                        <span className="text-sm font-bold" style={{ color: LH_NAVY }}>{item.fact}</span>
                        <span className="text-xs text-gray-500 ml-2">{item.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm mt-8 font-bold" style={{ color: LH_ORANGE }}>
                  This is who you're up against. This is why the window is wide open.
                </p>
              </div>
            </div>
          </div>

          {/* ── DEMAND vs SUPPLY — VISUAL CHART ── */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-black uppercase text-center mb-3" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              The Demand Is Real. The Supply Can't Keep Up.
            </h3>
            <p className="text-center text-sm text-gray-500 mb-10 max-w-2xl mx-auto">Homeowner demand is surging. But the industry's ability to serve it hasn't changed in decades. The gap between the two is your opportunity.</p>

            {/* Visual Demand vs Supply Chart */}
            <div className="rounded-2xl bg-white shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
              <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 rounded-full" style={{ backgroundColor: LH_ORANGE }} />
                    <span className="text-xs font-bold text-gray-600">Demand Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-1 rounded-full bg-gray-300" />
                    <span className="text-xs font-bold text-gray-600">Industry Tech Adoption</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Sources: ABC, McKinsey, Angi, BLS</span>
              </div>

              {/* SVG Chart */}
              <div className="relative w-full" style={{ height: "300px" }}>
                <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                  {/* Grid */}
                  <line x1="60" y1="40" x2="60" y2="260" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="260" x2="760" y2="260" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="60" y1="190" x2="760" y2="190" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4" />
                  <line x1="60" y1="120" x2="760" y2="120" stroke="#f3f4f6" strokeWidth="1" strokeDasharray="4" />
                  {/* Y-axis */}
                  <text x="50" y="265" textAnchor="end" fontSize="11" fill="#9ca3af">Low</text>
                  <text x="50" y="195" textAnchor="end" fontSize="11" fill="#9ca3af">Med</text>
                  <text x="50" y="125" textAnchor="end" fontSize="11" fill="#9ca3af">High</text>
                  <text x="50" y="55" textAnchor="end" fontSize="11" fill="#9ca3af">Peak</text>
                  {/* X-axis */}
                  <text x="100" y="280" textAnchor="middle" fontSize="11" fill="#9ca3af">2018</text>
                  <text x="240" y="280" textAnchor="middle" fontSize="11" fill="#9ca3af">2020</text>
                  <text x="380" y="280" textAnchor="middle" fontSize="11" fill="#9ca3af">2022</text>
                  <text x="520" y="280" textAnchor="middle" fontSize="11" fill="#9ca3af">2024</text>
                  <text x="660" y="280" textAnchor="middle" fontSize="11" fill="#9ca3af">2026</text>
                  {/* Shaded gap area */}
                  <path d="M 100 220 C 180 210, 220 195, 280 170 C 340 145, 380 120, 440 95 C 500 72, 560 58, 640 48 C 680 43, 700 40, 720 38 L 720 215 C 600 218, 500 220, 400 222 C 300 225, 200 228, 100 230 Z" fill="#F04E23" fillOpacity="0.07" />
                  {/* Supply line — FLAT */}
                  <path d="M 100 230 C 200 228, 300 225, 400 222 C 500 220, 600 218, 720 215" fill="none" stroke="#d1d5db" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="720" cy="215" r="5" fill="#d1d5db" />
                  {/* Demand line — SURGING */}
                  <path d="M 100 220 C 180 210, 220 195, 280 170 C 340 145, 380 120, 440 95 C 500 72, 560 58, 640 48 C 680 43, 700 40, 720 38" fill="none" stroke="#F04E23" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="720" cy="38" r="6" fill="#F04E23" />
                  {/* Gap annotation */}
                  <line x1="640" y1="52" x2="640" y2="217" stroke="#F04E23" strokeWidth="1.5" strokeDasharray="4" />
                  <text x="655" y="130" fontSize="13" fontWeight="bold" fill="#F04E23">THE GAP</text>
                  <text x="655" y="148" fontSize="10" fill="#6b7280">= Your Opportunity</text>
                  {/* COVID marker */}
                  <line x1="240" y1="45" x2="240" y2="260" stroke="#F04E23" strokeWidth="1" strokeDasharray="2" opacity="0.4" />
                  <text x="248" y="55" fontSize="9" fill="#F04E23" opacity="0.8">COVID</text>
                  <text x="248" y="67" fontSize="9" fill="#F04E23" opacity="0.6">+150% bookings</text>
                  {/* Line labels */}
                  <text x="730" y="35" fontSize="11" fontWeight="bold" fill="#F04E23">DEMAND</text>
                  <text x="730" y="220" fontSize="11" fontWeight="bold" fill="#9ca3af">SUPPLY</text>
                </svg>
              </div>
            </div>

            {/* Key stats row below chart */}
            <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { stat: "+150%", label: "Booking demand since 2020", source: "Angi", color: LH_ORANGE },
                { stat: "4–8 wk", label: "Average wait for a contractor", source: "ABC", color: LH_NAVY },
                { stat: "28%", label: "Service calls go unanswered", source: "VocalyAI", color: LH_ORANGE },
                { stat: "20:1", label: "Job openings vs. workers entering trades", source: "McKinsey", color: LH_NAVY },
              ].map(item => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-white shadow-sm border border-gray-100">
                  <div className="text-2xl md:text-3xl font-black mb-1" style={{ color: item.color, fontFamily: "Montserrat, sans-serif" }}>{item.stat}</div>
                  <div className="text-xs text-gray-600 leading-tight font-medium">{item.label}</div>
                  <div className="text-[10px] text-gray-400 mt-1">Source: {item.source}</div>
                </div>
              ))}
            </div>
            </Reveal>

            {/* Bloomberg + McKinsey demand-supply quote */}
            <Reveal delay={200}>
            <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: LH_NAVY }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: LH_ORANGE }}>Bloomberg, January 2026</p>
              <p className="text-white text-lg md:text-xl font-bold leading-relaxed max-w-2xl mx-auto">
                "The home services sector is already worth nearly <span style={{ color: LH_ORANGE }}>$700 billion</span> and on track to top <span style={{ color: LH_ORANGE }}>$1.4 trillion</span> by the end of the decade."
              </p>
              <p className="text-white/60 text-sm mt-4 max-w-xl mx-auto">Meanwhile, McKinsey projects <span className="text-white font-bold">20x more job openings than workers entering the trades</span> — demand is surging while the workforce to serve it is shrinking.</p>
            </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* ── PHOTO MOSAIC STRIP ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={PHOTO_PRESSURE_WASH} alt="Pressure washing driveway" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={PHOTO_REPAIR_3} alt="Local Handyman repair work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={PHOTO_BEFORE_AFTER_PIT} alt="Before and after — Pittsburgh" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={PHOTO_REPAIR_4} alt="Local Handyman technician at work" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* ── WHY LOCAL HANDYMAN ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <Reveal><p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>The Ownership Model</p></Reveal>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              You Run the Business.<br />Not the Repairs.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">You don't need to be "handy." You don't need trades experience. You're the director — hiring skilled technicians, managing the system, and growing the business. Think of it like owning a restaurant without being the chef.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${LH_ORANGE}20` }}>
                  <Icon className="w-6 h-6" style={{ color: LH_ORANGE }} />
                </div>
                <h3 className="font-black text-base mb-2" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRODUCING LOCAL HANDYMAN ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal><p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>The Solution</p></Reveal>
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
                Local Handyman Is Built<br />for This Moment.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                While the rest of the industry runs on paper calendars and missed calls, Local Handyman operates on AI-powered dispatch, automated booking, real-time customer communication, and a marketing engine that fills your calendar before you open the doors.
              </p>
              <div className="space-y-4">
                {[
                  "Proprietary tech stack — CRM, dispatch, invoicing, and reviews automated from day one",
                  "Mentorship from Colin Sprake — 4x bestselling author, 110,000+ entrepreneurs trained",
                  "Exclusive 50,000-person territories — protected, yours to dominate",
                  "Full training program — no trades experience required, operational in 60 days",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: LH_ORANGE }} />
                    <p className="text-gray-700 text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/manus-storage/1747_0d4047bf.JPG" alt="Local Handyman franchise owner with branded vans" className="rounded-2xl shadow-xl w-full object-cover" style={{ aspectRatio: "1/1" }} />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="text-2xl font-black" style={{ color: LH_ORANGE }}>60+</div>
                <div className="text-xs text-gray-500 font-medium">Territories Sold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20" style={{ backgroundColor: LH_NAVY }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>The Process</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
              From Decision to Revenue<br />in 60 Days
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 -translate-x-1/2 z-0" style={{ backgroundColor: `${LH_ORANGE}30` }} />
                )}
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-black text-xl"
                    style={{ backgroundColor: LH_ORANGE, fontFamily: "Montserrat, sans-serif" }}>
                    {step.num}
                  </div>
                  <h3 className="font-black text-base mb-2 text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FRANCHISEE PROOF ── */}
      <section className="py-20" style={{ backgroundColor: LH_NAVY }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>Franchisee Story</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
                "I Had a Waiting List<br />on My Launch Week.<br />
                <span style={{ color: LH_ORANGE }}>The Demand Is Real."</span>
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                "I had no trades experience at all — I came from operations and sales. My whole tech team was booked the first week we opened. I had a waiting list on launch week. The demand in this market is real, and Local Handyman gave me the brand and systems to capture it."
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-xl text-white"
                  style={{ backgroundColor: LH_ORANGE, fontFamily: "Montserrat, sans-serif" }}>C</div>
                <div>
                  <div className="text-white font-bold">Nicky S.</div>
                  <div className="text-white/60 text-sm">St. Louis, MO — Franchisee</div>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#F5C518" }} />)}
                  </div>
                </div>
              </div>
              <a href="#apply"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-black uppercase tracking-wide text-sm transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: LH_ORANGE, fontFamily: "Montserrat, sans-serif" }}>
                Start Your Story <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="relative">
              <img src={NIKKI_IMG} alt="Nikki — Local Handyman Franchisee" className="rounded-2xl w-full object-cover shadow-2xl" style={{ maxHeight: "480px" }} />
              <div className="absolute -bottom-4 -left-4 rounded-xl p-4 shadow-xl" style={{ backgroundColor: LH_ORANGE }}>
                <div className="text-white font-black text-xl leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>Booked<br />Week 1</div>
                <div className="text-white/80 text-xs uppercase tracking-wide mt-1">Launch Week</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WE FIX EVERYTHING MOSAIC ── */}

      {/* ── WE FIX EVERYTHING MOSAIC ── */}

      {/* ── PARTNER VIDEO TESTIMONIALS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>Success Partners</p>
            <h2 className="text-2xl md:text-3xl font-black uppercase" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              Hear from Our Partners
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { label: "Regina, SK", src: "https://assets.cdn.filesafe.space/ZsBUSW0nlx5d5Mjpk3ph/media/67fcd4be71384bfbb2b4a6d3.mp4#t=0.5" },
              { label: "Kelowna, BC", src: "https://assets.cdn.filesafe.space/ZsBUSW0nlx5d5Mjpk3ph/media/67fcd7fbc7a01536ded82be3.mp4#t=0.5" },
              { label: "Lethbridge, AB", src: "https://assets.cdn.filesafe.space/ZsBUSW0nlx5d5Mjpk3ph/media/67fce03fc7a015f2f6d833a6.mp4#t=0.5" },
              { label: "Calgary, AB", src: "https://assets.cdn.filesafe.space/ZsBUSW0nlx5d5Mjpk3ph/media/67fcdcee56be24f746e4ad2b.mp4#t=0.5" },
            ].map(({ label, src }) => (
              <div key={label} className="rounded-2xl overflow-hidden shadow-lg">
              <div style={{ aspectRatio: "16/9" }}>
                  <video controls preload="metadata" className="w-full h-full object-cover">
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
                <div className="p-4 bg-gray-50">
                  <p className="font-bold text-sm" style={{ color: LH_NAVY }}>Local Handyman {label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WRITTEN TESTIMONIALS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Reveal><p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>Our Success Partners</p></Reveal>
            <h2 className="text-3xl md:text-4xl font-black uppercase" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              What They're Saying
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { location: "Regina, SK", quote: "We couldn't be happier with our choice.", body: "Local Handyman Group Head Office has offered unwavering support. It's been about 5 years since we opened Handyman Regina, and we couldn't be happier with our choice. The training, resources, and ongoing assistance have exceeded our expectations, making it possible for us to deliver top-notch services to our community.", img: "/manus-storage/tmp4ml9n3qa_423588a3.webp" },
              { location: "Vancouver, BC", quote: "Joining the Local Handyman Group has been a game-changer.", body: "Their franchise model provided a proven recipe for success, offering the support and structure I needed to grow a reputable handyman business. Joining the Local Handyman Group has been a game-changer, allowing me to work smarter, not harder, and focus on providing top-quality services without the heavy lifting.", img: "/manus-storage/tmpu5slgdnq_66616ecb.webp" },
              { location: "Calgary, AB", quote: "From day one, they've been there every step of the way.", body: "Starting a business has many challenges, but the journey has been so rewarding. A key factor in our success has been the unwavering support from our franchise Head Office. From day one, they've been there every step of the way, offering guidance, resources, and encouragement that have made all the difference.", img: "/manus-storage/tmpmyx91iia_63a0e156.webp" },
            ].map(({ location, quote, body, img }) => (
              <div key={location} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt={`Local Handyman ${location} team`} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: "#F5C518" }} />)}
                </div>
                <h3 className="font-black text-lg mb-3" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>"{quote}"</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{body}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: LH_ORANGE }}>{location[0]}</div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: LH_NAVY }}>Local Handyman {location}</div>
                    <div className="text-xs text-gray-500">Success Partner</div>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WE FIX EVERYTHING MOSAIC ── */}
      <section className="py-0 bg-white overflow-hidden">
        <div className="text-center py-12 px-4">
          <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: LH_ORANGE }}>Our Scope</p>
          <h2 className="text-3xl md:text-4xl font-black uppercase" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>We Handle What Homeowners<br />Actually Call About.</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">We don't do electrical, roofing, or major plumbing — those require specialized licensing. What we do is everything else: the 80% of home repair calls that solo operators fumble because they're disorganized, overbooked, or unreachable. Drywall, painting, decks, doors, tiling, furniture assembly, shelving, fencing — backed by AI-powered dispatch, automated booking, and a tech stack that gets your team to the job faster, more specialized, and more effective than any single-van operator in your market.</p>
          </Reveal>
        </div>
        {/* Kona-style full-width asymmetric mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ height: "auto" }}>
          <div className="relative overflow-hidden col-span-2 row-span-1" style={{ aspectRatio: "2/1" }}>
            <img src={PHOTO_CAULKING} alt="Bathroom caulking" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-bold uppercase tracking-wide" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>Bathroom Renovation</div>
          </div>
          <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
            <img src={PHOTO_BASEBOARD} alt="Interior painting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-bold uppercase tracking-wide" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>Interior Painting</div>
          </div>
          <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
            <img src={PHOTO_DECK_RAILING} alt="Deck railing installation" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-bold uppercase tracking-wide" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>Door Installation</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0" style={{ height: "auto" }}>
          <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
            <img src={PHOTO_REPAIR_1} alt="Handyman repair work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-bold uppercase tracking-wide" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>General Repairs</div>
          </div>
          <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
            <img src={PHOTO_REPAIR_2} alt="Home repair services" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-bold uppercase tracking-wide" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>Home Services</div>
          </div>
          <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
            <img src={PHOTO_BEFORE_AFTER_OKC} alt="Before and after — Oklahoma City" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-bold uppercase tracking-wide" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>Before & After — Oklahoma City</div>
          </div>
        </div>
      </section>

      {/* ── INVESTMENT ── */}
      <section id="investment" className="py-20" style={{ backgroundColor: "#FFF8F5" }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <Reveal><p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>Investment</p></Reveal>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              What It Costs to Get In<br />While the Window Is Open.
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">We believe in full transparency. Here's what it costs to open a Local Handyman franchise — and what you get for it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
            {[
              { label: "Franchise Fee", amount: "$60,000", desc: "Per territory. Includes territory rights, brand license, and the 60-day Momentum onboarding program." },
              { label: "Recommended Capital", amount: "$350K–$400K", desc: "Minimum liquid capital recommended for first-year sustainability. Covers franchise fee, build-out, vehicle, marketing, and operating reserves.", highlight: true },
              { label: "Royalty", amount: "6%–10%", desc: "Based on annual revenues. Includes ongoing field support, software platform, national marketing, and your franchise success coach." },
            ].map(item => (
              <div key={item.label} className={`rounded-2xl p-8 text-center ${item.highlight ? "shadow-xl" : ""}`}
                style={{ backgroundColor: item.highlight ? LH_NAVY : "#F8F9FA", border: item.highlight ? `2px solid ${LH_ORANGE}` : "none" }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: item.highlight ? LH_ORANGE : "#9B9B9B" }}>{item.label}</div>
                <div className="text-4xl font-black mb-3" style={{ color: item.highlight ? "white" : LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>{item.amount}</div>
                <p className="text-sm leading-relaxed" style={{ color: item.highlight ? "rgba(255,255,255,0.7)" : "#6B7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ backgroundColor: `${LH_ORANGE}10`, border: `1px solid ${LH_ORANGE}30` }}>
            <div>
              <p className="font-bold text-base" style={{ color: LH_NAVY }}>Want the full financial breakdown?</p>
              <p className="text-gray-600 text-sm">We'll walk through the complete FDD on your discovery call. All financial details are disclosed in full — no surprises, no pressure.</p>
            </div>
            <a href="#apply"
              className="flex-shrink-0 px-6 py-3 rounded-xl text-white font-black uppercase tracking-wide text-sm transition-all hover:brightness-110 whitespace-nowrap"
              style={{ backgroundColor: LH_ORANGE, fontFamily: "Montserrat, sans-serif" }}>
              Get the Numbers →
            </a>
          </div>
        </div>
      </section>


      {/* ── OWNERS STRIP ── */}
      <section className="py-16 overflow-hidden" style={{ background: LH_NAVY }}>
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: LH_ORANGE }}>Growing Network</p>
          <h2 className="text-3xl font-black uppercase text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>Smart Investors Already In. More Territories Closing.</h2>
          <p className="text-gray-300 mt-3 max-w-xl mx-auto">From Raleigh to Calgary, franchisees are building the Local Handyman brand in their communities.</p>
        </div>
        {/* Wide cinematic owner photos — different sizes for visual rhythm */}
        <div className="flex gap-4 px-4 md:px-8 overflow-x-auto pb-2" style={{ scrollSnapType: "x mandatory" }}>
          {[
            { src: "/manus-storage/IMG_8179_100c1d9f.jpeg", label: "Fraser Valley, BC", w: "280px" },
            { src: "/manus-storage/IMG_8175_16a0d172.jpeg", label: "Raleigh, NC", w: "280px" },
            { src: "/manus-storage/1747_0d4047bf.JPG", label: "St. Louis, MO", w: "320px" },
            { src: PHOTO_BEFORE_AFTER_OKC, label: "Oklahoma City, OK", w: "280px" },
            { src: PHOTO_BEFORE_AFTER_PIT, label: "Pittsburgh, PA", w: "280px" },
          ].map(({ src, label, w }) => (
            <div key={label} className="flex-shrink-0 rounded-2xl overflow-hidden relative" style={{ width: w, height: "260px", scrollSnapAlign: "start" }}>
              <img src={src} alt={label} className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}>
                <div className="text-white font-bold text-sm uppercase tracking-wide">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLIN SPRAKE — MEET YOUR MENTOR ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>Your Unfair Advantage</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              The Unfair Advantage.<br />A System Built by a 4x Bestselling Author.
            </h2>
          </div>
          </Reveal>
          {/* Video */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-10">
            <video controls className="w-full" poster="https://assets.cdn.filesafe.space/ZsBUSW0nlx5d5Mjpk3ph/media/675ff435fb63bc30765fb086.png" style={{ aspectRatio: "16/9" }}>
              <source src="https://assets.cdn.filesafe.space/ZsBUSW0nlx5d5Mjpk3ph/media/677aeb68b0a11f29d6c5eb3d.mp4" type="video/mp4" />
            </video>
          </div>
          {/* Body copy */}
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Most franchise systems give you a brand and a manual. This one gives you direct access to one of North America's most accomplished entrepreneurial mentors — a 4x bestselling author who has trained over 110,000 entrepreneurs across 21 years. The system isn't just technology. It's the mind behind it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Colin Sprake is the CEO and co-owner of Local Handyman Group. His books — including <em>Entrepreneur Success Stories</em>, <em>Stand Apart</em> (co-authored with Dan Kennedy), and <em>Power Principles For Success</em> (co-authored with Brian Tracy) — have shaped the business thinking of entrepreneurs across dozens of industries. As a Local Handyman franchisee, you don't just get a playbook. You get a mentor.
            </p>
            {/* Credential pills */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {["4x Bestselling Author", "110K+ Entrepreneurs Trained", "21 Years as Founder & CEO", "Co-author with Dan Kennedy", "Co-author with Brian Tracy"].map(c => (
                <span key={c} className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-2" style={{ borderColor: LH_ORANGE, color: LH_NAVY }}>
                  {c}
                </span>
              ))}
            </div>
            <blockquote className="border-l-4 pl-5 italic text-gray-600 leading-relaxed" style={{ borderColor: LH_ORANGE }}>
              "We want you to be a business owner where your income continues no matter what your circumstances are. That's what a real franchise system does — it removes the ceiling."
              <footer className="mt-2 text-sm font-bold not-italic" style={{ color: LH_NAVY }}>— Colin Sprake, CEO, Local Handyman Group</footer>
            </blockquote>
          </div>
        </div>
      </section>


      {/* ── FINAL CTA ── */}
      <section className="py-20" style={{ backgroundColor: LH_NAVY }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: LH_ORANGE }}>Limited Territories Available</p>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-6" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Territories Are Closing.<br />Is Yours Still Available?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Every day you wait, someone else is looking at your territory. Submit your information now — it takes 90 seconds and there's zero obligation.
          </p>
          <a href="#apply"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-white font-black uppercase tracking-wider text-lg transition-all hover:brightness-110 active:scale-95 shadow-2xl"
            style={{ backgroundColor: LH_ORANGE, fontFamily: "Montserrat, sans-serif" }}>
            See If My Territory Is Available <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/40 text-sm mt-4">No obligation. No broker fees. 100% confidential.</p>
        </div>
      </section>



      {/* ── FAQ ── */}
      {/* ── 5-STAR REVIEWS ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>Proven Results</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-4" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              1,600+ Five-Star Google Reviews
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Across 35 locations in the US and Canada, our franchisees have earned 1,695 verified Google reviews with a 4.9-star average. That's not marketing — that's proof the system delivers results for owners and customers alike.
            </p>
          </div>

          {/* Star rating display */}
          <div className="flex justify-center items-center gap-2 mb-10">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-2xl font-black ml-2" style={{ color: LH_NAVY }}>4.9 / 5.0</span>
            <span className="text-sm text-gray-500 ml-2">across 35 locations</span>
          </div>

          {/* Review cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ron B.", location: "Oakville, ON", text: "Communication was easy, mostly by email and text. They completed six of seven jobs in a single day, and I was so happy with the results that I brought them back for the final task. I would recommend Local Handyman to anyone looking for reliable, efficient help around the home.", rating: 5 },
              { name: "Nick C.", location: "Fayetteville, AR", text: "Five stars for Brandon at Local Handyman. He was punctual, showed up when he said he would, and clearly knew his stuff — he sized up the job right away and got straight to work. In and out quickly with everything done right the first time.", rating: 5 },
              { name: "Stacey M.", location: "Memphis, TN", text: "This service was amazing!! I\'ve been looking for a company that works fast, affordable, and easy to contact! This company WAS IT!! Your care has given me a lot of peace of mind. I hope to do business with you again!", rating: 5 },
              { name: "Laura H.", location: "St. Louis, MO", text: "Communication and scheduling were super easy and efficient. Our mailbox repair was done beautifully. Our handyman Greg V. was friendly and did a great job — we would definitely work with him and Local Handyman again.", rating: 5 },
              { name: "Sherri W.", location: "Abbotsford, BC", text: "Mark did a very thorough job. He was so easy to work with and I was very happy with his attention to detail. He knows what he\'s doing, does a good job and then explains it all afterwards!", rating: 5 },
              { name: "Sean B.", location: "Pittsburgh, PA", text: "Extremely happy with our service. From the easy and responsive scheduling process to the quality of the work, highly recommend. Michael was friendly, came on time, and left the space spotless after.", rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{review.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: LH_ORANGE }}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: LH_NAVY }}>{review.name}</p>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-sm text-gray-500">Verified reviews from Google Business Profiles across all 35 Local Handyman locations · <a href="https://localhandymanreviews.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-600" style={{ color: LH_ORANGE }}>See all 1,695 reviews →</a></p>
          </div>
        </div>
      </section>


      {/* ── FAQ ── */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: LH_ORANGE }}>Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-4" style={{ color: LH_NAVY, fontFamily: "Montserrat, sans-serif" }}>
              Everything You Want to Know
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
            {faqs.map(faq => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={LOGO_URL} alt="Local Handyman" className="h-8 w-auto" />
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="tel:+17787704494" className="flex items-center gap-1.5 hover:text-orange-600 transition-colors"><Phone className="w-3.5 h-3.5" />778-770-4494</a>
            <a href="mailto:franchise@localhandyman.com" className="flex items-center gap-1.5 hover:text-orange-600 transition-colors"><Mail className="w-3.5 h-3.5" />franchise@localhandyman.com</a>
          </div>
          <p className="text-xs text-gray-400">© 2026 Local Handyman · LOCALHANDYMAN.COM · SUCCESS PARTNER NETWORK</p>
        </div>
      </footer>
    </div>
  );
}
