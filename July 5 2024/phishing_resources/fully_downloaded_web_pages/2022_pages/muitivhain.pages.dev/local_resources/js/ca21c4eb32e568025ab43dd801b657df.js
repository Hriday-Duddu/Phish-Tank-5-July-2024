function addCss(t) {
    var e = document.head,
        o = document.createElement("link");
    o.type = "text/css", o.rel = "stylesheet", o.href = t, o.id = "selected_font", e.appendChild(o)
}

function setCookie(t, e, o) {
    if (o) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3);
        var a = "; expires=" + i.toGMTString()
    } else a = "";
    document.cookie = t + "=" + e + a + "; path=/"
}

function getCookie(t) {
    for (var e = t + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
        for (var a = o[i];
            " " == a.charAt(0);) a = a.substring(1, a.length);
        if (0 == a.indexOf(e)) return a.substring(e.length, a.length)
    }
    return null
}

function antlerSettings({
    layout: t,
    color: e,
    background: o,
    font: i,
    header: a,
    textDirection: n,
    showSettings: s
}) {
    this.showSettings = s || "hide", this.layout = "show" === this.showSettings ? getCookie("layout") || "wide" : t || "wide", this.color = "show" === this.showSettings ? getCookie("color") || "pink" : e || "pink", this.background = "show" === this.showSettings ? getCookie("background") || "dark" : o || "dark", this.font = "show" === this.showSettings ? getCookie("font") || "opensans" : i || "opensans", this.header = "show" === this.showSettings ? getCookie("header") || "static" : a || "static", this.textDirection = "show" === this.showSettings ? getCookie("textDirection") || "ltr" : n || "ltr", this.manageLayout(), this.manageColor(), this.manageBackground(), this.manageFont(), this.manageHeader(), this.manageTextDirection(), this.manageSettings()
}

function changeColorStyle() {
    $("img.svg").each(function () {
        var t = jQuery(this),
            e = t.prop("attributes"),
            o = t.attr("src");
        $.get(o, function (o) {
            var i = $(o).find("svg");
            i = i.removeAttr("xmlns:a"), $.each(e, function () {
                i.attr(this.name, this.value)
            }), t.replaceWith(i)
        })
    })
}

function display() {
    $("#showall").on("click", function () {
        $(".targetDiv").show()
    }), $(".showSingle").on("click", function () {
        $(".targetDiv").hide(), $("#div" + $(this).attr("target")).show()
    })
}

function scrollgoto() {
    $(".gocheck").on("click", function (t) {
        var e = $(this.getAttribute("href"));
        e.length && (t.preventDefault(), $("html, body").stop().animate({
            scrollTop: e.offset().top
        }, 0))
    })
}

function popover() {
    $('[data-bs-toggle="popover"]').popover()
}

function backtotop() {
    var t = $(".cd-top");
    $(window).scroll(function () {
        $(this).scrollTop() > 300 ? t.addClass("cd-is-visible") : t.removeClass("cd-is-visible cd-fade-out"), $(this).scrollTop() > 1200 && t.addClass("cd-fade-out")
    }), t.on("click", function (t) {
        t.preventDefault(), $("body,html").animate({
            scrollTop: 0
        }, 0)
    })
}

function loader() {
    $(window).on("load", function () {
        $("#spinner-area").fadeOut("slow")
    })
}

function listenSlick() {
    $(".slick").on("unslick", function () {
        var t = setInterval(function () {
            $(window).width() > 590 && (clearInterval(t), slick())
        }, 100)
    })
}

function slick() {
    $("#slider").slick({
        centerMode: !0,
        centerPadding: "200px",
        slidesToShow: 3,
        infinite: !0,
        arrows: !0,
        rtl: !1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: "100px",
                slidesToShow: 3
            }
        }, {
            breakpoint: 991,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: "200px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                arrows: !0,
                centerMode: !0,
                centerPadding: "150px",
                slidesToShow: 1
            }
        }, {
            breakpoint: 590,
            settings: "unslick"
        }]
    }), $("#slider").length && $("#slider").slick("slickSetOption", "rtl", "rtl" === getCookie("textDirection"))
}

