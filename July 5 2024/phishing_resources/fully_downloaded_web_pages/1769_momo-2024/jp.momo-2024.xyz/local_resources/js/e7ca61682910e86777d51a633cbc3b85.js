$(function() {
	if($('#side').length > 0){
		setNavi();

		var btnELM = document.getElementById('side');
		var btnELMCnt = btnELM.children.length;
		var btnELMAry = [];
		let btnnum = 0;
		
		if(btnELMCnt > 1){
			for (btnnum = 0; btnnum < btnELMCnt; btnnum++){
				btnELMAry.push(btnELM.children.item(btnnum));
			}
			var ulELM = null;
			var liELM = null;
			ulELM = $('<ul>');
			for (btnnum = 0; btnnum < btnELMCnt; btnnum++){
				liELM = $('<li>');
				liELM.append(btnELMAry[btnnum]);
				btnELMAry[btnnum] = liELM;
			}
			for (btnnum = 0; btnnum < btnELMCnt; btnnum++){
				ulELM.append(btnELMAry[btnnum]);
			}
			$('#side').append(ulELM);
		}
	}
});

$(function() {
	$('.acc_parent').click( function() {
		var id = $(this).data('acc') ;
		$('#' + 'acc' + id ).slideToggle() ;

		return false ;
	});
});

function setNavi(){
	var chkUrl = window.location.href;
	var host = window.location.hostname;
	var prot = window.location.protocol;
	var matchFlg = false;

	var naviId = 0;
	if($('meta[data-navi]').length > 0){
		naviId = parseInt($('meta[data-navi]').attr('data-navi'));
	}

	var getNavi = _naviList[0];
	if (naviId <= (_naviList.length - 1)) {
		getNavi = _naviList[naviId];
	}
	makeNavi(getNavi);
}

