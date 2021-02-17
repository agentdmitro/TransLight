

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      761: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      760: {
        slidesPerView: 1,
        spaceBetween: 50
      },
      
      360: {
        slidesPerView: 1,
        spaceBetween: 50
      },
    }
    
    });;

    
    var swiper = new Swiper('.swiper-container2', {
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });




  var header = document.getElementById("myDIV");
  var btns = header.getElementsByClassName("tab__title");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  };;


  let menu_button = document.querySelector('.header__burger');
let menu_itself = document.querySelector('.header__menu');
let menu_list = document.querySelector('.header__list');


menu_button.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');

};

menu_list.onclick = function() {
  menu_button.classList.toggle('active');
  menu_itself.classList.toggle('active');

};

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })
/*с подключением библиотеки jquery:

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// закрытие меню при клике на ссылку
$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});*/



