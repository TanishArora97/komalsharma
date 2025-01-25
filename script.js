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