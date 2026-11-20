// One call-first service landing page, rendered from a page config (landing/pages/*.mjs).
import { icon } from "./icons.mjs";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const stars = (label = true) =>
  label ? `<span class="stars" role="img" aria-label="5 out of 5 stars">★★★★★</span>` : `<span class="stars" aria-hidden="true">★★★★★</span>`;

const hourLabel = (h) => `${h % 12 || 12} ${h < 12 ? "AM" : "PM"}`;
const DAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function hoursText({ days, open, close, tzLabel }) {
  const run = days.length > 1 && days.every((d, i) => i === 0 || d === days[i - 1] + 1);
  const dayText = run ? `${DAY[days[0]]}–${DAY[days.at(-1)]}` : days.map((d) => DAY[d]).join(", ");
  return `${dayText}, ${hourLabel(open)}–${hourLabel(close)} ${tzLabel}`;
}

function photo(src, label, note, cls) {
  if (src) return `<img class="${cls}" src="${esc(src)}" alt="${esc(note)}" loading="lazy" decoding="async">`;
  return `<div class="${cls} ph"><span><strong>${esc(label)}</strong><br>${esc(note)}</span></div>`;
}

function callButton(c, { big = false, loc }) {
  return `<a class="btn-call${big ? " btn-call-big" : ""}" href="tel:${c.phone.e164}" data-loc="${loc}">${icon("phone", big ? 24 : 20)}<span class="btn-call-text"><span class="btn-call-num">Call ${c.phone.display}</span>${big ? `<span class="btn-call-sub">Free estimate · Talk to a local pro</span>` : ""}</span></a>`;
}

function reviewCard(r) {
  return `<article class="review">${stars()}<p>“${esc(r.quote)}”</p><span class="review-by"><strong>${esc(r.name)}</strong> · ${esc(r.place)} · Google review</span></article>`;
}

