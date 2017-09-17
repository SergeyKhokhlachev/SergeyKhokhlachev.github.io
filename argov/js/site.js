 $(function() { 
  
  $('.drawer').drawer();

  $('.spoiler-box__btn').click(function(){
    var parent = $(this).closest('.spoiler-box'),
        content = parent.find('.spoiler-box__content');
    if(parent.hasClass('open')){
      parent.removeClass('open');
      content.slideUp(300); 
    }
    else{
      parent.addClass('open');
      content.slideDown(300);
    }
  });

  // слайдеры
  $('.partners-slider ul').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    prevArrow: '.partners-slider__nav .prev',
    nextArrow: '.partners-slider__nav .next',
    responsive: [
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          },
        }
    ]
  });
  $('.news-slider ul').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    prevArrow: '.news-slider__nav .prev',
    nextArrow: '.news-slider__nav .next',
    responsive: [
        {
          breakpoint: 1230,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1
          },
        }
    ]
  });
  $('.press-slider ul').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    arrows: true,
    prevArrow: '.press-slider__nav .prev',
    nextArrow: '.press-slider__nav .next',
   });
  
  $('.docs-slider ul').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    arrows: true,
    vertical: true,
    prevArrow: '.docs-slider__nav .prev',
    nextArrow: '.docs-slider__nav .next',
  });

  $('.event-slider ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.event-slider-date ul',
    dots: false,
    arrows: false,
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
          }
        }
    ]
  });

  $('.event-slider-date ul').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.event-slider ul',
    arrows: true,
    vertical: true,
    focusOnSelect: true,
    prevArrow: '.event-slider-nav.prev',
    nextArrow: '.event-slider-nav.next',
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            vertical: false,
          }
        },
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 500,
          settings: {
            vertical: false,
            slidesToShow: 2,
          }
        }
    ],
  });

  $('.key-slider ul').slick({
    autoplay: false,
    autoplaySpeed: 1500,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrows: true,
    fade: true,
    prevArrow: '.key-slider__nav .prev',
    nextArrow: '.key-slider__nav .next',
   });


  $(window).on('resize orientationChange', function(event) {  
    $('.news-slider ul').slick('resize');
    $('.press-slider ul').slick('resize');
    $('.docs-slider ul').slick('resize');
    $('.key-slider ul').slick('resize');
    $('.event-slider ul').slick('resize');
    $('.event-slider-date ul').slick('resize');
    $('.partners-slider ul').slick('resize');
  });

  // form placeholder fix
  $('.form-group--placeholder-fix input, .form-group--placeholder-fix textarea').focus(function () {
      $(this).closest('.form-group--placeholder-fix').addClass('full');
  }).blur(function () {
      var count = $(this).val().length;
      if (count === 0) {
          $(this).closest('.form-group--placeholder-fix').removeClass('full');
      }
  });
  $('.form-group--placeholder-fix .placeholder').click(function(){
      $(this).next('input').focus();
      $(this).next('span').find('input').focus();
  });
  $('.form-group--placeholder-fix input, .form-group--placeholder-fix textarea').each(function () {
      var count = $(this).val().length;
      if (count != 0) {
          $(this).closest('.form-group--placeholder-fix').addClass('full');
      }
  });


  var $header = $('.header');
  $(window).scroll(function(){
        var scrollTop = $(window).scrollTop(),
            headerTopH = 50;
        if(scrollTop >= headerTopH) {
          $header.addClass('fix');
        }
        else {
          $header.removeClass('fix'); 
        }
  });


  // стилизация селектов
  $('.select').styler();

  // функция для получение выделенного текста
  function getSelectedText(){
      var text = "";
      if (window.getSelection) {
          text = window.getSelection();
      }else if (document.getSelection) {
          text = document.getSelection();
      }else if (document.selection) {
          text = document.selection.createRange().text;
      }
      return text;
  }

  var ctrlEnterDiv = $('#modal-ctrl-enter'),
      ctrlEnterText = $('#ctrlEnterText'),
      ctrlEnterUrl = $('#ctrlEnterUrl');

  // при нажатии на Ctrl + Enter
  var isCtrl = false;
  $(document).keyup(function (e) {
      if(e.which == 17) isCtrl = false;
  }).keydown(function (e) {
      if(e.which == 17) isCtrl=true;
      if(e.which == 13 && isCtrl == true) {
          // получаем и показываем выделенный текст
          ctrlEnterText.val(getSelectedText());
          ctrlEnterUrl.val(location.href);
          $('#modal-ctrl-enter').modal('show');
      }
  });

  var docScroll = true;
 
  function pageOpen(elem){
    if(docScroll){
      docScroll = false;
      $('.'+elem.attr('data-page')).addClass('active');
      $('body').css('overflow','hidden').addClass('open');
    } else {
      docScroll = true;
        $('body').css('overflow','auto').removeClass('open');      
        $('.'+elem.attr('data-page')).removeClass('active');
    }; 
  }

  // sub nav
  //var navKey = true;
  
  $('.btn-section-search').on('click', function(){
    pageOpen($(this));
    return false;
  });

  // прокрутка 
  var settings = {
          autoReinitialise: true,
          hijackInternalLinks: false,
          animateScroll: true
      };

  $('.scroll-pane').each(
    function(){
      $(this).jScrollPane(settings);
      var api = $(this).data('jsp');
      var throttleTimeout;
      $(window).bind(
        'resize',
        function(){
          if (!throttleTimeout) {
            throttleTimeout = setTimeout(
              function(){
                api.reinitialise();
                throttleTimeout = null;
              }, 50);
          }
      });
  });

  $('#docDateTo').Zebra_DatePicker({
      view: 'years',
      direction: false,
      pair: $('#docDateFrom'),
      open_icon_only: true,
      readonly_element: false,
      format: "d.m.Y",
  });

  $('#docDateFrom').Zebra_DatePicker({
      view: 'years',
      direction: 1,
      open_icon_only: true,
      readonly_element: false,
      format: "d.m.Y",
  });

  $(window).resize(function() {
    $('#docDateTo').Zebra_DatePicker({
        view: 'years',
        direction: false,
        pair: $('#docDateFrom'),
        open_icon_only: true,
        readonly_element: false,
        format: "d.m.Y"
    });
    $('#docDateFrom').Zebra_DatePicker({
        view: 'years',
        direction: 1,
        open_icon_only: true,
        readonly_element: false,
        format: "d.m.Y",
    });

  });

  $(document).ready(function() {

     // document block

    function zoomControl(){
      var zoomVal = 1,
          currentPage = 1,
          scaleWrap = $('.document-wrap'),
          scaleBlock = $('.document-list'), 
          btnPlus = $('.btn-plus'),
          btnMinus = $('.btn-minus'),
          ellList = $('.document-ell'),
          widthEll = scaleBlock.innerWidth(),
          heightEll = scaleBlock.innerHeight(), 
          widthBase = widthEll,
          heightBase = heightEll,
          key = true;

      scaleWrap.width(widthEll); 
      scaleWrap.height(heightEll);

      scaleBlock.innerWidth(widthEll); 
      scaleBlock.innerHeight(heightEll);

      $('.page-current').html(currentPage);
      $('.page-all').html(ellList.length);

      var ellArr = [],
          ellArrBaseHeight = [];

      for (var i = 0; i < ellList.length; i++) {
        var page = {
          pageHeight : $(ellList[i]).outerHeight(true),
          pageOffset : $(ellList[i]).position().top
        }
        ellArrBaseHeight.push($(ellList[i]).outerHeight(true));
        ellArr.push(page);      
      }

      $('.scrollbar-inner').scrollbar({
        'onScroll': function(y, x){ 
          for (var i = 0; i < ellArr.length; i++) {
            if(y.scroll + 100 < ellArr[i].pageOffset + ellArr[i].pageHeight) {
               $('.page-current').html(i + 1);
               break;
            }
          }      
        }
      });

      $('.document-block').css('opacity', '1');

      scaleBlock.css('position','absolute');
      scaleBlock.css('transform', 'translate(-50%, -50%)'); 

      btnMinus.on('click', function(){
        if(zoomVal > 1){
          zoomVal -= 0.1;
          widthEll -= widthBase*0.1;
          heightEll -= heightBase*0.1;
          btnPlus.removeClass('static');
          scaleBlock.css('transform', 'translate(-50%, -50%) scale('+zoomVal+', '+zoomVal+')');
          scaleWrap.width(widthEll); 
          scaleWrap.height(heightEll);
          if(zoomVal == 1) btnMinus.addClass('static');
          for (var i = 0; i < ellList.length; i++) {
            ellArr[i].pageHeight =  ellArrBaseHeight[i] * zoomVal;
            ellArr[i].pageOffset =  $(ellList[i]).position().top;    
          }
        }    
      });
      
      btnPlus.on('click', function(){ 
        if(zoomVal < 2){
          zoomVal += 0.1;
          widthEll += widthBase*0.1;
          heightEll += heightBase*0.1;
          btnMinus.removeClass('static');
          scaleBlock.css('transform', 'translate(-50%, -50%) scale('+zoomVal+', '+zoomVal+')');
          scaleWrap.width(widthEll); 
          scaleWrap.height(heightEll);
          if(zoomVal >= 2) btnPlus.addClass('static');
          for (var i = 0; i < ellList.length; i++) {
            ellArr[i].pageHeight =  ellArrBaseHeight[i] * zoomVal;
            ellArr[i].pageOffset =  $(ellList[i]).position().top;    
          }
        } 
      });

      $('.btn-resize').on('click', function(){
        if(key) {
          key = false;
          $('.document-block').addClass('full-screen');
          $('body').css('overflow','hidden');
        } else {
          key = true;
          $('.document-block').removeClass('full-screen');
          $('body').css('overflow','auto')
        }
      });

      $(window).on('resize', function(){
          scaleWrap.width($('.document-block').innerWidth()); 
          scaleWrap.height('auto');
          scaleBlock.innerWidth($('.document-block').innerWidth()); 
          scaleBlock.innerHeight('auto');

          widthEll = $('.document-list').innerWidth(),
          heightEll = $('.document-list').innerHeight(), 
          widthBase = widthEll,
          heightBase = heightEll,

          scaleWrap.height(heightEll);
          scaleBlock.innerHeight(heightEll);

          for (var i = 0; i < ellList.length; i++) {
            var page = {
              pageHeight : $(ellList[i]).outerHeight(true),
              pageOffset : $(ellList[i]).position().top
            }
            ellArrBaseHeight.push($(ellList[i]).outerHeight(true));
            ellArr.push(page);      
          }
      });

    }

    if($('.document-block').length > 0) {
      zoomControl();
    }
    




  });



});
 

