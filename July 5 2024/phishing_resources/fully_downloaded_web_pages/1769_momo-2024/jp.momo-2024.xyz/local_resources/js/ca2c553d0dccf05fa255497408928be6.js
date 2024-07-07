////////////////////////////////////////////////////////////////////////////////
// header固定対応（fsa）
////////////////////////////////////////////////////////////////////////////////

/* スムーズスクロール-----------------------*/
$(function(){
	$("a").not("#header a,  #pagetop a, .rspkr_dr_link, #rslightbox_contentcontainer a, .rsbtn a, .share-button a, .contentsTab a, .more_btn a, #topics_box a").on("click", function(){
		var href= $(this).attr("href");
		if(href.indexOf("#") != -1 && href !== "#"){
			var cprotocol = $(location).attr("protocol");
			var chost = $(location).attr("host");
			var cpathname = $(location).attr("pathname");
			var csiteurl = cprotocol + "//" + chost;
			var urlonly = href.split("#")[0];
			var cfullurl = csiteurl + cpathname;
			var headerHeight = 75;
			var speed = 600;
			var position = 0;
			var target = "";
			if(href.startsWith("#")){
				target = href;
			} else if(href.startsWith("/") && cpathname === urlonly){
				var hashsearch = href.indexOf("#");
				target = href.substring(hashsearch);
			} else if(href.startsWith(csiteurl) && cfullurl === urlonly){
				var hashsearch = href.indexOf("#");
				target = href.substring(hashsearch);
			}
			var namehash = target.replace("#", "");
			var nameEl = document.getElementsByName(namehash);
			if($(target).length){
				position = $(target).offset().top;
			} else if(nameEl.length){
				position = $(nameEl).offset().top;
			}
			if(window.matchMedia("(max-width:767px)").matches){
				position = position - headerHeight;
			}
			if(position > 0){
				$("body,html").animate({scrollTop:position}, speed, "swing");
				$(nameEl).attr("tabindex", -1).on("blur focusout", function(){
					$(this).removeAttr("tabindex");
				}).focus();
			}
		}
	});
});
/* ページ外ハッシュリンク-----------------------*/
$(window).on("load", function(){
	var urlhash = $(location).attr("hash");
	var namehash = urlhash.replace("#", "");
	var nameEl = document.getElementsByName(namehash);
	var headerHeight = 75;
	var position = 0;
	if($(urlhash).length){
		position = $(urlhash).offset().top;
	} else if(nameEl.length){
		position = $(nameEl).offset().top;
	}
	if(window.matchMedia("(max-width:767px)").matches){
		position = position - headerHeight;
	}
	if(position > 0){
		setTimeout(function(){
			$("body,html").animate({scrollTop:position}, 0);
		}, 1);
	}
});

$("#content").on("keydown", function(es){
	if(window.matchMedia("(max-width:767px)").matches && es.keyCode === 9 && es.shiftKey){
		var curEl = $(document.activeElement);
		var curWPos = $(window).scrollTop();
		var curElPos = curEl.offset().top;
		if(curElPos - curWPos < 160){
			var newWPos = curWPos - 160;
			$(window).scrollTop(newWPos);
		}
	}
});


////////////////////////////////////////////////////////////////////////////////
// スクロール表（fsa）
////////////////////////////////////////////////////////////////////////////////
$(window).on("load resize",function(){
	if ($("#main .scr_hyou").length > 0) {
		const scr_tableWinH = window.innerHeight - 160;
		if(hasScrollBar()){
			$("#main .scr_hyou").addClass("scr_hint_on");
			$("#main .scr_hyou").css("max-height", scr_tableWinH + "px");
		} else {
			$("#main .scr_hyou").removeClass("scr_hint_on");
			$("#main .scr_hyou").css("max-height", "100%");
		}
	}
});

function hasScrollBar(){
	var d_scr_tableElmW = $("#main .scr_hyou").innerWidth();
	var t_scr_tableElmW = $("#main .scr_hyou table").innerWidth();
	if (t_scr_tableElmW > d_scr_tableElmW) {
		return true;
	} else {
		return false;
	}
}

$(function(){
	$("#main .scr_hyou").scroll(function(){
		if ($(this).attr("class") === "scr_hyou scr_hint_on"){
			$(this).removeClass("scr_hint_on");
		}
	});
});

