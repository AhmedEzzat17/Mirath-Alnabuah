document.addEventListener("DOMContentLoaded", () => {  // fade in , fade in left
  const fadeInElements = document.querySelectorAll(".fade-in, .fade-in-left");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  fadeInElements.forEach((el) => {
    observer.observe(el);
  });
});


document.addEventListener("DOMContentLoaded", function() {  // navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });
          link.classList.add('active');
      });
    });
  });
  
  
  window.addEventListener("load", function () {  // load in nav , carousel
    const navbar = document.querySelector(".navbar");
    const carousel = document.querySelector(".carousel");
    const carousel_caption = document.querySelector(".carousel-caption");
    navbar.classList.add("visible");
    carousel.classList.add("visible");
    carousel_caption.classList.add("visible");
  });


