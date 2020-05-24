/**
 * 
 */
$(document).ready(function() {

	$('#ChannelText').markItUp(myHtmlSettings);
   
	$('input#ChannelParentsChannel').keyup(function() {

		  var valueSearch = $('#ChannelParentsChannel').val();
		 
		  var data = $('#ChannelAdminAddForm').serialize();
		  
	      if( valueSearch.length > 0 ){
	    	  
	    	  	$("#ChannelParentsChannel").addClass("acLoading"); 
	            $.ajax({
	            type: 'POST',
	            url: '/admin/canal/autocompletelist',
	            data: data,
	            dataType: 'json',
	            beforeSend: function() {
	            	$("#ChannelParentsChannel").removeClass("acLoading");
	            	$("#ChannelPermalinkFeedBack").hide();
            	},
            	timeout: 5000,
	            error: function(message,error){
	            	
					if (error == "timeout") {
						$("#ChannelPermalinkFeedBack").html("Timeout na requisição, por favor tente outra vez.");
					    $("#ChannelPermalinkFeedBack").show();
					}else{
		            	$("#ChannelPermalinkFeedBack").html(message.responseText);
		            	$("#ChannelPermalinkFeedBack").show();
					}

	            },
	            success: function(data){
	            	var options = data.success.split(" ");
	                $("input#ChannelParentsChannel").autocomplete({
	                    source: options
	                });
	            }
	        });
	      }
	      return false;		
		
	});

	selectImage = function (id){
		$('#image_content_select').html('<img id="'+$("#image"+id).attr('id')+'" alt="'+$("#image"+id).attr('alt')+'" src="'+$("#image"+id).attr('src')+'" />');
		$('#ChannelImagesId').attr('value',id);
		$("#myModal").modal('hide');
	}
	
	changeData = function(url,div){
		
		$.get(url, function(data) {
		  $('#myModal').html(data);
		});
		
	}
	
});