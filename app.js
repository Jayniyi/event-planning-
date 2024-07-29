// for mobile navbar
window.onload = function(){
    window.addEventListener('scroll', function (e){
      if (window.pageYOffset > 100){
        document.querySelector("header").classList.add('is-scrolling');
      } else {
        document.querySelector("header").classList.remove('is-scrolling');
      }
    });
  const menu_btn = document.querySelector('.hamburger');
  
  const mobile_menu = document.querySelector('.mobile-nav');
  menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  });
} 
// for fixed desktop nav
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.padding = "1rem 1rem";
    document.getElementById("nav").style.boxShadow = "0rem  .1rem 1rem   #4d4d50";    document.getElementById("nav").style.transition = "0.4s";
  } else {
    // document.getElementById("navbar").style.padding = "10px 20px";
    // document.getElementById("navbar").style.marginBottomBottom = " 30px";
    document.getElementById("nav").style.boxShadow = "0rem  0rem 0rem  ";
  }
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});