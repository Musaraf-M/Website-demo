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