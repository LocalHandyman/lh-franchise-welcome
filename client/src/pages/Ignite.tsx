import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ChevronDown, Play, Users, TrendingUp, ShieldCheck, Compass, Menu, X } from "lucide-react";
import "./ignite.css";

const MEDIA = "https://storage.googleapis.com/msgsndr/ZsBUSW0nlx5d5Mjpk3ph/media/";
const BOOKING = "https://calendly.com/colinsprake/call-with-colin-ceo-local-handyman";
const PRESENTATION = "https://gamma.app/docs/Where-Business-Owners-Are-Built-uue52js25itoxlc";
const series = [
  { title: "How do I hire handymen?", topic: "Build your team", id: "685562ceac9458c952ae02aa", poster: "68556812ca34e3c5bb2a011c.png", description: "See how our recruitment systems help you find and hire the people who will deliver your service." },
  { title: "How do I get customers?", topic: "Win local business", id: "685562ceac9458ea29ae02a9", poster: "685568121a74cd66b86a23a2.png", description: "Explore the three pillars of bringing business into your Local Handyman territory." },
  { title: "How do I grow and scale?", topic: "Build beyond the first van", id: "685562ce9f0e4c819816f2d7", poster: "685568121a74cd082e6a23a1.png", description: "Understand how the model supports growth as you develop your team and local operation." },
  { title: "What systems and support do I get?", topic: "Have a team behind you", id: "685562ce8b29500e346e5cff", poster: "6855690bb596227f95de4a62.png", description: "Get a closer look at the tools, training, and ongoing support available to Success Partners." },
];
const stages = [
  { title: "Introductory call", label: "Qualification & your goals", description: "Let's get to know each other. Review Ignite and the Success Partner presentation, talk through your goals, dreams, and desires, and discuss funding requirements.", next: "Next: book your discovery call", tasks: ["Your goals and ownership fit", "Business overview and funding requirements"] },
  { title: "Discovery call", label: "Explore the opportunity", description: "Walk through the brand in detail, discuss the Vivid Vision and Franchise Disclosure Document (FDD), and explore territories and availability.", next: "Next: book your CEO fit call", tasks: ["Full brand and territory review", "Vision and disclosure discussion"] },
  { title: "CEO fit call & due diligence", label: "Make an informed decision", description: "Confirm cultural alignment and mutual fit. If you choose to move forward, access the Success Portal and complete your due diligence, including legal review, entity setup, and validation calls with Success Partners.", next: "Next: complete your review and confirm fit", tasks: ["Meet the CEO and ask your questions", "FDD legal review and partner validation calls"] },
  { title: "Welcome to the family", label: "Prepare for launch", description: "Connect with funding partners, confirm your territory and any applicable first-refusal rights, arrange five-day training, complete the agreement instructions, and finalize signing and payment before onboarding.", next: "Next: training, onboarding, and your launch", tasks: ["Territory, funding, and agreement completion", "Five-day training and launch preparation"] },
];
const faqs = [
  ["Do I need trades experience?", "No trades background is required. Your role is to lead the business and build a team of skilled technicians. We support you with training, recruitment tools, and operating systems."],
  ["How do I find and hire handymen?", "Our recruitment systems and processes help you find and hire the right people for your team. Explore the first video in the four-part series, then discuss your hiring plan with Colin."],
  ["What royalties will I pay?", "Colin will explain the current royalty structure and ongoing fees. Confirm the terms in the current franchise disclosure documents before making a decision."],
  ["Can Success Partners contribute to local marketing?", "Yes. Local relationship-building is part of your role, and regular marketing calls give Success Partners a place to share what is working and discuss new initiatives."],
  ["What investment and funding will I need?", "Colin will walk you through current franchise fees, startup costs, working capital, and funding options for your circumstances. Review the current disclosure documents and confirm the full investment before making a decision."],
  ["What training and ongoing support are included?", "The 60-day Momentum program covers cash flow, sales, marketing, and operations. Ongoing training and collaboration calls help you keep learning alongside other Success Partners."],
  ["How does marketing support work?", "Local Handyman supports your website, design, SEO, copywriting, and content, along with print, offline, social, and online marketing tools. You also build relationships and local visibility in your community."],
  ["Can I speak with existing Success Partners?", "Yes. Validation calls are part of the discovery and due diligence process. We can introduce you to current owners so you can ask about their experience directly."],
  ["How do territories and timing work?", "Available territories, exclusivity, and any adjacent-territory rights are discussed during discovery and confirmed in your agreement. Your timeline depends on due diligence, funding, training, and launch readiness; Colin will walk through it with you."],
];

