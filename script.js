$(document).ready(function () {
    $('#navbar-toggler').click(function () {
        $('#nav-icon').toggleClass('open');
    });
});

var nystories = document.getElementById('education').offsetTop;
window.onscroll = function () {
    if (window.pageYOffset > 0) {
        var opac = (window.pageYOffset / nystories);
        document.getElementById('background').style.backgroundImage = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url('images/profile3.gif')";
    }
}

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
    $('#nav-icon').toggleClass('open');
});