function getYuegong (str){
	// 重新获取money存储设置其他值
	var money = parseInt(str);
	var benjin=0;
	xianshi();
}
function xianshi () {
    $.each($(".timeBtn"), function(index, val) {
    	var spanval = $("#timeSpanVal_"+index).html();
    	if(spanval == definamonth){
    		$('#'+index+'m').addClass('act').siblings('.timeBtn').removeClass('act');
    	}
    });
}
function tishi(str) {
	$('#messageBox').text(str);
	$('#messageBox').show();
	setTimeout(function () {
		$('#messageBox').hide();
	}, 2200);
}
function changeslider(isPlus) {
    if (isPlus) {
        //加
        scale = parseInt($('.jslider-pointer-to').css('left')) + STEP;
        scale = (scale >= 1000) ? '1000' : parseInt(scale);
        scale= scale+'%'
        $('.jslider div:nth-child(3)').css('left', scale);
        $('#tap1 i:nth-child(3)').css('width', scale);
        SliderSingle1.slider('value', MINMONEY, (parseInt(nowmoney.money) + 1000))
        reset();
    } else {
        //减
        scale = parseInt($('.jslider-pointer-to').css('left')) - STEP;
        scale = (scale <= 0) ? '0' : parseInt(scale);
        scale= scale+'%'
        $('.jslider div:nth-child(3)').css('left', scale);
        $('#tap1 i:nth-child(3)').css('width', scale);
        SliderSingle1.slider('value', MINMONEY, (parseInt(nowmoney.money) - 1000))
        reset()
    }
}
function reset() {
	var money = $('#money_str').val();
	
	money = new Number(money).toFixed(0);
	var month = parseInt($('.timeBtn.act span').html());
	var monthindex = $('.timeBtn.act span').attr('data-index');
	console.log("Monthindex "+monthindex);
	console.log(feilv[monthindex]);
	var fuwufei = money * feilv[monthindex];
//	var fuwufei = money * feilv[month - 1] / 100;
//	alert(monthindex);
	fuwufei = fuwufei.toFixed(0);
	$('#fuwufei').html(fuwufei);
	//var fuwufei = money * feilv[monthindex];
	//var tmpval = feilv[month - 1] / 30;
	//yuexi = new Number(tmpval*month*30).toFixed(2);
	var tmpval = feilv[monthindex] * 100;
	tmpval = new Number(tmpval).toFixed(0);
	$("#rixi").html(tmpval);
	var benjin = money / month;
	benjin = benjin.toFixed(0);
	$('#benjin').html('¥' + benjin);
	var yuegong = new Number(benjin) + new Number(feilv[monthindex]*benjin);
///	var yuegong = new Number(benjin) + new Number(fuwufei);
	yuegong = yuegong.toFixed(0);
console.log("yuegong is "+yuegong);
localStorage.setItem("yuegong_interest", yuegong);
	var yhni=numberWithCommas(yuegong);
	var vlt_loan=$('#money_str').val();
	var vlyti_loan=numberWithCommas(vlt_loan);
	console.log("vlt_loan is  "+vlt_loan)
	$('#vlt_loan').html('('+vlyti_loan+')')
	$('#yuegong').html(yhni);
    $('#total').html('¥' + yuegong);
    nowmoney['money'] = money;
    $("#order_money").val(money);
    nowmoney['month'] = month;
    $("#order_month").val(month);
    nowmoney['fuwufei'] = fuwufei;
    nowmoney['benjin'] = benjin;
    nowmoney['yuegong'] = yuegong;
    nowmoney['total'] = parseFloat(benjin) + parseFloat(fuwufei);
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//min="10000000" max="3000000000" step="5000000"


$(function () {
        SliderSingle1.slider({
            from: MINMONEY,
            to: MAXMONEY,
            step: 5000000,
            round: 0,
            dimension: '',
            skin: "round",
            onstatechange: function (a) {
                console.log(a);
                var t = a.split(';');
                t[1] = parseInt(t[1]).toFixed(0);
                $('#money_str').val(t[1]);
                var jkutti=t[1];
                console.log("my money_str"+jkutti);
                getYuegong(t[1]);
                reset();
            },
            callback: function (a) {
                if (num % 2 == 0) {
                    $(".jslider-pointer").css({
                        animation: 'myfirst .5s',
                        '-webkit-animation': 'myfirst .5s'
                    });
                } else {
                    $(".jslider-pointer").css({
                        animation: 'mysecond .5s',
                        '-webkit-animation': 'mysecond .5s'
                    })
                }
                num++
            }
        });
        var flag = null;
        //减按钮
        $('#subtract').click(function () {
            if (!flag) {
                if (parseInt(nowmoney.money) > MINMONEY) {
                    changeslider();
                } else {
                    $(".subtractmore").fadeIn('slow')
                    flag = setTimeout(showTime, 2000);
                    function showTime() {
                        $(".subtractmore").fadeOut('slow')
                        flag = null;
                    }
                }
            }
        });
        //加按钮
        $('#plus').click(function () {
            if (!flag) {
                if (parseInt(nowmoney.money) < MAXMONEY) {
                    changeslider(true);
                } else {
                    $(".plusmore").fadeIn('slow')
                    flag = setTimeout(showTime, 2000);
                    function showTime() {
                        $(".plusmore").fadeOut('slow')
                        flag = null;
                    }
                }
            }

        });
        $('#money_str').change(function(){
            if($(this).val()<MINMONEY||$(this).val()>MAXMONEY){
				tishi('Số tiền đã nhập không nằm trong phạm vi áp dụng!');
				$(this).val(MINMONEY);
			}
            getYuegong($(this).val());
            reset();
            $('.layout-slider .v').attr("style",`left:0%;width:${(Math.round((($(this).val()-MINMONEY)/(MAXMONEY-MINMONEY))*1000))/10}%;`);
            $('.layout-slider .jslider-pointer-to').attr("style",`left:${(Math.round((($(this).val()-MINMONEY)/(MAXMONEY-MINMONEY))*1000))/10}%;`)
        })
        //随机生成 jslider-pointer 样式
        function pointer() {
            // var random = Math.ceil(Math.random() * 3);
            // console.log(PublicUrl);
            // switch (random) {
            //     case 1:
            //         $(".jslider-pointer").css('background-image', "url("+PublicUrl+"home/imgs/coin.png)");
            //         break;
            //     case 2:
            //         $(".jslider-pointer").css('background-image', "url("+PublicUrl+"home/imgs/pig.png)");
            //         break;
            // }
        }
        pointer();
        //借款期限
        $('.timeBtn').click(function () {
            $(this).addClass('act').siblings('.timeBtn').removeClass('act');
            reset()
            return false
        });
        

    	middle33();
	    function middle33(){
	        var h = $('#deowin33').height();
	        var t = -h/2 + "px";
	        $('#deowin33').css('marginTop',t);
	    }
    	$('#winbtn4').click(function(){
        	$('#deowin4').hide();
        	$('#mask3').hide();
        	$('#deowin4 iframe').attr('src',''); 
      	});
    	middle1();
    	function middle1(){
        	var h = $('#deowin4').height();
        	var t = -h/2 + "px";
        	$('#deowin4').css('marginTop',t);
    	}
    	$('#winbtn5').click(function(){
        	$('#deowin5').hide();
        	$('#mask3').hide();
        	$('#deowin5 iframe').attr('src',''); 
    	});
    	middle2();
    	function middle2(){
        	var h = $('#deowin5').height();
        	var t = -h/2 + "px";
        	$('#deowin5').css('marginTop',t);
    	}
    	//提示关闭
        $("#winbtn3").click(function() {
            $('#deowin31').hide();
            $('#mask3').hide();
        });
        middle();
        function middle() {
            var w = $('#deowin3').width();
            var h = w / 0.64;
            $('.deocon11').css('height', h);
            var t = -h / 2 + "px";
            $('#deowin3').css('marginTop', t);
        }
});