export function renderPage(c) {
  const cityMap = Object.fromEntries(c.cities.map((city) => [city.toLowerCase(), city]));
  const cityList = c.cities.join(" · ");
  const reviews = c.reviewIds.map((id) => c.reviews[id]);
  const hours = hoursText(c.hours);
  const smsHref = c.smsNumber ? `sms:${c.smsNumber}?&body=${encodeURIComponent(c.smsBody)}` : "";
  const pageConfig = { pageId: c.pageId, formEndpoint: c.formEndpoint, callbackPromise: c.callbackPromise };

  return `<!doctype html>
<html lang="en-CA">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(c.description)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Khand:wght@600;700&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/landing/landing.css">
${c.gtmId ? `<script>window.dataLayer=window.dataLayer||[];window.dataLayer.push({page_id:${JSON.stringify(c.pageId)}});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(c.gtmId)});</script>` : ""}
${c.clarityId ? `<script>(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",${JSON.stringify(c.clarityId)});</script>` : ""}
<script>window.LP=${JSON.stringify(pageConfig)};</script>
<script type="module" src="/landing/landing.js"></script>
</head>
<body class="${smsHref ? "has-sms" : ""}">
${c.gtmId ? `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${esc(c.gtmId)}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>` : ""}

<div class="utility">
  <div class="wrap utility-row"><span>Proudly serving ${esc(cityList)}</span><span>${esc(c.utilityLine)}</span></div>
</div>

<header class="site-header">
  <div class="wrap header-row">
    <div class="brand">
      <img class="logo" src="${esc(c.logo)}" alt="Local Handyman" width="84" height="50">
      <span class="brand-name">Local Handyman<br><strong>${esc(c.territory)}</strong></span>
    </div>
    <div class="header-cta">
      <span class="header-kicker">Talk to a local pro<br><strong>Free estimate</strong></span>
      <a class="btn-call header-call" href="tel:${c.phone.e164}" data-loc="header">${icon("phone", 20)}<span>${c.phone.display}</span></a>
      <a class="header-icon-call" href="tel:${c.phone.e164}" data-loc="header-mobile" aria-label="Call ${c.phone.display}">${icon("phone", 22)}</a>
    </div>
  </div>
</header>

<main>
<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <span class="eyebrow">${esc(c.eyebrow)}</span>
      <h1>${esc(c.headline.lead)} <span class="city">${esc(c.defaultCity)}</span><script>(function(){var m=${JSON.stringify(cityMap)},k=(new URLSearchParams(location.search).get("city")||"").toLowerCase().trim(),el=document.currentScript.previousElementSibling;if(Object.prototype.hasOwnProperty.call(m,k)){el.textContent=m[k];window.LP.city=m[k];}})()</script>.<br class="d-only"> <span class="accent">${esc(c.headline.accent)}</span></h1>
      <p class="subhead d-only">${esc(c.subhead)}</p>
      <p class="subhead m-only">${esc(c.mobileSubhead)}</p>
      <div class="hero-actions">
        ${callButton(c, { big: true, loc: "hero" })}
        <a class="link-callback d-only" href="#callback">Or get a call back ↓</a>
      </div>
      <p class="status" id="status" data-hours='${JSON.stringify(c.hours)}'><span class="dot" aria-hidden="true"></span><span class="status-text">Phones answered ${esc(hours)}</span></p>
      <script>(function(){var el=document.getElementById("status"),h=JSON.parse(el.dataset.hours),p={};new Intl.DateTimeFormat("en-US",{timeZone:h.timeZone,weekday:"short",hour:"numeric",minute:"numeric",hourCycle:"h23"}).formatToParts(new Date()).forEach(function(x){p[x.type]=x.value});var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],full=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d=days.indexOf(p.weekday),m=(+p.hour)*60+(+p.minute),lab=function(x){return(x%12||12)+(x<12?" AM":" PM")};var t=el.querySelector(".status-text");if(h.days.indexOf(d)>-1&&m>=h.open*60&&m<h.close*60){t.textContent="Phones answered now until "+lab(h.close)+" "+h.tzLabel;return}var when;if(h.days.indexOf(d)>-1&&m<h.open*60)when="this morning";else for(var i=1;i<=7;i++){var n=(d+i)%7;if(h.days.indexOf(n)>-1){when=i===1?"tomorrow":full[n];break}}el.classList.add("closed");t.innerHTML="We’re closed right now. <span class='m-only'>${smsHref ? "Text us or request" : "Request"}</span><span class='d-only'>Request</span> a call back and we’ll reach you first thing "+when+"."})()</script>
      <div class="trust">
        <span>${stars(false)} <strong>${esc(c.rating.score)}</strong> · ${c.rating.count} Google reviews</span>
        <span class="trust-items">${c.trust.map((t) => `<span>${esc(t)}</span>`).join("")}</span>
      </div>
    </div>
    <div class="hero-media">
      ${photo(c.hero.photo, "Hero photo", c.hero.photoNote, "hero-photo")}
      <div class="hero-review">
        ${stars()}
        <p>“${esc(c.hero.review.quote)}”</p>
        <span class="review-by"><strong>${esc(c.hero.review.name)}</strong> · ${esc(c.hero.review.detail)}</span>
      </div>
    </div>
  </div>
</section>

