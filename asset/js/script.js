//**************************** Select Sidenavbar  *****************************//

var sidenavbar = document.querySelector(".side-navbar")

function shownavbar() {
    sidenavbar.style.right = "0"
}
function closenavbar() {
    sidenavbar.style.right = "-100%"
}


//**  Header JS **//


// Slider Logic
// Guarded so this only runs on pages that actually contain a slider
// (the homepage). Without this check, script errors here would stop
// the mobile menu (shownavbar/closenavbar) from working on every
// other page, since they share this same script file.
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');

if (slider && sliderContainer) {
    const slides = document.querySelectorAll('.slide');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        // Update transform
        slider.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;

        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Event Listeners
    if (arrowRight) arrowRight.addEventListener('click', nextSlide);
    if (arrowLeft) arrowLeft.addEventListener('click', prevSlide);
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            goToSlide(parseInt(dot.getAttribute('data-slide')));
        });
    });

    // Auto-slide
    let autoSlide = setInterval(nextSlide, 5000);

    // Pause on hover
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, 5000);
    });

    // Initialize
    updateSlider();
}