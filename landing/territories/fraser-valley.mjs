// Shared by every Fraser Valley service page. Values marked "confirm" are open items in Matt B's build brief.
export default {
  territory: "Fraser Valley",
  territorySlug: "fraser-valley",
  brandName: "Local Handyman Fraser Valley",
  phone: { display: "(604) 200-6908", e164: "+16042006908" },
  // Mobile "Text us" shows only when this is set: it must be an SMS-capable number whose texts land in a watched inbox.
  smsNumber: "",
  gtmId: "GTM-T9WX9TV3", // franchisees.gtm_container_id for Fraser Valley; Andy confirms
  clarityId: "y41qbs8jo4", // localhandyman.com's Clarity project, as on the other apps (8globdLu); filter by URL for these pages
  // Callback form target (Revenue Center + Housecall Pro). Production builds refuse to run while this is empty.
  formEndpoint: "",
  cities: ["Langley", "Abbotsford", "Chilliwack", "Mission"],
  defaultCity: "the Fraser Valley",
  // Revenue Center coverage: 8 AM PT to 6 PM ET (3 PM PT), Mon-Fri. Confirm before launch.
  hours: { timeZone: "America/Vancouver", tzLabel: "PT", days: [1, 2, 3, 4, 5], open: 8, close: 15 },
  callbackPromise: "15 minutes", // confirm with the Revenue Center
  rating: { score: "4.7", count: 109 },
  utilityLine: "Same-day response · Free on-site estimates",
  trust: ["BBB Accredited", "Insured team", "Booked within 1–3 days"],
  logo: "/images/fraser-valley/lh-logo.webp",
  team: [
    { name: "Jason", role: "General Manager", photo: "/images/fraser-valley/jason.webp" },
    { name: "Mark", role: "Lead Technician", photo: "/images/fraser-valley/mark.webp" },
  ],
  teamQuote: { text: "We had a job that needed to be done quickly. Mark made it happen.", name: "Evonne P." },
  reviews: {
    sharonGloriaDrywall: {
      name: "Sharon & Gloria",
      place: "Abbotsford",
      quote: "They had Dave come out to repair some drywall damage to our entrance ceiling… made it so you would never know it had been repaired!",
    },
    sharonGloriaQuote: {
      name: "Sharon & Gloria",
      place: "Abbotsford",
      quote: "The quote was fair and Jason was great to work with… Dave was personable and efficient, and we will definitely call back when we are looking for more projects to be done.",
    },
    brenda: {
      name: "Brenda T.",
      place: "Fraser Valley",
      quote: "Mark came in and fixed many scratches, dents and nicks throughout our home, bringing our walls back to an even normal look.",
    },
    aaron: {
      name: "Aaron L.",
      place: "Fraser Valley",
      quote: "They responded quickly to my inquiry and provided a free on-site estimate… The work area was kept clean, and everything was completed as described in the quote.",
    },
    glen: {
      name: "Glen P.",
      place: "Fraser Valley",
      quote: "While working, he identified some small construction errors that were there and corrected them… We are extremely impressed by his professionalism, work ethic and the quality of the work.",
    },
    rosemary: {
      name: "Rosemary V.",
      place: "Fraser Valley",
      quote: "James’ insight and broad skill set solved an issue that others hadn’t been able to fix.",
    },
    tei: {
      name: "Tei W.",
      place: "Fraser Valley",
      quote: "Fabian and his team are phenomenal! They are courteous and professional and even arrived ahead of schedule…",
    },
  },
};