<section class="callback" id="callback">
  <div class="wrap">
    <form class="callback-form" id="callback-form" novalidate>
      <div class="callback-intro">
        <strong>Prefer we call you?</strong>
        <span>Leave your number. A local team member calls you back within ${esc(c.callbackPromise)} during business hours.</span>
      </div>
      <label>Name<input type="text" name="name" autocomplete="name" required></label>
      <label>Phone<input type="tel" name="phone" autocomplete="tel" inputmode="tel" required></label>
      <div class="hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>
      ${["page_id", "gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "city", "landing_url"].map((n) => `<input type="hidden" name="${n}">`).join("")}
      <button type="submit">Call me back</button>
      <span class="form-note">No obligation. We only use your number to talk about your project.</span>
      <p class="form-msg" role="status" aria-live="polite"></p>
    </form>
  </div>
</section>

<section class="proof">
  <div class="wrap">
    <div class="section-head split">
      <div><span class="eyebrow">Real Fraser Valley customers</span><h2>Your neighbours say it best.</h2></div>
      <div class="rating-badge"><span class="rating-score">${esc(c.rating.score)}</span><span>${stars(false)}<span>${c.rating.count} Google reviews</span></span></div>
    </div>
    <div class="review-grid">${reviews.slice(0, 3).map(reviewCard).join("")}</div>
    <div class="review-grid" id="more-reviews" hidden>${reviews.slice(3).map(reviewCard).join("")}</div>
    <button type="button" class="btn-outline" id="toggle-reviews" aria-expanded="false" aria-controls="more-reviews">Show more reviews</button>
  </div>
</section>

<section class="services">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">${esc(c.services.eyebrow)}</span><h2>${esc(c.services.title)}</h2></div>
    <div class="tile-grid">${c.services.items.map((s) => `<div class="tile"><span class="tile-icon">${icon(s.icon, 26)}</span><span><strong>${esc(s.title)}</strong><span>${esc(s.text)}</span></span></div>`).join("")}</div>
    <p class="cross-sell"><strong>${esc(c.services.note.strong)}</strong> ${esc(c.services.note.text)}</p>
  </div>
</section>

<section class="before-after">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">Recent ${esc(c.territory)} job</span><h2>${esc(c.beforeAfter.title)}</h2></div>
    <div class="ba-grid">
      <figure>${photo(c.beforeAfter.before.photo, "Before", c.beforeAfter.before.note, "ba-photo")}<figcaption>Before</figcaption></figure>
      <figure>${photo(c.beforeAfter.after.photo, "After", c.beforeAfter.after.note, "ba-photo")}<figcaption>After</figcaption></figure>
    </div>
    <p class="ba-caption">${esc(c.beforeAfter.caption)}</p>
  </div>
</section>

<section class="why dark">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">Why Local Handyman</span><h2>${esc(c.why.title)}</h2></div>
    <div class="why-grid">${c.why.items.map((w) => `<div class="why-item"><strong>${esc(w.title)}</strong><p>${esc(w.text)}</p></div>`).join("")}</div>
  </div>
</section>

<section class="how">
  <div class="wrap how-grid">
    <div>
      <div class="section-head"><span class="eyebrow">How it works</span><h2>${esc(c.how.title)}</h2></div>
      <ol class="steps">${c.how.steps.map((s, i) => `<li><span class="step-num">${i + 1}</span><span><strong>${esc(s.title)}</strong><span>${esc(s.text)}</span></span></li>`).join("")}</ol>
      ${callButton(c, { loc: "how" })}
    </div>
    <div class="team">
      <strong class="team-title">Meet your ${esc(c.territory)} team</strong>
      <div class="team-row">${c.team.map((p) => `<div class="person">${photo(p.photo, "Photo", p.name, "person-photo")}<span><strong>${esc(p.name)}</strong><br><span>${esc(p.role)}</span></span></div>`).join("")}</div>
      <p class="team-quote">“${esc(c.teamQuote.text)}” <span>— ${esc(c.teamQuote.name)}, Google review</span></p>
    </div>
  </div>
</section>

<section class="faq">
  <div class="wrap narrow">
    <div class="section-head"><span class="eyebrow">Straight answers</span><h2>${esc(c.faq.title)}</h2></div>
    ${c.faq.items.map((f, i) => `<details${i === 0 ? " open" : ""}><summary>${esc(f.q)}<span class="faq-plus" aria-hidden="true">+</span></summary><p>${esc(f.a)}</p></details>`).join("")}
  </div>
</section>

<section class="final">
  <div class="wrap final-inner">
    <h2>${esc(c.final.title)}</h2>
    <p>${esc(c.final.text)}</p>
    <a class="btn-white" href="tel:${c.phone.e164}" data-loc="final">${icon("phone", 22)}<span>Call ${c.phone.display}</span></a>
    <a class="final-link" href="#callback">Or request a call back</a>
    <span class="final-cities">${esc(cityList)} &amp; surrounding areas</span>
  </div>
</section>
</main>

<footer class="site-footer">
  <div class="wrap footer-row">
    <span>© ${new Date().getFullYear()} ${esc(c.brandName)} · Phone lines open ${esc(hours)}</span>
    <span class="footer-links"><a href="https://localhandyman.com/privacy">Privacy</a><a href="https://localhandyman.com/terms">Terms</a></span>
  </div>
</footer>

<nav class="mobile-bar" aria-label="Contact">
  <a class="mb-call" href="tel:${c.phone.e164}" data-loc="sticky">${icon("phone", 18)}Call now</a>
  ${smsHref
    ? `<a class="mb-alt" href="${esc(smsHref)}" data-loc="sticky">${icon("message-square", 18)}Text us</a>`
    : `<a class="mb-alt" href="#callback">Call me back</a>`}
</nav>
</body>
</html>
`;
}
