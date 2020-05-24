$(document).ready(function(){

	changeData = function(url,div){
		
		$.get(url, function(data) {
		  $('#myModal').html(data);
		});
		
	};

	$('[data-type^="associateCritica"]').bind({
	  click: function() {
		$('#myModal').attr('data-code',$(this).attr('data-code'));
	    $.get('/admin/criticas/pop_list/'+$(this).attr('data-code'), function(data) {
		  $('#myModal').html(data);
		  //$(this).attr('data-code');
		});
	  }
	});
	
	$('[data-type^="associate-slideshow"]').bind({
		click: function() {
			$('#myModal').attr('data-code',$(this).attr('data-code'));
			$.get('/admin/slideshow/pop_list/'+$(this).attr('data-code'), function(data) {
				$('#myModal').html(data);
				//$(this).attr('data-code');
			});
		}
	});

	$('[data-type="saveAssociateCritica"]').live("click", function(){
			var data = 'data[ArticlesHasCritica][articles_id]=&data[ArticlesHasCritica][criticas_id]',
				item = $(this);
			$(this).after('<span id="loader-form"><img src="/img/ajax-loader.gif" /></span>');
			  $.ajax({
		            type: 'POST',
		            url: '/admin/criticas/ajax_associateArticle/'+$('#myModal').attr('data-code')+'/'+$(this).attr('data-code'),
		            data: data,
		            dataType: 'json',
		            beforeSend: function() {
	        	},
	        	timeout: 5000,
		            error: function(data){
		              $('#feedback_pop_list').html('<div class="alert alert-error">'+data.error+ '<a class="close" data-dismiss="alert" href="#">×</a>'+'</div>');
		    		  //$('#feedback_pop_list').attr('class','alert alert-error');
		    		  $('#feedback_pop_list').fadeIn(1000);
		    		  $('#loader-form').remove();
		            },
		            success: function(data){
		      		  $('#feedback_pop_list').html('<div class="alert alert-success">'+data.success + '<a class="close" data-dismiss="alert" href="#">×</a>'+'</div>');
		    		  //$('#feedback_pop_list').attr('class','alert alert-success');
		    		  $('#feedback_pop_list').fadeIn(1000);
		    		  $('#loader-form').remove();
					  $(item).before('<a class="btn btn-danger" href="#myModal" data-code="'+$(item).attr('data-code')+'" data-type="removeAssociateCritica"><i class="icon-minus-sign icon-white"></i> Desassociar</a>');
					  $(item).remove();
		    		  $(item).attr("disabled", true);
		    		  $(item).attr("data-type", "associated");
		            }
		        });
	});
	
	$('[data-type="removeAssociateCritica"]').live("click", function(){
		var data = 'data[ArticlesHasCritica][articles_id]=&data[ArticlesHasCritica][criticas_id]',
		item = $(this);
		$(this).after('<span id="loader-form"><img src="/img/ajax-loader.gif" /></span>');
		$.ajax({
			type: 'POST',
			url: '/admin/criticas/ajax_removeArticle/'+$('#myModal').attr('data-code')+'/'+$(this).attr('data-code'),
			data: data,
			dataType: 'json',
			beforeSend: function() {
			},
			timeout: 5000,
			error: function(data){
				$('#feedback_pop_list').html('<div class="alert alert-error">'+data.error+ '<a class="close" data-dismiss="alert" href="#">×</a>'+'</div>');
				//$('#feedback_pop_list').attr('class','alert alert-error');
				$('#feedback_pop_list').fadeIn(1000);
				$('#loader-form').remove();
			},
			success: function(data){
				$('#feedback_pop_list').html('<div class="alert alert-success">'+data.success + '<a class="close" data-dismiss="alert" href="#">×</a>'+'</div>');
				//$('#feedback_pop_list').attr('class','alert alert-success');
				$('#feedback_pop_list').fadeIn(1000);
				$('#loader-form').remove();
				$(item).before('<a class="btn" href="#myModal" data-code="'+$(item).attr('data-code')+'" data-type="saveAssociateCritica"><i class="icon-plus-sign"></i> Associar</a>');
				$(item).remove();
				$(item).attr("disabled", true);
				$(item).attr("data-type", "associated");
			}
		});
	});

});

function selectSlideshow(id){
	var article_id = $('#myModal').attr('data-code');
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
        	alert('OK! Associado com sucesso.');
        	$("#myModal").modal('hide');
        	window.location.reload();
        }
    });
}

function removeSlideshow(id,article_id){
	var data = '&data[Article][id]='+article_id+'&data[Article][slideshows_id]='+id;
    $.ajax({
        type: 'POST',
        url: '/admin/conteudo/ajaxremoveslideshow',
        data: data,
        dataType: 'json',
        beforeSend: function() {
  	},
  	timeout: 5000,
        error: function(message,error){
        	alert('Ops! Ocorreu um erro inesperado. Tente remover novamente.');
        },
        success: function(data){
        	alert('OK! Removido com sucesso.');
        	$("#myModal").modal('hide');
        	window.location.reload();
        }
    });	
}