/**
 * 
 */

$(document).ready(function(){
	
	//Examples of how to assign the ColorBox event to elements
	$(".group1").colorbox({rel:'group1'});
	$(".group2").colorbox({rel:'group2', transition:"fade"});
	$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
	$(".group4").colorbox({rel:'group4', slideshow:true});
	$(".ajax").colorbox();
	$(".youtube").colorbox({iframe:true, innerWidth:425, innerHeight:344});
	$(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});
	$(".inline").colorbox({inline:true, width:"50%"});
	$(".callbacks").colorbox({
		onOpen:function(){ alert('onOpen: colorbox is about to open'); },
		onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
		onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
		onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
		onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
	});
	
	//Example of preserving a JavaScript event for inline calls.
	$("#click").click(function(){ 
		$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
		return false;
	});
	
});


$(document).ready(function(){
	
	selectImage = function (id){
		$('#image_content_select').html('<img id="" alt="" src="'+$("#image"+id).attr('src')+'" />');
		$('#ArticleImagesId').attr('value',id);
		$.colorbox.close();
	}

});

function selectSlideshow(id){
	
	var article_id = $('#ArticleId').val();
	var data = '&data[Article][id]='+article_id+'&data[Article][slideshows_id]='+id;
	 
    $.ajax({
        type: 'POST',
        url: '/admin/conteudo/ajaxedit',
        data: data,
        dataType: 'json',
        beforeSend: function() {
  	},
  	timeout: 5000,
        error: function(message,error){
        },
        success: function(data){
        	
        	//addImageList(image_id,data.id);
        	alert('OK');
        }
    });
	
}