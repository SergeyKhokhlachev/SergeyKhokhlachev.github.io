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
                  <li><a href="#">Новости</a></li>
                  <li class="active"><a href="#">Мероприятия</a></li>
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
                  <option>Все мероприятия</option>
                  <option>Пункт 2</option>
                  <option>Пункт 3</option>
                </select>
              </div>
            </div>
            <div class="col-md-8 col-sm-6 col-xs-12">
              <a href="#" class="btn btn-primary size-sm share-top-btn">Принять участие</a>
            </div>
          </div>
          <div class="row">
            <!-- main -->
            <main class="main col-xs-12">
            <div class="row">
              <ul class="list-news news-style-box news-style-box--border event-style pd-bottom-30">
              <?php
                $i = 1;
                while ($i <= 9) {
                  $i++;
                  echo '
                <li class="no-img">
                  <a href="#">
                    <div class="box-inner">
                      <div class="news-slider__top">
                        <div class="big-date">
                          <big>31</big>
                          <span>/08</span>
                        </div>
                      </div>
                      <div class="news-slider__bottom">
                        <div class="text">Подготовлен перечень видов федерального государственного контроля и уполномоченных его осуществлять органов власти
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




