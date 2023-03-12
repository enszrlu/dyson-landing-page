let carouselCaptions = document.querySelectorAll('.carousel-captions');
let captions = document.querySelectorAll('.caption');
let darkBg = document.querySelectorAll('.dark-bg');

window.onresize = windowResize;
windowResize();

function windowResize() {
    let width = window.innerWidth;
    if (width > 972) {
        carouselCaptions.forEach((cap) => {
            cap.classList.add('carousel-caption');
        });
        darkBg.forEach((item) => {
            item.classList.remove('text-dark');
            item.classList.add('text-light');
        });
        captions.forEach((cap) => cap.classList.add('position-absolute'));
    } else {
        carouselCaptions.forEach((cap) => {
            cap.classList.remove('carousel-caption');
            cap.classList.add('text-dark');
        });

        darkBg.forEach((item) => item.classList.remove('text-light'));
        captions.forEach((cap) => cap.classList.remove('position-absolute'));
    }
}
