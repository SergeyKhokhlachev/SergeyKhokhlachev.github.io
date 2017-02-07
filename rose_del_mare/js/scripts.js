/*template*/
$(document).ready(function(){

	$('.nav_wrap .fix_nav').height($(window).height() - 60);
	$(window).resize(function(){
		$('.nav_wrap .fix_nav').height($(window).height() - 60);
	});

	$('.icon_animated').click(function(){
		$(this).toggleClass('open');
	});

	$('body').on('click', '.nav_button[data-status=close]', function(){
		nav_open();
	});
	$('body').on('click', '.nav_button[data-status=open]', function(){
		nav_close();
	});
	$('.nav_bg').on('click', function(){
		nav_close();
	});


	$(window).on('mousemove',function(event){
		var muse_position = event.clientX;
		var wind_w = $(window).width();
		if(muse_position > wind_w - 140){
			$('.nav_wrap').addClass('mouse_hove');
		} else{
			$('.nav_wrap').removeClass('mouse_hove');
		}
	});

	$('.open_contact').on('click', function(){
		nav_close();
		$('.footer').addClass('activeted');
	});
	$('.close_contact').on('click', function(){
		$('.footer').removeClass('activeted');
	})

	function initialize_map() {
		var mapOptions = {
		    center: { lat: 43.58969171353589, lng: 39.7206219773636},
		    zoom: 15,
	        maxZoom: 16,
	        minZoom: 13,
	        zoomControlOptions: {
	            style: google.maps.ZoomControlStyle.DEFAULT,
	            position: google.maps.ControlPosition.LEFT_TOP
	        },
		    scrollwheel: false,
	        mapTypeControl: false,
	        streetViewControl: false,
		};	
		
		var map = new google.maps.Map(document.getElementById('google_map'), mapOptions);

	    var imageMfk = new google.maps.MarkerImage('images/icon/map_marker.png',new google.maps.Size(70,68),new google.maps.Point(0,0),new google.maps.Point(35,68),new google.maps.Size(70,68));

		var mfkPos = new google.maps.LatLng(43.58928192842674,39.72071078948449);	  
		var mfkMark = new google.maps.Marker({
			position: mfkPos,
			map: map,
			icon: imageMfk
		});		


		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
		}); 
	}

	initialize_map();

	function fromLatLngToPoint(latLng, map) {
	    var topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
	    var bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
	    var scale = Math.pow(2, map.getZoom());
	    var worldPoint = map.getProjection().fromLatLngToPoint(latLng);
	    return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale, (worldPoint.y - topRight.y) * scale);
	}
	

});

/*init page*/
$(document).ready(function() {

	$('.animate_fade').addClass('animate_active');

	var load_page = $('#hidden-content .page_active').attr('id');

	

	var active_page = $('#active-content');
	var hide_page = $('#hidden-content');
	$(active_page).attr('id', 'hidden-content');
	$(hide_page).attr('id', 'active-content');

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
	
 
});

/* ================== OLL FUNCTION ================== */
/*navigation*/
function nav_open(){
	var nav_bar = $('.nav_contant');
	var page = $('.page-container');
	$(nav_bar).addClass('open_nav');
	$(page).addClass('open_nav');

	$('.nav_button').attr('data-status', 'open');
};
function nav_close(){
	var nav_bar = $('.nav_contant');
	var page = $('.page-container');
	$(nav_bar).removeClass('open_nav');
	$(page).removeClass('open_nav');	

	$('.nav_button').attr('data-status', 'close');
	$('.nav_button').removeClass('open');
};


/*margin_fix*/
function margin_fix(obgect, container){

	var arrObgect = $(obgect);
	var arrContein = $(container);
	console.log(arrObgect.length);

	for (var i = 0; i < arrObgect.length; i++) {
		var con_h = $(arrContein[i]).height();
		var obj_h = $(arrObgect[i]).height();
		var mar_fix = (con_h - obj_h)/2 - 10;
		$(arrObgect[i]).css({'margin-top': mar_fix +'px'});
	};

};


