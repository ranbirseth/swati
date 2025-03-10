// script.js (replace the scroll event listener)
document.addEventListener('scroll', function() {
    const parallaxSections = document.querySelectorAll('.parallax, .parallax-destinations');
    
    parallaxSections.forEach(section => {
        const backLayer = section.querySelector('.parallax-back, .parallax-destinations-back');
        if (backLayer) {
            const scrollPosition = window.pageYOffset;
            const speed = 0.5;
            backLayer.style.transform = `translateY(${scrollPosition * speed}px)`;
        }
    });
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     let content = document.querySelector(".travling-parallax .content");

//     window.addEventListener("scroll", function() {z
//         let contentPosition = content.getBoundingClientRect().top;
//         let screenPosition = window.innerHeight / 1.3;

//         if (contentPosition < screenPosition) {
//             content.style.opacity = "1";
//         }
//     });
// });
