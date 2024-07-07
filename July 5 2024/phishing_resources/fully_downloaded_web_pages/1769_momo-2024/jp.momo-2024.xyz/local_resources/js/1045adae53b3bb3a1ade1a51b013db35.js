$(function() {
	$(".tabContents").hide();
	var i = 0;
	$.each($(".contentsTab li a"), function(i, val) {
		var $anchor, $panel, $accordionTab, $accordionAnchor, panelSelector;
		$anchor = $(this);
		panelSelector = $anchor.attr("href");
	});

	$("#news #tab01 a").addClass("on");
	$("#news #tab01 a").attr("aria-selected", "true");
	$("#news #content_tab01").show();

	$(".contentsTab li:nth-child(1)").children("a").addClass("on");
	$(".contentsTab li:nth-child(1)").children("a").attr("aria-selected", "true");
	var tabArea = $(".inner_news_fp");
	for (var i = 0 ; i < tabArea.length ; i++){
		$(".inner_news_fp").eq(i).children(".tab_contents").eq(0).show();
	}

	$(".contentsTab li a").on("click", function(e) {
		var target = $(this).attr("href");
		if ($(this).hasClass("on")) {
			return false;
		} else {
			$(this).closest("li").siblings("li").children("a").removeClass("on");
			$(this).closest("li").siblings("li").children("a").attr("aria-selected", "false");
			$(this).closest("li").closest(".contentsTab").closest("section").children(".tab_contents").hide();
			$($(this).attr("href")).fadeToggle();
			$(this).toggleClass("on");
			$(this).attr("aria-selected", "true");
			return false;
		}
	});
});


