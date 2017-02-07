
$('body').on('click', 'a.reload_page, area[data-link=target-link]', function(event){
	event.preventDefault();

	nav_close();
	$('.footer').removeClass('activeted');

	$('.nav_link').removeClass('active');
	var act_nav = $(this).attr('data-nav');
	$('.nav_link[activ-nav='+act_nav+']').addClass('active');
	var loader_offset = $('.nav_link[activ-nav='+act_nav+']').offset().top;
	$('.loader').css({'top': loader_offset});

	var pageUrl = $(this).attr('href');
	var location = window.location.pathname;
	location = location.split("/");

	if(pageUrl!=location[location.length - 1]){
		setTimeout(function(){
			$('.loader').addClass('loading');	
		}, 400);
		load_content('#hidden-content', '#hidden-content', pageUrl);
	};
});

function load_content(container, object, pageUrl){
    $(container).load(pageUrl + ' ' + object + ' > *', function(response, status, xhr){
		if(status == "success"){
			window.history.pushState({path:pageUrl},'',pageUrl);
			success_load();
		} else if(status == "error"){
			error_load();    
		};
	});
};


function success_load(){
	$('.mapster_tooltip').remove();
	
	var page_current = $('#hidden-content .page_active').attr('id');

	var page_cotainer = $('.page-container');
	var active_page = $('#active-content');
	var hide_page = $('#hidden-content');

	var load_page = $('#hidden-content .page_active').attr('id');

	general();
	if(load_page == 'index') { index_func();};
	if(load_page == 'progect') { abaut_company();};
	if(load_page == 'progect_detail') { abaut_company_detail();};
	if(load_page == 'news') { news_func();};
	if(load_page == 'news_detail') { news_func();};
	if(load_page == 'virtual-tur') { virtual();};
	if(load_page == 'infrastructure') { infrastructure();};
	if(load_page == 'location') { initialize_map();};
	if(load_page == 'galery') { galery();};
	if(load_page == 'galery-detail') { galery_detail();};
	if(load_page == 'apartments') { apartments();};
	if(load_page == 'corpus') { corpus();};
	if(load_page == 'floor') { floor();};
	if(load_page == 'flat') { flat();};
	if(load_page == 'parameters') { parameters();};	

	setTimeout(function(){
		$(active_page).addClass('pt-page-scaleDown');
		$(hide_page).addClass('pt-page-moveFromBottom');
	}, 500);
	setTimeout(function(){
		$('.animate_fade').addClass('animate_active');

		$(page_cotainer).removeClass('pt-page-moveFromBottom');
		$(page_cotainer).removeClass('pt-page-scaleDown');
		$('.loader').removeClass('loading');

		$(active_page).attr('id', 'hidden-content');
		$(hide_page).attr('id', 'active-content');
		$('#hidden-content .page').detach();

	}, 1500);

};

function error_load(){
	alert('errorload');
	setTimeout(function(){
		$('.loader').removeClass('loading');			
	}, 1500);
}



