$(document).ready(function() {
    
    // Section 1 - Used to make it full screen
    $(window).resize(function() {
        var bodyheight = $(window).height();
        var headerheight = $("header").height();
        $(".section-1").height( (bodyheight - 20) - headerheight);
    }).resize();
    
    // Section 1 - Scroll button
    $('.scroll-link').click(function(){
        $('html, body').animate({
        scrollTop: $(".section-2").offset().top
    }, 2000);
    });
    
});