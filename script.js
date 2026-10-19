
// Gallery lightbox
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const items = [...document.querySelectorAll(".gallery__item")];
  const img = lightbox.querySelector(".lightbox__img");
  let current = 0;
  let lastFocus = null;

  const show = (i) => {
    current = (i + items.length) % items.length;
    const thumb = items[current].querySelector("img");
    img.src = items[current].dataset.full;
    img.alt = thumb.alt;
  };
  const open = (i) => {
    lastFocus = document.activeElement;
    show(i);
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox__close").focus();
  };
  const close = () => {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };

  items.forEach((item, i) => item.addEventListener("click", () => open(i)));
  lightbox.querySelector(".lightbox__close").addEventListener("click", close);
  lightbox.querySelector(".lightbox__nav--prev").addEventListener("click", () => show(current - 1));
  lightbox.querySelector(".lightbox__nav--next").addEventListener("click", () => show(current + 1));
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
}
