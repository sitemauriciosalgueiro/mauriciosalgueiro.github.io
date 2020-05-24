$(window).load(function () {
	
	//$('div#loadmoreajaxloader').hide();
	
	$(window).scroll(function(){
		/*
		if( $(".jobsitem:last").attr("id") == $("#lastJobID").val() ){
			
			$('div#loadmoreajaxloader').html('<div class="alert">Não há mais trabalhos para mostrar.</div><input type="hidden" id="lastJob" value="1" />');
			return;
			
		}
		*/
		if( ( $(window).scrollTop() >= ( ( $(document).height() - $(window).height() ) - 1100 ) ) && !$("#lastJob").val() && $(".jobsitem:last").attr("id") != $("#lastJobID").val() ){
				
			$('div#loadmoreajaxloader').html('<center><img src="/img/preloader.gif"/></center>');
			
			var urlAux = "/site/articles/moreJobsByAjax/" + $(".jobsitem:last").attr("id");
			
			if( $("#jobsType").val() ){
				
				urlAux += "/" + $("#jobsType").val();
				
			}
			
			//seto o ultimo id
			$("#lastJobID").attr('value',$(".jobsitem:last").attr("id"));

			$.ajax({
				url: urlAux,
				success: function(html){
					//debugger;
					if(html){
						
						$("#listJobs").append(html);
						
						//$('div#loadmoreajaxloader').hide();
						
					}else{
						
						$('div#loadmoreajaxloader').html('<div class="alert">Não há mais trabalhos para mostrar.</div><input type="hidden" id="lastJob" value="1" />');
						
					}
				}
			});

		}/*else{
			$('div#loadmoreajaxloader').hide();
		}*/
		
	});

});