// ---------- Skills marquee (list doubled so the loop is seamless) ----------
const tags = ['Python','FastAPI','React','Node.js','SQL Server','MongoDB','TypeScript','JWT','Docker','Tailwind'];
const track = document.getElementById('marquee');
if (track) {
  track.innerHTML = tags.concat(tags)
    .map(t => `<span>${t} <i>&#10022;</i></span>`)
    .join('');
}

// ---------- Footer year ----------
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// ---------- Dark mode toggle (the initial theme is set in <head>) ----------
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#1C1510' : '#EFE5D2');
  });
}

// ---------- Scroll reveal ----------
const targets = document.querySelectorAll('.about-body, .project, .panel, .exp, .skill-card, .edu, .contact');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('in');
      // remove the helper classes afterwards so hover effects keep working
      el.addEventListener('animationend', () => el.classList.remove('reveal', 'in'), { once: true });
      io.unobserve(el);
    });
  }, { threshold: 0.12 });
  targets.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}
