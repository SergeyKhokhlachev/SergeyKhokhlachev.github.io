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
        <div class="col-mail col-mail-single">
          <div class="phone">
            <span class="phone-icon"></span>
            <p class="phone-num">8 800 707 8841</p>
            <p class="phone-des">бесплатно по всей России</p>
          </div>
          <a class="mail-btn" href="#">
            <span class="btn-cont">Направить обращение</span>
          </a>
        </div>
  		</div>
  	</div>
  </section>

  <section class="bg-gray">
  	<div class="container">
  		<div id="nav-feed" class="nav-feed">
	  		<div class="nav-wrap">
		      <ul class="list-show nav-list clearfix">
		        <li class="nav-ell"><a href="#">Что такое инспекция труда</a></li>
		        <li class="nav-ell"><a href="#">Функции и задачи инспекций</a></li>
		        <li class="nav-ell"><a href="#">Новости инспекций в регионах</a></li>
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


  <section class="section-inspections color-secrion">
  	<div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="input-wrap base-faildes">
            <input id="inspection-search" type="text" name="inspection-search">
            <label for="inspection-search">Найдите Вашу инспекцию труда, введя здесь название города</label>
            <i id="icon-search" class="icon-search fa fa-angle-right" aria-hidden="true"></i>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-tabs">
            <li class="active"><a href="#region-map" data-toggle="tab" aria-expanded="true">Карта</a></li>
            <li><a href="#region-list" data-toggle="tab">Список</a></li>
          </ul>
        </div>
        <div class="col-sm-12">
          <div class="tab-content">
            <div class="tab-pane fade in active" id="region-map">
              <div class="map-wrap">
                <div id="map-svg"></div>
                <input id="zoom-map" type="text">
              </div>
            </div>
            <div class="tab-pane fade" id="region-list">
              <div class="region-list">
                <div class="flex-wrap">
                  <div class="flex-ell list-head">
                    <h4 class="color-dark">Республики</h4>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Адыгея</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Алтай</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Башкортостан</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Бурятия</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Дагестан</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Ингушетия</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Кабардино-Балкарской Республике</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Карачаево-Черкесской Республике</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Карелия</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Коми</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Марий-Эл</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Мордовия</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Саха (Якутия)</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Северная Осетия - Алания</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Татарстан</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Тыва</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Удмуртской Республике</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Республике Хакасия</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Чеченской Республике</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Чувашской Республике</a>
                  </div>
                  <div class="flex-ell list-head">
                    <h4 class="color-dark">Края</h4>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Алтайском крае</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Краснодарском крае</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Красноярском крае</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Пермском крае</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Приморском крае</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Ставропольском крае</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Хабаровском крае</a>
                  </div>
                  <div class="flex-ell list-head">
                    <h4 class="color-dark">Области</h4>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Амурской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Архангельской области и Ненецком автономном округе</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Астраханской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Белгородской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Брянской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ во Владимирской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Волгоградской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Вологодской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Воронежской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Ивановской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Иркутской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Калининградской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Калужской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Камчатском крае</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Кемеровской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Кировской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Костромской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Курганской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Курской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Ленинградской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Липецкой области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Магаданской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Московской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Мурманской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Нижегородской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Новосибирской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Новгородской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Омской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Оренбургской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Орловской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Пензенской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Псковской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Ростовской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Рязанской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Самарской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Саратовской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Сахалинской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Свердловской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Смоленской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Тамбовской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Тверской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Томской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Тульской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Тюменской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Ульяновской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Челябинской области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Забайкальском крае</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Ярославской области</a>
                  </div>
                  <div class="flex-ell list-head">
                    <h4 class="color-dark">Города федерального значения</h4>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в г. Москве</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в г. Санкт-Петербурге</a>
                  </div>
                  <div class="flex-ell list-head">
                    <h4 class="color-dark">Автономные области и округа</h4>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Еврейской автономной области</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Ханты-Мансийском автономном округе - Югре</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Чукотском автономном округе</a>
                  </div>
                  <div class="flex-ell list-name">
                    <a href="#" class="color-dark">ГИТ в Ямало-Ненецком автономном округе</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  	</div>	
  </section>

  <section class="section-base color-secrion border-top">
    <div class="container">
      <h2>Новости инспекций труда</h2>
      <div class="slider-wrap">
        <div class="base-news news-slider">
          <div class="news-ell">
            <a href="#">
              <p class="ell-descr color-light">Архангельская область и Ненецкий АО</p>
              <p class="ell-name color-base color-active">Ситуация на рынке труда в Российской Федерации на 1 мая 2017 года улучшилась с показателями прошлого года</p>
              <p class="ell-date color-light">15 мая 2017</p>
            </a>  
          </div>
          <div class="news-ell">
            <a href="#">
              <p class="ell-descr color-light">Пермский край</p>
              <p class="ell-name color-base color-active">Ситуация на рынке труда в Российской Федерации на 1 мая 2017 года улучшилась с показателями прошлого года</p>
              <p class="ell-date color-light">02 мая 2017</p>
            </a>  
          </div>
          <div class="news-ell">
            <a href="#">
              <p class="ell-descr color-light">Омская область</p>
              <p class="ell-name color-base color-active">Ситуация на рынке труда в Российской Федерации на 1 мая 2017 года улучшилась с показателями прошлого года</p>
              <p class="ell-date color-light">03 мая 2017</p>
            </a>  
          </div>
          <div class="news-ell">
            <a href="#">
              <p class="ell-descr color-light">Архангельская область и Ненецкий АО</p>
              <p class="ell-name color-base color-active">Ситуация на рынке труда в Российской Федерации на 1 мая 2017 года улучшилась с показателями прошлого года</p>
              <p class="ell-date color-light">15 мая 2017</p>
            </a>  
          </div>
          <div class="news-ell">
            <a href="#">
              <p class="ell-descr color-light">Пермский край</p>
              <p class="ell-name color-base color-active">Ситуация на рынке труда в Российской Федерации на 1 мая 2017 года улучшилась с показателями прошлого года</p>
              <p class="ell-date color-light">02 мая 2017</p>
            </a>  
          </div>
          <div class="news-ell">
            <a href="#">
              <p class="ell-descr color-light">Омская область</p>
              <p class="ell-name color-base color-active">Ситуация на рынке труда в Российской Федерации на 1 мая 2017 года улучшилась с показателями прошлого года</p>
              <p class="ell-date color-light">03 мая 2017</p>
            </a>  
          </div>
        </div>
        <div class="news-slider-control">
          <i class="prew-slide fa fa-angle-left" aria-hidden="true"></i>
          <i class="next-slide fa fa-angle-right" aria-hidden="true"></i>
          <a class="prime-btn" href="#">
            <span class="btn-cont">Все новости инспекций</span>
          </a>
        </div>
      </div> 
    </div>   
  </section>

  <?php include ("include/footer.html");?>
  <?php include ("include/modal.html");?>
  <?php include ("include/main-scripts.html");?>

  <script type="text/javascript">


  // init svg map
  // 'map/paths/russia.json' - contains the coordinates of regions
  // 'map/data/russia.json' - contains information on regions, for correct work it is necessary to add fields 'address', 'phone' and 'link' for all regions

    var options = {
        'svg_width': 1000, // XXX magic numbers, need to be computed
        'svg_height': 580,
        'maxScale': 'x2.5',
        'shadow': 8
    }

    $(function(){
        var maploaded = false, 
            domready = false, 
            data;

        $(function(){
          domready = true;
          if (maploaded && options.paths) go();
        });
        $.ajax({
          'url': 'map/data/russia.json',
          'dataType': 'json',
          'success': function(resp){
            data = resp;
            maploaded = true;
            if (domready && options.paths) go();
          }
        });
        if(!options.paths){
          $.ajax({
            'url': 'map/paths/russia.json',
            'dataType': 'json',
            'success': function(resp){
              options.paths = resp;
              if (domready && maploaded) go();
            }
          });
        }
        function go(){
          run_map(document.getElementById('map-svg'), options, data);
        }
    });
  </script>

</body>
</html>