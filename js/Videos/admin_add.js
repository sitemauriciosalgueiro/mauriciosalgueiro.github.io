/**
 * 
 */

$(document).ready(function(){

	$('#VideoContent').markItUp(myHtmlSettings);
	
	selectImage = function (id){
		$('#image_content_select').html('<img id="'+$("#image"+id).attr('id')+'" alt="'+$("#image"+id).attr('alt')+'" src="'+$("#image"+id).attr('src')+'" />');
		$('#VideoImagesId').attr('value',id);
		$("#myModal").modal('hide');
	}
	
	changeData = function(url,div){
		
		$.get(url, function(data) {
		  $('#myModal').html(data);
		});
		
	}
	
});