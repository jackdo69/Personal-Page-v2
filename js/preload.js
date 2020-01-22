//show preload then show the content
$(document).ready(function () {
    $('.wrapper').hide()
    setTimeout(function () {
        $('.preload').fadeOut();
        $('.wrapper').fadeIn();

        // hide when scroll down, show when scroll up
        var prevPos = $(this).scrollTop();
        $(window).on('scroll', function () {
            var currentPos = $(this).scrollTop();
            if (prevPos > currentPos) {
                $('nav').fadeIn();
            } else {
                $('nav').fadeOut();
            }
            prevPos = currentPos;
        });
    }, 2000)
});
