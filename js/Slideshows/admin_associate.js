$(document).ready(function() {
    $("#test-list").sortable({
      handle : '.handle',
      update : function () {
		  var data = $('#test-list').sortable('serialize');
          $.ajax({
	            type: 'POST',
	            url: '/admin/slideshowsImages/updatelist',
	            data: data,
	            dataType: 'json',
	            beforeSend: function() {
          	},
          	timeout: 5000,
	            error: function(message,error){
	            },
	            success: function(data){
	            }
	        });
      }
    });

	changeData = function(url,div){
		
		$.get(url, function(data) {
		  $('#myModal').html(data);
		});
		
	}
	
	//Example of preserving a JavaScript event for inline calls.
	$("#click").click(function(){ 
		$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
		return false;
	});
	
});

function selectImage(image_id){
	
	var slideshow_id = $('#slideshowsid').val();
	var data = '&data[SlideshowsImage][images_id]='+image_id+'&data[SlideshowsImage][slideshows_id]='+slideshow_id;
	 
    $.ajax({
        type: 'POST',
        url: '/admin/slideshowsImages/ajaxadd',
        data: data,
        dataType: 'json',
        beforeSend: function() {
  	},
  	timeout: 5000,
        error: function(message,error){
        },
        success: function(data){
        	
        	addImageList(image_id,data.id);
        	
        }
    });
	
}

function addImageList(image_id,slideshowsimages_id){
    
	var totalList = $('#test-list li').size() + 1;
	
	$('#TotalSlideshowsImages').attr('value',totalList);
	
	var sourceImage = $('#image'+image_id).attr("src"); 

	var li = '<li id="listItem_'+totalList+'" class="clearfix boxe-content">' +
	'<div class="fL">' +
		'<img src="/img/arrow.png" alt="move" width="16" height="16" class="handle">'+
	'</div>'+
	'<div class="fR clearfix">'+
		'<div class="imageslide actions">'+
			'<img src="'+sourceImage+'">'+
			'<br>'+
			'<br>'+
			'<a href="javascript:deleteSlideshowsImage('+slideshowsimages_id+');">Remover</a>'+
		'</div>'+
		'<div class="textslide">'+
			'<div class="clearfix">'+
				'<div class="fL title-slideshow margin_right">'+
					'<label>Titulo:</label>'+
					'<input type="text" name="data['+totalList+'][SlideshowsImage][title]" value="">'+
				'</div>'+
				'<div class="fL topic-slideshow">'+
					'<label>Topico:</label>'+
					'<input type="text" name="data['+totalList+'][SlideshowsImage][topic]" value="">'+
				'</div>'+
			'</div>'+
			'<label>Decricao:</label>'+									 
			'<textarea name="data['+totalList+'][SlideshowsImage][description]"></textarea>'+
			'<input type="hidden" name="data['+totalList+'][SlideshowsImage][id]" value="'+slideshowsimages_id+'">'+
		'</div>'+
	'</div>'+
	'</li>';	
	$('ul#test-list').append(li);	
	$('#image-'+image_id).addClass('selected-image');
	$('#message_image_'+image_id).show();
}

function editSlideshowsImage(){
	
	var slideshow_id = $('#slideshowsid').val();
	var data = $('#SlideshowsImageForm').serialize();
	 
    $.ajax({
        type: 'POST',
        url: '/admin/slideshowsImages/ajaxedit',
        data: data,
        dataType: 'json',
        beforeSend: function() {
  	},
  	timeout: 5000,
        error: function(message,error){
        },
        success: function(data){
        	alert('Slideshow \n Galeria de imagens foi adicionada com sucesso!');
        }
    });
	
	
}

function deleteSlideshowsImage(image_id){
	
	if( confirm('Are you sure you want to delete # '+image_id+'?') ){
		
		//var data = '&image_id='+image_id;
		
	    $.ajax({
	        url: '/admin/slideshowsImages/ajaxdelete/'+image_id,
	        beforeSend: function() {
	  	},
	        error: function(message,error){
	        	alert('Error!' + message);
	        },
	        success: function(data){
	        	alert('OK!');
	        	location.reload();
	        }
	    });
		
	}
	
}