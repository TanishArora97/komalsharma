const testTubes = document.querySelectorAll('.test-tube');
const sections = document.querySelectorAll('.section');

testTubes.forEach(tube => {
  tube.addEventListener('click', () => {
    const sectionId = tube.getAttribute('data-section');

    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show the clicked section
    document.getElementById(sectionId).classList.add('active');
  });
});