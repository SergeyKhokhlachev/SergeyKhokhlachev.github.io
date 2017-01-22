
$(function () {
	var manualControl = false;
	var longitude = 200;
	var latitude = 50;
	var savedX;
	var savedY;
	var savedLongitude;
	var savedLatitude;
	var first_image = ( document.querySelector('[data-cam="' + document.location.hash + '"]') ) ? document.querySelector('[data-cam="' + document.location.hash + '"]').getAttribute('data-image') : document.querySelector('.tour_image').getAttribute('data-image');

	if(document.querySelector('[data-cam="' + document.location.hash + '"]')){
		document.querySelector('[data-cam="' + document.location.hash + '"]').classList.add('active');
	} else {
		document.querySelector('.tour_image').classList.add('active');
	}

	var r_width = ( sets.is_min_width() ) ? sets.min_width : window.innerWidth;
	var r_height = ( sets.is_min_height() ) ? sets.min_height : window.innerHeight;

// setting up the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( r_width , r_height);
	document.querySelector('#virtual_tour').appendChild(renderer.domElement);

// creating a new scene
	var scene = new THREE.Scene();

// adding a camera
	var camera = new THREE.PerspectiveCamera(75, r_width / r_height, 1, 1000);
	camera.target = new THREE.Vector3(0, -500, 0);

// creation of a big sphere geometry
	var sphere = new THREE.SphereGeometry(100, 100, 40);
	sphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));

// creation of the sphere material
	var sphereMaterial = new THREE.MeshBasicMaterial();
	sphereMaterial.map = THREE.ImageUtils.loadTexture( first_image );

// geometry + material = mesh (actual object)
	var sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
	scene.add(sphereMesh);

// listeners
	document.addEventListener("mousedown", onDocumentMouseDown, false);
	document.addEventListener("mousemove", onDocumentMouseMove, false);
	document.addEventListener("mouseup", onDocumentMouseUp, false);

	render();

	var action = '';
	var stop_drag = false;

	$(window).resize(function(){
		THREEx.WindowResize(renderer, camera);
	});

	function render(){

		requestAnimationFrame(render);

		if(!manualControl && rotation){
			longitude += 0.1;
		}

		switch (action){
			case 'zoom_p':
				if(camera.scale.z < 8) camera.scale.z += 0.1;
				break
			case 'zoom_m':
				if(camera.scale.z > 1) camera.scale.z = camera.scale.z - 0.1;
				break
			case 'left':
				longitude = longitude - 0.5;
				break
			case 'right':
				longitude += 0.5;
				break
			case 'down':
				latitude = latitude - 0.5;
				break
			case 'up':
				latitude += 0.5;
				break
		}

		// limiting latitude from -85 to 85 (cannot point to the sky or under your feet)
		latitude = Math.max(-85, Math.min(85, latitude));

		// moving the camera according to current latitude (vertical movement) and longitude (horizontal movement)
		camera.target.x = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.cos(THREE.Math.degToRad(longitude));
		camera.target.y = 500 * Math.cos(THREE.Math.degToRad(90 - latitude));
		camera.target.z = 500 * Math.sin(THREE.Math.degToRad(90 - latitude)) * Math.sin(THREE.Math.degToRad(longitude));
		camera.lookAt(camera.target);

		// calling again render function
		renderer.render(scene, camera);

		$('.hider').delay(5000).fadeOut(200);
	}

	var rotation = true;

// when the mouse is pressed, we switch to manual control and save current coordinates
	function onDocumentMouseDown(event){

		event.preventDefault();

		manualControl = true;

		savedX = event.clientX;
		savedY = event.clientY;

		savedLongitude = longitude;
		savedLatitude = latitude;


		rotation = false;
	}

// when the mouse moves, if in manual contro we adjust coordinates
	function onDocumentMouseMove(event){

		if(manualControl && !stop_drag){
			longitude = (savedX - event.clientX) * 0.1 + savedLongitude;
			latitude = (event.clientY - savedY) * 0.1 + savedLatitude;
		}

	}

// when the mouse is released, we turn manual control off
	function onDocumentMouseUp(event){
		manualControl = false;
		stop_drag = false;
	}

// pressing a key (actually releasing it) changes the texture map
	window.change_tour_image = function(image){
		$('.hider').fadeIn(200);
		setTimeout(function(){
			sphereMaterial.map = THREE.ImageUtils.loadTexture( image );
			$('.hider').delay(3000).fadeOut(200);
		}, 800);
	}

	$('.virtual_buttons').on('mousedown', '.btn', function(){
		action = $(this).attr('data-action');
		stop_drag = true;
	});

	$('.virtual_buttons').on('mouseup', '.btn', function(){
		action = '';
	});


// FULLSCREEN
	var fscreen = false;
	$('.virtual_buttons').on('click', '[data-action="fullSize"]', function(){
		var element = document.body;
		if( !fscreen ){
			if(element.requestFullscreen) {
				element.requestFullscreen();
			} else if(element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if(element.webkitRequestFullscreen) {
				element.webkitRequestFullscreen();
			} else if(element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}
			fscreen = true;
		} else {
			if(document.exitFullscreen) {
				document.exitFullscreen();
			} else if(document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if(document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
			fscreen = false;
		}
	});
})

$(window).load(function(){
	$('.dis_none').delay(5500).fadeIn(500);
	$('div.info_icon').delay(5000).fadeIn(500);
});

window.sets = {
	min_width: 1280,
	min_height: 743,
	is_min_width: function(){
		return (window.innerWidth < sets.min_width) ? true : false;
	},
	is_min_height: function(){
		return (window.innerHeight < sets.min_height) ? true : false;
	}
};

$(document).on('click', '.tour_image', function () {
	window.change_tour_image($(this).attr('data-image'));
	$('.tour_image').removeClass('active');
	$(this).addClass('active');
});

$(document).on('click', function () {
	$('div.info_icon').fadeOut(300);
});

$(document).keydown(function(event){
  if (event.keyCode == 37) {
    $('.virtual_buttons .btn[data-action=left]').trigger('mousedown');
  }
  if (event.keyCode == 38) {
    $('.virtual_buttons .btn[data-action=up]').trigger('mousedown');
  }
  if (event.keyCode == 40) {
    $('.virtual_buttons .btn[data-action=down]').trigger('mousedown');
  }
  if (event.keyCode == 39) {
    $('.virtual_buttons .btn[data-action=right]').trigger('mousedown');
  }
});

$(document).keyup(function(event){
  if (event.keyCode == 37) {
    $('.virtual_buttons .btn[data-action=left]').trigger('mouseup');
  }
  if (event.keyCode == 38) {
    $('.virtual_buttons .btn[data-action=up]').trigger('mouseup');
  }
  if (event.keyCode == 40) {
    $('.virtual_buttons .btn[data-action=down]').trigger('mouseup');
  }
  if (event.keyCode == 39) {
    $('.virtual_buttons .btn[data-action=right]').trigger('mouseup');
  }
});