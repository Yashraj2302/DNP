// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!open));
    navToggle.setAttribute('aria-expanded', String(!open));
  });
}

// IntersectionObserver for reveal animations
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => io.observe(el));

// Dynamic year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Contact form handling (client-side validation + toast)
const form = document.getElementById('contact-form');
const toast = document.getElementById('toast');
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function validateEmail(email) {
  return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
}

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = /** @type {HTMLInputElement} */(document.getElementById('name'));
    const email = /** @type {HTMLInputElement} */(document.getElementById('email'));
    const message = /** @type {HTMLTextAreaElement} */(document.getElementById('message'));
    const nameErr = name.nextElementSibling;
    const emailErr = email.nextElementSibling;
    const messageErr = message.nextElementSibling;

    let valid = true;
    if (!name.value.trim()) { if (nameErr) nameErr.textContent = 'Please enter your name'; valid = false; } else { if (nameErr) nameErr.textContent = ''; }
    if (!validateEmail(email.value)) { if (emailErr) emailErr.textContent = 'Please enter a valid email'; valid = false; } else { if (emailErr) emailErr.textContent = ''; }
    if (!message.value.trim()) { if (messageErr) messageErr.textContent = 'Please enter a message'; valid = false; } else { if (messageErr) messageErr.textContent = ''; }

    if (!valid) return;

    // Placeholder submit — integrate with backend or Formspree later
    showToast('Thanks! We\'ll be in touch shortly.');
    form.reset();
  });
}

// Lazy-load Spline viewer script if needed (for robustness on some browsers)
const splineEl = document.getElementById('hero-spline');
if (splineEl && !customElements.get('spline-viewer')) {
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js';
  document.head.appendChild(script);
}


