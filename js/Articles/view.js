$(document).ready(function() {
	$('.critical').bind('click', function() {
		  
		$('.critical').find('.on').slideUp('slow', function() {
			$(this).removeClass('on');
			$(this).addClass('off');
		});
		
		$(this).find('.off').slideDown('slow', function() {
			$(this).removeClass('off');
			$(this).addClass('on');
		});
		
	});
});