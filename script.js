$(document).ready(function() {
    $('#open').click(function() {
        $('#envelope').removeClass('close').addClass('open');
    });

    $('#reset').click(function() {
        $('#envelope').removeClass('open').addClass('close');
    });
});
