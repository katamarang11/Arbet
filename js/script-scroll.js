$(document).ready(function () {
  const navOffset = $('#nav').offset().top;
  $(window).scroll(function () {
    const scrolled = $(this).scrollTop();

    if (scrolled > navOffset) {
      // шапка прилипла
      $('#wrapper').addClass('nav-fixed');
    } else if (scrolled < navOffset) {
      // шапка отлипла
      $('#wrapper').removeClass('nav-fixed');
    }
  });
});