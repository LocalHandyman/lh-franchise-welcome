// Service landing pages: click tracking, reviews toggle, callback form.
const LP = window.LP || {};
const params = new URLSearchParams(location.search);
const push = (event, extra = {}) => (window.dataLayer = window.dataLayer || []).push({ event, page_id: LP.pageId, ...extra });

document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href]");
  if (!a) return;
  const href = a.getAttribute("href");
  if (href.startsWith("tel:")) push("call_click", { click_location: a.dataset.loc });
  else if (href.startsWith("sms:")) push("text_click", { click_location: a.dataset.loc });
});

const toggle = document.getElementById("toggle-reviews");
const more = document.getElementById("more-reviews");
toggle?.addEventListener("click", () => {
  const open = more.hidden;
  more.hidden = !open;
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Show fewer reviews" : "Show more reviews";
});

const form = document.getElementById("callback-form");
if (form) {
  const msg = form.querySelector(".form-msg");
  const set = (name, value) => (form.elements[name].value = value || "");
  set("page_id", LP.pageId);
  for (const k of ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) set(k, params.get(k));
  set("city", LP.city);
  set("landing_url", location.href);

  // 10-digit North American number; a leading 1 is allowed.
  const normalizePhone = (raw) => {
    let d = raw.replace(/\D/g, "");
    if (d.length === 11 && d.startsWith("1")) d = d.slice(1);
    return /^[2-9]\d{2}[2-9]\d{6}$/.test(d) ? d : null;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    const phone = normalizePhone(form.elements.phone.value);
    form.elements.name.setAttribute("aria-invalid", String(!name));
    form.elements.phone.setAttribute("aria-invalid", String(!phone));
    if (!name || !phone) {
      msg.className = "form-msg error";
      msg.textContent = !name ? "Please enter your name." : "Please enter a 10-digit phone number.";
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    data.phone = phone;
    const done = () => {
      form.classList.add("sent");
      msg.className = "form-msg success";
      msg.textContent = `Thanks, ${name}. A local team member will call you within ${LP.callbackPromise}.`;
      if (!LP.formEndpoint) msg.textContent += " (Preview: not sent, the form endpoint is not set yet.)";
    };
    if (data.company) return done(); // honeypot
    delete data.company;
    const button = form.querySelector("button");
    button.disabled = true;
    try {
      if (LP.formEndpoint) {
        const res = await fetch(LP.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error(String(res.status));
      }
      push("callback_submit");
      done();
    } catch {
      button.disabled = false;
      msg.className = "form-msg error";
      msg.textContent = "That didn’t go through. Please call us instead.";
    }
  });
}
