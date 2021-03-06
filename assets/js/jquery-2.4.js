$(function() {
  $(window).on("load scroll", function() {
    $(".area_top_view .container img").fadeIn(2100);

    $(".area_top_view .container p").fadeIn(2400);

    $('.fade-in').each(function() {
      var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('scrollin');
      }
    });
  });

  // モーダルウィンドウを開く
  $('.js-modal-open').on('click', function() {
    var target = $(this).data('target');
    var modal = document.getElementById(target);
    scrollPosition = $(window).scrollTop();

    $('body').addClass('fixed').css({
      'top': -scrollPosition
    });
    $(modal).fadeIn();
    return false;
  });

  // モーダルウィンドウを閉じる
  $('.js-modal-close').on('click', function() {
    $('body').removeClass('fixed');
    window.scrollTo(0, scrollPosition);
    $('.js-modal').fadeOut();
    return false;
  });

});
