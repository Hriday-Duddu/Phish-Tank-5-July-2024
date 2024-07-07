////////////////////////////////////////////////////////////////////////////////
// トップページ　トピックス
////////////////////////////////////////////////////////////////////////////////

var topicsarray;
var targetindex = 0;
var targetHeight = 0;
var topicsopen_len = 0;
var topicsW = window.innerWidth;
var topicsX = 580;

$(window).on("load resize", function(){
	topicsW = window.innerWidth;
	if(topicsW > topicsX){
		boxArray();
		if($("#topics_box div").hasClass("Ctopicsbtn")){
			targetindex = $(".Ctopicsbtn").index("#topics_box div");
			targetboxHeight();
			$(".Ctopicsbtn_on").css({"margin-bottom" : targetHeight});
		}
		topicsopen_len = $(".Ctopicsbtn_on").length;
		if(topicsopen_len === 2){
			$("#topics_box div").removeClass("Ctopicsbtn");
			$("#topics_box div dt").removeClass("Ctopicsbtn_on");
			$("#topics_box div dt").addClass("Ctopicsbtn_off");
			$("#topics_box div dt").css({"margin-bottom" : 0});
			$("#topics_box div dd").hide();
			TriggerhModeChange();
		}
	} else {
		$(".Ctopicsbtn_on").css({"margin-bottom" : 0});
	}
});
$("#fontChange a").on("click", function(){
	setTimeout(function(){
		boxArray();
		if($("#topics_box div").hasClass("Ctopicsbtn")){
			targetindex = $(".Ctopicsbtn").index("#topics_box div");
			targetboxHeight();
			$(".Ctopicsbtn_on").css({"margin-bottom" : targetHeight});
		}
		return false;
	},100);
});
$(".topics-box-trigger").on("click", function(){
	if(topicsW > topicsX){
		$("#topics_box div").not($(this).closest("div")).removeClass("Ctopicsbtn");
		$("#topics_box div dt").not($(this).closest("dt")).removeClass("Ctopicsbtn_on");
		$("#topics_box div dt").not($(this).closest("dt")).addClass("Ctopicsbtn_off");
		$("#topics_box div dt").not($(this).closest("dt")).stop().animate({"margin-bottom" : 0,}, 300);
		$("#topics_box dd").not($(this).closest("dt").next("dd")).slideUp(10);
		var targetbox = $(this).closest("div").hasClass("Ctopicsbtn");
		if(targetbox){
			$(this).closest("div").removeClass("Ctopicsbtn");
			$(this).closest("dt").removeClass("Ctopicsbtn_on");
			$(this).closest("dt").addClass("Ctopicsbtn_off");
			$(this).closest("dt").stop().animate({"margin-bottom" : 0,}, 300);
			$(this).closest("dt").next("dd").slideUp(300);
		} else {
			$(this).closest("div").addClass("Ctopicsbtn");
			$(this).closest("dt").removeClass("Ctopicsbtn_off");
			$(this).closest("dt").addClass("Ctopicsbtn_on");
			$(this).closest("dt").next("dd").slideToggle(300);
			targetindex = $(".topics-box-trigger").index(this);
			targetboxHeight();
			if($(this).closest("dt").attr("class") === "Ctopicsbtn_on") {
				$(".Ctopicsbtn_on").stop().animate({"margin-bottom" : targetHeight,}, 300);
			}
		}
	} else {
		$(this).closest("div").toggleClass("Ctopicsbtn");
		$(this).closest("dt").toggleClass("Ctopicsbtn_on");
		$(this).closest("dt").toggleClass("Ctopicsbtn_off");
		$(this).closest("dt").next("dd").slideToggle(300);
	}
	TriggerhModeChange();
	return false;
});
window.onbeforeprint = function(){
	if(topicsW <= topicsX){
		topicsopen_len = $(".Ctopicsbtn_on").length;
		if(topicsopen_len === 2){
			$("#topics_box div").removeClass("Ctopicsbtn");
			$("#topics_box div dt").removeClass("Ctopicsbtn_on");
			$("#topics_box div dt").addClass("Ctopicsbtn_off");
			$("#topics_box div dt").css({"margin-bottom" : 0});
			$("#topics_box div dd").hide();
			TriggerhModeChange();
		}
	}
};
function boxArray(){
	topicsarray = [];
	$("#topics_box dd").each(function(){
		topicsarray.push(parseInt($(this).css("height")));
	});
}
function targetboxHeight(){
	targetHeight = topicsarray[targetindex];
	targetHeight = targetHeight + 20;
}
function TriggerhModeChange(){
	var topicsopen_text = "更新情報を開きます";
	var topicsclose_text = "更新情報を閉じます";
	$(".Ctopicsbtn_on .topics-box-trigger").attr("title", topicsclose_text);
	$(".Ctopicsbtn_on .topics-box-trigger").attr("aria-expanded", "ture");
	$(".Ctopicsbtn_on").closest("dt").next("dd").attr("aria-hidden", "false");
	$(".Ctopicsbtn_off .topics-box-trigger").attr("title", topicsopen_text);
	$(".Ctopicsbtn_off .topics-box-trigger").attr("aria-expanded", "false");
	$(".Ctopicsbtn_off").closest("dt").next("dd").attr("aria-hidden", "true");
}



