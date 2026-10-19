// Paste the live ticket page link here and every ticket button will use it.
const TICKET_URL = "";

const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");

// Solid nav once the hero is scrolled past
const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});
document.querySelectorAll(".nav__menu a").forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  })
);

// Ticket links
document.querySelectorAll("[data-ticket-link]").forEach((link) => {
  if (TICKET_URL) {
    link.href = TICKET_URL;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    link.href = "#admission";
  }
});

// Fade sections in as they scroll into view
const revealTargets = document.querySelectorAll(
  ".section .eyebrow, .section .heading, .script-heading, .about, .pillar, .day, .ticket, .member, .faq"
);
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }),
    { threshold: 0.15 }
  );
  revealTargets.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}
