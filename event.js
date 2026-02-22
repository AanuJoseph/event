const menu = document.querySelector('.menu-btn');
const close = document.querySelector('#nav-close');
const nav = document.querySelector('nav');
// const overlay = document.querySelector('.nav-overlay') 


menu.addEventListener('click', () => {
  nav.classList.add('active')
});
close.addEventListener('click', () => {
  nav.classList.remove('active')
});
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active')
  });
});

const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.dots span');

let index = 0;



function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlider();
});

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});

window.addEventListener('resize', updateSlider);
updateSlider();

const headings = document.querySelectorAll(
  ".heading, .gal-head, .testimonial-head, .contact-head"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-underline");
    }
  });
}, { threshold: 0.5 });

headings.forEach(h => observer.observe(h));


// staggered card
const cards = document.querySelectorAll('.services-card');

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => cardObserver.observe(card));