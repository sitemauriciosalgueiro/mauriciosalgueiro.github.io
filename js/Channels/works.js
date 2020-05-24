$(window).load(function () {
	$(window).scroll(function(){
		if( ($(window).scrollTop() >= ( $(document).height() - ( $(window).height() + 200 ))) && !$('#lastJob').val() ){
			var idfilter = "",
			count =1;
			 $(".images").each(function() {
				idfilter += jQuery(this).attr('id') + ','; 
				 count++;
			 });
			var urlAux = "/site/articles/ajax_moreWorks/"+$(".images:last").attr("data-time")+"/0/14/"+idfilter;
			//seto o ultimo id
			$("#lastWorksID").attr('value',$(".jobsitem:last").attr("id"));
			$("#list-works").append('<p style="float: left;" id="loading-more-works" class="badge badge-important"><img width="128px" height="128px" src="/img/loader-default-transparent.png" /> Carregando...</p>');
			$.ajax({
				url: urlAux,
				async:false,
				error: function(message,error){
					$('#list-works').append('<input type="hidden" id="lastJob" value="1" />');
					$(".works-message-scroll").remove();
		        },
				success: function(html){
					if(html){
						$("#list-works").append(html);
					}else{
						$('#list-works').append('<input type="hidden" id="lastJob" value="1" />');
					}
				}
			});
			$("#loading-more-works").remove();
		}
	});
});