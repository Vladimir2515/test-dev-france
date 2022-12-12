document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('form'),
    accordion = document.querySelector('.accordion');

  // Accordion
  accordion.addEventListener('click', function (e) {
    let target = e.target;

    if (target.dataset.action) {
      switch (target.dataset.action) {
        case 'accordion':
          target.parentElement.classList.toggle('active');
          break;
      }
    }

  });
  //Меню бургер
  const iconMenu = document.querySelector('.menu__icon');
  if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
  }
  //Валидация формы
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  function formValidate(e) {
    let requiredElements = document.querySelectorAll('.req'),
      error = 0;

    for (let i = 0; i < requiredElements.length; i++) {
      let input = requiredElements[i];

      formRemoveError(input);

      if (input.classList.contains('email') && !emailTest(input)) {
        e.preventDefault();
        formAddError(input);
        error++;
      } else if (input.value === '') {
        e.preventDefault();
        formAddError(input);
        error++;
      }

    }

  }

  form.addEventListener('submit', formValidate);


});



// Slick слайдер
$(document).ready(function () {
  $('.wrapper__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]

  });
});