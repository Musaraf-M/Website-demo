/* =========================================
              Stats
============================================ */
$(function() {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});

/* =========================================
                Progress Bars
============================================ */
$(function() {

    $("#progress-elements").waypoint(function() {

        $(".progress-bar").each(function() {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});


/* =========================================
                Owl carosel
============================================ */

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    center: true,
    responsiveClass: true,
    smartSpeed: 550,
    dots: true,
    responsive: {
        0: {
            items: 3,

        },

    }
})

/* =========================================
                Back-to-top
============================================ */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 150) {
        $('#back-to-top').fadeIn();
    } else {
        $('#back-to-top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function() {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function() {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 150) {

            // Show white nav
            $("nav").addClass("white-nav-top");

            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

            // Show back to top button
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");

            // Show logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// Smooth Scrolling
$(function() {

    $("a.smooth-scroll").click(function(event) {

        event.preventDefault();

        // get section id like #about, #servcies, #work, #team and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");

    });

});