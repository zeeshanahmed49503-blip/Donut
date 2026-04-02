const hamburger = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    hamburger.classList.toggle('is-active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('is-active');
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro-screen');
    const main = document.getElementById('main-content');

    setTimeout(() => {
        intro.style.top="-100%"
        
    }, 3000); 
    setTimeout(() => {
        intro.style.display="none"
        
    }, 5000); 
});

let abouthappiness = document.querySelector(".about-happiness")

let dots = 1;

setInterval(() => {
    abouthappiness.innerHTML = "happiness" + ".".repeat(dots);

    dots++;
    if (dots > 3) {
        dots = 1;
    }
}, 500);


    const backToTop = document.getElementById('backToTop');
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
