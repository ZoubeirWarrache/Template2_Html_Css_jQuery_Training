$(function () {
    "use strict";

    var mySlider = $(".slider");
    
    // Adjust header height
    var myHeader = $(".header");
    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());
        
        // Centring bxSlider list items
        mySlider.each(function () {
            $(this).css("paddingTop", ($(window).height()-$(".slider li").height()) / 2);
        });
        
    });

    // links add active class
    $(".links li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    
    // Centring bxSlider list items
    mySlider.each(function () {
        $(this).css("paddingTop", ($(window).height()-$(".slider li").height()) / 2);
    });

    // Initialize bxSlider 
    mySlider.bxSlider({
        pager : false
    });

    // Make smooth scroll to services secion
    $(".links li a").click(function () {
        $("html,body").animate({
            scrollTop : $($(this).data('value')).offset().top
        },1000);
    });
    
    // Our Testimonials Slider
    (function autoSlider(){

            $(".t-slider .active").each(function () {
                if (!$(this).is(":last-child")) {

                    $(this).delay(3000).fadeOut(1000, function () {

                        $(this).removeClass("active").next().addClass("active").fadeIn();

                        autoSlider();
                    });
                } else {

                    $(this).delay(3000).fadeOut(1000, function () {

                        $(this).removeClass("active");

                        $(".t-slider div").eq(0).addClass("active").fadeIn();

                        autoSlider();
                    });
                }
            });
    }());

    // Initilize Mixitup
    $("#Container").mixItUp();

    // Adjust Shuffle Links
    $(".shuffle li").click(function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });

    // Trigger nice scroll 
    $("body").niceScroll({
        cursorcolor:"rgb(26,188,156)",
        cursorborder:"none",
        cursorwidth:"9px",
        zindex: 9
    });
    
});
