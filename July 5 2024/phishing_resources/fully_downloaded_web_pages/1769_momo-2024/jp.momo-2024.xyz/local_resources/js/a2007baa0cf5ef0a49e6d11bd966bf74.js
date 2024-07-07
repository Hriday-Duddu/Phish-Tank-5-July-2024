////////////////////////////////////////////////////////////////////////////////
// setViewport
////////////////////////////////////////////////////////////////////////////////

$(function(){
    if(navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
		var metalist = document.getElementsByTagName('meta');
		for(var i = 0; i < metalist.length; i++) {
			var name = metalist[i].getAttribute('name');
			if(name && name.toLowerCase() === 'viewport') {
				metalist[i].setAttribute('content', 'width=device-width');
				break;
			}
		}
    } else{
		var metalist = document.getElementsByTagName('meta');
		for(var i = 0; i < metalist.length; i++) {
			var name = metalist[i].getAttribute('name');
			if(name && name.toLowerCase() === 'viewport') {
				metalist[i].setAttribute('content', 'width=1100');
				break;
			}
		}
    }
});


////////////////////////////////////////////////////////////////////////////////
// font size
////////////////////////////////////////////////////////////////////////////////
$(function() {
    var history = $.cookie('fontSize');
    var elm = $('body');
    (!history)? elm.addClass('fontM'):elm.addClass(history);
    //クリックしたら実行
    $('li','#fontChange').click(function(){
        var setFontSize = this.id;
    	$.cookie('fontSize', setFontSize);
        elm.removeClass("fontL");
		elm.removeClass("fontM");
		elm.removeClass("fontS");
		elm.addClass(setFontSize);
		return false;
    });
});


////////////////////////////////////////////////////////////////////////////////
// PAGE TOP
////////////////////////////////////////////////////////////////////////////////
$(function(){
	var topBtn = $('#pagetop');
    topBtn.on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800,"easeOutExpo");
	});
});

////////////////////////////////////////////////////////////////////////////////
// more
////////////////////////////////////////////////////////////////////////////////
$(function() {
	//UserAgent で判定
	var career ="";
	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();
	if (userAgent.indexOf('msie') != -1) {
		career ="msie";
	}else if (userAgent.indexOf('chrome') != -1) {
		career ="chrome";
	}else if (userAgent.indexOf('safari') != -1) {
		career ="safari";
	}else if (userAgent.indexOf('firefox') != -1) {
		career ="firefox";
	}

	$(".morelist").each(function(){
		var clickNum = 0;
		listName = ($(this).attr("data-name"));
		firstNum = ($(this).attr("data-list")) - 1;
		var Num = parseInt($(this).attr("data-list"));
		var lisrt =$(this);
		var n = $("li",this).length;
		lisrt.find("li:gt("+ firstNum +")").hide();

		$("li",this).each(function(i) {
			$(this).attr('id', listName +'-list'+i);
		});

		var Btn = $(this).next(".more_btn");
		if(career == "firefox"){
			$("a",Btn).attr("href", "#"+ listName +"-list"+ (Num-1));
		}else{
			$("a",Btn).attr("href", "#"+ listName +"-list"+ Num);
		}
		if (n <= Num) {
			Btn.hide();
		}

		// btn
		Btn.click(function(event){
			listName = ($(this).prev(".morelist").attr("data-name"));
			var $clickLink = $("a",this);
			var siteSearch = $("#logo a").attr("href");

			Num += 10;
			lisrt.find("li:lt(" + Num + ")").each(function(i){
				$(this).show();
			});
			setTimeout(function(){
				if(career == "firefox"){
					$clickLink.attr("href", "#"+ listName +"-list"+ (Num-1));
				}else{
					$clickLink.attr("href", "#"+ listName +"-list"+ Num);
				}
			},100);
			if (n <= Num) {
				$(this).hide();
			}
			if(siteSearch === "/index.html" || siteSearch === "/en/index.html"){
				var mspeed = 400;
				var headerHeight = 75;
				var mtarget = $clickLink.attr("href");
				var mposition = $(mtarget).offset().top;
				if(window.matchMedia("(max-width:767px)").matches){
					mposition = mposition - headerHeight;
				}
				$("body,html").animate({scrollTop:mposition}, mspeed, "swing");
			}

		});

	});

});


