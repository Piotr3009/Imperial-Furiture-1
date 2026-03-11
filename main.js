/* ============================================================
   IMPERIAL FURNITURE — main.js
   Wspólny JS: scroll reveal, IntersectionObserver
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
