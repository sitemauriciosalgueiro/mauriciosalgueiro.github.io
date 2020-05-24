//$(window).load(function () {

	$(window).scroll(function(){

		if( $(window).width() > 788){
			if( $(window).scrollTop() > 149 ){
				//console.log('virou fixed');
				$('#subnav-menu-header').addClass('subnav-fixed');
				
			}else{
				//console.log('NAO E fixed');
				$('#subnav-menu-header').removeClass('subnav-fixed');
				
			}
		}
		
	});

//});
	