function track(event: string, detail: string) {
  (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer?.push({ event, page: "ignite", detail });
}
function Booking({ location, children = "Book a call with Colin" }: { location: string; children?: React.ReactNode }) {
  return <a className="ig-button" href={BOOKING} target="_blank" rel="noopener noreferrer" onClick={() => track("ignite_booking_click", location)}>{children}<ArrowRight size={18} aria-hidden="true" /></a>;
}
function Video({ id, title, poster }: { id: string; title: string; poster?: string }) {
  const [failed, setFailed] = useState(false);
  return <div className="ig-video-wrap">
    <video controls playsInline preload="none" tabIndex={0} aria-label={title} poster={poster ? `https://assets.cdn.filesafe.space/ZsBUSW0nlx5d5Mjpk3ph/media/${poster}` : undefined} onPlay={() => track("ignite_video_play", title)} onEnded={() => track("ignite_video_complete", title)} onError={() => setFailed(true)}>
      <source src={`${id === "68416b6961297813d690a95d" ? "https://assets.cdn.filesafe.space/ZsBUSW0nlx5d5Mjpk3ph/media/" : MEDIA}${id}.mp4`} type="video/mp4" />
      Your browser does not support embedded video.
    </video>
    {failed && <p className="ig-video-error" role="status">Having trouble playing this video? <a href={`${MEDIA}${id}.mp4`} target="_blank" rel="noopener noreferrer">Open {title}</a>.</p>}
  </div>;
}
function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="ig-section-heading"><p className="ig-eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="ig-intro">{children}</p>}</div>;
}