////////////////////////////////////////////////////////////////////////////////
// rollover
////////////////////////////////////////////////////////////////////////////////
(function(onLoad) {
	try {
		window.addEventListener('load', onLoad, false);
	} catch (e) {
		window.attachEvent('onload', onLoad);
	}
})(function() {
	var tags = ["img","input"];
	for( var i=0, len=tags.length; i<len; i++ ) {
		var over = function() { this.src = this.src.replace('_off.', '_on.'); };
		var out	= function() { this.src = this.src.replace('_on.', '_off.'); };
		var el = document.getElementsByTagName(tags[i]);
		for (var j=0, len2=el.length; j<len2; j++) {
			var attr = el[j].getAttribute('src');
			if (!el[j].src.match(/_off\./)&&attr) continue;
			el[j].onmouseover = over;
			el[j].onmouseout = out;
		}
	}
});


////////////////////////////////////////////////////////////////////////////////
// sp_menu_btn
////////////////////////////////////////////////////////////////////////////////
$(function(){
	var menuBtn = $("#sp_menu_btn");
	var sHeight = (window.innerHeight)-48;

	$("#sp-menu .inner").height(sHeight);

	menuBtn.on("click", function(){
		$(window).scrollTop(0);
		$(this).toggleClass("on");
		$("body").toggleClass("spMenuOpen");
		$("#spMenu").toggleClass("on");
		//開閉状態に応じてボタンの説明を切り替える
		if($("#spMenu").attr("class")==="on") {
			menuBtn.find(".menu-trigger").text("CLOSE");
			menuBtn.find(".menu-trigger").attr("aria-expanded", "true");
		} else {
			menuBtn.find(".menu-trigger").text("MENU");
			menuBtn.find(".menu-trigger").attr("aria-expanded", "false");
		}
		return false;
	});

	$("#spMenu .menu_second-level").each(function() {
		$(this).prev("a").append("<em></em>");
    });

	$("#spMenu ul li a em").on("click", function(){
		$(this).parent().toggleClass("on");
		$(this).parent().parent("li").children("ul").toggleClass("on");
		return false;
	});

});

