$(function() {


    // ============== menu ========================================

    $(".header__burger").on("click", function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // ============== header__search ==============================
    $(".header__search-icon").on("click", function(event) {
        $('.header__search-form').toggleClass('active');
    });
});