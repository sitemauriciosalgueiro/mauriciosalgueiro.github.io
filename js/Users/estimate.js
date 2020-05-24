$(window).load(function () {
	
	var cssObj = {
			  'background-color': '#FEFFC0',
			  'border-color': '#FEFFC0 #FFE299 #FFE299 #FEFFC0',
			  'border-style': 'solid',
			  'border-width': '1px',
			  'border-radius': '5px 5px 5px 5px'
		    };
	  
	  var cssEmptyObj = {
			  'background': 'none',
			  'border-color': 'none',
			  'border-style': 'none',
			  'border-width': '0',
			  'border-radius': '0'
		    };
	  
	$('#UserEstimateForm :submit').bind('click', function() {
		
	  if( $('#UserEmail').val() == '' || $('#UserTelefone').val() == '' ){
		  
		  var message = '<p><strong>Atenção...</strong></p><br />';
		  
		  if( $('#UserEmail').val() == ''){
			  message += '- Insira seu endereço de e-mail. <br />';
			  $('#UserEmail').parent().css(cssObj);
		  }else{
			  $('#UserEmail').parent().css(cssEmptyObj);
		  }
		  
		  if( $('#UserTelefone').val() == ''){
			  message += '- Insira seu telefone para contato. <br />';
			  $('#UserTelefone').parent().css(cssObj);
		  }else{
			  $('#UserTelefone').parent().css(cssEmptyObj);
		  }
		  
		  $('#feedbackUserEstimate').html(message);
		  $('#feedbackUserEstimate').attr('class','alert');
		  $('#feedbackUserEstimate').fadeIn(1000);
		  
	  }else{
		  
		  $('#feedbackUserEstimate').fadeOut(1000);
		  $('#UserTelefone').parent().css(cssEmptyObj);
		  $('#UserEmail').parent().css(cssEmptyObj);
		  
		  $('#UserEstimateForm').attr('action','/orcamento');
		  $('#UserEstimateForm').submit();
		  
	  }
	  
	});

});