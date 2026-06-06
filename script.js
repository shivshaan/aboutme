// Basic interactivity: theme toggle, scroll reveal, form demo, dynamic year.
// Keep this file small & framework-free so it's easy to edit.

(() => {
  // Theme toggle
  const body = document.body;
  const btn = document.getElementById('theme-toggle');

  // Initialize theme from localStorage
  const stored = localStorage.getItem('theme');
  if (stored === 'dark') {
    body.classList.add('dark');
    btn.textContent = '☀️';
  } else {
    body.classList.remove('dark');
    btn.textContent = '🌙';
  }

  btn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Contact form (demo) - client-side only
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    // Basic validation (browser does most)
    const data = new FormData(form);
    const name = data.get('name');
    alert(`Thanks ${name || 'there'}! This is a demo contact form. To enable real messages, connect to a backend or service like Formspree / Netlify Forms.`);
    form.reset();
  });

  // Simple scroll reveal for elements with .reveal
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = () => {
    const viewportHeight = window.innerHeight;
    reveals.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight - 60) el.classList.add('visible');
    });
  };
  // Run on load and on scroll/resize
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  window.addEventListener('load', () => {
    revealOnScroll();
    // small stagger fallback for users who don't scroll
    setTimeout(revealOnScroll, 300);
  });
})();