function misc() {
    $("#myModal").on("shown.bs.modal", function () {
        $("#myInput").focus()
    })
}
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    loadSkills(), misc(), loader(), backtotop(), popover(), scrollgoto(), display(), sticky(), changeColorStyle()
}), body = $("body"), antlerSettings.prototype.manageSettings = function () {
    switch (this.showSettings) {
        case "hide":
            break;
        // case "show":
        //     settings()
    }
}, antlerSettings.prototype.manageTextDirection = function () {
    switch (this.textDirection) {
        case "ltr":
            setCookie("textDirection", "ltr", 365), body.attr("data-textDirection", "ltr");
            break;
        case "rtl":
            $("html").attr("dir", "rtl"), $(function () {
                $("link.rtl").attr("disabled", !1)
            }), $(function () {
                $("link.ltr").attr("disabled", !0)
            }), setCookie("textDirection", "rtl", 365), body.attr("data-textDirection", "rtl")
    }
}, antlerSettings.prototype.manageHeader = function () {
    switch (this.header) {
        case "static":
            body.attr("data-header", "static"), setCookie("header", "static", 365);
            break;
        case "fixed":
            body.attr("data-header", "fixed"), setCookie("header", "fixed", 365);
            break;
        default:
            body.attr("data-header", "static"), setCookie("header", "static", 365)
    }
}, antlerSettings.prototype.manageLayout = function () {
    switch (this.layout) {
        case "wide":
            body.attr("data-layout", "wide"), setCookie("layout", "wide", 365);
            break;
        case "frame":
            body.attr("data-layout", "frame"), setCookie("layout", "frame", 365);
            break;
        case "boxed":
            body.attr("data-layout", "boxed"), setCookie("layout", "boxed", 365);
            break;
        case "wideboxed":
            body.attr("data-layout", "wideboxed"), setCookie("layout", "wideboxed", 365);
            break;
        default:
            body.attr("data-layout", "wide"), setCookie("layout", "wide", 365)
    }
}, antlerSettings.prototype.manageColor = function () {
    switch (this.color) {
        case "pink":
            body.attr("data-color", "pink"), setCookie("color", "pink", 365);
            break;
        case "green":
            body.attr("data-color", "green"), setCookie("color", "green", 365);
            break;
        case "blue":
            body.attr("data-color", "blue"), setCookie("color", "blue", 365);
            break;
        case "black":
            body.attr("data-color", "black"), setCookie("color", "black", 365);
            break;
        default:
            body.attr("data-color", "pink"), setCookie("color", "pink", 365)
    }
}, antlerSettings.prototype.manageBackground = function () {
    switch (this.background) {
        case "origin":
            body.attr("data-background", "origin"), setCookie("background", "origin", 365);
            break;
        case "dark":
            body.attr("data-background", "dark"), setCookie("background", "dark", 365);
            break;
        case "light":
            body.attr("data-background", "light"), setCookie("background", "light", 365);
            break;
        case "modern":
            body.attr("data-background", "modern"), setCookie("background", "modern", 365);
            break;
        default:
            body.attr("data-background", "origin"), setCookie("background", "origin", 365)
    }
}, antlerSettings.prototype.manageFont = function () {
    switch (this.font) {
        case "opensans":
            body.attr("data-font", "opensans"), addCss("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"), setCookie("font", "opensans", 365);
            break;
        case "poppins":
            body.attr("data-font", "poppins"), addCss("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"), setCookie("font", "poppins", 365);
            break;
        case "nunito":
            body.attr("data-font", "nunito"), addCss("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"), setCookie("font", "nunito", 365);
            break;
        case "raleway":
            body.attr("data-font", "raleway"), addCss("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"), setCookie("font", "raleway", 365);
            break;
        default:
            body.attr("data-font", "opensans"), addCss("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap"), setCookie("font", "opensans", 365)
    }
}, jQuery(function (t) {
    var e = window.location.href;
    t("#menu ul li a").each(function () {
        this.href === e && (t(this).addClass("active"), t(this).parent().parent().closest("li").addClass("active2"), t(".active2 a:first").addClass("active"))
    })
})
    , $(".mobile .menu-item").on("click", function () {
        "none" === $(".sub-menu", this).css("display") ? $(".sub-menu", this).css("display", "block") : $(".sub-menu", this).css("display", "none")
    });

function loadSkills() {
    $(".circle").not(".animated").each(function () {
        $(window).scrollTop() >= $(this).offset().top - .7 * $(window).height() && $(this).addClass("animated").circliful()
    })
}

function selectInit() {
    $(".selectpicker").each(function () {
        var t = $(this),
            e = t.attr("data-class");
        t.selectpicker({
            style: "cst-select " + e
        })
    })
}

function offheight() {
    if ($(window).width() > 750) {
        var t = $(".offers").outerHeight(!0);
        $(".offers.light").css("height", t + 1)
    }
}

function updateSlidesPerView(t, e, o, i) {
    var a = $(window).width();
    $(window).height();
    return a > 1199 ? i : a > 991 ? o : a > 700 ? e : t
}

function sticky() {
    $.fn.scrollBottom = function () {
        return $(document).height() - this.scrollTop() - this.height()
    };
}

var optionSettings = {
    layout:"wide",
    background:"dark",
    color:"pink",
    header:"static",
    font:"opensans",
    textDirection:"ltr",
    showSettings:"show",
};
new antlerSettings(optionSettings);