/*выравнивание блоков*/
var tallestcolumn = 0;
function setEqualHeight(columns){	
	columns.each(function(){
		currentHeight = $(this).height();
		if(currentHeight > tallestcolumn){
			tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}	


/*cords_icon*/
function fix_cords(obgect,aria,map){
	var map;
	var aria;
	var obgect;
	var ind;	
	var cords = $(map).children('area')[aria].coords;	
	for(var i=0; i<cords.length; i++){
		if (cords[i] == ',') { ind = i };
	};	
	var cod_left = cords.slice(0,ind) + 'px';
	cod_left = cod_left.slice(4);
	ind = ind + 1;
	var cod_top = cords.slice(ind) + 'px';	
	
	$(obgect).css({'top' : cod_top , 'left' : cod_left});	
};


/*load_img*/
;(function ($) {
    $.fn.bindImageLoad = function (callback) {
        function isImageLoaded(img) {
            if (!img.complete) {
                return false;
            }
            if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        }
        return this.each(function () {
            var ele = $(this);
            if (ele.is("img") && $.isFunction(callback)) {
                ele.one("load", callback);
                if (isImageLoaded(this)) {
                    ele.trigger("load");
                }
            }
        });
    };
})(jQuery);


/*rotate bg*/
function rotate_bg(){
	var $wallpaper = $('.wallpaper');
	var $db = $(".db");
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var degreesW = windowWidth / 15;
	var degreesH = windowHeight / 15;
	var mousePos = { x: -1, y: -1 };
	var mouseFromCenter = { x: -1, y: -1 };
	  
	$(document).mousemove(function(event) {
	    mousePos.x = event.pageX;
	    mouseFromCenter.x = mousePos.x - (windowWidth / 2);
	    mousePos.y = event.pageY;
	    mouseFromCenter.y = mousePos.y - (windowHeight / 2);
	    
		$db.text(
	    	mouseFromCenter.x + "x " +
	        Math.round(mouseFromCenter.x / degreesW) + "degX " +
	        mouseFromCenter.y + "y " +
	        Math.round(mouseFromCenter.y / degreesH) + "degY "
	    );
	    $wallpaper.css({ "transform" : "rotateY(" + (mouseFromCenter.x / degreesW) + "deg) rotateX(" + ((mouseFromCenter.y / degreesH) * -1) +"deg)" });
	}); 
};

/* ================== PAGE FUNCTION ================== */

/* ======== index ======== */
function index_func(){
   	rotate_bg();
}; 

/* ======== abaut ======== */
function abaut_company(){	
  
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
	      	clearTimeout(timeout);
	      	timeout = setTimeout(function() {
	        	timeout = null;
	        	if (!immediate) func.apply(context, args);
	      	}, wait);
	      	if (immediate && !timeout) func.apply(context, args);
	    };
	};
  
  	function hoverEffect(px) {
    	$(".element").each(function() {
      		var $back = $(this).find(".back"),
          	$text = $(this).find(".hover-text"),
          	backH = $back.height(),
          	textH = $text.height(),
          	diff = 0,
          	dur = 0,
          	pxPerSecond = px || 100,
          	that = this;

      		$(this).unbind("mouseenter mouseleave");

      		if (backH < textH) {
        		diff = textH - backH + 50;
        		dur = parseFloat(diff /  pxPerSecond).toFixed(2);
        		$text.css("transition", "transform " + dur +"s 0.5s linear");
        		$(that).hover(function() {
          			$text.css("transition", "transform " + dur +"s 0.5s linear");
          			$text.css("transform", "translateY("+ (0 - diff) +"px)");
        		}, function() {
          			$text.css("transition", "transform 0.5s 0.5s linear");
          			$text.css("transform", "translateY(0px)");
        		});
      		}

    	});
  	};
  
  	hoverEffect();
  
  	var winWidth = $(window).width(),
      	winHeight = $(window).height(),
      	winWHalf = winWidth/2,
      	winHHalf = winHeight/2,
      	maxDeg = 15,
      	xPoint = parseFloat(winWHalf/maxDeg),
      	yPoint = parseFloat(winHHalf/maxDeg),
      	xDeg = 0,
      	yDeg = 0,
      	$plat = $(".platform");
  
  	var calculations = debounce(function(deg) {
    	winWidth = $(window).width();
    	winHeight = $(window).height();
    	winWHalf = winWidth/2;
    	winHHalf = winHeight/2;
    	maxDeg = deg || 10;
    	xPoint = parseFloat(winWHalf/maxDeg);
    	yPoint = parseFloat(winHHalf/maxDeg);
    
    	hoverEffect();
    
	}, 200);

  	var movePlatform = function(e) {
    	var x = parseFloat( (e.pageX - winWHalf) / xPoint);
    	var y = parseFloat( (e.pageY - winHHalf) / yPoint);
   		$plat.css("transform", "rotateX("+ (0 - y) +"deg) rotateY("+ x +"deg) rotateZ(0)");
  	};

  	$(document).on("mousemove", movePlatform);

 	$(window).resize(function() {
    	calculations();
  	});
  
  	$(document).on("change keyup", ".deg", function() {
    	calculations($(this).val());
  	});
  
  	$(document).on("change keyup", ".text-px", function() {
    	hoverEffect($(this).val());
  	});

  	margin_fix('.margin_fix_object_1', '.margin_fix_cont_1');

  	$(window).resize(function(){
		margin_fix('.margin_fix_object_1', '.margin_fix_cont_1');
  	});

  	rotate_bg();
  
};

/* ======== abaut_detail ======== */
function abaut_company_detail(){

	rotate_bg();

    $('#tabs4').tabulous({
    	effect: 'flip'
    });

	var scroll_hei = $('.progect_detail_blok').height() - $('.progect_detail_blok h1').height() - 130;
	$('.progect_detail_scroll').height(scroll_hei);

   	$(window).resize(function(){
		var scroll_hei = $('.progect_detail_blok').height() - $('.progect_detail_blok h1').height() - 130;
   		$('.progect_detail_scroll').height(scroll_hei);   		
   	});

}; 


/* ======== news ======== */
function news_func(){
   	rotate_bg();
};  


/* ======== infrastructure ======== */
function infrastructure(){
	$("#infrastructure #static_parallax").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$("#parking").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$("#swimming").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$("#playgraund").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$("#airport").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$("#car").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$("#mushroom").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$(window).resize(function() {
    	$(".parallax-layer > .ibg-bg").css({
        	width: $('.parallax-layer').outerWidth(),
        	height: $('.parallax-layer').outerHeight()
      	})
   });

	$('.cont_element').mouseenter(function(){
		$('.hover_slide').removeClass('active_layer');
		$('.infr_element').not(this).addClass('hide_icon');
		var active_layer = $(this).attr('data-target');
		$('.hover_slide[data-ativeted='+active_layer+']').addClass('active_layer');
		$('.sub_inform[info-target='+active_layer+']').addClass('active_inform');
		$('.sub_inform[info-target='+active_layer+']').parent().addClass('active_wrap');
	});

	$('.cont_element').mouseleave(function(){
		$('.infr_element').removeClass('hide_icon');
		$('.hover_slide').removeClass('active_layer');
		$('.sub_inform').removeClass('active_inform');
		$('.sub_inform_wrap').removeClass('active_wrap');
	});

			
};


/* ======== virtual ======== */
function virtual(){

	$('.virtual_link').fadeOut();

	$('#virtual').bindImageLoad(function () {

		setTimeout(function(){

			$('#cover_virtual').liCover({
				parent: $('#cover_parent_virtual'),
				position:'absolute',
				veticalAlign:'middle',
				align:'center',	
			});

			var render = $('#cover');
			var render_h = render.height();
			var render_w = render.width();



			$('#virtual').mapster({ 
				scaleMap: true,
				fillColor: 'ffffff',
				fillOpacity: 0,
				isSelectable: false,
			}).mapster('resize', render_w, render_h, 0, function(){
				fix_cords('#virt_1',0,'map[name="infrostruct"]');
				fix_cords('#virt_2',1,'map[name="infrostruct"]');
				fix_cords('#virt_3',2,'map[name="infrostruct"]');			
			});

			fix_cords('#virt_1',0,'map[name="infrostruct"]');
			fix_cords('#virt_2',1,'map[name="infrostruct"]');
			fix_cords('#virt_3',2,'map[name="infrostruct"]');

		}, 1500);

		setTimeout(function(){
			$('.left_fix_load').addClass('fadeOutLeftBig');
			$('.right_fix_load').addClass('fadeOutRightBig');
		}, 2000);

		setTimeout(function(){
			$('.virtual_icon').addClass('activeted')
			$('.virtual_link').addClass('bounceInDown').fadeIn();
		}, 3000);

	});

	$(window).resize(function() {
		var render = $('#cover_virtual');
		var render_h = render.height();
		var render_w = render.width();		
				
		$('#virtual').mapster('resize', render_w, render_h, 0, function(){
			fix_cords('#virt_1',0,'map[name="infrostruct"]');
			fix_cords('#virt_2',1,'map[name="infrostruct"]');
			fix_cords('#virt_3',2,'map[name="infrostruct"]');			
		});	
	});

};




/*========== location ==========*/
function initialize_map() {

	$('body').on('click','.control_btn.close',function(){
		$(this).removeClass('close').addClass('open');
		$('.slider_container').addClass('panel_hide');
	});

	$('body').on('click','.control_btn.open', function(){
		$(this).removeClass('open').addClass('close');
		$('.slider_container').removeClass('panel_hide');
	});

	setTimeout(function(){
			$('.left_fix_load').addClass('fadeOutLeftBig');
			$('.right_fix_load').addClass('fadeOutRightBig');
			$('.anim_fade').fadeIn(1000);
			$('.anim_top').slideDown(1000);
	}, 2000);

	$('.pin-wrap').mouseenter(function(){
		$(this).parent('.label').addClass('selected');
	});
	$('.pin-wrap').mouseleave(function(){
		$(this).parent('.label').removeClass('selected');
	});



	var map = new GLMap('map', {
	    position: { latitude:43.58549171353589, longitude:39.7206219773636 },
	    zoom: 16,
	    minZoom: 14,
	    maxZoom: 18,
	    tilt: 45
	});

	var osmb = new OSMBuildings({
	    baseURL: './images/render',
	    minZoom: 14,
	    maxZoom: 18,
	    attribution: ' '
	}).addTo(map);

	osmb.addMapTiles(
		'http://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png',
	    {
	      attribution: '© Data <a href="http://openstreetmap.org/copyright/">OpenStreetMap</a> · © Map <a href="http://mapbox.com">MapBox</a>'
	    }
	);
	osmb.addGeoJSONTiles('http://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json'); 

 	var timer;
 	var index;
 	$('#object').mouseenter(function(){
 		index = 1;
 		osmb.highlight(46639979, '#0CB800');
		setTimeout(function() {
			if(index==1){
		 		osmb.highlight(null);
		 		osmb.highlight(74466400, '#0CB800');
		 	}
		}, 1000);
		setTimeout(function() {
			if(index==1){
				osmb.highlight(null);
		 		osmb.highlight(236256880, '#0CB800');
		 	}
		}, 2000);
 		timer = setInterval(function() {
			osmb.highlight(46639979, '#0CB800');
		 	setTimeout(function() {
				if(index==1){
			 		osmb.highlight(null);
			 		osmb.highlight(74466400, '#0CB800');
			 	}
			}, 1000);
			setTimeout(function() {
				if(index==1){
					osmb.highlight(null);
			 		osmb.highlight(236256880, '#0CB800');
			 	}
			}, 2000);
		}, 3000);
	});
	$('#object').mouseleave(function(){
		index = 2;
		clearInterval(timer);
		osmb.highlight(null);
	});


	

	var object = document.getElementById('object');
  	var pos_object = osmb.project(43.58928192842674,39.72071078948449, 50);
	object.style.left = Math.round(pos_object.x) + 'px';
  	object.style.top = Math.round(pos_object.y) + 'px';

	var station = document.getElementById('station');
  	var pos_station = osmb.project(43.59103985630296,39.72810756961146, 50);
	station.style.left = Math.round(pos_station.x) + 'px';
  	station.style.top = Math.round(pos_station.y) + 'px';

  	var promenade = document.getElementById('promenade');
  	var pos_promenade = osmb.project(43.57769397816311,39.720495597560245, 50);
	promenade.style.left = Math.round(pos_promenade.x) + 'px';
  	promenade.style.top = Math.round(pos_promenade.y) + 'px';

	var yachting = document.getElementById('yachting');
  	var pos_yachting = osmb.project(43.58185621075106,39.71405782937119, 50);
	yachting.style.left = Math.round(pos_yachting.x) + 'px';
  	yachting.style.top = Math.round(pos_yachting.y) + 'px';

	var parkland = document.getElementById('parkland');
  	var pos_parkland = osmb.project(43.59048286689157,39.715442930979236, 50);
	parkland.style.left = Math.round(pos_parkland.x) + 'px';
  	parkland.style.top = Math.round(pos_parkland.y) + 'px';

  	var walkway = document.getElementById('walkway');
  	var pos_walkway = osmb.project(43.57796827370025,39.72306208896265, 50);
	walkway.style.left = Math.round(pos_walkway.x) + 'px';
  	walkway.style.top = Math.round(pos_walkway.y) + 'px';
  					
  	var arboretum = document.getElementById('arboretum');
  	var pos_arboretum = osmb.project(43.57326480107219,39.74274417790978, 50);
	arboretum.style.left = Math.round(pos_arboretum.x) + 'px';
  	arboretum.style.top = Math.round(pos_arboretum.y) + 'px';

  	var square = document.getElementById('square');
  	var pos_square = osmb.project(43.57697993325226,39.72714939136794, 50);
	square.style.left = Math.round(pos_square.x) + 'px';
  	square.style.top = Math.round(pos_square.y) + 'px';

	var bank = document.getElementById('bank');
  	var pos_bank = osmb.project(43.58537662236006,39.72530311052873, 50);
	bank.style.left = Math.round(pos_bank.x) + 'px';
  	bank.style.top = Math.round(pos_bank.y) + 'px';

	var cinema = document.getElementById('cinema');
  	var pos_cinema = osmb.project(43.606175444247675,39.732290676388736, 50);
	cinema.style.left = Math.round(pos_cinema.x) + 'px';
  	cinema.style.top = Math.round(pos_cinema.y) + 'px';

	map.on('change', function() {
		var pos_object = osmb.project(43.58928192842674,39.72071078948449, 50);
		object.style.left = Math.round(pos_object.x) + 'px';
  		object.style.top = Math.round(pos_object.y) + 'px';

  		var pos_station = osmb.project(43.59103985630296,39.72810756961146, 50);
  		station.style.left = Math.round(pos_station.x) + 'px';
  		station.style.top = Math.round(pos_station.y) + 'px';

	  	var pos_promenade = osmb.project(43.57769397816311,39.720495597560245, 50);
		promenade.style.left = Math.round(pos_promenade.x) + 'px';
	  	promenade.style.top = Math.round(pos_promenade.y) + 'px';

	  	var pos_yachting = osmb.project(43.58185621075106,39.71405782937119, 50);
		yachting.style.left = Math.round(pos_yachting.x) + 'px';
	  	yachting.style.top = Math.round(pos_yachting.y) + 'px';

  		var pos_parkland = osmb.project(43.59048286689157,39.715442930979236, 50);
  		parkland.style.left = Math.round(pos_parkland.x) + 'px';
  		parkland.style.top = Math.round(pos_parkland.y) + 'px';

  		var pos_walkway = osmb.project(43.57796827370025,39.72306208896265, 50);
		walkway.style.left = Math.round(pos_walkway.x) + 'px';
	  	walkway.style.top = Math.round(pos_walkway.y) + 'px';

	  	var pos_arboretum = osmb.project(43.57326480107219,39.74274417790978, 50);
		arboretum.style.left = Math.round(pos_arboretum.x) + 'px';
	  	arboretum.style.top = Math.round(pos_arboretum.y) + 'px';

	  	var pos_square = osmb.project(43.57697993325226,39.72714939136794, 50);
		square.style.left = Math.round(pos_square.x) + 'px';
	  	square.style.top = Math.round(pos_square.y) + 'px';

  		var pos_bank = osmb.project(43.58537662236006,39.72530311052873, 50);
  		bank.style.left = Math.round(pos_bank.x) + 'px';
  		bank.style.top = Math.round(pos_bank.y) + 'px';

  		var pos_cinema = osmb.project(43.606175444247675,39.732290676388736, 50);
  		cinema.style.left = Math.round(pos_cinema.x) + 'px';
  		cinema.style.top = Math.round(pos_cinema.y) + 'px';
	});


	$(window).resize(function(){
		setTimeout(function(){
			var pos_object = osmb.project(43.58928192842674,39.72071078948449, 50);
			object.style.left = Math.round(pos_object.x) + 'px';
	  		object.style.top = Math.round(pos_object.y) + 'px';

	  		var pos_station = osmb.project(43.59103985630296,39.72810756961146, 50);
	  		station.style.left = Math.round(pos_station.x) + 'px';
	  		station.style.top = Math.round(pos_station.y) + 'px';

	  		var pos_promenade = osmb.project(43.57769397816311,39.720495597560245, 50);
			promenade.style.left = Math.round(pos_promenade.x) + 'px';
		  	promenade.style.top = Math.round(pos_promenade.y) + 'px';
		  	
		  	var pos_yachting = osmb.project(43.58185621075106,39.71405782937119, 50);
			yachting.style.left = Math.round(pos_yachting.x) + 'px';
		  	yachting.style.top = Math.round(pos_yachting.y) + 'px';

	  		var pos_parkland = osmb.project(43.59048286689157,39.715442930979236, 50);
	  		parkland.style.left = Math.round(pos_parkland.x) + 'px';
	  		parkland.style.top = Math.round(pos_parkland.y) + 'px';

	  		var pos_walkway = osmb.project(43.57796827370025,39.72306208896265, 50);
			walkway.style.left = Math.round(pos_walkway.x) + 'px';
		  	walkway.style.top = Math.round(pos_walkway.y) + 'px';

		  	var pos_arboretum = osmb.project(43.57326480107219,39.74274417790978, 50);
			arboretum.style.left = Math.round(pos_arboretum.x) + 'px';
		  	arboretum.style.top = Math.round(pos_arboretum.y) + 'px';

		  	var pos_square = osmb.project(43.57697993325226,39.72714939136794, 50);
			square.style.left = Math.round(pos_square.x) + 'px';
		  	square.style.top = Math.round(pos_square.y) + 'px';

	  		var pos_bank = osmb.project(43.58537662236006,39.72530311052873, 50);
	  		bank.style.left = Math.round(pos_bank.x) + 'px';
	  		bank.style.top = Math.round(pos_bank.y) + 'px';

	  		var pos_cinema = osmb.project(43.606175444247675,39.732290676388736, 50);
	  		cinema.style.left = Math.round(pos_cinema.x) + 'px';
	  		cinema.style.top = Math.round(pos_cinema.y) + 'px';
  		}, 500);
	});




	var zoom = document.querySelector('.sl_zoom');
    var initDec = new Powerange(zoom, { decimal: true, hideRange: true, callback: displayZoom, min: 14, max: 18, start: 16 });

    function displayZoom() {
    	$('#map_zoom').html(zoom.value);	
      	map.setZoom(zoom.value);
    }

    var tilt = document.querySelector('.sl_tilt');
    var initTilt = new Powerange(tilt, { decimal: true, hideRange: true, callback: displayTilt, min: 0, max: 45, start: 45 });

    function displayTilt() {
    	$('#map_tilt').html(tilt.value);
    	map.setTilt(tilt.value);	
    }

    var rotate = document.querySelector('.sl_rotate');
    var initRotate = new Powerange(rotate, { decimal: true, hideRange: true, callback: displayRotate, min: 0, max: 360, start: 0 });

    function displayRotate() {
    	$('#map_rotate').html(rotate.value);
    	map.setRotation(rotate.value);	
    }


};



/*========== Galery ==========*/
function galery() {

	$("#galery #static_parallax").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$(window).resize(function() {
    	$(".parallax-layer > .ibg-bg").css({
        	width: $('.parallax-layer').outerWidth(),
        	height: $('.parallax-layer').outerHeight()
      	})
   });

	function getViewport() {
		var e = window,
			a = 'inner';
		if (!('innerWidth' in window)) {
			a = 'client';
			e = document.documentElement || document.body;
		}
		return {
			width: e[a + 'Width'],
			height: e[a + 'Height']
		}
	}



		var $win = $(window),
			isTouch = !!('ontouchstart' in window),
			clickEvent = isTouch ? 'tap' : 'click';

				
		(function(){
			function calculator(width){
				var percent = '25%';
				if (width <= 480) {
					percent = '60%';
				}
				else if (width <= 767) {
					percent = '55%';
				}
				else {
					percent = '50%';
				}
				return percent;
		};

		var $example = $('#galery_list'),
			$frame = $('.frame', $example),
			$details = $('div.details', $example),
			$title = $('#title', $details),
			$photographer = $('#photographer', $details),
			$description = $('#description', $details),
			lastIndex = -1;

			$frame.mightySlider({
				speed: 1000,
				startAt: 1,
				autoScale: 1,
				easing: 'easeOutExpo',
						
			// Navigation options
			navigation: {
				slideSize: calculator(getViewport().width),
				keyboardNavBy: 'slides',
				activateOn: clickEvent
			},

			// Dragging
			dragging: {
				swingSpeed: 0.12,
				onePage: 1
			},

			// Buttons
			buttons: !isTouch ? {
				prev: $('a.mSPrev', $frame),
				next: $('a.mSNext', $frame)
			} : {},

			// Cycling
			cycling: {
				cycleBy: 'slides'
			}
			}, {
				active: function(name, index) {
					var slideOptions = this.slides[index].options;

					if (lastIndex !== index)
						$details.stop().animate({ opacity: 0 }, 500, function(){
							$title.html(slideOptions.title);
							$photographer.html(slideOptions.photographer);
							$description.html(slideOptions.description);
							$details.animate({ opacity: 1 }, 500);
						});

						lastIndex = index;
					}
				});

				var API = $frame.data().mightySlider;

				$win.resize(function(){
					API.set({
						navigation: {
							slideSize: calculator(getViewport().width)
						}
					});
				});
		})();

};




/*========== Galery detail ==========*/
function galery_detail() {

	setTimeout(function(){
			$('.left_fix_load').addClass('fadeOutLeftBig');
			$('.right_fix_load').addClass('fadeOutRightBig');
	}, 2000);


	(function(){
		var $kenburns = $('#kenburns'),
		$frame = $('.frame', $kenburns),
		$pagesbar = $('#sliderPages', $kenburns),
		$titlesHolder = $('#sliderContentItems', $kenburns),
		$titles = $('.sliderContentItem', $titlesHolder),
		$fullscreen = $('#fullscreen', $kenburns);
		$frame.mightySliderAnimate({
			pages: {
				pagesBar: $pagesbar,
				activateOn: 'click'
			},

			cycling: {
				cycleBy: 'slides',
				pauseTime: 8000
			},
						
			// Buttons
			buttons: {
				fullScreen: $fullscreen
			}
		},
		{
		load: function() {
			var html = "";
			$titlesHolder.empty();

			for(var i = 0, len = this.slides.length, slide; i < len; i++) {
				slide = this.slides[i];
					html += '<div class="sliderContentItem">'+
							'<h2 class="sliderContentTitle">' + slide.options.title + '</h2>'+
							'<div class="sliderContentDescription">'+
							'<p>' + slide.options.description + '</p>'+
							'</div>'+
							'</div>';
					}

					$titlesHolder.html(html);
					$titles = $('.sliderContentItem', $titlesHolder);
					$titles.eq(0).addClass('selected');
				},
				active: function(name, index){
					$titles.removeClass('selected');
					$titles.eq(index).addClass('selected');
				},
				enterFullScreen: function() {
					$fullscreen.removeClass('icon-expand').addClass('icon-compress');
				},
				exitFullScreen: function() {
					$fullscreen.addClass('icon-expand').removeClass('icon-compress');
				}
		});
	})();
};




/* ======== apartments ======== */
function apartments(){

	$('#apartments_render').bindImageLoad(function () {

		setTimeout(function(){

			$('#cover_apartments').liCover({
				parent: $('#cover_parent_apartments'),
				position:'absolute',
				veticalAlign:'middle',
				align:'center',	
			});

			var render = $('#cover');
			var render_h = render.height();
			var render_w = render.width();

			var corpus_1 = $('#corpus_1').html();
			var corpus_2 = $('#corpus_2').html();


			$('#apartments_render').mapster({ 
		  		showToolTip: true,
		  		staticState: true,
		  		scaleMap: true,
		  		clickNavigate: false,
		  		isSelectable: false,
		 		mapKey: 'data-key',
				areas:  [{
				   key: "corpus-1",
				   toolTip: corpus_1,
				   render_select: {fillOpacity: 0.4, fillColor: 'ff9800'},
				   render_highlight: {fillOpacity: 0.6, fillColor: '448AFF'},		   
				},{
				   key: "corpus-2",
				   toolTip: corpus_2,
				   render_select: {fillOpacity: 0.4, fillColor: 'B2B2B2'},
				   render_highlight: {fillOpacity: 0.0},		   
				},
			 ],
			}).mapster('resize', render_w, render_h, 0);

		}, 1500);

		setTimeout(function(){
			$('.left_fix_load').addClass('fadeOutLeftBig');
			$('.right_fix_load').addClass('fadeOutRightBig');
		}, 2000);

	});

	$(window).resize(function() {
		$(window).trigger('redraw');
		var render = $('#cover_apartments');
		var render_h = render.height();
		var render_w = render.width();					
		$('#apartments_render').mapster('resize', render_w, render_h, 0);	
	});

};




/* ======== corpus ======== */
function corpus(){

	$('#floor_render').bindImageLoad(function () {

		setTimeout(function(){

			$('#cover_floor').liCover({
				parent: $('#cover_parent_floor'),
				position:'absolute',
				veticalAlign:'middle',
				align:'center',	
			});

			var render = $('#cover');
			var render_h = render.height();
			var render_w = render.width();

			var floor_13 = $('#floor_13').html();
			var floor_12 = $('#floor_12').html();
			var floor_11 = $('#floor_11').html();
			var floor_10 = $('#floor_10').html();
			var floor_9 = $('#floor_9').html();
			var floor_8 = $('#floor_8').html();


			$('#floor_render').mapster({ 
		  		showToolTip: true,
		  		staticState: true,
		  		scaleMap: true,
		  		clickNavigate: false,
		  		isSelectable: false,
		 		mapKey: 'data-key',
				fillColor: 'ff9800',
				render_highlight: {fillOpacity: 0.6, fillColor: '448AFF'},
		  		render_select: {fillOpacity: 0.4},
				areas:  [{
				   key: "floor-13",
				   toolTip: floor_13,		   
				},{
				   key: "floor-12",
				   toolTip: floor_12,		   
				},{
				   key: "floor-11",
				   toolTip: floor_11,		   
				},
				{
				   key: "floor-10",
				   toolTip: floor_10,		   
				},
				{
				   key: "floor-9",
				   toolTip: floor_9,		   
				},
				{
				   key: "floor-8",
				   toolTip: floor_8,		   
				},
			 ],
			}).mapster('resize', render_w, render_h, 0);

		}, 1500);

		setTimeout(function(){
			$('.left_fix_load').addClass('fadeOutLeftBig');
			$('.right_fix_load').addClass('fadeOutRightBig');
		}, 2000);

	});

	$(window).resize(function() {
		$(window).trigger('redraw');
		var render = $('#cover_floor');
		var render_h = render.height();
		var render_w = render.width();					
		$('#floor_render').mapster('resize', render_w, render_h, 0);	
	});

};



/* ======== floor ======== */
function floor(){
	$("#floor #static_parallax").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$(window).resize(function() {
    	$(".parallax-layer > .ibg-bg").css({
        	width: $('.parallax-layer').outerWidth(),
        	height: $('.parallax-layer').outerHeight()
      	})
   });

	$('.plan_wrap area').mouseenter(function(){
		var num = $(this).attr('data-num');
		var room = $(this).attr('data-room');
		var squer = $(this).attr('data-sqer');
		var cost = $(this).attr('data-cost');
		var status = $(this).attr('data-status');
		$('#num_flor').html(num);
		$('#num_room').html(room);
		$('#squer_flor').html(squer);
		$('#cost_flor').html(cost);
		$('#status_flor').html(status);
		$('.info_blok').addClass('activeted');

	});
	$('.plan_wrap area').mouseleave(function(){
		$('.info_blok').removeClass('activeted');
	});

	$('#floor_plan').bindImageLoad(function () {

		setTimeout(function(){
			var render = $('.plan_wrap');
			var render_h = render.height();
			var render_w = render.width();

			$('#floor_plan').mapster({ 
		  		showToolTip: true,
		  		staticState: true,
		  		scaleMap: true,
		  		clickNavigate: false,
		  		isSelectable: false,
		 		mapKey: 'data-key',
				render_highlight: {fillOpacity: 0.6, fillColor: '64B70D'},
		  		render_select: {fillOpacity: 0.4, fillColor: '64B70D'},
				areas:  [{
				   key: "flat_193",
				   render_highlight: {fillOpacity: 0.0, fillColor: 'B5B5B5'},
		  		   render_select: {fillOpacity: 0.4, fillColor: 'B5B5B5'},		   
				},{
				   key: "flat_194",
				   render_highlight: {fillOpacity: 0.0, fillColor: 'E8CB00'},
		  		   render_select: {fillOpacity: 0.4, fillColor: 'E8CB00'},		   
				},{
				   key: "flat_195",
				   render_highlight: {fillOpacity: 0.6, fillColor: '64B70D'},
		  		   render_select: {fillOpacity: 0.4, fillColor: '64B70D'},		   
				},{
				   key: "flat_196",
				   render_highlight: {fillOpacity: 0.0, fillColor: 'B5B5B5'},
		  		   render_select: {fillOpacity: 0.4, fillColor: 'B5B5B5'},		   
				},{
				   key: "flat_197",
				   render_highlight: {fillOpacity: 0.0, fillColor: 'E8CB00'},
		  		   render_select: {fillOpacity: 0.4, fillColor: 'E8CB00'},		   
				},{
				   key: "flat_198",
				   render_highlight: {fillOpacity: 0.6, fillColor: '64B70D'},
		  		   render_select: {fillOpacity: 0.4, fillColor: '64B70D'},		   
				},
			 ],
			}).mapster('resize', render_w, 0);

		}, 1500);

	});

	$(window).resize(function() {
		$(window).trigger('redraw');
		var render = $('.plan_wrap');
		var render_h = render.height();
		var render_w = render.width();					
		$('#floor_plan').mapster('resize', render_w, 0);	
	});

};

/* ======== flat ======== */
function flat(){

	$("#flat #static_parallax").interactive_bg({
		strength: 25,
	    scale: 1.00,
	    animationSpeed: "100ms",
	});

	$(window).resize(function() {
    	$(".parallax-layer > .ibg-bg").css({
        	width: $('.parallax-layer').outerWidth(),
        	height: $('.parallax-layer').outerHeight()
      	})
   });


	$('body').on('click', '.open_descr', function(){
		$(this).addClass('close_descr').removeClass('open_descr');
		$('.flat_text_wrap').addClass('activeted');
	});

	$('body').on('click', '.close_descr', function(){
		$(this).addClass('open_descr').removeClass('close_descr');
		$('.flat_text_wrap').removeClass('activeted');
	});

	$('.open_form_request').on('click', function(){
		$('.blok_request').fadeIn(500);
		$('.chuse_flat, .ic_print').fadeOut(500);
	});
	$('.close_form_request').on('click', function(){
		$('.blok_request, .valid_massege').fadeOut(500);
		$('.chuse_flat, .ic_print').fadeIn(500);
	});

	$('.open_form_purchase').on('click', function(){
		$('.blok_purchase').fadeIn(500);
		$('.chuse_flat, .ic_print').fadeOut(500);
	});
	$('.close_form_purchase').on('click', function(){
		$('.blok_purchase, .valid_massege').fadeOut(500);
		$('.chuse_flat, .ic_print').fadeIn(500);
	});

	$('.close_request_massege').on('click', function(){
		$('.form_request_massege').fadeOut(500);
		$('.blok_request').fadeOut(500);
		$('.chuse_flat, .ic_print').fadeIn(500);
		$('.form_request').trigger('reset');
	});
	$('.close_purchase_massege').on('click', function(){
		$('.form_purchase_massege').fadeOut(500);
		$('.blok_purchase').fadeOut(500);
		$('.chuse_flat, .ic_print').fadeIn(500);
		$('.form_request').trigger('reset');
	});

	$('.fancybox').fancybox();

	jQuery(document).ready(function($){
        var $win = $(window),
            isTouch = !!('ontouchstart' in window),
            clickEvent = isTouch ? 'tap' : 'click';

        (function(){
            function calculator(width){
                var percent = '25%';

                if (width <= 480) {
                    percent = '100%';
                }
                else if (width <= 768) {
                    percent = '50%';
                }
                else if (width <= 980) {
                    percent = '33.33%';
                }

                return percent;
            };

            var $carousel = $('#plan_desigin'),
                $pagesbar = $('.mSPages', $carousel),
                $frame = $('.frame', $carousel);

            var slider = new mightySlider($frame, {
                speed: 1000,
                easing: 'easeOutExpo',
                viewport: 'fill',
                navigation: {
                    navigationType: 'basic',
                    slideSize: calculator($win.width())
                },
                commands: {
                    buttons: 1
                },
                pages: {
                    pagesBar:       $pagesbar[0],
                    activateOn:     clickEvent
                },
                dragging: {
                    mouseDragging: 1,
                    touchDragging: 1
                }
            }).init();

            $win.resize(function(){
                slider.set({
                    navigation: {
                        slideSize: calculator($win.width())
                    }
                });
            });
        })();
    });


	jQuery(document).ready(function($) {
		(function(){
			var $example = $('#plan_slider'),
				$frame = $('.frame', $example);

			$frame.mightySlider({
				speed: 500,
				autoScale: 1,
				easing: 'easeOutExpo',
				navigation: {
					horizontal: 0,
					slideSize: '100%'
				},
				dragging: {
					touchDragging: 1
				},
				commands: {
					buttons: 1
				}
			});
		})();
	});


	$("input[name=phone]").mask("+7(999) 999-99-99");
	$("input[name=pasport_seria]").mask("99-99");
	$("input[name=pasport_num]").mask("999999");
	$("input[name=pasport_date]").mask("99-99-9999");
	$("input[name=pasport_code]").mask("999-999");


	$('.form_request').validate({
		submitHandler: function() {
			var name = $('.form_request input[name="name"]').val();
			var phone = $('.form_request input[name="phone"]').val();
			$('.form_request_massege .name_coll').html(name +',');
			$('.form_request_massege .phone_coll').html(phone);
			$('.form_request_massege').fadeIn(500);		
		},
		rules:{
			name:{
				required:true,
				minlength: 3
			},		
			phone:{
				required:true,
				minlength: 15,
				mask: true
			},		
			email:{
				required:true,
				email:true,
				minlength: 3	
			},
		},//конец rules
		messages:{
			name:{
				required: "",
				minlength: ""
			},	
			phone:{
				required: "",
				minlength: "",
				mask: "",
			},
			email:{
				required: "",
				email: "",
				minlength: ""	
			},
		},//конец messages
		
	});//конец validate

	

	$('.form_purchase').validate({
		submitHandler: function() {
			var name = $('.form_purchase input[name="name"]').val();
			var phone = $('.form_purchase input[name="phone"]').val();
			$('.form_purchase_massege .name_coll').html(name +',');
			$('.form_purchase_massege .phone_coll').html(phone);
			$('.form_purchase_massege').fadeIn(500);			
		},
		rules:{
			name:{
				required:true,
				minlength: 3
			},
			second_name:{
				required:true,
				minlength: 3
			},
			last_name:{
				required:true,
				minlength: 3
			},		
			phone:{
				required:true,
				minlength: 15
			},
			pasport_seria:{
				required:true,
				minlength: 4,
				mask: true
			},
			pasport_num:{
				required:true,
				minlength: 6,
				mask: true
			},
			pasport_code:{
				required:true,
				minlength: 6,
				mask: true
			},
			pasport_date:{
				required:true,
				minlength: 8,
				mask: true
			},
			pasport_text:{
				required:true,
				minlength: 15
			},	
			addres_live:{
				required:true,
				minlength: 10
			},
			addres_reg:{
				required:true,
				minlength: 10
			},	
		},//конец rules
		messages:{
			name:{
				required: "",
				minlength: ""
			},	
			second_name:{
				required: "",
				minlength: ""
			},
			last_name:{
				required: "",
				minlength: ""
			},		
			phone:{
				required: "",
				minlength: ""
			},
			pasport_seria:{
				required: "",
				minlength: "",
				mask: ""
			},
			pasport_num:{
				required: "",
				minlength: "",
				mask: ""
			},
			pasport_code:{
				required: "",
				minlength: "",
				mask: ""
			},
			pasport_date:{
				required: "",
				minlength: "",
				mask: ""
			},
			pasport_text:{
				required: "",
				minlength: ""
			},	
			addres_live:{
				required: "",
				minlength: ""
			},
			addres_reg:{
				required: "",
				minlength: ""
			},
		},//конец messages
		
	});//конец validate


};
		

		
/* ======== parameters ======== */
function parameters(){

	if($(window).width() > 520){
		setEqualHeight($(".sub_section"));
	}
	
	$( window ).resize(function() {
		if($(window).width() <= 520){
			$(".sub_section").css({"height":"auto"});
		} else {
			$(".sub_section").css({"height":"auto"});
			setEqualHeight($(".sub_section"));	
		}
	});

	setTimeout(function(){
		$('.left_fix_load').addClass('fadeOutLeftBig');
		$('.right_fix_load').addClass('fadeOutRightBig');
	}, 2000);


	$('body').on('click', '.table_head .table_td[data-target=up]', function(){
		$(this).attr('data-target', 'loow');
	});
	$('body').on('click', '.table_head .table_td[data-target=loow]', function(){
		$(this).attr('data-target', 'up');
	});


	if($(window).width() > 860) {
		var scroll_h = $(window).height() - $('.table_head').outerHeight() - $('.params_form').outerHeight();
		$('.table_wrap .scroll_cont').css({'height': scroll_h + 'px'});
		$('.table_wrap .scroll_cont').css({'width':'auto'});
	} else {
		var scroll_w = $('.table_cont').outerWidth() * $('.table_cont').length;
		$('.table_wrap .scroll_cont').css({'width':scroll_w + 'px'});
		$('.table_wrap .scroll_cont').css({'height':'auto'});
	}
	$(window).resize(function(){
		if($(window).width() > 860) {
			var scroll_h = $(window).height() - $('.table_head').outerHeight() - $('.params_form').outerHeight();
			$('.table_wrap .scroll_cont').css({'height': scroll_h + 'px'});
			$('.table_wrap .scroll_cont').css({'width':'auto'});
		} else {
			var scroll_w = $('.table_cont').outerWidth() * $('.table_cont').length;
			$('.table_wrap .scroll_cont').css({'width':scroll_w + 'px'});
			$('.table_wrap .scroll_cont').css({'height':'auto'});
		}
	});

	var room_slider = document.getElementById('room_slider');
	noUiSlider.create(room_slider, {
		start: [ 1, 7 ],
		step: 1,
		behaviour: 'drag-tap',
		connect: true,
		range: {
			'min':  1,
			'max':  7
		}
	});

	var room_sliderMin = document.getElementById('min_room');
	var room_sliderMax = document.getElementById('max_room');
	room_slider.noUiSlider.on('update', function( values, handle ){
		var min_value = values[0];
		var max_value = values[1];
		room_sliderMin.value = Math.round(min_value);
		room_sliderMax.value = Math.round(max_value);
	});



	var squear_slider = document.getElementById('squear_slider');
	noUiSlider.create(squear_slider, {
		start: [ 31, 129 ],
		step: 1,
		behaviour: 'drag-tap',
		connect: true,
		range: {
			'min':  31,
			'max':  129
		}
	});

	var squear_sliderMin = document.getElementById('min_squear');
	var squear_sliderMax = document.getElementById('max_squear');
	squear_slider.noUiSlider.on('update', function( values, handle ){
		var min_value = values[0];
		var max_value = values[1];
		squear_sliderMin.value = Math.round(min_value);
		squear_sliderMax.value = Math.round(max_value);
	});


	var cost_slider = document.getElementById('cost_slider');
	noUiSlider.create(cost_slider, {
		start: [ 69.500, 103.773 ],
		behaviour: 'drag-tap',
		connect: true,
		range: {
			'min':  69.500,
			'max':  103.773
		}
	});

	var cost_sliderMin = document.getElementById('min_cost');
	var cost_sliderMax = document.getElementById('max_cost');
	cost_slider.noUiSlider.on('update', function( values, handle ){
		var min_value = values[0];
		var max_value = values[1];
		cost_sliderMin.value = min_value;
		cost_sliderMax.value = max_value;
	});


	var prise_slider = document.getElementById('prise_slider');
	noUiSlider.create(prise_slider, {
		start: [ 8.5, 12.1 ],
		behaviour: 'drag-tap',
		connect: true,
		range: {
			'min':  8.5,
			'max':  12.1
		}
	});

	var prise_sliderMin = document.getElementById('min_prise');
	var prise_sliderMax = document.getElementById('max_prise');
	prise_slider.noUiSlider.on('update', function( values, handle ){
		var min_value = values[0];
		var max_value = values[1];
		prise_sliderMin.value = min_value;
		prise_sliderMax.value = max_value;
	});

}			
	




/* ======== general ======== */
function general(){

	if( document.createElement('svg').getAttributeNS ) {

		var checkbxsCross = Array.prototype.slice.call( document.querySelectorAll( '.ac-cross input[type="checkbox"]' ) ),
			radiobxsFill = Array.prototype.slice.call( document.querySelectorAll( '.ac-fill input[type="radio"]' ) ),
			checkbxsCheckmark = Array.prototype.slice.call( document.querySelectorAll( '.ac-checkmark input[type="checkbox"]' ) ),
			radiobxsCircle = Array.prototype.slice.call( document.querySelectorAll( '.ac-circle input[type="radio"]' ) ),
			checkbxsBoxfill = Array.prototype.slice.call( document.querySelectorAll( '.ac-boxfill input[type="checkbox"]' ) ),
			radiobxsSwirl = Array.prototype.slice.call( document.querySelectorAll( '.ac-swirl input[type="radio"]' ) ),
			checkbxsDiagonal = Array.prototype.slice.call( document.querySelectorAll( '.ac-diagonal input[type="checkbox"]' ) ),
			checkbxsList = Array.prototype.slice.call( document.querySelectorAll( '.ac-list input[type="checkbox"]' ) ),
			pathDefs = {
				cross : ['M 10 10 L 90 90','M 90 10 L 10 90'],
				fill : ['M15.833,24.334c2.179-0.443,4.766-3.995,6.545-5.359 c1.76-1.35,4.144-3.732,6.256-4.339c-3.983,3.844-6.504,9.556-10.047,13.827c-2.325,2.802-5.387,6.153-6.068,9.866 c2.081-0.474,4.484-2.502,6.425-3.488c5.708-2.897,11.316-6.804,16.608-10.418c4.812-3.287,11.13-7.53,13.935-12.905 c-0.759,3.059-3.364,6.421-4.943,9.203c-2.728,4.806-6.064,8.417-9.781,12.446c-6.895,7.477-15.107,14.109-20.779,22.608 c3.515-0.784,7.103-2.996,10.263-4.628c6.455-3.335,12.235-8.381,17.684-13.15c5.495-4.81,10.848-9.68,15.866-14.988 c1.905-2.016,4.178-4.42,5.556-6.838c0.051,1.256-0.604,2.542-1.03,3.672c-1.424,3.767-3.011,7.432-4.723,11.076 c-2.772,5.904-6.312,11.342-9.921,16.763c-3.167,4.757-7.082,8.94-10.854,13.205c-2.456,2.777-4.876,5.977-7.627,8.448 c9.341-7.52,18.965-14.629,27.924-22.656c4.995-4.474,9.557-9.075,13.586-14.446c1.443-1.924,2.427-4.939,3.74-6.56 c-0.446,3.322-2.183,6.878-3.312,10.032c-2.261,6.309-5.352,12.53-8.418,18.482c-3.46,6.719-8.134,12.698-11.954,19.203 c-0.725,1.234-1.833,2.451-2.265,3.77c2.347-0.48,4.812-3.199,7.028-4.286c4.144-2.033,7.787-4.938,11.184-8.072 c3.142-2.9,5.344-6.758,7.925-10.141c1.483-1.944,3.306-4.056,4.341-6.283c0.041,1.102-0.507,2.345-0.876,3.388 c-1.456,4.114-3.369,8.184-5.059,12.212c-1.503,3.583-3.421,7.001-5.277,10.411c-0.967,1.775-2.471,3.528-3.287,5.298 c2.49-1.163,5.229-3.906,7.212-5.828c2.094-2.028,5.027-4.716,6.33-7.335c-0.256,1.47-2.07,3.577-3.02,4.809'],
				checkmark : ['M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'],
				circle : ['M34.745,7.183C25.078,12.703,13.516,26.359,8.797,37.13 c-13.652,31.134,9.219,54.785,34.77,55.99c15.826,0.742,31.804-2.607,42.207-17.52c6.641-9.52,12.918-27.789,7.396-39.713 C85.873,20.155,69.828-5.347,41.802,13.379'],
				boxfill : ['M6.987,4.774c15.308,2.213,30.731,1.398,46.101,1.398 c9.74,0,19.484,0.084,29.225,0.001c2.152-0.018,4.358-0.626,6.229,1.201c-5.443,1.284-10.857,2.58-16.398,2.524 c-9.586-0.096-18.983,2.331-28.597,2.326c-7.43-0.003-14.988-0.423-22.364,1.041c-4.099,0.811-7.216,3.958-10.759,6.81 c8.981-0.104,17.952,1.972,26.97,1.94c8.365-0.029,16.557-1.168,24.872-1.847c2.436-0.2,24.209-4.854,24.632,2.223 c-14.265,5.396-29.483,0.959-43.871,0.525c-12.163-0.368-24.866,2.739-36.677,6.863c14.93,4.236,30.265,2.061,45.365,2.425 c7.82,0.187,15.486,1.928,23.337,1.903c2.602-0.008,6.644-0.984,9,0.468c-2.584,1.794-8.164,0.984-10.809,1.165 c-13.329,0.899-26.632,2.315-39.939,3.953c-6.761,0.834-13.413,0.95-20.204,0.938c-1.429-0.001-2.938-0.155-4.142,0.436 c5.065,4.68,15.128,2.853,20.742,2.904c11.342,0.104,22.689-0.081,34.035-0.081c9.067,0,20.104-2.412,29.014,0.643 c-4.061,4.239-12.383,3.389-17.056,4.292c-11.054,2.132-21.575,5.041-32.725,5.289c-5.591,0.124-11.278,1.001-16.824,2.088 c-4.515,0.885-9.461,0.823-13.881,2.301c2.302,3.186,7.315,2.59,10.13,2.694c15.753,0.588,31.413-0.231,47.097-2.172 c7.904-0.979,15.06,1.748,22.549,4.877c-12.278,4.992-25.996,4.737-38.58,5.989c-8.467,0.839-16.773,1.041-25.267,0.984 c-4.727-0.031-10.214-0.851-14.782,1.551c12.157,4.923,26.295,2.283,38.739,2.182c7.176-0.06,14.323,1.151,21.326,3.07 c-2.391,2.98-7.512,3.388-10.368,4.143c-8.208,2.165-16.487,3.686-24.71,5.709c-6.854,1.685-13.604,3.616-20.507,4.714 c-1.707,0.273-3.337,0.483-4.923,1.366c2.023,0.749,3.73,0.558,5.95,0.597c9.749,0.165,19.555,0.31,29.304-0.027 c15.334-0.528,30.422-4.721,45.782-4.653'],
				swirl : ['M49.346,46.341c-3.79-2.005,3.698-10.294,7.984-8.89 c8.713,2.852,4.352,20.922-4.901,20.269c-4.684-0.33-12.616-7.405-14.38-11.818c-2.375-5.938,7.208-11.688,11.624-13.837 c9.078-4.42,18.403-3.503,22.784,6.651c4.049,9.378,6.206,28.09-1.462,36.276c-7.091,7.567-24.673,2.277-32.357-1.079 c-11.474-5.01-24.54-19.124-21.738-32.758c3.958-19.263,28.856-28.248,46.044-23.244c20.693,6.025,22.012,36.268,16.246,52.826 c-5.267,15.118-17.03,26.26-33.603,21.938c-11.054-2.883-20.984-10.949-28.809-18.908C9.236,66.096,2.704,57.597,6.01,46.371 c3.059-10.385,12.719-20.155,20.892-26.604C40.809,8.788,58.615,1.851,75.058,12.031c9.289,5.749,16.787,16.361,18.284,27.262 c0.643,4.698,0.646,10.775-3.811,13.746'],
				diagonal : ['M16.053,91.059c0.435,0,0.739-0.256,0.914-0.768 c3.101-2.85,5.914-6.734,8.655-9.865C41.371,62.438,56.817,44.11,70.826,24.721c3.729-5.16,6.914-10.603,10.475-15.835 c0.389-0.572,0.785-1.131,1.377-1.521'],
				list : ['M1.986,8.91c41.704,4.081,83.952,5.822,125.737,2.867 c17.086-1.208,34.157-0.601,51.257-0.778c21.354-0.223,42.706-1.024,64.056-1.33c18.188-0.261,36.436,0.571,54.609,0.571','M3.954,25.923c9.888,0.045,19.725-0.905,29.602-1.432 c16.87-0.897,33.825-0.171,50.658-2.273c14.924-1.866,29.906-1.407,44.874-1.936c19.9-0.705,39.692-0.887,59.586,0.45 c35.896,2.407,71.665-1.062,107.539-1.188']
			},
			animDefs = {
				cross : { speed : .2, easing : 'ease-in-out' },
				fill : { speed : .8, easing : 'ease-in-out' },
				checkmark : { speed : .2, easing : 'ease-in-out' },
				circle : { speed : .2, easing : 'ease-in-out' },
				boxfill : { speed : .8, easing : 'ease-in' },
				swirl : { speed : .8, easing : 'ease-in' },
				diagonal : { speed : .2, easing : 'ease-in-out' },
				list : { speed : .3, easing : 'ease-in-out' }
			};

		function createSVGEl( def ) {
			var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			if( def ) {
				svg.setAttributeNS( null, 'viewBox', def.viewBox );
				svg.setAttributeNS( null, 'preserveAspectRatio', def.preserveAspectRatio );
			}
			else {
				svg.setAttributeNS( null, 'viewBox', '0 0 100 100' );
			}
			svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
			return svg;
		}

		function controlCheckbox( el, type, svgDef ) {
			var svg = createSVGEl( svgDef );
			el.parentNode.appendChild( svg );
			
			el.addEventListener( 'change', function() {
				if( el.checked ) {
					draw( el, type );
				}
				else {
					reset( el );
				}
			} );
		}

		function controlRadiobox( el, type ) {
			var svg = createSVGEl();
			el.parentNode.appendChild( svg );
			el.addEventListener( 'change', function() {
				resetRadio( el );
				draw( el, type );
			} );
		}

		checkbxsCross.forEach( function( el, i ) { controlCheckbox( el, 'cross' ); } );
		radiobxsFill.forEach( function( el, i ) { controlRadiobox( el, 'fill' ); } );
		checkbxsCheckmark.forEach( function( el, i ) { controlCheckbox( el, 'checkmark' ); } );
		radiobxsCircle.forEach( function( el, i ) { controlRadiobox( el, 'circle' ); } );
		checkbxsBoxfill.forEach( function( el, i ) { controlCheckbox( el, 'boxfill' ); } );
		radiobxsSwirl.forEach( function( el, i ) { controlRadiobox( el, 'swirl' ); } );
		checkbxsDiagonal.forEach( function( el, i ) { controlCheckbox( el, 'diagonal' ); } );
		checkbxsList.forEach( function( el ) { controlCheckbox( el, 'list', { viewBox : '0 0 300 100', preserveAspectRatio : 'none' } ); } );

		function draw( el, type ) {
			var paths = [], pathDef, 
				animDef,
				svg = el.parentNode.querySelector( 'svg' );

			switch( type ) {
				case 'cross': pathDef = pathDefs.cross; animDef = animDefs.cross; break;
				case 'fill': pathDef = pathDefs.fill; animDef = animDefs.fill; break;
				case 'checkmark': pathDef = pathDefs.checkmark; animDef = animDefs.checkmark; break;
				case 'circle': pathDef = pathDefs.circle; animDef = animDefs.circle; break;
				case 'boxfill': pathDef = pathDefs.boxfill; animDef = animDefs.boxfill; break;
				case 'swirl': pathDef = pathDefs.swirl; animDef = animDefs.swirl; break;
				case 'diagonal': pathDef = pathDefs.diagonal; animDef = animDefs.diagonal; break;
				case 'list': pathDef = pathDefs.list; animDef = animDefs.list; break;
			};
			
			paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );

			if( type === 'cross' || type === 'list' ) {
				paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );
			}
			
			for( var i = 0, len = paths.length; i < len; ++i ) {
				var path = paths[i];
				svg.appendChild( path );

				path.setAttributeNS( null, 'd', pathDef[i] );

				var length = path.getTotalLength();
				// Clear any previous transition
				//path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
				// Set up the starting positions
				path.style.strokeDasharray = length + ' ' + length;
				if( i === 0 ) {
					path.style.strokeDashoffset = Math.floor( length ) - 1;
				}
				else path.style.strokeDashoffset = length;
				// Trigger a layout so styles are calculated & the browser
				// picks up the starting position before animating
				path.getBoundingClientRect();
				// Define our transition
				path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
				// Go!
				path.style.strokeDashoffset = '0';
			}
		}

		function reset( el ) {
			Array.prototype.slice.call( el.parentNode.querySelectorAll( 'svg > path' ) ).forEach( function( el ) { el.parentNode.removeChild( el ); } );
		}

		function resetRadio( el ) {
			Array.prototype.slice.call( document.querySelectorAll( 'input[type="radio"][name="' + el.getAttribute( 'name' ) + '"]' ) ).forEach( function( el ) { 
				var path = el.parentNode.querySelector( 'svg > path' );
				if( path ) {
					path.parentNode.removeChild( path );
				}
			} );
		}

	}


	var radialScott = (function() {
	  var circle = document.querySelectorAll('.click-radial'),
	      ripple = document.querySelectorAll('.js-ripple-radial');

	  function radialAnimation(event, timing) {
	    var tl           = new TimelineMax();
	        x            = event.offsetX,
	        y            = event.offsetY,
	        w            = event.target.offsetWidth,
	        h            = event.target.offsetHeight,
	        offsetX      = Math.abs( (w / 2) - x ),
	        offsetY      = Math.abs( (h / 2) - y ),
	        deltaX       = (w / 2) + offsetX,
	        deltaY       = (h / 2) + offsetY,
	        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

	    tl.fromTo(ripple, timing, {
	      x: x,
	      y: y,
	      transformOrigin: '50% 50%',
	      scale: 0,
	      opacity: 1,
	      ease: Linear.easeIn
	    },{
	      scale: scale_ratio,
	      opacity: 0
	    });

	    return tl;
	  }

	  return {
	    init: function(target, timing) {
	      $(target).on('click', function(event) {
	        radialAnimation.call(this, event, timing);
	      });
	    }
	  };
	})();

	radialScott.init('.click-radial', 0.75);


	var linearScott = (function() {
	  var circle = document.querySelectorAll('.click-linear'),
	      ripple = document.querySelectorAll('.js-ripple-linear');

	  function linearAnimation(event, timing) {
	    var tl           = new TimelineMax();
	        x            = event.offsetX,
	        y            = event.offsetY,
	        w            = event.target.offsetWidth,
	        h            = event.target.offsetHeight,
	        offsetX      = Math.abs( (w / 2) - x ),
	        offsetY      = Math.abs( (h / 2) - y ),
	        deltaX       = (w / 2) + offsetX,
	        deltaY       = (h / 2) + offsetY,
	        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

	    tl.fromTo(ripple, timing, {
	      x: x,
	      y: y,
	      transformOrigin: '50% 50%',
	      scale: 0,
	      opacity: 1,
	      ease: Linear.easeIn
	    },{
	      scale: scale_ratio,
	      opacity: 0
	    });

	    return tl;
	  }

	  return {
	    init: function(target, timing) {
	      $(target).on('click', function(event) {
	        linearAnimation.call(this, event, timing);
	      });
	    }
	  };
	})();

	linearScott.init('.click-linear', 0.75);


	var polygonScott = (function() {
	  var circle = document.querySelectorAll('.click-polygonr'),
	      ripple = document.querySelectorAll('.js-ripple-polygon');

	  function polygonAnimation(event, timing) {
	    var tl           = new TimelineMax();
	        x            = event.offsetX,
	        y            = event.offsetY,
	        w            = event.target.offsetWidth,
	        h            = event.target.offsetHeight,
	        offsetX      = Math.abs( (w / 2) - x ),
	        offsetY      = Math.abs( (h / 2) - y ),
	        deltaX       = (w / 2) + offsetX,
	        deltaY       = (h / 2) + offsetY,
	        scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

	    tl.fromTo(ripple, timing, {
	      x: x,
	      y: y,
	      transformOrigin: '50% 50%',
	      scale: 0,
	      opacity: 1,
	      ease: Linear.easeIn
	    },{
	      scale: scale_ratio,
	      opacity: 0
	    });

	    return tl;
	  }

	  return {
	    init: function(target, timing) {
	      $(target).on('click', function(event) {
	        polygonAnimation.call(this, event, timing);
	      });
	    }
	  };
	})();

	polygonScott.init('.click-polygon', 0.75);

};		
	

