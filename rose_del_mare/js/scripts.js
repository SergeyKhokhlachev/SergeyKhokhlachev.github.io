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

});

/*init page*/
$(document).ready(function() {

	$('.animate_fade').addClass('animate_active');

	var load_page = $('#hidden-content .page_active').attr('id');

	

	var active_page = $('#active-content');
	var hide_page = $('#hidden-content');
	$(active_page).attr('id', 'hidden-content');
	$(hide_page).attr('id', 'active-content');


	if(load_page == 'index') { index_func();};
	if(load_page == 'progect') { abaut_company();};
	if(load_page == 'progect_detail') { abaut_company_detail();};
	if(load_page == 'news') { news_func();};
	if(load_page == 'news_detail') { news_func();};
	if(load_page == 'virtual-tur') { virtual();};
	if(load_page == 'infrastructure') { infrastructure();};
	if(load_page == 'location') { initialize_map();};
	
 
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

   	var scroll_hei = $('.news_detail_blok').height() - $('.news_detail_head').height() - 50;
	$('.news_detail_scroll').height(scroll_hei);

   	$(window).resize(function(){
		var scroll_hei = $('.news_detail_blok').height() - $('.news_detail_head').height() - 50;
		$('.news_detail_scroll').height(scroll_hei);   		
   	});

};  


/* ======== infrastructure ======== */
function infrastructure(){
	$("#static_parallax").interactive_bg({
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
	});

	$('.cont_element').mouseleave(function(){
		$('.infr_element').removeClass('hide_icon');
		$('.hover_slide').removeClass('active_layer');
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

	setTimeout(function(){
			$('.left_fix_load').addClass('fadeOutLeftBig');
			$('.right_fix_load').addClass('fadeOutRightBig');
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
	    baseURL: './OSMBuildings',
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
  	var pos = osmb.project(43.58928192842674,39.72071078948449, 50);
	object.style.left = Math.round(pos.x) + 'px';
  	object.style.top = Math.round(pos.y) + 'px';

	map.on('change', function() {
	  	var pos = osmb.project(43.58928192842674,39.72071078948449, 50);
	  	object.style.left = Math.round(pos.x) + 'px';
  		object.style.top = Math.round(pos.y) + 'px';
	});



	var station = document.getElementById('station');
  	var pos = osmb.project(43.59103985630296,39.72810756961146, 50);
	station.style.left = Math.round(pos.x) + 'px';
  	station.style.top = Math.round(pos.y) + 'px';

	map.on('change', function() {
	  	var pos = osmb.project(43.591527971132855,39.72828532518658, 50);
	  	station.style.left = Math.round(pos.x) + 'px';
  		station.style.top = Math.round(pos.y) + 'px';
	});



	var yachting = document.getElementById('yachting');
  	var pos = osmb.project(43.58051698880079,39.719696376778984, 50);
	yachting.style.left = Math.round(pos.x) + 'px';
  	yachting.style.top = Math.round(pos.y) + 'px';

	map.on('change', function() {
	  	var pos = osmb.project(43.58051698880079,39.719696376778984, 50);
	  	yachting.style.left = Math.round(pos.x) + 'px';
  		yachting.style.top = Math.round(pos.y) + 'px';
	});



	var parkland = document.getElementById('parkland');
  	var pos = osmb.project(43.59048286689157,39.715442930979236, 50);
	parkland.style.left = Math.round(pos.x) + 'px';
  	parkland.style.top = Math.round(pos.y) + 'px';

	map.on('change', function() {
	  	var pos = osmb.project(43.59048286689157,39.715442930979236, 50);
	  	parkland.style.left = Math.round(pos.x) + 'px';
  		parkland.style.top = Math.round(pos.y) + 'px';
	});



	var bank = document.getElementById('bank');
  	var pos = osmb.project(43.592758121930494,39.72510555886074, 50);
	bank.style.left = Math.round(pos.x) + 'px';
  	bank.style.top = Math.round(pos.y) + 'px';

	map.on('change', function() {
	  	var pos = osmb.project(43.592758121930494,39.72510555886074, 50);
	  	bank.style.left = Math.round(pos.x) + 'px';
  		bank.style.top = Math.round(pos.y) + 'px';
	});



	var cinema = document.getElementById('cinema');
  	var pos = osmb.project(43.606175444247675,39.732290676388736, 50);
	cinema.style.left = Math.round(pos.x) + 'px';
  	cinema.style.top = Math.round(pos.y) + 'px';

	map.on('change', function() {
	  	var pos = osmb.project(43.606175444247675,39.732290676388736, 50);
	  	cinema.style.left = Math.round(pos.x) + 'px';
  		cinema.style.top = Math.round(pos.y) + 'px';
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












		

		
			
		
	

