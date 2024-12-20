document.addEventListener('DOMContentLoaded', () => {

    const participantsInput = document.getElementById('participants');
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');

    if (participantsInput && increaseBtn && decreaseBtn) {

        increaseBtn.addEventListener('click', () => {
            participantsInput.value = parseInt(participantsInput.value) + 1;
        });


        decreaseBtn.addEventListener('click', () => {
            if (parseInt(participantsInput.value) > 1) {
                participantsInput.value = parseInt(participantsInput.value) - 1;
            }
        });
    }


    const sections = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const revealPoint = 150;
        sections.forEach((section) => {
            const windowHeight = window.innerHeight;
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    const cards = document.querySelectorAll('.tour-card');

    const scrollReveal = () => {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardPosition < windowHeight - 50) {
                card.classList.add('scroll-popup');
            }
        });
    };

    window.addEventListener('scroll', scrollReveal);
    scrollReveal();


    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        window.onscroll = function () {
            if (document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    const listItems = document.querySelectorAll(".services-list li");

    function revealListItems() {
        const windowHeight = window.innerHeight;
        listItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < windowHeight - 100) {
                setTimeout(() => {
                    item.classList.add("active");
                }, index * 200);
            }
        });
    }

    window.addEventListener("scroll", revealListItems);
    revealListItems();


    const counters = document.querySelectorAll('.count');
    const statsSection = document.querySelector('.travel-stats');
    let statsAnimated = false;

    function animateCounters() {
        if (!statsAnimated && statsSection.getBoundingClientRect().top < window.innerHeight) {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;


                    const increment = target / 200;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + increment);
                        setTimeout(updateCount, 20);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
            statsAnimated = true;
        }
    }

    window.addEventListener("scroll", animateCounters);
    animateCounters();
});






// ==============================================================================


const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
};

const prevSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
};

//document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);


setInterval(nextSlide, 5000);


document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    // Toggle visibility of the nav-links on click
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});



// ==================================services===================================

(function ($) {

    "use strict";

    // Testimonial Carousel
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'zoomIn',
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 300,
            autoplay: 7000,
            navText: ['<span class="arrow-left"></span>', '<span class="arrow-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }

})(window.jQuery);


// ===================================destination===============================


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselTrack = document.querySelector('.carousel-track');

let currentIndex = 0;
const cardWidth = document.querySelector('.carousel-card').offsetWidth + 15; // Card width + gap
const totalCards = document.querySelectorAll('.carousel-card').length;

// Move carousel to the next set of cards
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalCards - 4) { // Ensure we don't go past the last card
    currentIndex++;
    carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});

// Move carousel to the previous set of cards
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) { // Ensure we don't go past the first card
    currentIndex--;
    carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
