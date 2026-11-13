const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
// The unenhanced HTML is always visible. Only the path strokes animate.
if (!motion.matches)
  document.querySelector(".signal-hero")?.classList.add("is-ready");
document.querySelectorAll<HTMLAnchorElement>(".signal-node").forEach((node) => {
  node.addEventListener("click", () => {
    const details = document.querySelector<HTMLDetailsElement>(
      ".signal-explanation",
    );
    if (details) details.open = true;
  });
});
document.querySelectorAll<HTMLDetailsElement>(".mobile-nav").forEach((menu) => {
  menu.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary")?.focus();
    }
  });
});
const filters = document.querySelector<HTMLElement>("[data-filters]");
if (filters) {
  const buttons = [...filters.querySelectorAll<HTMLButtonElement>("button")];
  const cards = [
    ...document.querySelectorAll<HTMLElement>("[data-categories]"),
  ];
  const count = document.querySelector<HTMLElement>("[data-result-count]");
  const apply = (type: string) => {
    if (!buttons.some((b) => b.dataset.filter === type)) type = "all";
    let visible = 0;
    cards.forEach((card) => {
      const match =
        type === "all" || card.dataset.categories?.split(" ").includes(type);
      card.hidden = !match;
      if (match) visible++;
    });
    buttons.forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.filter === type)),
    );
    if (count)
      count.textContent = `${visible} ${visible === 1 ? "project" : "projects"}`;
  };
  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      const url = new URL(window.location.href);
      const type = button.dataset.filter || "all";
      if (type === "all") url.searchParams.delete("type");
      else url.searchParams.set("type", type);
      history.pushState({}, "", url);
      apply(type);
    }),
  );
  addEventListener("popstate", () =>
    apply(new URL(location.href).searchParams.get("type") || "all"),
  );
  apply(new URL(location.href).searchParams.get("type") || "all");
  filters.hidden = false;
}
const copy = document.querySelector<HTMLButtonElement>("[data-copy-email]");
if (copy) {
  copy.hidden = false;
  copy.addEventListener("click", async () => {
    const feedback = document.querySelector<HTMLElement>(
      "[data-copy-feedback]",
    );
    try {
      await navigator.clipboard.writeText("oluwoletoluwani@gmail.com");
      if (feedback) feedback.textContent = "Address copied.";
    } catch {
      if (feedback)
        feedback.textContent =
          "Copy didn’t work. Select the address or use the email link.";
    }
  });
}
const contents = document.querySelector<HTMLElement>(".case-contents");
const sections = [
  ...document.querySelectorAll<HTMLElement>("[data-case-section]"),
];
if (contents && sections.length) {
  const current = document.querySelector<HTMLElement>(
    "[data-reading-progress]",
  );
  let scheduled = false;
  const update = () => {
    scheduled = false;
    if (motion.matches) {
      contents
        .querySelectorAll("a")
        .forEach((a) => a.removeAttribute("aria-current"));
      if (current) current.style.width = "0%";
      return;
    }
    const active =
      sections.filter((s) => s.getBoundingClientRect().top <= 150).at(-1) ||
      sections[0];
    contents.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
      if (a.hash === `#${active.id}`)
        a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    });
    const end =
      sections.at(-1)!.getBoundingClientRect().bottom +
      window.scrollY -
      window.innerHeight;
    const start =
      sections[0].getBoundingClientRect().top + window.scrollY - 150;
    if (current)
      current.style.width = `${Math.max(0, Math.min(100, ((window.scrollY - start) / Math.max(1, end - start)) * 100))}%`;
  };
  addEventListener(
    "scroll",
    () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  motion.addEventListener("change", update);
  update();
}
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!motion.matches) entry.target.classList.add("section-arrived");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => observer.observe(el));
}
document.querySelectorAll<HTMLElement>(".audio-sample").forEach((figure) => {
  const audio = figure.querySelector("audio");
  const button = figure.querySelector<HTMLButtonElement>("[data-audio-toggle]");
  if (!audio || !button) return;
  button.hidden = false;
  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        const feedback = figure.querySelector(".audio-feedback");
        if (feedback)
          feedback.textContent =
            "Playback could not start. Use the audio controls or open the file.";
      }
    } else audio.pause();
  });
  const sync = () => {
    button.textContent = audio.paused
      ? "Play audio sample"
      : "Pause audio sample";
    button.setAttribute("aria-pressed", String(!audio.paused));
  };
  audio.addEventListener("play", sync);
  audio.addEventListener("pause", sync);
  audio.addEventListener("ended", sync);
});
