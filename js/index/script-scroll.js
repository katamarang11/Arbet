$(document).ready(function () {
  const navOffset = $('#nav').offset().top;
  const cardsOffset = $('.collection_background').offset().top;
  $(window).scroll(function () {
    const scrolled = $(this).scrollTop();

    if (scrolled > navOffset) {
      // шапка прилипла
      $('#wrapper').addClass('nav-fixed');
    } else if (scrolled < navOffset) {
      // шапка отлипла
      $('#wrapper').removeClass('nav-fixed');
    }

    if (scrolled > cardsOffset - 450) {
      $('.card_animation-1').addClass('animation-1');
      $('.card_animation-2').addClass('animation-2');
      $('.card_animation-3').addClass('animation-3');
      $('.card_animation-4').addClass('animation-4');
    }
  });
});
