
/*

const slides = document.querySelectorAll(".slide");
const slidesWrapper = document.querySelector(".slides-wrapper");

let currentSlide = 0;
let sliderIntervalId = null;

function loadSlides() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}

function goToNextSlide() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide += 1;
    }
    loadSlides();
}

function startAutoSlide() {
    sliderIntervalId = setInterval(goToNextSlide, 5000); 
}

function stopAutoSlide() {
    clearInterval(sliderIntervalId);
}

// Start auto slide when mouse enters the slider wrapper
slidesWrapper.addEventListener("mouseenter", () => {
    startAutoSlide();
});

// Stop auto slide when mouse leaves the slider wrapper
slidesWrapper.addEventListener("mouseleave", () => {
    stopAutoSlide();
});

// Start auto slide initially
startAutoSlide()  */




/*

const slides = document.querySelectorAll(".slide");
const slidesWrapper = document.querySelector(".slides-wrapper");

let currentSlide = 0;
let sliderIntervalId = null;

function loadSlides() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}

function goToNextSlide() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide += 1;
    }
    loadSlides();
}

function startAutoSlide() {
    sliderIntervalId = setInterval(goToNextSlide, 5000); 
}

function stopAutoSlide() {
    clearInterval(sliderIntervalId);
}

// Start auto slide when mouse enters the slider wrapper
slidesWrapper.addEventListener("mouseenter", () => {
    stopAutoSlide();
});

// Start auto slide when mouse leaves the slider wrapper
slidesWrapper.addEventListener("mouseleave", () => {
    startAutoSlide();
});

// Stop auto slide when mouse enters a slide image
slides.forEach(slide => {
    slide.addEventListener("mouseenter", () => {
        stopAutoSlide();
    });
});

// Start auto slide when mouse leaves a slide image
slides.forEach(slide => {
    slide.addEventListener("mouseleave", () => {
        startAutoSlide();
    });
});



// Start auto slide initially
startAutoSlide(); */

const slides = document.querySelectorAll(".slide");
const slidesWrapper = document.querySelector(".slides-wrapper");
const buttons = document.querySelectorAll(".slide-btn"); 

let currentSlide = 0;
let sliderIntervalId = null;

function loadSlides() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
}

function goToSlide(index) {
    currentSlide = index;
    loadSlides();
}

function startAutoSlide() {
    sliderIntervalId = setInterval(goToNextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(sliderIntervalId);
}

function goToNextSlide() {
    if (currentSlide === slides.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide += 1;
    }
    loadSlides();
}

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        goToSlide(index);
    });
});

slidesWrapper.addEventListener("mouseenter", () => {
    stopAutoSlide();
});

slidesWrapper.addEventListener("mouseleave", () => {
    startAutoSlide();
});

slides.forEach(slide => {
    slide.addEventListener("mouseenter", () => {
        stopAutoSlide();
    });
});

slides.forEach(slide => {
    slide.addEventListener("mouseleave", () => {
        startAutoSlide();
    });
});

startAutoSlide();







