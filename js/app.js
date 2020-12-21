const links = document.querySelectorAll('.menu-items a');
const sections = document.querySelectorAll('.section-container');

function activeScroll() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

activeScroll();
window.addEventListener('scroll', activeScroll);