$(function(){
	$("#sitemap dt .more-links").on("click", function(){
		if($(this).parent().hasClass("nounder")){
		} else {
			$(this).parent().toggleClass("at");
			$(this).parent().nextAll("dd").toggleClass("at");
			var smopen_text = "";
			var smclose_text = "";
			//englishページの場合
			if(new RegExp(/\/(en|english)\//).test(location.href)) {
				smopen_text = "Page list Open";
				smclose_text = "Page list Close";
			//日本語ページの場合
			} else {
				smopen_text = "ページ一覧を開きます";
				smclose_text = "ページ一覧を閉じます";
			}
			//開閉状態に応じてボタンの説明を切り替える
			if($(this).parent("dt").attr("class")==="at") {
				$(this).text(smclose_text);
			} else {
				$(this).text(smopen_text);
			}
		}
		return false;
	});
});


$(function(){
	$("#sp_menu .search").on("click", function(){
		$(".search_area").toggleClass("at");
		SearchModeChange();
		return false;
	});
});

function SearchModeChange(){
	//開閉状態に応じて説明を切り替える
	var open_text = "";
	var close_text = "";
	//englishページの場合
	if(new RegExp(/\/(en|english)\//).test(location.href)) {
		open_text = "Search";
		close_text = "Search Close";
	//日本語ページの場合
	} else {
		open_text = "検索";
		close_text = "検索閉じる";
	}
	if(document.getElementsByClassName("search_area at").length < 1) {
		$("#sp_menu .search a img").attr("alt", open_text);
		$("#sp_menu .search").find("a").attr("aria-expanded", "false");
	} else {
		$("#sp_menu .search a img").attr("alt", close_text);
		$("#sp_menu .search").find("a").attr("aria-expanded", "true");
	}
}

$(function(){
	$("#sp_sns_btn").on("click", function(){
		$("#sp_sns_btn").toggleClass("snson");
		$("#snsMenu").toggleClass("snson");
		snsModeChange();
		$("#sp_sns_btn").focus();
		return false;
	});
});

function snsModeChange(){
	//開閉状態に応じて説明を切り替える
	var snsopen_text = "";
	var snsclose_text = "";
	//englishページの場合
	if(new RegExp(/\/(en|english)\//).test(location.href)) {
		snsopen_text = "SNS menu";
		snsclose_text = "SNS menu Close";
		if($("#snsMenu p").length < 1){
			$("#snsMenu ul").before("<p><strong>Financial Services Agency official SNS</strong></p>");
		}
	//日本語ページの場合
	} else {
		snsopen_text = "SNSメニュー";
		snsclose_text = "SNSメニュー閉じる";
		if($("#snsMenu p").length < 1){
			$("#snsMenu ul").before("<p><strong>金融庁公式SNS</strong></p>");
		}
	}
	if($("#sp_sns_btn").attr("class")==="snson") {
		$("#sp_sns_btn").find(".sns-trigger img").attr("alt", snsclose_text);
		$("#sp_sns_btn").find(".sns-trigger").attr("aria-expanded", "true");
	} else {
		$("#sp_sns_btn").find(".sns-trigger img").attr("alt", snsopen_text);
		$("#sp_sns_btn").find(".sns-trigger").attr("aria-expanded", "false");
	}

}


////////////////////////////////////////////////////////////////////////////////
// PC or SP EVENT
////////////////////////////////////////////////////////////////////////////////

var sp = '_sp.';
var pc = '_pc.';

$(window).on('load resize',function(){
		if(window.matchMedia('(min-width:768px)').matches){
			$('body').removeClass('spMode');
			$('body').addClass('pcMode');
			pcMode();
		} else {
			$('body').removeClass('pcMode');
			$('body').addClass('spMode');
			spMode();
		}
});




// pcMode -------------------------------------------
function pcMode(){
	$("img").each(function(){
	if($(this).attr("src").match("_sp.")) {
     	$(this).attr('src', $(this).attr('src').replace(sp, pc));
      }
    });

}

// spMode -------------------------------------------
function spMode(){
	$("img").each(function(){
	if($(this).attr("src").match("_pc.")) {
     	$(this).attr('src', $(this).attr('src').replace(pc, sp));
      }
    });


}

////////////////////////////////////////////////////////////////////////////////
// table 判定
////////////////////////////////////////////////////////////////////////////////
$(function(){
  $("table").each(function(i) {
    var tableType = $(this).attr("border");
    if(tableType =="0"){
      $(this).addClass("noborder");
    }else if(tableType =="4"){
      $(this).addClass("border_box");
    }
  });
	$("ul").each(function(i) {
    var listType01 = $(this).attr("type");
	var listType02 = $(this).attr("style");
    if(listType01 == "disc"){
      $(this).addClass("listStyle");
    }else if(listType02 == "list-style-type:disc"){
      $(this).addClass("listStyle");
    }
  });
	$("div.clear").each(function(i) {
    var listType01 = $(this).attr("style");
	if(listType01 == "margin-left:290px"){
      $(this).addClass("links");
    }
  });
});

$(function() {
    var lang = $("html").attr("lang");
    var cx = '003102749366711466117:hgrijxxkcpe';
    if (lang == "en") {
        cx = '014270915023880653032:anteo_dt2ko';
    }
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
});

function rsDisp() {
	if($('#readspeaker_button1').length > 0){
		$('#readspeaker_button1').removeAttr('style');
	}
	$("a.rspkr_dr_link").each(function(i) {
		$(this).addClass('rspkr_dr_link_disp');
	});
}
$(function(){
	$('.reading a').one('click', function(){
		if($('#readspeaker_button1').length > 0){
			$('.reading a').one('keydown', function(ers){
				if(ers.keyCode === 9 && !ers.shiftKey){
					var readspeakerpanelEl = $('#readspeaker_button1 a')[0];
					readspeakerpanelEl.focus();
				}
				return false;
			});
		}
	});
});


////////////////////////////////////////////////////////////////////////////////
// スライド表示　追記
////////////////////////////////////////////////////////////////////////////////

$(function(){
	$('#main .slide_category_toggle .slide_category dt a').on('click', function(){
		$(this).parent().toggleClass('slide_on');
		var slide_category_className = $(this).parent().attr('class');
		if(slide_category_className === 'slide_on'){
			$(this).children('span').text('閉じる');
		}else{
			$(this).children('span').text('開く');
		}
		$(this).parent().nextAll('dd').slideToggle('fast');
		return false;
	});
});


////////////////////////////////////////////////////////////////////////////////
// スライドQA表示　追記
////////////////////////////////////////////////////////////////////////////////

$('#main .slide_category_qa_toggle .slide_category_qa .slide_category_qa_q').on('keydown', function(efq){
	var slide_category_qa_key = efq.which;
	if(slide_category_qa_key == 13) {
		$(this).click();
		return false;
	}
});
$(function(){
	$('#main .slide_category_qa_toggle .slide_category_qa .slide_category_qa_q').on('click', function(){
		$(this).parent().toggleClass('slide_qa_on');
		var slide_category_qa_className = $(this).parent().attr('class');
		if(slide_category_qa_className === 'slide_qa_on'){
			$(this).attr('title', '答えを閉じます');
		}else{
			$(this).attr('title', '答えを開きます');
		}
		$(this).parent().next('dd').slideToggle('fast');
		return false;
	});
});


////////////////////////////////////////////////////////////////////////////////
//ポップアップ動画
////////////////////////////////////////////////////////////////////////////////

$(function(){
	$(".popUpW a").on("click", function(){
		var clickmovieurl = $(this).attr("data-ytulr");
		var clickmovietitle = $(this).attr("data-yttitle");
		$(this).addClass("currentyt");
		$(".ytoverlay").fadeIn();
		$(".ytoverlay").addClass("ytpopUpon");
		$(".ytoverlay .popUpmovie iframe").attr("src", clickmovieurl);
		$(".ytoverlay .popUpmovie iframe").attr("title", clickmovietitle);
		$(".popClose a").focus();
		return false;
	});
	$(".ytoverlay , .popClose a").on("click", function(){
		$(".ytoverlay").fadeOut();
		$(".ytoverlay").removeClass("ytpopUpon");
		$(".ytoverlay .popUpmovie iframe").attr("src","");
		$(".ytoverlay .popUpmovie iframe").attr("title","");
		$(".currentyt").focus();
		$(".popUpW a").removeClass("currentyt");
		return false;
	});
});


////////////////////////////////////////////////////////////////////////////////
// アクセシビリティ対応
////////////////////////////////////////////////////////////////////////////////

//SPメニューフォーカスループ処理
$("body").on("keydown", function(e){
	if(isSpMenuOpen()) {
		var mainMenuElements = $("#spMenu").find("a");
		var firstEl = $("#sp_menu_btn").find("a")[0];
		var lastEl = mainMenuElements[mainMenuElements.length - 1];
		var activeEl = $(":focus");
		if(activeEl[0] == firstEl && e.keyCode === 9 && e.shiftKey) {
			lastEl.focus();
			return false;
		} else if(activeEl[0] == lastEl && e.keyCode === 9 && !e.shiftKey) {
			firstEl.focus();
			return false;
		}
	}
});
function isSpMenuOpen() {
	if($("#sp_menu_btn").attr("class")==="on") {
		return true;
	} else {
		return false;
	}
}

//検索パネルのフォーカス移動
$("body").on("keydown", function(eo){
	if(isSearchMenuOpen()) {
		var searchbtnEl = $("#sp_menu .search a")[0];
		var searchOutJAEl = $(".gsc-search-button-v2")[0];
		var searchOutENEl = $("#sa")[0];
		var searchInJAEl = $("#gsc-i-id1")[0];
		var searchInENEl = $("#google")[0];
		var searchActEl = $(":focus")[0];
		if(searchActEl == searchbtnEl && eo.keyCode === 9 && eo.shiftKey) {
			if(new RegExp(/\/(en|english)\//).test(location.href)) {
				searchOutENEl.focus();
				return false;
			} else {
				searchOutJAEl.focus();
				return false;
			}
		} else if(searchActEl == searchbtnEl && eo.keyCode === 9 && !eo.shiftKey) {
			if(new RegExp(/\/(en|english)\//).test(location.href)) {
				searchInENEl.focus();
				return false;
			} else {
				searchInJAEl.focus();
				return false;
			}
		}
		if(searchActEl == searchInENEl && eo.keyCode === 9 && eo.shiftKey) {
			searchbtnEl.focus();
			return false;
		}
		if(searchActEl == searchInJAEl && eo.keyCode === 9 && eo.shiftKey) {
			searchbtnEl.focus();
			return false;
		}
		if(searchActEl == searchOutENEl && eo.keyCode === 9 && !eo.shiftKey) {
			searchbtnEl.focus();
			return false;
		}
		if(searchActEl == searchOutJAEl && eo.keyCode === 9 && !eo.shiftKey) {
			searchbtnEl.focus();
			return false;
		}
	}
});
function isSearchMenuOpen() {
	if($(".search_area").attr("class")==="search_area at") {
		return true;
	} else {
		return false;
	}
}

//SNSパネルのフォーカス移動
$("body").on("keydown", function(se){
	if(isSnsMenuOpen()) {
		var snsMenuElements = $("#snsMenu").find("a");
		var snsMbEl = $("#sp_sns_btn").find("a")[0];
		var snsMfEl = snsMenuElements[0];
		var snsMlEl = snsMenuElements[snsMenuElements.length - 1];
		var snsMaEl = $(":focus");
		if(snsMaEl[0] == snsMbEl && se.keyCode === 9 && se.shiftKey) {
			snsMlEl.focus();
			return false;
		} else if(snsMaEl[0] == snsMfEl && se.keyCode === 9 && se.shiftKey) {
			snsMbEl.focus();
			return false;
		} else if(snsMaEl[0] == snsMbEl && se.keyCode === 9 && !se.shiftKey) {
			snsMfEl.focus();
			return false;
		} else if(snsMaEl[0] == snsMlEl && se.keyCode === 9 && !se.shiftKey) {
			snsMbEl.focus();
			return false;
		}
	}
});
function isSnsMenuOpen() {
	if($("#sp_sns_btn").attr("class")==="snson") {
		return true;
	} else {
		return false;
	}
}

//サイト内検索にtitle属性付与
$(window).on("load", function(){
	//日本語ページのみ処理する
	if(!new RegExp(/\/(en|english)\//).test(location.href)) {
		try {
			var srchBtn = $("button.gsc-search-button-v2")[0];
			if(!srchBtn.hasAttribute("title")) srchBtn.setAttribute("title", "検索");
		} catch(e) {}
	}
});

//新着情報のフォーカス移動
$("#news").on("keydown", function(ew){
	var bn = $(".category li").find("a").length - 1;
	var currbtnEl = $(".category .on")[0];
	var nextbtnEl = $(".category .on").parent().next().find("a")[0];
	var endbtnEl = $(".category li").eq(bn).find("a")[0];
	var currbtnUl = $(".category .on").attr("href");
	var pn = $(currbtnUl).find("a").length - 2;
	var newsTbsEl = $(currbtnUl).find("a")[0];
	var newsTbeEl = $(currbtnUl).find("a")[pn];
	var newsMorEl = $(currbtnUl).find(".more_btn a")[0];
	var newsAllEl = $(".news_all_page").find("a")[0];
	var newsActEl = $(":focus")[0];
	if(newsActEl == currbtnEl && ew.keyCode === 9 && !ew.shiftKey) {
		newsTbsEl.focus();
		return false;
	} else if(newsActEl == newsTbsEl && ew.keyCode === 9 && ew.shiftKey) {
		currbtnEl.focus();
		return false;
	} else if($(endbtnEl).attr("class")!=="on") {
		if(newsActEl == newsTbeEl && ew.keyCode === 9 && !ew.shiftKey) {
			nextbtnEl.focus();
			return false;
		} else if(newsActEl == newsMorEl && ew.keyCode === 9 && !ew.shiftKey) {
			nextbtnEl.focus();
			return false;
		} else if(newsActEl == nextbtnEl && ew.keyCode === 9 && ew.shiftKey) {
			if($(currbtnUl).find(".more_btn").css("display")!=="none") {
				newsMorEl.focus();
				return false;
			} else if($(currbtnUl).find(".more_btn").css("display")==="none") {
				newsTbeEl.focus();
				return false;
			}
		} else if (newsActEl == endbtnEl && ew.keyCode === 9 && !ew.shiftKey) {
			newsAllEl.focus();
			return false;
		} else if(newsActEl == newsAllEl && ew.keyCode === 9 && ew.shiftKey) {
			endbtnEl.focus();
			return false;
		}
	}
});


////////////////////////////////////////////////////////////////////////////////
// 審議会
////////////////////////////////////////////////////////////////////////////////
$(function() {
	$(".c_morelist").each(function(){
		cNum = ($(this).children(".c_more_btn").index());
		var clisrt =$(this);
		clisrt.children("li").removeClass("c_recent");
		clisrt.children("li").css("display", "");
		clisrt.children("li:lt("+ cNum +")").addClass("c_recent");
		clisrt.children("li:gt("+ cNum +")").hide();
	});
});
$(function() {
	$("#main .c_more_btn a").on("click", function(){
		$(this).parent().toggleClass("c_slide_on");
		var clistcName = $(this).parent().attr("class");
		if(clistcName === "c_more_btn c_slide_on"){
			$(this).children("span").text("閉じる");
		}else{
			$(this).children("span").text("開く");
		}
		$(this).parent().nextAll("li").slideToggle("fast");
		return false;
	});
});


////////////////////////////////////////////////////////////////////////////////
// 本文へ
////////////////////////////////////////////////////////////////////////////////

$(function(){
	$(".skiplinkbody > a").click(function(){
		var skiplinkbodyP = $("#main").offset().top;
		var headerHeight = 75;
		if(window.matchMedia("(max-width:767px)").matches){
			if(!new RegExp(/\/(sesc|cpaaob|frtc)\//).test(location.href)) {
				skiplinkbodyP = skiplinkbodyP - headerHeight;
			}
		}
		$("body,html").animate({scrollTop:skiplinkbodyP}, 800,"swing");
		$("#main").attr("tabindex", -1).on("blur focusout", function(){
			$(this).removeAttr("tabindex");
		}).focus();
	});
});