export default function Ignite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const dialog = menuRef.current;
    if (!menuOpen || !dialog) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      menuButtonRef.current?.focus({ preventScroll: true });
    };
  }, [menuOpen]);
  return <div className="ignite">
    <a href="#ignite-main" className="ig-skip">Skip to content</a>
    <header className="ig-header"><div className="ig-container ig-header-inner">
      <a href="#ignite-main" aria-label="Local Handyman Ignite, top of page"><img src="/images/handymanlogo_d9f89eaa.png" alt="Local Handyman" width="135" height="67" /></a>
      <nav aria-label="Ignite page"><a href="#partners">Testimonials</a><a href="#your-journey">How It Works</a><a href="#questions">FAQs</a></nav>
      <Booking location="header" />
      <button ref={menuButtonRef} className="ig-menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="ig-mobile-menu" onClick={() => setMenuOpen(true)}><Menu aria-hidden="true" /></button>
    </div></header>
    <dialog ref={menuRef} id="ig-mobile-menu" className="ig-mobile-menu" aria-labelledby="ig-menu-title" onCancel={() => setMenuOpen(false)} onClick={event => { if (event.target === event.currentTarget) setMenuOpen(false); }}>
      <div className="ig-menu-panel">
        <div className="ig-menu-heading"><span id="ig-menu-title">Explore Ignite</span><button type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)}><X aria-hidden="true" /></button></div>
        <nav aria-label="Mobile Ignite navigation">
          <a href="#partners" onClick={() => setMenuOpen(false)}>Testimonials <ArrowRight aria-hidden="true" /></a>
          <a href="#your-journey" onClick={() => setMenuOpen(false)}>How It Works <ArrowRight aria-hidden="true" /></a>
          <a href="#questions" onClick={() => setMenuOpen(false)}>FAQs <ArrowRight aria-hidden="true" /></a>
        </nav>
        <div onClick={() => setMenuOpen(false)}><Booking location="mobile-menu" /></div>
      </div>
    </dialog>
    <main id="ignite-main">
      <section className="ig-hero"><div className="ig-container ig-hero-grid">
        <div><p className="ig-eyebrow">LOCAL HANDYMAN / IGNITE</p><h1>Don’t pick up<br />the hammer.<br /><span>Run the business.</span></h1><p className="ig-hero-copy">Build Success with Proven Systems and Unmatched Support</p><Booking location="hero" /><a className="ig-text-link ig-hero-secondary" href="#the-series"><Play size={15} aria-hidden="true" /> Start with the four key questions</a><div className="ig-hero-note"><span /> Your first step toward becoming a Success Partner.</div></div>
        <figure className="ig-hero-film"><Video id="677aeb68b0a11f29d6c5eb3d" poster="675ff435fb63bc30765fb086.png" title="A welcome from Colin Sprake" /></figure>
      </div></section>
      <div className="ig-strip"><div className="ig-container"><span><Check size={18} aria-hidden="true" /> No trades experience needed</span><span><Check size={18} aria-hidden="true" /> Systems for business owners</span><span><Check size={18} aria-hidden="true" /> Support beyond your launch</span></div></div>
      <section className="ig-section"><div className="ig-container">
        <Heading eyebrow="WHY CHOOSE LOCAL HANDYMAN GROUP?" title="We redefine franchising.">Homeowners need dependable help. Local Handyman brings a recognizable brand, operating systems, and a support network to an essential local service.</Heading>
        <div className="ig-three"><article className="ig-value"><Users aria-hidden="true" /><h3>You bring the leadership</h3><p>Build relationships, hire your team, and lead the operation. Skilled technicians deliver the work.</p></article><article className="ig-value"><TrendingUp aria-hidden="true" /><h3>A model built for growth</h3><p>Develop your local presence and grow your operation as your customer base and team expand.</p></article><article className="ig-value"><ShieldCheck aria-hidden="true" /><h3>You have support</h3><p>Access business training, marketing resources, and an experienced network of fellow Success Partners.</p></article></div>
      </div></section>
      <section id="partners" className="ig-section ig-soft"><div className="ig-container"><Heading eyebrow="YOUR SUCCESS IS OUR SUCCESS" title="Hear from a few of our Success Partners">Meet a few of the Success Partners building Local Handyman businesses in their communities.</Heading>
        <div className="ig-two ig-partners">{[
          ["Regina, SK", "67fcd4be71384bfbb2b4a6d3", "transcoded_videos/7cc3742ec6125f0e.jpg"], ["Kelowna, BC", "67fcd76071384b162bb4b8e1", "transcoded_videos/1547442940dc0f71.jpg"], ["Lethbridge, AB", "67fce03fc7a015f2f6d833a6", "transcoded_videos/ec1efe87c0a21cbc.jpg"], ["Calgary, AB", "67fcdcee56be24f746e4ad2b", "transcoded_videos/729fb87a1d6fe522.jpg"],
        ].map(([city, id, poster]) => <figure className="ig-partner" key={id}><Video id={id} poster={poster} title={`${city} Success Partner story`} /><figcaption><strong>{city}</strong><span>Local Handyman Success Partners</span></figcaption></figure>)}</div>
      </div></section>
      <section className="ig-section"><div className="ig-container ig-two ig-align-center"><img className="ig-team-photo" src="/images/atlanta_team_3_38aba96a.jpg" alt="Local Handyman team beside their branded van" loading="lazy" /><div><Heading eyebrow="WHAT MAKES US DIFFERENT?" title="A Proven Model for Ambitious Entrepreneurs" /><p className="ig-intro">You bring ambition and a commitment to your community. We bring tools and support to help turn that commitment into a well-run business.</p><ul className="ig-check-list"><li><Check aria-hidden="true" /> Recruitment systems to help build your team</li><li><Check aria-hidden="true" /> Marketing resources to build local visibility</li><li><Check aria-hidden="true" /> Training across sales, cash flow, and operations</li><li><Check aria-hidden="true" /> Collaboration with other Success Partners</li></ul><Booking location="difference">Ask Colin your questions</Booking></div></div></section>
      <section className="ig-section ig-navy"><div className="ig-container"><div className="ig-two ig-align-center"><div><Heading eyebrow="WHO IS SUPPORTING YOU AS A SUCCESS PARTNER?" title="Experienced leadership. Support at every step." /><p className="ig-eyebrow">Hear from Colin Sprake, Local Handyman Owner and Entrepreneurial Mentor</p><h3 className="ig-colin">Colin Sprake</h3><p className="ig-role">Local Handyman Owner & CEO</p><p className="ig-intro">Get to know Colin and the approach behind Local Handyman. His focus is helping Success Partners become confident business owners through mentorship, practical systems, and ongoing support.</p><ul className="ig-colin-credentials"><li>4-Time #1 Bestselling Author</li><li>Trained Over 110,000 Entrepreneurs</li><li>Proven Success in Scaling Businesses</li></ul><Booking location="colin" /></div><figure><Video id="68416b6961297813d690a95d" poster="67603c6888b4df022d30c950.png" title="Get to know Colin and Local Handyman" /><figcaption className="ig-caption">A closer look at the leadership behind Local Handyman.</figcaption></figure></div><div className="ig-credibility" aria-label="Colin Sprake’s credentials and media logos from the original Ignite page">{[{ x: 0, width: 550, label: "Make Your Mark, CTV News, and Global" }, { x: 550, width: 530, label: "Entrepreneur Magazine, CNBC, and Fox News" }, { x: 1080, width: 500, label: "Amazon number-one bestseller, National Academy of Best-Selling Authors, and Entrepreneur Success Recipe book" }, { x: 1580, width: 420, label: "Colin Sprake" }].map(badge => <svg key={badge.x} viewBox={`${badge.x} 0 ${badge.width} 250`} role="img" aria-label={badge.label}><image href="/images/ignite/colin-credentials.png" width="2000" height="250" /></svg>)}</div><div className="ig-support-row"><div><Compass aria-hidden="true" /><h3>Business guidance</h3><p>Training and support as you build your operation.</p></div><div><Users aria-hidden="true" /><h3>Partner community</h3><p>Connect, collaborate, and learn from other owners.</p></div><div><TrendingUp aria-hidden="true" /><h3>Marketing support</h3><p>Brand, tools, and resources for local visibility.</p></div></div></div></section>
      <section className="ig-section"><div className="ig-container"><Heading eyebrow="YOUR PATH TO PARTNERSHIP" title="Unlock the Secrets to Building a Scalable, Profitable Franchise—Revealed in Just 20 Minutes">Explore the Success Partner presentation for a fuller introduction to the business, the support, and the ownership opportunity.</Heading><div className="ig-presentation"><Video id="67f58138cafd9fe4c9fb91f7" poster="675ff891fb63bca2195fb400.png" title="Colin Sprake Success Partner presentation" /><div className="ig-presentation-footer"><div><strong>The Success Partner presentation</strong><p>Watch here, or explore the accompanying presentation.</p></div><a className="ig-outline" href={PRESENTATION} target="_blank" rel="noopener noreferrer" onClick={() => track("ignite_presentation_click", "presentation")}>Open presentation <ArrowRight size={17} aria-hidden="true" /></a></div></div></div></section>
      <section id="the-series" className="ig-section ig-soft"><div className="ig-container"><Heading eyebrow="THE FOUR-PART VIDEO SERIES" title="4 Questions We Get Asked All The Time">Watch These Super Short Videos to Find Out The Answers</Heading><div className="ig-two">{series.map((video, index) => <article className="ig-series-card" key={video.id}><Video id={video.id} title={video.title} poster={video.poster} /><div className="ig-series-body"><p className="ig-eyebrow">PART {String(index + 1).padStart(2, "0")} / {video.topic}</p><h3>{video.title}</h3><p>{video.description}</p></div></article>)}</div><div className="ig-series-cta"><p>Got your questions ready? Let’s talk them through.</p><Booking location="series" /></div></div></section>
      <section id="your-journey" className="ig-section"><div className="ig-container"><Heading eyebrow="HOW IT WORKS" title="Your Journey to Becoming a Success Partner">From your first conversation to launch preparation, here’s the flow of calls and decisions. Colin will guide you through the next step for your situation.</Heading><ol className="ig-timeline">{stages.map((stage, index) => <li key={stage.title}><span className="ig-step-number" aria-hidden="true">0{index + 1}</span><div className="ig-step-body"><p className="ig-eyebrow">{stage.label}</p><h3>{stage.title}</h3><p>{stage.description}</p><ul>{stage.tasks.map(task => <li key={task}><Check size={16} aria-hidden="true" />{task}</li>)}</ul><p className="ig-step-next"><ArrowRight size={17} aria-hidden="true" />{stage.next}</p></div></li>)}</ol><p className="ig-timing">The original journey outlines approximately 4–8 weeks for the discovery and decision process, followed by launch preparation. Actual timing depends on your circumstances and completion of each step.</p></div></section>
      <section className="ig-section ig-fit"><div className="ig-container"><Heading eyebrow="WE’RE LOOKING FOR INDIVIDUALS READY TO BUILD" title="Is Local Handyman Right for You?">Owning a franchise is a big decision. Let’s help you make the right one. We’re looking for individuals ready to invest their time, energy, and leadership.</Heading><div className="ig-three">{[["Growth-oriented", "You want to build a team and develop a business in your community."], ["Decisive and driven", "You ask good questions, make informed decisions, and take action."], ["Hungry for success", "You’re ready to invest time, energy, and leadership into building your business."]].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section id="questions" className="ig-section"><div className="ig-container ig-faq"><Heading eyebrow="WE GOT THE ANSWERS" title="Answering Your Questions" />{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={20} aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
      <section className="ig-final"><div className="ig-container"><p className="ig-eyebrow">YOUR NEXT CHAPTER STARTS WITH A CONVERSATION</p><h2>Let’s see what we<br />can build together.</h2><p>Bring your questions. Talk directly with Colin.<br />Find out whether Local Handyman is the right fit for you.</p><Booking location="final" /><a className="ig-back" href="#the-series">Watch the four-part series first ↑</a></div></section>
    </main>
    <footer className="ig-footer"><div className="ig-container"><div className="ig-footer-top"><img src="/images/handymanlogo_d9f89eaa.png" alt="Local Handyman" width="120" height="60" /><p>Local business. Shared ambition.</p><a href="https://www.localhandymangroup.com/privacy" target="_blank" rel="noopener noreferrer">Privacy policy</a></div><p>This information is for informational purposes only and is not an offer to sell or a solicitation of an offer to buy a franchise. An offer can only be made through the applicable franchise disclosure documents and in compliance with applicable registration and disclosure requirements. Individual experiences and results vary.</p><p>FOR THE STATE OF NEW YORK: This advertisement is not an offering. An offering can be made only by a prospectus filed first with the Department of Law of the State of New York. Such filing does not constitute approval by the Department of Law.</p><p>© {new Date().getFullYear()} Local Handyman Group. All rights reserved.</p></div></footer>
  </div>;
}
