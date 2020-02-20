$(document).ready(function () {
    $('#navbar-toggler').click(function () {
        $('#nav-icon').toggleClass('open');
    });
    var topPosition = $(window).height()
    var divs = $('.hide');
    window.onscroll = function () {
        /*
        if (window.pageYOffset > 0) {
            var opac = (window.pageYOffset / topPosition);
            document.getElementById('background').style.backgroundImage = "linear-gradient(rgba(255, 255, 255, " + opac + ") 0%, rgba(255, 255, 255, " + opac + ") 60%), url('images/profile-resize.png')";
        }
        */
        $.each(divs, function (i, item) {
            if ($(item).offset().top <= $(window).scrollTop() + $(window).height()) {
                $(item).animate({ opacity: 1 }, 400);
            }

        });
    }
    $('.navbar-nav>li>a').on('click', function (e) {
        e.preventDefault();
        var the_id = $(this).attr("href");

        $('html, body').stop().animate({
            scrollTop: $(the_id).offset().top
        }, 400);
        $('.navbar-collapse').collapse('hide');
        $('#nav-icon').removeClass('open');
    });


});

$("#scrollBtn").click(function () {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('#panel1').offset().top
    }, 400);
});


function scrollThere(targetElement, e) {
    e.preventDefault();
    $('html, body').animate(
        { scrollTop: targetElement.offset().top }, 400
    );
}

window.addEventListener('wheel', mouseWheelEvent, { passive: false });

function mouseWheelEvent(e) {
    var background = $('#background').offset().top;
    var panel1 = $('#panel1').offset().top;
    var panel2 = $('#panel2').offset().top;
    var lastScrollTop = $(this).scrollTop(),
        scrollDirection,
        targetUp,
        targetDown,
        targetElement;
    if (e.wheelDelta < 0 || e.deltaY > 0) {
        scrollDirection = 'down';

    } else {
        scrollDirection = 'up';
    }
    if (lastScrollTop === background) {
        targetUp = $('#background');
        targetDown = $('#panel1');
    } else if (lastScrollTop === panel1) {
        targetUp = $('#background');
        targetDown = $('#panel2');
    } else if (lastScrollTop === panel2) {
        targetUp = $('#panel1');
        targetDown = $('#panel2');
    } else if (lastScrollTop < panel1) {
        targetUp = $('#background');
        targetDown = $('#panel2');

    } else if (lastScrollTop < panel2) {
        targetUp = $('#panel1');

    }
    if (scrollDirection === 'down') {
        targetElement = targetDown;
    } else if (scrollDirection === 'up') {
        targetElement = targetUp;
    }

    if (typeof targetElement !== 'undefined') {
        scrollThere(targetElement, e);
    }


}

