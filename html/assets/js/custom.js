var sw = $(window).width();
var sh = $(window).height();

// Font Resizer-------------------Start
function fontResizer() {
    var perc = parseInt(sw) / 120;
    $("body").css("font-size", perc);
}
// Font Resizer-------------------End

$(window).on("load", function() {
    if (sw > 1025) {
        fontResizer();
    }

    setTimeout(function () {
        $(".animate").bind("inview", function (event, isInView) {
          if (isInView) {
            var animate = $(this).attr("data-animation");
            var speedDuration = $(this).attr("data-duration");
            var $t = $(this);
            setTimeout(function () {
              $t.removeClass("animate");
              $t.addClass(animate + " animate__animated");
            }, speedDuration);
          }
        });
    }, 510);

    setTimeout(function() {
        /* ---------------- Image Desktop Mob Conversion -------------------- */
        // imagePath();
    }, 1000);

    //loader init
    setTimeout(function() {
        $(".lds-wrapper").fadeOut("slow");
        $("html").removeClass("loadjs");
    }, 500);

    if ($(document).find("img").hasClass("svg-convert")) {
        $(".svg-convert").svgConvert({
            onComplete: function() {},
        });
    }

    // $(".body-overlay").on("click", function() {
    //     $(".thankyou-popup").fadeOut("slow");
    //     $(this).fadeOut("slow");
    // });

    // $(".open-popup").on("click", function() {
    //     $(".thankyou-popup").fadeIn("slow");
    //     $(".body-overlay").fadeIn("slow");

    // });

});



$(document).ready(function() {
    /* Navigation Active */
    $("#toggle").click(function() {
        $(this).toggleClass("active");
        $(".navigation").toggleClass("open");
        $('body').toggleClass('disabled-scroll')
    });
    /* Navigation Active */

    //Home Hero Slider--------------
    if ($(document).find("div").hasClass("news__slider")) {
        var news_slider = new Swiper(".news__slider .swiper", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".news__slider .swiper-pagination",
                clickable: true
            },
        });
    }

    // facilities
    if ($(document).find("section").hasClass("facilities")) {
        var facilities_slider = new Swiper(".facilities .swiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: false,
            speed: 1000,
            // autoplay: {
            //     delay: 2500,
            //     disableOnInteraction: false,
            // },
            pagination: {
                el: ".facilities .swiper-pagination",
                clickable: true
            },
            breakpoints: {
                576: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 5,
                },
            },
        });
    }
    




    $(".single-select").select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: "custom-dropdown",
        width: '100%'
    });


    function scrollFix(scrollbar) {
        const draggerRail = $(scrollbar).find(".mCSB_draggerRail");
        const draggerContainer = $(scrollbar).find(".mCSB_draggerContainer");
        if (draggerRail.length > 0 && draggerRail.parent().hasClass("mCSB_dragger")) {
            draggerContainer.append(draggerRail);
        }
    }
    
    $(".malihu-scroll").mCustomScrollbar({
        theme: "dark-3",
        callbacks: {
            onInit: () => scrollFix(this)
        }
    });

    

    // tabs active
    var path = window.location.pathname.split("/").pop();
    var target = $('.newsroom-tabs__row > a[href="/' + path + '"]');
    var target2 = $('.menu__menuitem--menulink[href="/' + path + '"]');
    target.addClass('tab-active');
    target2.addClass('active');

    
    if((path == 'close-deals-detail.php') || (path == 'public-active-deals.php') || (path == 'public-active-deal-detail.php')  ) {
        var target3 = $('.newsroom-tabs__row > a:nth-child(1)');
        target3.addClass('tab-active');
    }

    // logout dropdown
    $(".nav-login__user").on("click", function() {
        $(this)
            .find(".nav-login__user__dropdown")
            .toggleClass("nav-login__user__dropdown--logout__open");
        $('.nav-login__bell__dropdown').removeClass('nav-login__bell__dropdown--notify-open');
    });

    // message notify dropdown open
    $('.nav-login__bell').on('click', function() {
        $(this)
            .find('.nav-login__bell__dropdown')
            .toggleClass('nav-login__bell__dropdown--notify-open');
            $('.nav-login__user__dropdown').removeClass('nav-login__user__dropdown--logout__open');
    });




    


});





// Landscape Mode off----------------Start
$(window).on("resize orientation", function() {
    sw = $(window).width();
    sh = $(window).height();
    if (sh < 450 ) {
        $("#portrait-warnning").css("display", "flex");
    } else {
        $("#portrait-warnning").css("display", "none");
    }

    setTimeout(function() {
        if (sw > 1025) {
            if (sw < 1400 && sw > 1300 && sh > 900) {} else {
                fontResizer();
            }
        }
    }, 1000);
});
// Landscape Mode off----------------End

// Sticky Header----------------Start
$(window).scroll(function() {
    var header1 = $(".header");
    var sticky1 = 0;
    if (sw < 767) {
        if (window.pageYOffset > sticky1) {
            header1.addClass("sticky");
            console.log("added");
        } else {
            header1.removeClass("sticky");
        }
    }
});
// Sticky Header----------------End



    Fancybox.bind("[data-fancybox]", {
        dragToClose: false
    });
    
