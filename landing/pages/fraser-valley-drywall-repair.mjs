import territory from "../territories/fraser-valley.mjs";

export default {
  ...territory,
  serviceSlug: "drywall-repair",
  pageId: "FV-DRY-01",
  title: "Drywall Repair in the Fraser Valley | Local Handyman",
  description: "Drywall repair across Langley, Abbotsford, Chilliwack and Mission. One local team patches, matches the texture and paints it. Free estimates.",
  eyebrow: "Drywall repair · Fraser Valley",
  headline: { lead: "Drywall repair in", accent: "Patched, painted, handled." },
  subhead: "Holes, cracks, water stains or a dented hallway: one local team patches it, matches the texture and paints it to blend, so you’re not juggling two trades.",
  mobileSubhead: "One local team patches it, matches the texture and paints it to blend. No juggling two trades.",
  smsBody: "Hi! I'd like a free quote for drywall repair. I can send photos if that helps.",
  hero: {
    photo: "/images/fraser-valley/mark.webp",
    photoNote: "Mark, Lead Technician, Local Handyman Fraser Valley",
    review: { quote: "…made it so you would never know it had been repaired!", name: "Sharon & Gloria", detail: "Abbotsford · Ceiling drywall repair" },
  },
  reviewIds: ["sharonGloriaDrywall", "brenda", "aaron", "glen", "rosemary", "tei"],
  services: {
    eyebrow: "What we fix",
    title: "If it’s on a wall or ceiling, we fix it.",
    items: [
      { icon: "circle-dot", title: "Holes and door-knob dents", text: "From a fist-sized hole to a doorstop that missed." },
      { icon: "activity", title: "Cracks and nail pops", text: "Settling cracks, seams and popped screws, fixed for good." },
      { icon: "droplets", title: "Water-damaged patches", text: "Stained or soft drywall cut out and replaced once it’s dry." },
      { icon: "lamp-ceiling", title: "Ceiling repairs", text: "Openings from plumbing or electrical work, closed and finished." },
      { icon: "layers", title: "Texture matching", text: "Knockdown, orange peel or smooth: blended so you can’t spot it." },
      { icon: "paint-roller", title: "Paint to finish", text: "We paint the patch or the whole wall, so the job is actually done." },
    ],
    note: { strong: "Got other jobs on the list?", text: "Add them to the same visit: shelves, doors, trim, fixtures." },
  },
  beforeAfter: {
    title: "Patched so well you won’t find it.",
    before: { photo: "/images/fraser-valley/drywall-before.jpg", note: "Open section of ceiling with exposed framing and pipes before drywall repair" },
    after: { photo: "/images/fraser-valley/drywall-after.jpg", note: "The same ceiling opening closed and finished after drywall repair" },
    caption: "A Local Handyman job · Ceiling opening after plumbing work, closed and finished",
  },
  why: {
    title: "One call. One team. A finished wall.",
    items: [
      { title: "One team, patch to paint", text: "Most drywallers don’t paint and most painters don’t patch. We do both, so you get a finished wall, not a patch waiting on a painter." },
      { title: "No job too small", text: "One hole or a whole hallway, we’ll take it. And while we’re there, we’ll knock out the rest of your list." },
      { title: "We make it right", text: "If something isn’t right with our workmanship, we come back and fix it at no charge. That’s our promise." },
    ],
  },
  how: {
    title: "Three steps to a wall you stop noticing.",
    steps: [
      { title: "Call, or request a call back", text: "Tell us what happened. Photos help us give you a faster answer." },
      { title: "Get a clear, upfront price", text: "Free on-site estimate. You know the cost before we start." },
      { title: "We fix it, finish it and clean up", text: "Most jobs booked within 1–3 days. You get your wall back." },
    ],
  },
  faq: {
    title: "Drywall repair questions",
    items: [
      { q: "How much does drywall repair cost?", a: "It depends on the size, how many areas and whether you want it painted. The estimate is free, and you get a clear price before any work starts. Call with a photo and we’ll give you a straight answer." },
      { q: "Can you match my texture and paint?", a: "Yes. We match the existing texture and can paint the patch or the full wall so it blends in." },
      { q: "How soon can you come?", a: "We respond the same day, and most jobs are booked within 1–3 days across Langley, Abbotsford, Chilliwack and Mission." },
      { q: "Is one small hole worth a visit?", a: "Yes. And if there’s anything else on your list, we’ll take care of it on the same trip." },
      { q: "What if the damage came from a leak?", a: "Tell us when you call. We’ll check the area is dry and flag anything that needs a plumber before we patch, so the repair lasts." },
    ],
  },
  final: { title: "That wall’s been bugging you long enough.", text: "Call now for a free estimate from your local Fraser Valley team." },
};
