import territory from "../territories/fraser-valley.mjs";

export default {
  ...territory,
  serviceSlug: "painting",
  pageId: "FV-PNT-01",
  title: "Interior Painting in the Fraser Valley | Local Handyman",
  description: "Interior painting across Langley, Abbotsford, Chilliwack and Mission. One room or the whole home, prepped properly and left clean. Free estimates.",
  eyebrow: "Interior painting · Fraser Valley",
  headline: { lead: "Interior painting in", accent: "One room or the whole home, handled." },
  subhead: "Walls, trim, doors, ceilings or an accent wall: a local team that preps properly, fixes wall damage first, protects your floors and leaves the room clean.",
  mobileSubhead: "Walls, trim, doors or ceilings. We prep properly, protect your floors and leave the room clean.",
  smsBody: "Hi! I'd like a free quote for interior painting. I can send photos if that helps.",
  hero: {
    photo: "/images/fraser-valley/jason.webp",
    photoNote: "Jason, General Manager, Local Handyman Fraser Valley",
    review: { quote: "The work area was kept clean, and everything was completed as described in the quote.", name: "Aaron L.", detail: "Fraser Valley · Google review" },
  },
  reviewIds: ["glen", "brenda", "aaron", "sharonGloriaQuote", "rosemary", "tei"],
  services: {
    eyebrow: "What we paint",
    title: "If it’s inside your home, we paint it.",
    items: [
      { icon: "house", title: "Single rooms", text: "The bedroom, the office, the one room that’s bugged you for years." },
      { icon: "square-dashed", title: "Accent walls", text: "One bold wall, cut in clean with crisp edges." },
      { icon: "door-open", title: "Trim, doors and baseboards", text: "Scuffed trim and tired doors made crisp again." },
      { icon: "lamp-ceiling", title: "Ceilings", text: "Stained or yellowed ceilings brought back to bright white." },
      { icon: "tag", title: "Pre-sale refresh", text: "Clean, neutral walls before listing photos and showings." },
      { icon: "key-round", title: "Rental turnovers", text: "Walls patched and repainted between tenants." },
    ],
    note: { strong: "Dents or holes in the wall?", text: "We patch them before we paint, on the same visit." },
  },
  beforeAfter: {
    title: "Fresh walls. Clean lines. No mess left behind.",
    before: { photo: "/images/fraser-valley/painting-before.jpg", note: "Bedroom before painting, with white walls and decorating equipment" },
    after: { photo: "/images/fraser-valley/painting-after.jpg", note: "The same bedroom after painting, with pale pink walls" },
    caption: "A Local Handyman job · Bedroom walls repainted",
  },
  why: {
    title: "One call. One team. A room you’ll love.",
    items: [
      { title: "No minimums", text: "Painting companies want the whole house. We’ll do one room, one accent wall, or just the trim." },
      { title: "Prep is part of the job", text: "We fill holes, patch dents and sand before we paint, so the finish looks right up close, not just from across the room." },
      { title: "We make it right", text: "If something isn’t right with our workmanship, we come back and fix it at no charge. That’s our promise." },
    ],
  },
  how: {
    title: "Three steps to a room that feels new.",
    steps: [
      { title: "Call, or request a call back", text: "Tell us what happened. Photos help us give you a faster answer." },
      { title: "Get a clear, upfront price", text: "Free on-site estimate covering rooms, prep and finish. You know the cost before we start." },
      { title: "We prep, paint and clean up", text: "Floors and furniture covered. Most jobs booked within 1–3 days." },
    ],
  },
  faq: {
    title: "Interior painting questions",
    items: [
      { q: "How much does interior painting cost?", a: "It depends on the room size, ceiling height, prep and number of coats. The estimate is free, and you get a clear price before any work starts." },
      { q: "Do I need to pick a colour first?", a: "No. Call now and we’ll talk through colours and finishes when we come out for the estimate." },
      { q: "Do you supply the paint?", a: "[Confirm with Jason: we supply / you supply / either.]" },
      { q: "Will you protect my floors and furniture?", a: "Yes. We move what needs moving, cover floors and furniture, and clean up before we leave." },
      { q: "How soon can you come?", a: "We respond the same day, and most jobs are booked within 1–3 days across Langley, Abbotsford, Chilliwack and Mission." },
    ],
  },
  final: { title: "Stop living with a room you don’t love.", text: "Call now for a free estimate from your local Fraser Valley team." },
};
