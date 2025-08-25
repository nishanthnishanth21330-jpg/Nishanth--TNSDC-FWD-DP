// Current year

document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle

const menu = document.getElementById('menu');

const ham = document.getElementById('hamburger');

ham.addEventListener('click', () => menu.classList.toggle('open'));

// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(a => {

  a.addEventListener('click', e => {

    e.preventDefault();

    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });

    menu.classList.remove('open');

  });

});

// Scroll reveal

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add('visible');

      observer.unobserve(entry.target);

    }

  });

}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Contact form

const form = document.getElementById('contactForm');

form.addEventListener('submit', e => {

  e.preventDefault();

  const data = new FormData(form);

  const name = encodeURIComponent(data.get('name'));

  const email = encodeURIComponent(data.get('email'));

  const message = encodeURIComponent(data.get('message'));

  window.location.href = `mailto:nishanthnishanth21330@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

});