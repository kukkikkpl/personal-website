$(document).ready(function () {
    $('#navbar-toggler').click(function () {
        $('#nav-icon').toggleClass('open');
    });
    var topPosition = document.getElementById('bio').offsetTop;
    var divs = $('.hide');
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            var opac = (window.pageYOffset / topPosition);
            document.getElementById('background').style.backgroundImage = "linear-gradient(rgba(255, 255, 255, " + opac + ") 0%, rgba(255, 255, 255, " + opac + ") 60%), url('images/profile-resize.png')";
        }
        $.each(divs, function (i, item) {
            if ($(item).offset().top <= $(window).scrollTop() + $(window).height()) {
                $(item).animate({opacity: 1}, 1000);
            }

        });
    }
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
        $('#nav-icon').removeClass('open');
    });

});



