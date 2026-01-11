// Simple smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({behavior: 'smooth'});
  });
});

// Optional: form submit alert (replace with real backend later)
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Thank you for reaching out!");
});