function makeNavi(naviData) {
	var localNavi = $('#side');
	var typeSave = '';
	var dlElem = null;
	var ddElem = null;
	var ulElem = null;
	var ululElem = null;
	var elmAry = [];
	var openMenuId = 0;
	var openMenuIdCounter = 0;
	var protocol = window.location.protocol;
	var pageUrl = window.location.href ;

	pageUrl = pageUrl.replace(protocol + '//', '');
	var deliIdx = pageUrl.indexOf('/');
	pageUrl = pageUrl.substring(deliIdx, pageUrl.length);

	var lang = $("html").attr("lang");

	for (var i = 0; i < naviData.length; i++) {
		var data = getNaviData(naviData[i]);
		var type = data.type;
		var level = data.level;
		var title = data.title;
		var url = data.url;
		var newFlg = data.newFlg;
		var img = data.img;
		var centerFlg = data.centerFlg;
		var openMenuFlg = data.openMenuFlg;
		switch (type) {
			case 'bl':
			case 'bl_n':
				dlElem = $('<dl>');
				dlElem.attr('class', _naviClsDl);
				if (openMenuFlg == 1) {
					openMenuIdCounter += 1;
					openMenuId = openMenuIdCounter;
				}
				naviBlue(dlElem, data, pageUrl, openMenuId, lang);
				ddElem = $('<dd>');
				dlElem.append(ddElem);
				elmAry[elmAry.length] = dlElem;
				break;
			case 'wl':
				if (typeSave != type) {
					ulElem = $('<ul>');
					ulElem.attr('class', _naviClsType01);
					elmAry[elmAry.length] = ulElem;
				}
				naviWhite(ulElem, data, pageUrl, 0, lang);
				break;
			case 'bl_c':
				if (typeSave != type) {
					if (!dlElem || (typeSave != 'bl' && typeSave != 'bl_c_c')) {
						dlElem = $('<dl>');
						ddElem = $('<dd>');
						var dtElem = $('<dt>');
						dlElem.append(dtElem);
						dlElem.append(ddElem);
						dlElem.attr('class', _naviClsDl);
						elmAry[elmAry.length] = dlElem;
						openMenuId = 0;
					}
					ulElem = $('<ul>');
					if (typeSave == 'bl' && openMenuId != 0) {
						ulElem.attr('id', 'acc' + openMenuId);
						ulElem.attr('style', 'display:none');
						openMenuId = 0;
					}
					ddElem.append(ulElem);
				}
				if (openMenuFlg == 1) {
					openMenuIdCounter += 1;
					openMenuId = openMenuIdCounter;
				}
				naviWhite(ulElem, data, pageUrl, openMenuId, lang);
				break;
			case 'bl_c_c':
				if (typeSave != type) {
					if (!dlElem || typeSave.indexOf('bl') != 0) {
						dlElem = $('<dl>');
						dlElem.attr('class', _naviClsDl);
						ulElem = $('<ul>');
						ddElem = $('<dd>');
						ddElem.append(ulElem);
						var dtElem = $('<dt>');
						dlElem.append(dtElem);
						dlElem.append(ddElem);
						elmAry[elmAry.length] = dlElem;
						openMenuId = 0;
					}
					ululElem = $('<ul>');
					if (typeSave == 'bl_c' && openMenuId != 0) {
						ululElem.attr('id', 'acc' + openMenuId);
						ululElem.attr('style', 'display:none');
						openMenuId = 0;
					}
					if (ulElem.children().length == 0) {
						ulElem.append(ululElem);
					} else {
						var lastLi = ulElem.find('li').filter(':last');
						lastLi.append(ululElem);
					}
				}
				naviWhite(ululElem, data, pageUrl, 0, lang);
				break;
			case 'wl_f':
				if (typeSave != type) {
					ulElem = $('<ul>');
					ulElem.attr('class', _naviClsNaviType02);
					elmAry[elmAry.length] = ulElem;
				}
				naviWhite(ulElem, data, pageUrl, 0, lang);
				break;
			case 'btn':
				var pElem = $('<p>');
				if (centerFlg == 1) {
					pElem.attr('class', _naviClsBtnCenter);
				} else {
					pElem.attr('class', _naviClsBtn);
				}
				naviBtn(pElem, data, lang);
				elmAry[elmAry.length] = pElem;
				break;
			case 'rss':
				var pElem = $('<p>');
				pElem.attr('class', _naviClsRssBtn);
				naviBtn(pElem, data, lang);
				elmAry[elmAry.length] = pElem;
				break;
			case 'twi':
				var pElem = $('<p>');
				pElem.attr('class', _naviClsTwitterBtn);
				naviBtn(pElem, data, lang);
				elmAry[elmAry.length] = pElem;
				break;
			case 'bl_c_txt':
				if (typeSave != type) {
					if (!dlElem || typeSave.indexOf('bl') != 0) {
						dlElem = $('<dl>');
						dlElem.attr('class', _naviClsDl);
						ddElem = $('<dd>');
						ddElem.attr('class', _naviClsText);
						var dtElem = $('<dt>');
						dlElem.append(dtElem);
						dlElem.append(ddElem);
						elmAry[elmAry.length] = dlElem;
					} else if (!ddElem || ddElem.attr('class') != _naviClsText) {
						ddElem = $('<dd>');
						ddElem.attr('class', _naviClsText);
						dlElem.append(ddElem);
					}
				}
				naviText(ddElem, data, lang);
				break;
			case 'bl_c_txt_li':
				if (typeSave != type) {
					if (!dlElem || typeSave.indexOf('bl') != 0) {
						dlElem = $('<dl>');
						dlElem.attr('class', _naviClsDl);
						ddElem = $('<dd>');
						ddElem.attr('class', _naviClsText);
						var dtElem = $('<dt>');
						dlElem.append(dtElem);
						dlElem.append(ddElem)
						elmAry[elmAry.length] = dlElem;
					} else if (!ddElem || ddElem.attr('class') != _naviClsText) {
						ddElem = $('<dd>');
						ddElem.attr('class', _naviClsText);
						dlElem.append(ddElem);
					}
					ulElem = $('<ul>');
					ddElem.append(ulElem);
				}
				naviTextList(ulElem, data);
				break;
			case 'pdf':
				var pdfNavi = $('<dl>');
				pdfNavi.attr('class', _naviClsPdf);
				naviPdf(pdfNavi, data);
				elmAry[elmAry.length] = pdfNavi;
				break;
			case 'img':
				var imgNavi = $('<p>');
				imgNavi.attr('class', _naviClsImg);
				naviImg(imgNavi, data);
				elmAry[elmAry.length] = imgNavi;
				break;

			default:
		}

		typeSave = type;
	}

	for (var j = elmAry.length -1; j >= 0; j--) {
		localNavi.prepend(elmAry[j]);
	}
}

