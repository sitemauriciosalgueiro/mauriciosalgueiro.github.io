$(document).ready(function () {
	  
	$('#UserContactForm :submit').bind('click', function() {
	  $('#loader-form').removeClass('off');
	  if( $('#UserEmail').val() == '' || $('#UserTelefone').val() == '' ){
		  
		  var message = '<h4 class="alert-heading">Atenção...</h4>';
		  if( $('#UserEmail').val() == ''){
			  message += '- Insira seu endereço de e-mail. <br />';
			  $('#UserEmail').addClass('error');
		  }else{
			  $('#UserEmail').removeClass('error');
		  }
		  
		  if( $('#UserTelefone').val() == ''){
			  message += '- Insira seu telefone para contato. <br />';
			  $('#UserTelefone').addClass('error');
		  }else{
			  $('#UserTelefone').removeClass('error');
		  }
		  
		  $('#feedbackUserContact').html(message);
		  $('#feedbackUserContact').attr('class','alert alert-error');
		  $('#feedbackUserContact').fadeIn(1000);
		  $('#loader-form').addClass('off');
	  }else{
		  
		  $('#feedbackUserContact').fadeOut(1000);
		  $('#UserTelefone').removeClass('error');
		  $('#UserEmail').removeClass('error');
		  var data = $('#UserContactForm').serialize();
		  $.ajax({
	            type: 'POST',
	            url: '/site/users/ajax_sendMessage',
	            data: data,
	            dataType: 'json',
	            beforeSend: function() {
        	},
        	timeout: 5000,
	            error: function(data,error){
	      		  $('#feedbackUserContact').html(data.error + '<a class="close" data-dismiss="alert" href="#">×</a>');
	    		  $('#feedbackUserContact').attr('class','alert alert-error');
	    		  $('#feedbackUserContact').fadeIn(1000);
	    		  $('#loader-form').addClass('off');
	            },
	            success: function(data){
	      		  $('#feedbackUserContact').html(data.success + '<a class="close" data-dismiss="alert" href="#">×</a>');
	    		  $('#feedbackUserContact').attr('class','alert alert-success');
	    		  $('#feedbackUserContact').fadeIn(1000);
	    		  $('#loader-form').addClass('off');
	            }
	        });
		  
	  }
	  
	});

});
