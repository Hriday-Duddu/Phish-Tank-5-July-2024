////////////////////////////////////////////////////////////////////////////////
// MENU LIST
////////////////////////////////////////////////////////////////////////////////
$(function(){
	var response;
	if($('#fsa_topicslist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaTopicsList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_topicslist').append(response);
	}
	if($('#fsa_newslist_all').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaNewsListAll.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_newslist_all').append(response);
	}
	if($('#fsa_newslist_news').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaNewsListNews.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_newslist_news').append(response);
	}
	if($('#fsa_newslist_councils').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaNewsListCouncils.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_newslist_councils').append(response);
	}
	if($('#fsa_newslist_other').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaNewsListOther.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_newslist_other').append(response);
	}
	if($('#fsa_procurementlist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaProcurementList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_procurementlist').append(response);
	}
	if($('#fsa_councils_fsclist_notice').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaCouncilsfscListNotice.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_councils_fsclist_notice').append(response);
	}
	if($('#fsa_councils_fsclist_materials').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaCouncilsfscListMaterials.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_councils_fsclist_materials').append(response);
	}
	if($('#fsa_councils_fsclist_minutes').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaCouncilsfscListMinutes.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_councils_fsclist_minutes').append(response);
	}
	if($('#fsa_councils_fsclist_report').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaCouncilsfscListReport.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_councils_fsclist_report').append(response);
	}
	if($('#fsa_councils_baclist_notice').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaCouncilsbacListNotice.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_councils_baclist_notice').append(response);
	}
	if($('#fsa_councils_baclist_materials').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaCouncilsbacListMaterials.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_councils_baclist_materials').append(response);
	}
	if($('#fsa_councils_baclist_minutes').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaCouncilsbacListMinutes.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_councils_baclist_minutes').append(response);
	}
	if($('#fsa_councils_baclist_report').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaCouncilsbacListReport.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_councils_baclist_report').append(response);
	}
	if($('#cpaaob_newslist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/cpaaobNewsList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#cpaaob_newslist').append(response);
	}
	if($('#cpaaob_holdinglist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/cpaaobHoldingList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#cpaaob_holdinglist').append(response);
	}
	if($('#cpaaob_recruitlist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/cpaaobRecruitList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#cpaaob_recruitlist').append(response);
	}
	if($('#cpaaob_recruitlist li').length < 1){
		$('#recruit .notlist').show();
	}
	if($('#sesc_reportlist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/sescReportList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#sesc_reportlist').append(response);
	}
	if($('#sesc_otherlist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/sescOtherList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#sesc_otherlist').append(response);
	}
	if($('#fsa_en_topicslist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaEnTopicsList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_en_topicslist').append(response);
	}
	if($('#fsa_en_newslist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/fsaEnNewsList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#fsa_en_newslist').append(response);
	}
	if($('#cpaaob_en_newslist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/cpaaobEnNewsList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#cpaaob_en_newslist').append(response);
	}
	if($('#sesc_en_newslist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/sescEnNewsList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#sesc_en_newslist').append(response);
	}
	if($('#sesc_en_publicationslist').length > 0){
		response = '';
		$.ajax({
			type: 'GET',
			url: '/sescEnPublicationsList.html',
			async: false,
			success : function(text) {
				response= text;
			}
		});
		$('#sesc_en_publicationslist').append(response);
	}
});
