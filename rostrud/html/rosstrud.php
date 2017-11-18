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


  <section class="section-base color-secrion">
  	<div class="container">
  		<div class="news-greed">
  			<!-- 
					Blocks '.greed-ell' have a fixed height, if the content is not placed in the block it is clipped. 
					For correct operation, the block must store the current markup (the title in the <h3> tag and the description (if any) in only one <p> tag).
					To disable the script, delete greedFix('.greed-cont') in main.js
  			-->
  			<div class="ell-doble-ver greed-ell">
  				<a class="greed-block" href="#">
  					<div class="greed-img" style="background-image: url('img/image/news-1.jpg');"></div>
  					<div class="greed-cont">
  						<h3>Роструд восстановил права 367 работников владимирского.</h3>
  						<p>В связи с обращением работника ООО «ТехТекстиль» территориальный орган Роструда во Владимирской области провел внеплановую проверку на предприятии по производству. ООО «ТехТекстиль» территориальный орган Роструда во Владимирской области провел внеплановую проверку на предприятии по производству.</p>
  						<div>
  							<span class="greed-date">15 мая 2017</span>
  							<span class="greed-time">18:45</span>
  						</div>	
  					</div>
  				</a>
  			</div>
  			<div class="ell-single greed-ell">
  				<a class="greed-block" href="#">
  					<div class="greed-cont">
  						<h3>Роструд провёл плановую документарную проверку в Калужской области</h3>
  						<p>Больше половины респондентов (55%) сообщили, что мотивом для переезда на работу в другой регион может служить высокая заработная плата, далее следует «Трудоустройство.</p>
  						<div>
  							<span class="greed-date">15 мая 2017</span>
  							<span class="greed-time">18:45</span>
  						</div>	
  					</div>
  				</a>
  			</div>
  			<div class="ell-single greed-ell">
  				<a class="greed-block" href="#">
  					<div class="greed-cont">
  						<h3>Роструд проведет проверку в авиакомпании «Лайт Эйр» в связи с крушением вертолета</h3>
  						<p>В связи со смертельным несчастным случаем на производстве Роструд проведет проверку соблюдения трудового законодательства и требований охраны труда. Роструд проводит контрольно-надзорные мероприятия за соблюдением требований трудового законодательства в организациях отдыха и оздоровления детей.</p>
  						<div>
  							<span class="greed-date">15 мая 2017</span>
  							<span class="greed-time">18:45</span>
  						</div>	
  					</div>
  				</a>
  			</div>
  			<div class="ell-doble-hor greed-ell">
  				<a class="greed-block" href="#">
  					<div class="greed-img" style="background-image: url('img/image/news-2.jpg');"></div>
  					<div class="greed-cont">
  						<h3>По требованию Роструда производитель железобетонных изделий погасил задолженность по зарплате перед 139 работниками.</h3>
  						<div>
  							<span class="greed-date">15 мая 2017</span>
  							<span class="greed-time">18:45</span>
  						</div>	
  					</div>
  				</a>
  			</div>
  			<div class="ell-doble-hor greed-ell">
  				<a class="greed-block" href="#">
  					<div class="greed-img" style="background-image: url('img/image/news-3.jpg');"></div>
  					<div class="greed-cont">
  						<h3>Роструд проверяет 6 тысяч детских лагерей</h3>
  						<p>В соответствии с поручением Правительства РФ Роструд проводит контрольно-надзорные мероприятия за соблюдением требований трудового законодательства в организациях отдыха и оздоровления детей. Роструд проводит контрольно-надзорные мероприятия за соблюдением требований трудового законодательства в организациях отдыха и оздоровления детей.</p>
  						<div>
  							<span class="greed-date">15 мая 2017</span>
  							<span class="greed-time">18:45</span>
  						</div>	
  					</div>
  				</a>
  			</div>
  			<div class="ell-single greed-ell">
  				<div class="mail-subscr">
  					<p>Подписаться на новости</p>
  					<form class="mail-subscr-form" action="">
  						<div class="input-wrap">
  							<input type="text" name="mail" placeholder="Введите ваш email">
  							<button class="mail-subscr-send" type="send"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
  						</div>		
  					</form>
  				</div>
  				<div class="more-news">
  					<a class="prime-btn" href="#">
	            <span class="btn-cont">Все новости</span>
	          </a>
  				</div>
  			</div>
  		</div>
  	</div>
  </section>

  <section class="section-base bg-gray">
  	<div class="container">
  		<div class="wrap-slick">
	  		<div class="slick-info-block">
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img-wrap">
	  						<div  class="slide-img" style="background-image: url('img/image/icon-task.svg');"></div>
	  					</div>
	  					<p class="slide-name color-dark color-active">Цели<br/>и задачи</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img-wrap">
	  						<div  class="slide-img" style="background-image: url('img/image/icon-cash.svg');"></div>
	  					</div>
	  					<p class="slide-name color-dark color-active">Бюджет<br/>для граждан</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img-wrap">
	  						<div  class="slide-img" style="background-image: url('img/image/icon-plan.svg');"></div>
	  					</div>
	  					<p class="slide-name color-dark color-active">Планы<br/>на 2013-2018</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img-wrap">
	  						<div  class="slide-img" style="background-image: url('img/image/icon-task.svg');"></div>
	  					</div>
	  					<p class="slide-name color-dark color-active">Цели<br/>и задачи</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img-wrap">
	  						<div  class="slide-img" style="background-image: url('img/image/icon-cash.svg');"></div>
	  					</div>
	  					<p class="slide-name color-dark color-active">Бюджет<br/>для граждан</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img-wrap">
	  						<div  class="slide-img" style="background-image: url('img/image/icon-plan.svg');"></div>
	  					</div>
	  					<p class="slide-name color-dark color-active">Планы<br/>на 2013-2018</p>
	  				</a>
	  			</div>
	  		</div>
	  		<div class="prew-info-block arr-slide-left arr-slide-base"></div>
	  		<div class="next-info-block arr-slide-right arr-slide-base"></div>
  		</div>
  	</div>
  </section>

  <section class="section-base color-secrion">
  	<div class="container">
  		<div class="row">
  			<div class="col-md-12 col-lg-6">
  				<div class="portal-block">
  					<div class="portal-img" style="background-image: url('img/image/port-work.jpg');"></div>
  					<div class="portal-cont fix-height-3">
  						<h3>Портал «Работа в России»</h3>
  						<p>Портал «Работа в России» — это единая федеральная площадка помогающая соискателям находить работу в разных субъектах РФ, а работодателям публиковать свои вакансии для широкой аудитории. На сайте вы можете узнавать различную статистическую информацию.</p>
  						<a class="prime-btn" href="#">
		            <span class="btn-cont">На портал</span>
		          </a>
  					</div>
  				</div>
  			</div>
  			<div class="col-md-12 col-lg-6">
  				<div class="portal-block">
  					<div class="portal-img" style="background-image: url('img/image/port-insp.jpg');"></div>
  					<div class="portal-cont fix-height-3">
  						<h3>Портал «Онлайн инспекция РФ»</h3>
  						<p>Основная задача — защищать права и интересы работников и работодателей. Ресурс позволяет обратиться в инспекцию труда, получить бесплатную консультацию по вопросам трудовых отношений или провести самопроверку своей организации.</p>
  						<a class="prime-btn" href="#">
		            <span class="btn-cont">В инспекцию</span>
		          </a>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  </section>

  <section class="section-tabs-control color-secrion border-top">
  	<div class="container">
  		<div class="row">
  			<div class="col-sm-6">
  				<h2 class="section-head color-dark">Надзор и контроль</h2>
  			</div>
  			<div class="col-sm-6">
  				<a class="min-more color-dark" href="#">Узнайте больше о деятельности Роструда <i class="fa fa-angle-right"></i></a>
  			</div>
  		</div>
  		<div class="tabs-ver-block">
  			<div class="tabs-ver-nav">
  				<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-tabs-ver">                      
	          <img src="img/icon/nav.svg">                 
	        </button> 
	        <div class="navbar-collapse collapse" id="navbar-tabs-ver">         
						<ul class="nav nav-tabs">
						  <li class="active"><a href="#tab-1" data-toggle="tab" aria-expanded="true"><i class="fa fa-angle-right"></i>Соблюдение законодательств о труде</a></li>
						  <li><a href="#tab-2" data-toggle="tab"><i class="fa fa-angle-right"></i>Контроль в сфере занятости населения</a></li>
						  <li><a href="#tab-3" data-toggle="tab"><i class="fa fa-angle-right"></i>Нормативно - правовое регулирование</a></li>
						  <li><a href="#tab-4" data-toggle="tab"><i class="fa fa-angle-right"></i>Социальная защита населения</a></li>
						  <li><a href="#tab-5" data-toggle="tab"><i class="fa fa-angle-right"></i>Сотрудничество и партнерство</a></li>
						  <li><a href="#tab-6" data-toggle="tab"><i class="fa fa-angle-right"></i>Контроль частных агенств занятости</a></li>
						</ul>
	  			</div>	
				</div>
				<div class="tabs-ver-cont scrollbar-inner tab-content">
				  <div class="tab-pane fade in active" id="tab-1">
				  	<ul class="link-list">
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  	</ul>
				  </div>
				  <div class="tab-pane fade" id="tab-2">
				  	<ul class="link-list">
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  	</ul>
				  </div>
				  <div class="tab-pane fade" id="tab-3">
				  	<ul class="link-list">
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  	</ul>
				  </div>
				  <div class="tab-pane fade" id="tab-4">
				  	<ul class="link-list">
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  	</ul>
				  </div>
				  <div class="tab-pane fade" id="tab-5">
				  	<ul class="link-list">
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  	</ul>
				  </div>
				  <div class="tab-pane fade" id="tab-6">
				  	<ul class="link-list">
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  		<li><a href="#">Перечень актов, содержащих обязательные требования, соблюдение которых оценивается при проведении мероприятий по контролю (надзору) в сфере занятости населения</a></li>
				  		<li><a href="#">Графики проведения проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Результаты проверок в субъектах Российской Федерации</a></li>
				  		<li><a href="#">Обзоры исполнения Рострудом государственных функций по надзору и контролю</a></li>
				  		<li><a href="#">Нормативные правовые документы</a></li>
				  	</ul>
				  </div>
				</div>
  		</div>
  	</div>
  </section>

  <section class="section-base color-secrion">
  	<div class="container">
  		<div class="wrap-slick">
	  		<div class="slick-gos-site">
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img" style="background-image: url('img/image/logo-gosinfl.png');"></div>
	  					<p class="slide-name color-dark color-active">Государственная система<br/>правовой информации</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img" style="background-image: url('img/image/logo-gostrud.png');"></div>
	  					<p class="slide-name color-dark color-active">Министрерство труда<br/>и социальной защиты РФ</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img" style="background-image: url('img/image/logo-gosusl.png');"></div>
	  					<p class="slide-name color-dark color-active">ГосУслуги<br/>без очереди</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img" style="background-image: url('img/image/logo-gosport.png');"></div>
	  					<p class="slide-name color-dark color-active">Федеральный портал<br/>управленческих кадров</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img" style="background-image: url('img/image/logo-gosinfl.png');"></div>
	  					<p class="slide-name color-dark color-active">Государственная система<br/>правовой информации</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img" style="background-image: url('img/image/logo-gostrud.png');"></div>
	  					<p class="slide-name color-dark color-active">Министрерство труда<br/>и социальной защиты РФ</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img" style="background-image: url('img/image/logo-gosusl.png');"></div>
	  					<p class="slide-name color-dark color-active">ГосУслуги<br/>без очереди</p>
	  				</a>
	  			</div>
	  			<div class="slide-ell">
	  				<a href="#">
	  					<div class="slide-img" style="background-image: url('img/image/logo-gosport.png');"></div>
	  					<p class="slide-name color-dark color-active">Федеральный портал<br/>управленческих кадров</p>
	  				</a>
	  			</div>
	  		</div>
	  		<div class="prew-gos-site arr-slide-left arr-slide-base"></div>
	  		<div class="next-gos-site arr-slide-right arr-slide-base"></div>
  		</div>
  	</div>
  </section>

  <section class="section-tags color-secrion">
  	<div class="container">
  		<div class="tags-wrap">
  			<a class="tag-ell" href="#">Легализация</a>
	  		<a class="tag-ell" href="#">Общественный совет</a>
	  		<a class="tag-ell" href="#">Занятость населения</a>
	  		<a class="tag-ell" href="#">Охрана труда</a>
	  		<a class="tag-ell" href="#">Документы</a>
	  		<a class="tag-ell" href="#">Руководитель Роструда</a>
	  		<a class="tag-ell" href="#">Результат</a>
	  		<a class="tag-ell" href="#">Защита трудовых прав</a>
	  		<a class="tag-ell" href="#">Трудовая мобильность</a>
	  		<a class="tag-ell" href="#">Открытые данные</a>
	  		<a class="tag-ell" href="#">Оплата труда</a>
	  		<a class="tag-ell" href="#">Проверки</a>
  		</div> 		
  	</div>
  </section>

  <?php include ("include/footer.html");?>
  <?php include ("include/modal.html");?>
  <?php include ("include/main-scripts.html");?>

</body>
</html>