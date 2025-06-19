'use strict';

function equalizeCarouselTextHeights() {
  const wrappers = document.querySelectorAll('#heroCarousel .carousel-text__wrapper');
  let maxHeight = 0;

  wrappers.forEach(wrapper => {
    wrapper.style.height = 'auto';
    const height = wrapper.offsetHeight;
    if (height > maxHeight) maxHeight = height;
  });

  wrappers.forEach(wrapper => {
    wrapper.style.height = maxHeight + 'px';
  });
}

window.addEventListener('load', equalizeCarouselTextHeights);
window.addEventListener('resize', equalizeCarouselTextHeights);
