$(function() {


    // ============== menu ========================================
    $(".header__burger").on("click", function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.services-nav__sort').on('click', function() {
        $('.products__inner-sort').slideToggle();
    });
});