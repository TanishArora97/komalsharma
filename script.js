const homeSection = document.querySelector('#home');
const tagline = document.querySelector('.tagline');
const detailedDescription = document.querySelector('.detailed-description');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // If scrolled past the hero section, revert to tagline
  if (scrollPosition > homeSection.offsetHeight) {
    tagline.style.opacity = 1;
    detailedDescription.style.opacity = 0;
  }
});

// JavaScript to Sort Publications by Year
// Sort publications dynamically by year
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.publications-container');
  const cards = Array.from(container.children);

  cards.sort((a, b) => b.dataset.year - a.dataset.year); // Sort descending by year

  cards.forEach(card => container.appendChild(card)); // Reorder in DOM
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});