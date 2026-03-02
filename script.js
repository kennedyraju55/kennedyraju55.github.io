// Navbar scroll shadow
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// Scroll reveal
const observer = new IntersectionObserver(
  entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
  { threshold: 0.1 }
);
document.querySelectorAll('.stat-card, .skill-group, .project-card, .timeline-item, .edu-card, .cert-card, .contact-card')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });
