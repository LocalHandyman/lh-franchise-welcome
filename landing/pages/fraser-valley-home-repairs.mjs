import territory from "../territories/fraser-valley.mjs";

// The generic page: Brett's v1 "your list" page on the brief's template (Brett, 11-20).
export default {
  ...territory,
  serviceSlug: "home-repairs",
  pageId: "FV-GEN-01",
  title: "Home Repairs in the Fraser Valley | Local Handyman",
  description: "Home repairs across Langley, Abbotsford, Chilliwack and Mission. One local team for drywall, doors, painting and the rest of your list. Free estimates.",
  eyebrow: "Home repairs · Fraser Valley",
  headline: { lead: "Home repairs in", accent: "Your list, handled." },
  subhead: "The sticking door. The damaged drywall. The jobs you keep walking past. One local team takes care of the whole list in one visit.",
  mobileSubhead: "The sticking door, the damaged drywall, the jobs you keep walking past. One team, one visit.",
  smsBody: "Hi! I'd like a free quote for a few jobs around the house. I can send photos if that helps.",
  hero: {
    photo: "/images/fraser-valley/jason.webp",
    photoNote: "Jason, General Manager, Local Handyman Fraser Valley",
    review: { quote: "We had a job that needed to be done quickly. Mark made it happen.", name: "Evonne P.", detail: "Fraser Valley · Google review" },
  },
  reviewIds: ["glen", "rosemary", "aaron", "brenda", "sharonGloriaQuote", "tei"],
  services: {
    eyebrow: "What we fix",
    title: "One job or a whole list.",
    items: [
      { icon: "circle-dot", title: "Drywall repairs", text: "Holes, cracks and dents patched, textured and painted." },
      { icon: "door-open", title: "Doors and trim", text: "Sticking doors, baseboards and finishing work." },
      { icon: "paint-roller", title: "Painting", text: "A room, an accent wall or the touch-ups you keep putting off." },
      { icon: "hammer", title: "Shelves and fixtures", text: "Shelves, furniture, mirrors and light fixtures, put up right." },
      { icon: "fence", title: "Decks and fences", text: "Boards, posts and exterior upkeep." },
      { icon: "list-checks", title: "Something else", text: "Not sure what it's called? Describe it and we'll tell you if we can help." },
    ],
    note: { strong: "Got several jobs?", text: "Book them together in one visit." },
  },
  beforeAfter: {
    title: "A little work. A big difference.",
    before: { photo: "/images/fraser-valley/home-repairs-before.webp", note: "Hole in a wall above the baseboard, with the stud showing" },
    after: { photo: "/images/fraser-valley/home-repairs-after.webp", note: "The same wall patched and painted, no sign of the hole" },
    caption: "A Local Handyman job · Wall hole patched and painted",
  },
  why: {
    title: "One call. One team. The whole list.",
    items: [
      { title: "One team for the whole list", text: "No juggling a drywaller, a painter and a carpenter. One visit takes care of it." },
      { title: "No job too small", text: "One repair or several, we'll take it, and talk through the rest of your list while we're there." },
      { title: "We make it right", text: "If something isn't right with our workmanship, we come back and fix it at no charge. That's our promise." },
    ],
  },
  how: {
    title: "From to-do to taken care of.",
    steps: [
      { title: "Call, or request a call back", text: "Tell us what's on the list. Photos help us give you a faster answer." },
      { title: "Get a clear, upfront price", text: "Free on-site estimate. You know the cost before we start." },
      { title: "We fix it and clean up", text: "Most jobs booked within 1–3 days. You get your weekends back." },
    ],
  },
  faq: {
    title: "Home repair questions",
    items: [
      { q: "Can I book several small jobs together?", a: "Yes. Tell us everything on your list and we'll confirm what we can finish in one visit before we schedule." },
      { q: "How much will it cost?", a: "It depends on the work and materials. The estimate is free, and you get a clear price before any work starts." },
      { q: "What if I'm not sure what needs fixing?", a: "Describe what you're seeing. We'll talk it through and tell you whether we're the right fit before you commit." },
      { q: "How soon can you come?", a: "We respond the same day, and most jobs are booked within 1–3 days across Langley, Abbotsford, Chilliwack and Mission." },
    ],
  },
  final: { title: "Get that list off your fridge.", text: "Call now for a free estimate from your local Fraser Valley team." },
};
