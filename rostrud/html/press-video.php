<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>Rostrud</title>
  <?php include ("include/head.html");?>
</head>
<body>

  <?php include ("include/header.html");?>

  <section class="top-info-block color-secrion">
  	<div class="container">
  		<div class="row">
  			<div class="col-logo">
  				<div class="logo-wrap">
            <img class="logo-prime" src="img/icon/logo-prime.png">
            <div class="logo-cont">
              <p class="logo-text color-dark">РОСТРУД</p>
              <p class="logo-descr color-dark">Федеральная служба<br/>по труду и занятости</p>
            </div>  
          </div>
  			</div>
  			<div class="col-mail">
  				<div class="phone">
  					<span class="phone-icon"></span>
            <p class="phone-num">8 800 707 8841</p>
            <p class="phone-des">бесплатно по всей России</p>
          </div>
          <a class="mail-btn" href="#">
            <span class="btn-cont">Направить обращение</span>
          </a>
  			</div>
  			<div class="col-btn">
  				<div class="work-btns">
  					<div class="employee employ-open" data-tab="#employee-tab">Работнику</div>
  					<div class="work-cen"><div class="vr-line"></div></div>
  					<div class="employer employ-open" data-tab="#employer-tab">Работодателю</div>
  				</div>
  			</div>
  		</div>
  	</div>
  </section>

  <section class="bg-gray">
  	<div class="container">
  		<div id="nav-feed" class="nav-feed">
	  		<div class="nav-wrap">
		      <ul class="list-show nav-list clearfix">
		        <li class="nav-ell"><a href="#">О Роструде</a></li>
		        <li class="nav-ell"><a href="#">Деятельность</a></li>
		        <li class="nav-ell"><a href="#">Приемная</a></li>
		        <li class="nav-ell"><a href="#">документы</a></li>
		        <li class="nav-ell"><a href="#">открытая служба</a></li>
		        <li class="nav-ell"><a href="#">пресс-центр</a></li>
		        <li class="nav-ell"><a href="#">контакты</a></li>
		        <li class="nav-ell dropdown">
		        	<a class="dropdown-toggle" data-toggle="dropdown" href="#"><span>Ещё</span><span class="caret"></span></a>
					    <ul class="list-hide dropdown-menu"></ul>
		        </li>
		      </ul>
				</div>
				<div class="feed-search">
					<div class="input-wrap">
						<input type="text" name="feed-search" placeholder="Введите поисковый запрос, например, открытые данные Роструда">
						<i id="icon-search" class="icon-search fa fa-search" aria-hidden="true"></i>
						<!-- 
							To add an event '.icon-search', use a class check '.active'
							Example:

							var search = document.getElementById('icon-search');
							search.addEventListener('click', function(){
								if(search.classList.contains('active')){
										some code....
								}
							}, false);

							or with jQ: 

							$('#icon-search').on('click', function(){
								if($(this).hasClass('active')) {
									some code....
								}
							})

						-->
					</div>
					<div class="close-search"></div>
				</div>
			</div>
  	</div>
  </section>

  <section class="main color-secrion">
    <div class="container">
      <div class="row">
        <!-- page content -->
        <div class="col-sm-12 col-md-8">

        	<ul class="breadcrumbs">
            <li>
            	<a href="/">
            		<svg class="icon-home" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px">
									<path fill-rule="evenodd"  stroke-width="1px" stroke="rgb(51, 51, 51)" fill-opacity="0" fill="rgb(29, 34, 34)" d="M2.500,7.238 L9.000,2.499 L15.500,7.238 L15.500,15.499 L2.500,15.499 L2.500,7.238 Z"/>
								</svg>
            	</a>
            </li>
            <li>Пресс-центр</li>
          </ul>

          <h1 class="base-head color-dark">Видеоролики</h1>

					<div class="video-list">
						<div class="row">
							<div class="col-sm-6">
								<a href="#" class="list-ell">
									<div class="img-wrap">
										<div class="img" style="background-image: url('img/image/video-1.jpg');"></div>
										<div class="bg">
											<span class="icon-play">
												<span>Воспроизвести</span>
											</span>
											<span class="video-num">4 видео</span>
										</div>
									</div>
									<div class="ell-cont fix-height-1">
										<p class="name">Мобильное приложение «Я - инспектор»</p>
									</div>
								</a>
							</div>
							<div class="col-sm-6">
								<a href="#" class="list-ell">
									<div class="img-wrap">
										<div class="img" style="background-image: url('img/image/video-2.jpg');"></div>
										<div class="bg">
											<span class="icon-play">
												<span>Воспроизвести</span>
											</span>
											<span class="video-num">6 видео</span>
										</div>
									</div>
									<div class="ell-cont fix-height-1">
										<p class="name">Работа в России</p>
									</div>
								</a>
							</div>
							<div class="col-sm-6">
								<a href="#" class="list-ell">
									<div class="img-wrap">
										<div class="img" style="background-image: url('img/image/video-3.jpg');"></div>
										<div class="bg">
											<span class="icon-play">
												<span>Воспроизвести</span>
											</span>
											<span class="video-num">14 видео</span>
										</div>
									</div>
									<div class="ell-cont fix-height-1">
										<p class="name">Онлайнинспекция.рф</p>
									</div>
								</a>
							</div>
							<div class="col-sm-6">
								<a href="#" class="list-ell">
									<div class="img-wrap">
										<div class="img" style="background-image: url('img/image/video-4.jpg');"></div>
										<div class="bg">
											<span class="icon-play">
												<span>Воспроизвести</span>
											</span>
											<span class="video-num">3 видео</span>
										</div>
									</div>
									<div class="ell-cont fix-height-1">
										<p class="name">Онлайнинспекция.РФ: Электронный инспектор</p>
									</div>
								</a>
							</div>
							<div class="col-sm-6">
								<a href="#" class="list-ell">
									<div class="img-wrap">
										<div class="img" style="background-image: url('img/image/video-5.jpg');"></div>
										<div class="bg">
											<span class="icon-play">
												<span>Воспроизвести</span>
											</span>
											<span class="video-num">1 видео</span>
										</div>
									</div>
									<div class="ell-cont fix-height-1">
										<p class="name">Заключи трудовой договор!</p>
									</div>
								</a>
							</div>
							<div class="col-sm-6">
								<a href="#" class="list-ell">
									<div class="img-wrap">
										<div class="img" style="background-image: url('img/image/video-6.jpg');"></div>
										<div class="bg">
											<span class="icon-play">
												<span>Воспроизвести</span>
											</span>
											<span class="video-num">7 видео</span>
										</div>
									</div>
									<div class="ell-cont fix-height-1">
										<p class="name">Cоблюдение норм охраны труда — залог безопасности на рабочих местах!</p>
									</div>
								</a>
							</div>
						</div>
						
					</div>

        </div>
        <!-- / page content -->
        <!-- / aside -->
        <div class="col-sm-12 col-md-4">
					<?php include ("include/sidebar.html");?>
        </div>
        <!-- / aside -->
      </div>
    </div>  
  </section>
  

  <?php include ("include/footer.html");?>
  <?php include ("include/modal.html");?>
  <?php include ("include/main-scripts.html");?> 

</body>
</html>