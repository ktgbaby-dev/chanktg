// Skip intro
document.getElementById('skip-intro').addEventListener('click', () => {
  document.getElementById('intro').style.display = 'none';
});
setTimeout(() => {
  const intro = document.getElementById('intro');
  if (intro) intro.style.display = 'none';
}, 1900);

// Contact form (no backend — concept only)
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-note').hidden = false;
  this.reset();
});

// Library filter (all tracks are singles for now)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.library-card').forEach(card => {
      const cat = card.dataset.cat;
      card.style.display = (filter === 'all' || filter === cat) ? 'block' : 'none';
    });
  });
});

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '60px';
    nav.style.right = '24px';
    nav.style.background = '#151515';
    nav.style.border = '2px solid #ffd400';
    nav.style.padding = '16px';
    nav.style.gap = '12px';
  });
}

// Play button just scrolls attention to stream links (no real audio)
document.getElementById('play-btn').addEventListener('click', () => {
  document.querySelector('.stream-links').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
