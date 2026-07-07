function initScrollReveal() {
  const elements = document.querySelectorAll("[data-aos]");
  if (!elements.length) {
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  elements.forEach((el) => {
    const delay = el.getAttribute("data-aos-delay");
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
}

function initCarousel(trackId, dotsId, prevId, nextId, dotClass, label) {
  const track = document.getElementById(trackId);
  if (!track) {
    return;
  }

  const slides = Array.from(track.children);
  const dotsWrap = document.getElementById(dotsId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = dotClass + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to " + label + " " + (i + 1));
    dot.addEventListener("click", () => scrollToSlide(i));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.children);

  function scrollToSlide(i) {
    track.scrollTo({
      left: slides[i].offsetLeft - track.offsetLeft,
      behavior: "smooth",
    });
  }

  function currentIndex() {
    const pos = track.scrollLeft + track.offsetWidth / 2;
    let idx = 0;
    let best = Infinity;

    slides.forEach((slide, i) => {
      const center = slide.offsetLeft - track.offsetLeft + slide.offsetWidth / 2;
      const distance = Math.abs(center - pos);
      if (distance < best) {
        best = distance;
        idx = i;
      }
    });

    return idx;
  }

  function updateDots() {
    const idx = currentIndex();
    dots.forEach((dot, i) => dot.classList.toggle("active", i === idx));
  }

  prevBtn.addEventListener("click", () =>
    scrollToSlide(Math.max(0, currentIndex() - 1)),
  );
  nextBtn.addEventListener("click", () =>
    scrollToSlide(Math.min(slides.length - 1, currentIndex() + 1)),
  );

  let timeoutId;
  track.addEventListener("scroll", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(updateDots, 80);
  });
}

initScrollReveal();
initCarousel("csTrack", "csDots", "csPrev", "csNext", "cs-dot", "case study");
initCarousel(
  "reelTrack",
  "reelDots",
  "reelPrev",
  "reelNext",
  "cs-dot on-light",
  "reel",
);
