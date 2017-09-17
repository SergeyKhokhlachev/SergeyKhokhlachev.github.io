<!DOCTYPE html>
<html lang="en">
  <head>
  <?php include ("include/head.html");?>
  <title>AR.GOV.RU СОВЕРШЕНСТВОВАНИЕ ГОСУДАРСТВЕННОГО УПРАВЛЕНИЯ</title>
  </head>
  <body>

  <!-- page -->
  <div class="page">  
      
      <?php include ("include/header-gray.html");?>

        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <!-- breadcrumb -->
              <ul class="breadcrumbs">
                <li><a href="/"><i class="icon-home"></i></a><i class="icon-arow-right"></i></li>
              </ul><!-- /.breadcrumb -->
              <div class="h1-and-tab pd-bottom-50">
                <h1>Пресс-центр</h1>
                <ul class="tab-list">
                  <li class="active"><a href="#">Новости</a></li>
                  <li><a href="#">Мероприятия</a></li>
                  <li><a href="#">Материалы в СМИ</a></li>
                  <li><a href="#">Видео</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="pd-bottom-30 row">
            <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="select-row">
                <select class="select select-border size-sm">
                  <option>Август</option>
                  <option>Сентябрь</option>
                  <option>Октябрь</option>
                </select>
                <select class="select select-border size-sm">
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                </select>
              </div>
            </div>
            <div class="col-md-8 col-sm-6 col-xs-12">
              <ul class="list-show-amount size-sm mb-hide">
                <li><span>9</span></li>
                <li><span>18</span></li>
                <li><span>36</span></li>
              </ul>
            </div>
          </div>
          <div class="row">
            <!-- main -->
            <main class="main col-xs-12">
            <div class="row">
              <ul class="list-news news-style-box news-style-box--border pd-bottom-30">
              <?php
                $i = 1;
                while ($i <= 3) {
                  $i++;
                  echo '
                <li>
                  <a href="#">
                    <div class="box-inner">
                      <div class="news-slider__bottom">
                        <div class="date">19 Июля 2017</div>
                        <div class="text"><span class="news-slider__main-title">Подготовлен перечень видов федерального государственного контроля и уполномоченных его осуществлять органов власти</span>
                        <div class="text__sub">Премьер-министр Дмитрий Медведев подписал постановление об образовании при Правительственной комиссии по использованию информационных технологий для улучшения качества жизни и условия ведения предпринимательской деятельности подкомиссии по цифровой экономике.</div>
                        </div>
                      </div>
                    </div>
                    <span  class="more">Читать подробнее</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="box-inner">
                      <div style="background-image: url(img/fish/2.jpg);" class="img"></div>
                      <div class="news-slider__bottom">
                        <div class="date">17 Июля 2017</div>
                        <div class="text">Савва Шипов: Контролеры больше не будут работать по правилам советского периода
                        </div>
                      </div>
                    </div>
                    <span  class="more">Читать подробнее</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="box-inner">
                      <div style="background-image: url(img/fish/3.jpg);" class="img"></div>
                      <div class="news-slider__bottom">
                        <div class="date">17 Июля 2017</div>
                        <div class="text">Савва Шипов: Контролеры больше не будут работать по правилам советского периода
                        </div>
                      </div>
                    </div>
                    <span  class="more">Читать подробнее</span>
                  </a>
                </li>';
                }
              ?>
              </ul>
            </div>
            <?php include ("include/pagination.html");?>  

            </main><!-- /.main -->
          </div>
        </div>

      <?php include ("include/aside-right.html");?>   
      <?php include ("include/footer.html");?>    
    
  </div><!-- /.page -->

  <?php include ("include/section-search.html");?>  
  <?php include ("include/modal.html");?>
  <?php include ("include/scripts.html");?>

  </body>
</html>




