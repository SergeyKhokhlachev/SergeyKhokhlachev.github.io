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

        <div class="container relative">
          <div class="row">
            <div class="col-xs-12">
              <!-- breadcrumb -->
              <ul class="breadcrumbs">
                <li><a href="/"><i class="icon-home"></i></a><i class="icon-arow-right"></i></li>
                <li><a href="/">пресс-центр</a><i class="icon-arow-right"></i></li>
                <li><a href="/">мероприятия</a><i class="icon-arow-right"></i></li>    
              </ul><!-- /.breadcrumb -->
              <div class="h1-and-tab pd-bottom-50">
                <h1>Заявка на участие в мероприяти</h1>
              </div>
            </div>
          </div>
          
          <div class="row">
            <!-- main -->            
            <main class="main col-sm-8 col-sm-push-4 col-xs-12">
              <div class="participate-form fix-xs-padding-20">
                <form action="">
                  <div class="form-group">
                    <select class="select">
                      <option>Выберите мероприятие</option>
                      <option>Вариант 1</option>
                      <option>Вариант 2</option>
                      <option>Вариант 3</option>
                      <option>Вариант 4</option>
                      <option>Вариант 5</option>
                    </select>
                  </div>
                  <div class="error-message"></div> 
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Ваша фамилия</label>
                    <input required type="text" class="form-control">
                  </div>
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Ваше имя</label>
                    <input required type="text" class="form-control">
                  </div>
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Ваше отчество</label>
                    <input required type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <select class="select">
                      <option>Укажите субъект РФ</option>
                      <option>Вариант 1</option>
                      <option>Вариант 2</option>
                      <option>Вариант 3</option>
                      <option>Вариант 4</option>
                      <option>Вариант 5</option>
                    </select>
                  </div>
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Укажите орган власти</label>
                    <input required type="text" class="form-control">
                  </div>
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Ваша должность</label>
                    <input required type="text" class="form-control">
                  </div>
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Ваш контактный телефон</label>
                    <input required type="text" class="form-control">
                  </div>
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Адрес электронной почты</label>
                    <input required type="text" class="form-control">
                  </div>
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Контактное лицо</label>
                    <input required type="text" class="form-control">
                  </div>
                  <div class="two-date form-grop">
                    <div class="two-date__elem form-group--placeholder-fix">
                      <label class="placeholder">Дата приезда</label>
                      <input id="docDateTo" class="form-control input-date date-to" type="text">
                    </div>
                    <div class="two-date__elem form-group--placeholder-fix">
                      <label class="placeholder">Дата отъезда</label>
                      <input id="docDateFrom" class="form-control input-date date-from" type="text">
                    </div>
                  </div>
                  <div class="form-group">
                    <select class="select">
                      <option>Необходима ли Вам гостиница</option>
                      <option>Вариант 1</option>
                      <option>Вариант 2</option>
                      <option>Вариант 3</option>
                      <option>Вариант 4</option>
                      <option>Вариант 5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <select class="select">
                      <option>Предпочтительная категория номера</option>
                      <option>Вариант 1</option>
                      <option>Вариант 2</option>
                      <option>Вариант 3</option>
                      <option>Вариант 4</option>
                      <option>Вариант 5</option>
                    </select>
                  </div>
                  <div class="form-group form-group--placeholder-fix">
                    <label class="placeholder">Контактное лицо</label>
                    <textarea class="form-control"></textarea>
                  </div>
                  <div class="checkbox checkbox-info">
                    <input id="checkbox1" class="styled" type="checkbox">
                    <label for="checkbox1">Я подтверждаю, что ознакомлен с правилами, а также даю согласие на обработку своих персональных данных в соответствии с Федеральным законом от 27.07.2008 № 152-Ф3 «О персональных данных». Указанные мною персональные данные предоставляются в целях направления заявки для принятия участия в мероприятиях, информация о которых размещена на портале <a href="#">www.ar.go.ru.</a> Настоящее согласие дается мной бессрочно.
                    </label>
                  </div>
                  <div class="two-btn">
                    <button type="submit" class="btn btn-primary two-btn__elem">Отправить</button>
                    <div class="text-btn-info two-btn__elem"></div>
                  </div>
                </form>
              </div>
            </main><!-- /.main -->
            <!-- aside-left -->
            <aside class="aside-left text-block gray-text col-sm-pull-8 col-md-3 col-sm-4 col-xs-12">
              <div class="aside-left__title">ОБРАЩАЕМ ВАШЕ ВНИМАНИЕ</div>            
              <p>Обязательным условием отправки и рассмотрения информации с помощью данной формы является Ваше согласие на обработку персональных данных в соответствии с Федеральным законом от 27.07.2008 № 152-Ф3 «О персональных данных».</p>
              <p>Фактом Вашего согласия является отметка в конце данной формы. Предоставляемое Вами согласие является бессрочным.</p>
              <p>После отправки вашей заявки Вы получите письмо, на указанный вами адрес электронной почты, с указанием регистрационного номера. </p>
              <p>Отправка заявки не означает автоматическое включение Вас в список участников.</p>
              <p>В случае одобрения вашей заявки с Вами свяжутся организаторы мероприятия.</p>
            </aside><!-- /.aside-left -->           
          </div>
          <a href="#" class="btn btn-back btn-back-participate"><i class="icon-back"></i>К мероприятиям</a> 
        </div>

      <?php include ("include/aside-right.html");?>   
      <?php include ("include/footer.html");?>    
    
  </div><!-- /.page -->

  <?php include ("include/section-search.html");?>  
  <?php include ("include/modal.html");?>
  <?php include ("include/scripts.html");?>

  </body>
</html>




