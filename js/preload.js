$(document).ready(function() {
    $('.wrapper').hide()
    setTimeout(function() {
        $('.preload').fadeOut();
        $('.wrapper').show();
    }, 2000)
});
