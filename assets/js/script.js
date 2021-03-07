$(document).ready(function () {
    $('.project-item').mouseenter(function () {
        $(this).css('color', '#fff')
    });
    $('.project-item').mouseleave(function () {
        $(this).css('color', 'transparent')
    });
});