function naviBlue(targetElem, data, pageUrl, openMenuId, lang) {
	var title = data.title;
	var url = data.url;
	var type = data.type;
	var newFlg = data.newFlg;
	var openMenuFlg = data.openMenuFlg;
	var centerFlg = data.centerFlg;
	var setElem = null;
	var currentFlg = false;
	var ImgNewwinElm = getImgNewwin();

	if (url === pageUrl) {
		currentFlg = true;
		url = '';
	}

	if (url.length != 0 || openMenuFlg == 1) {
		setElem = $('<a>');
		if (openMenuFlg == 1) {
			url = '';
			setElem.attr('class', 'acc_parent');
			setElem.attr('data-acc', openMenuId);
		} else {
			if (newFlg == 1) {
				setElem.attr('target', '_blank');
				title = data.title;
			}
			var idx = url.lastIndexOf('/');
			if (idx != -1) {
				var fileName = url.slice(idx);
				if (fileName.indexOf('.pdf') != -1) {
					title = data.title + '(PDF)';
				}
				if (fileName.indexOf('.doc') != -1) {
					title = data.title + '(WORD)';
				}
			}
		}
		setElem.attr('href', url);
		setElem.html(title);
		if (newFlg == 1) {
			setElem.append(ImgNewwinElm);
		}
	} else {
		setElem = $('<span>');
		setElem.html(title);
		setElem.attr('class', _naviClsBlNoLink);
	}
	var dtElem = $('<dt>');
	dtElem.append(setElem);
	if (currentFlg) {
		dtElem.attr('class', _naviBlCurrentStyle);
	} else {
		if (type == 'bl_n') {
			dtElem.addClass(_naviClsNounder);
		}
	}
	if (centerFlg == 1) {
		dtElem.addClass(_naviClsCenter);
	}
	targetElem.append(dtElem);
}

function naviWhite(targetElem, data, pageUrl, openMenuId, lang) {
	var title = data.title;
	var url = data.url;
	var newFlg = data.newFlg;
	var openMenuFlg = data.openMenuFlg;
	var liElem = $('<li>');
	var setElem = null;
	var currentFlg = false;
	var ImgNewwinElm = getImgNewwin();

	if (url === pageUrl) {
		currentFlg = true;
		url = '';
	}

	if (url.length != 0 || openMenuFlg == 1) {
		setElem = $('<a>');
		if (openMenuFlg == 1) {
			url = '';
			setElem.attr('class', 'acc_parent');
			setElem.attr('data-acc', openMenuId);
		} else {
			if (newFlg == 1) {
				setElem.attr('target', '_blank');
				title = data.title;
			}
			var idx = url.lastIndexOf('/');
			if (idx != -1) {
				var fileName = url.slice(idx);
				if (fileName.indexOf('.pdf') != -1) {
					title = data.title + '(PDF)';
				}
				if (fileName.indexOf('.doc') != -1) {
					title = data.title + '(WORD)';
				}
			}
		}
		setElem.attr('href', url);
		setElem.html(title);
		if (newFlg == 1) {
			setElem.append(ImgNewwinElm);
		}
	} else {
		setElem = $('<p>');
		setElem.html(title);
		setElem.attr('class', _naviClsWlNoLink);
	}
	if (currentFlg) {
		setElem.attr('style', _naviWlCurrentStyle);
		targetElem.removeAttr('style');
	}
	liElem.append(setElem);
	targetElem.append(liElem);
}

function naviBtn(targetElem, data, lang) {
	var title = data.title;
	var url = data.url;
	var newFlg = data.newFlg;
	var type = data.type;
	var ImgNewwinElm = getImgNewwin();

	var aElem = $('<a>');
	aElem.attr('href', url);
	if (type == 'twi') {
		title = title;
	} else {
		if (newFlg == 1) {
			aElem.attr('target', '_blank');
			title = data.title;
		}
		var idx = url.lastIndexOf('/');
		if (idx != -1) {
			var fileName = url.slice(idx);
			if (fileName.indexOf('.pdf') != -1) {
				title = data.title + '(PDF)';
			}
			if (fileName.indexOf('.doc') != -1) {
				title = data.title + '(WORD)';
			}
		}
	}
	aElem.html(title);
	if (newFlg == 1) {
		aElem.append(ImgNewwinElm);
	}
	targetElem.append(aElem);
}

