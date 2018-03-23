/*global $ ,window ,console*/
/**/

/***********responsive of settings***************/
var width = $(window).width();
if (width < 991) {
    $(".setting .container").removeClass("flex");
    $(".setting .container").addClass("block");
} else {
    $(".setting .container").removeClass("block");
    $(".setting .container").addClass("flex");
}
$(window).resize(function () {
    "use strict";
    var width = $(window).width();
    if (width < 991) {
        $(".setting .container").removeClass("flex");
        $(".setting .container").addClass("block");
    } else {
        $(".setting .container").removeClass("block");
        $(".setting .container").addClass("flex");
    }
    
});
/*******************to top button********************/

if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
} else {
    document.getElementById("topBtn").style.display = "none";
}
document.body.onload = function () {
    "use strict";
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("topBtn").style.display = "block";
        } else {
            document.getElementById("topBtn").style.display = "none";
        }
    }
    window.onscroll = function () {scrollFunction(); };

    $('#topBtn').click(function () {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });
};
/*******************header icons*********************/
$(".description-ico").on('click', function () {
    "use strict";
    $(".phone , .text").addClass("d-none");
    $(".description").removeClass("d-none");
});
$(".phone-ico").on('click', function () {
    "use strict";
    $(".description , .text").addClass("d-none");
    $(".phone").removeClass("d-none");
});
$(".text-ico").on('click', function () {
    "use strict";
    $(".description , .phone").addClass("d-none");
    $(".text").removeClass("d-none");
});
/********************navbar***********************/
$(".nav-item a").mouseover(function () {
    "use strict";
    $(this).siblings().addClass("hActive");
    
}).mouseleave(function () {
    "use strict";
    if ($(this).siblings().hasClass("clicked")) {
        $(this).siblings().addClass("hActive");
    } else {
        $(this).siblings().removeClass("hActive");
    }
}).on('click', function (e) {
    "use strict";
    $(this).siblings().addClass("hActive clicked");
    $(this).parent().siblings().children().removeClass("clicked");
    if ($(this).parent().siblings().children().hasClass("hActive")) {
        $(this).parent().siblings().children().removeClass("hActive");
    }
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($(this).data("scroll")).offset().top
    }, 800);
});
/**********************our projects*************************/

$(".our-projects .buttons ul li").on('click', function () {
    "use strict";
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data('class') === 'All') {
        $('.companies .cards').removeClass('d-none');
    } else {
        $('.companies .cards').addClass('d-none');
        $($(this).data('class')).removeClass("d-none");
        
    }
});
/*****************************map*****************************/
$(".map .cont ul li").mouseover(function () {
    "use strict";
    $(this).children().css("color", "#fff");
   
});
$(".map .cont ul li").mouseleave(function () {
    "use strict";
    $(this).children().css("color", "#6c6d70");
});


