$(document).ready(function () {
  $('.gallery-slider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 100,
      slidesToShow: 4, // Number of slides to show (adjust based on your needs)
      slidesToScroll: 1,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: false
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
              }
          }
      ]
  });
});


$( document ).ready(function() {
  $('.screen-carousel').slick({
      infinite:true,
      slidesToShow:3,
      slidesToScroll:1,
      speed:100,
      autoplaySpeed:5000,
      autoplay:true,
      centerMode:true,
      centerPadding:"0",
    });
});

// Show or hide the scroll-up button based on the scroll position
window.addEventListener("scroll", function () {
  const scrollUpButton = document.getElementById("scrollUpButton");
  if (window.scrollY > 300) { // Show button after scrolling down 300px
      scrollUpButton.classList.add("show");
  } else {
      scrollUpButton.classList.remove("show");
  }
});

// Smooth scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}




// Function to add 'scrolled' class when section comes into view
document.addEventListener("scroll", function () {
  const section = document.querySelector(".commercial-mall-section");
  const sectionPosition = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionPosition < screenHeight - 100) {
      section.classList.add("scrolled");
  }
});
 





// const slider = document.querySelector('.gallery-slider');
// const slides = document.querySelectorAll('.gallery-slide');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// let currentIndex = 0;

// function showSlide(index) {
//     slider.style.transform = `translateX(-${index * 100}%)`;
// }

// prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
//     showSlide(currentIndex);
// });

// nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
//     showSlide(currentIndex);
// });


gsap.from(".About",{
  opacity:0,
  duration:1,
  y:30,
  delay:1,
  stagger:0.5,
})




gsap.from(".nav-item",{
  opacity:0,
  duration:1,
 
  delay:1,
  stagger:0.5,
})


gsap.from(".navbar-brand",{
  opacity:0,
  duration:1,
 
  delay:1,
  stagger:0.5,
})