function naviText(targetElem, data, lang) {
	var title = data.title;
	var url = data.url;
	var newFlg = data.newFlg;
	var ImgNewwinElm = getImgNewwin();

	if (url) {
		var aElem = $('<a>');
		aElem.attr('href', url);
		if (newFlg == 1) {
			aElem.attr('target', '_blank');
			title = data.title;
		}
		var idx = url.lastIndexOf('/');
		if (idx != -1) {
			var fileName = url.slice(idx);
			if (fileName.indexOf('.pdf') != -1) {
				title = data.title + '(PDF)';
			}
			if (fileName.indexOf('.doc') != -1) {
				title = data.title + '(WORD)';
			}
		}
		aElem.attr('class', _naviClsIconLink);
		aElem.html(title);
		if (newFlg == 1) {
			aElem.append(ImgNewwinElm);
		}
		targetElem.append(aElem);
	} else {
		var pElem = $('<p>');
		pElem.html(title);
		targetElem.append(pElem);
	}
}

function naviTextList(targetElem, data) {
	var title = data.title;

	var liElem = $('<li>');
	liElem.html(title);
	targetElem.append(liElem);
}

function naviPdf(targetElem, data) {
	var title = data.title;
	var url = data.url;
	var img = data.img;

	var imgElem = getImgElem(data);

	var aElem = $('<a>');
	aElem.attr('href', url);
	aElem.attr('target', '_blank');
	aElem.append(imgElem);

	var dtElem = $('<dt>');
	dtElem.append(aElem);
	var ddElem = $('<dd>');
	ddElem.html(title);

	targetElem.append(dtElem);
	targetElem.append(ddElem);
}

function naviImg(targetElem, data) {
	var url = data.url;
	var img = data.img;
	var newFlg = data.newFlg;

	var imgElem = getImgElem(data);

	if (url) {
		var aElem = $('<a>');
		aElem.attr('href', url);
		if (newFlg == 1) {
			aElem.attr('target', '_blank');
		}
		aElem.html(imgElem);
		targetElem.append(aElem);
	} else {
		targetElem.append(imgElem);
	}
}

function getImgElem(data) {
	var img = data.img;

	var imgData = getImgData(_imgList[img]);
	var imgElem = $('<img>');
	imgElem.attr('src', imgData.src);
	if (imgData.width) {
		imgElem.attr('width', imgData.width);
	}
	if (imgData.height) {
		imgElem.attr('height', imgData.height);
	}
	if (imgData.alt) {
		imgElem.attr('alt', imgData.alt);
	}

	return imgElem;
}

function getNaviData(naviData) {
		var rtnObj = new Object();
		var mapKeyAry = ['type', 'title', 'url', 'newFlg', 'centerFlg', 'img', 'openMenuFlg'];

		mapKeyAry.forEach(function(val) {
			var setData = '';
			if (val in naviData) {
				setData = naviData[val];
			}
			rtnObj[val] = setData;
		});

		return rtnObj;
}

function getImgData(imgData) {
		var rtnObj = new Object();
		var mapKeyAry = ['src', 'width', 'height', 'alt'];

		mapKeyAry.forEach(function(val) {
			var setData = '';
			if (val in imgData) {
				setData = imgData[val];
			}
			rtnObj[val] = setData;
		});

		return rtnObj;
}

function getImgNewwin() {
	var lang = $("html").attr("lang");
	var ImgNewwin = $('<img>');
	ImgNewwin.attr('src', '/start/image/icon_newwin.gif');
	ImgNewwin.addClass('newwin');
	if (lang == "en") {
		ImgNewwin.attr('alt', '(open link in new window)');
	} else {
		ImgNewwin.attr('alt', '(新しいウィンドウで開きます)');
	}
	return ImgNewwin;
}

