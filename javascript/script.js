$(document).ready(function () {
    $(".back-to-top").css("display", "none");
    $("body").scroll(function () {
        $(this).scrollTop() == 0 ? $(".back-to-top").css("display", "none") : $(".back-to-top").css("display", "block");
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
    });
});