$(document).ready(function () {
    $('.project-item').mouseenter(function () {
        $(this).css('color', '#fff')
        $(this).find('h4 a').addClass('text-white')
    });
    $('.project-item').mouseleave(function () {
        $(this).css('color', 'transparent')
        $(this).find('h4 a').removeClass('text-white')
    });
});