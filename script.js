
// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }) }
  });
});

// ── Scroll reveal ──
const obs = new IntersectionObserver(en => { en.forEach(e => { if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' } }) }, { threshold: 0.1 });
document.querySelectorAll('.av-card,.chip,.info-row,.gal-item').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  obs.observe(el);
});

// ── Year tabs ──
document.querySelectorAll('.yr-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const yr = tab.dataset.year;
    document.querySelectorAll('.yr-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.gal-year-section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    const sec = document.querySelector(`.gal-year-section[data-year="${yr}"]`);
    if (sec) sec.classList.add('active');
  });
});

// ── Lightbox ──
let lbItems = [], lbIdx = 0;
function openLb(items, idx) {
  lbItems = items; lbIdx = idx; showLb();
  document.getElementById('lightbox').classList.add('open');
}
function showLb() {
  const it = lbItems[lbIdx];
  document.getElementById('lb-img').src = it.src;
  document.getElementById('lb-img').alt = it.caption;
  document.getElementById('lb-caption').textContent = it.caption;
  document.getElementById('lb-event').textContent = it.event;
}

// // Attach clicks to gallery items
// document.querySelectorAll('.gal-year-section').forEach(section => {
//   const items = [...section.querySelectorAll('.gal-item')].map(el => ({
//     src: el.querySelector('img').src,
//     caption: el.dataset.caption || '',
//     event: el.dataset.event || ''
//   }));
//   section.querySelectorAll('.gal-item').forEach((el, i) => {
//     el.addEventListener('click', () => openLb(items, i));
//   });
// });
// document.getElementById('lbClose').onclick = () => document.getElementById('lightbox').classList.remove('open');
// document.getElementById('lightbox').onclick = e => { if (e.target === document.getElementById('lightbox')) document.getElementById('lightbox').classList.remove('open') };
// document.getElementById('lb-prev').onclick = e => { e.stopPropagation(); lbIdx = (lbIdx - 1 + lbItems.length) % lbItems.length; showLb() };
// document.getElementById('lb-next').onclick = e => { e.stopPropagation(); lbIdx = (lbIdx + 1) % lbItems.length; showLb() };
// document.addEventListener('keydown', e => {
//   if (!document.getElementById('lightbox').classList.contains('open')) return;
//   if (e.key === 'Escape') document.getElementById('lightbox').classList.remove('open');
//   if (e.key === 'ArrowLeft') { lbIdx = (lbIdx - 1 + lbItems.length) % lbItems.length; showLb() }
//   if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % lbItems.length; showLb() }
// });
