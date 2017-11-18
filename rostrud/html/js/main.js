"use strict";

jQuery(document).ready(function($) {
  (function() {

    // fix height

    function EqualizeColumns(BlockClass) {
      setTimeout(function() {
        var blocks = document.getElementsByClassName(BlockClass);
        var maxHeight = 0;
        for (var i = 0; i < blocks.length; ++i) {
          blocks[i].style.height = "auto";
          if (maxHeight < blocks[i].clientHeight) {
            maxHeight = blocks[i].clientHeight; 
          }
        }
        for (var i = 0; i < blocks.length; ++i) {
          blocks[i].style.height = maxHeight + "px";
        }
      }, 1);
    }

    if($('.fix-height-3').length > 0) {
      EqualizeColumns('fix-height-3');
      $(window).on('resize', function(){EqualizeColumns('fix-height-3')});
    }

    if($('.fix-height-1').length > 0) {
      EqualizeColumns('fix-height-1');
      $(window).on('resize', function(){EqualizeColumns('fix-height-1')});
    }


    // sub nav
    var navKey = true;
    $('.btn-submenu').on('click', function(){
      if(navKey){
        navKey = false;
        $('.sub-navigation').addClass('active');
        $('.cmn-toggle-switch').addClass('active');
        $('body').css('overflow','hidden');
        $('body').scrollTop(0);
        if(device.desktop()){
          if($.browser.webkit || $.browser.mozilla) {
            $('body').css('padding-right', '17px');
          }
        }
      } else {
        navKey = true;
        $('.sub-navigation').removeClass('active');
        $('.cmn-toggle-switch').removeClass('active');
        setTimeout(function(){
          $('body').css('overflow','auto');
          if(device.desktop()){
            if($.browser.webkit || $.browser.mozilla) {
              $('body').css('padding-right', '0px');
            }
          }
        }, 500); 
      }
    });



    // modal
    var modalWrap = $('.modal-wrap');
    var mobalBl = $('#modal-blind');

    $('.blind-btn').on('click', function(){
        modalWrap.addClass('active');
        mobalBl.addClass('active');
    });
    $('.close-modal').on('click', function(e){
        modalWrap.removeClass('active');
        $(this).parent().removeClass('active');
    });



    // blind mode
    $('.btn-font').on('click', function(e){
        $('.btn-font').removeClass('active');
        $(this).addClass('active');
        $('body').attr('font-size', $(this).attr('data-class'));
    });
    $('.btn-color').on('click', function(e){
        $('.btn-color').removeClass('active');
        $(this).addClass('active');
        $('body').attr('color-sheme', $(this).attr('data-class'));
    });
    $('.btn-text').on('click', function(e){
        $('.btn-text').removeClass('active');
        $(this).addClass('active');
        $('body').attr('text-indent', $(this).attr('data-class'));
    });




    // slick slider
    if($('.base-news').length > 0) {
      $('.base-news').slick({
        infinite: false,
        prevArrow: '.prew-slide',
        nextArrow: '.next-slide',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]     
      });
    }

    if($('.em-news').length > 0) {
      $('.em-news').slick({
        infinite: false,
        prevArrow: '.prew-slide',
        nextArrow: '.next-slide',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]     
      });
    }

    

    if($('.slick-gos-site').length > 0) {
      $('.slick-gos-site').slick({
        infinite: true,
        prevArrow: '.prew-gos-site',
        nextArrow: '.next-gos-site',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1
            }
          }
        ]     
      });
    }

    if($('.photo-galery-slider').length > 0) {
      $('.photo-galery-slider').slick({
        infinite: true,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 440,
            settings: {
              slidesToShow: 1
            }
          }
        ]     
      });
    }

    if($('.slick-info-block').length > 0) {
      $('.slick-info-block').slick({
        infinite: true,
        prevArrow: '.prew-info-block',
        nextArrow: '.next-info-block',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1
            }
          }
        ]     
      });
    }

    

    // header slider
    if($('#kenburns').length > 0) {

      var setionPr = $('.section-prime-slide');
      var headerHeight = $('.header').height();
      var primeHeight = $(window).height() - headerHeight;

      if($(window).height() >= 768 && $(window).width() > 1024) {
        setionPr.css('height', primeHeight + 'px');
      } else {
        setionPr.css('height','auto');
      }

      

      $(window).on('resize', function(){   
        primeHeight = $(window).height() - headerHeight;
        if($(window).height() >= 768 && $(window).width() > 1024) {
          setionPr.css('height', primeHeight + 'px');
        } else {
          setionPr.css('height','auto');
        }
      });



      var $kenburns = $('#kenburns'),
          $frame = $('.frame', $kenburns),
          $pagesbar = $('#sliderPages'),
          $titlesHolder = $('#sliderContentItems', $kenburns),
          $titles = $('.sliderContentItem', $titlesHolder);

      $frame.mightySliderAnimate({
        pages: {
          pagesBar: $pagesbar,
          activateOn: 'click'
        },
        cycling: {
          cycleBy: 'slides',
          pauseTime: 8000
        },
      },
      {
        load: function() {
          var html = "";
          $titlesHolder.empty();
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
    }



    // seach-form
    if($('.seach-form input').length > 0) {
      $('.seach-form input').on('focusin', function() {
        $(this).parent().addClass('focusing');
      });
      $('.seach-form input').on('focusout', function() {
        $(this).parent().removeClass('focusing');
      });
    }



    // news-greed 
    function greedFix(blockList) {
      $.each($(blockList), function(index, block) {
        var keyDescr,
            blockHeight = $(block).height(),
            contHeight = $(block).children('h3').height() + $(block).children('p').height(),
            headText = $(block).children('h3').text(),
            descrText = $(block).children('p').text();

        $(block).children('p').length > 0 ? keyDescr = true : keyDescr = false;

        blockHeight = 170;

        while (blockHeight < contHeight) {
          if(descrText.lastIndexOf(' ') > 0 && keyDescr) {
            descrText = descrText.substring(0,descrText.lastIndexOf(' '));
            $(block).children('p').text(descrText + '...');
            contHeight = $(block).children('h3').height() + $(block).children('p').height();
          } else if (descrText.lastIndexOf(' ') < 0 && keyDescr) {
            keyDescr = false;
            $(block).children('p').remove();  
          } else {
            headText = headText.substring(0,headText.lastIndexOf(' '));
            $(block).children('h3').text(headText + '...');
            contHeight = $(block).children('h3').height() + 30;
          }
        }
      });
      
    } 

    if($('.greed-cont').length > 0) {
      greedFix('.greed-cont');   
    }



    /* nav-feed */
    var navComponent = {
      navResize: true,
      animateIeFlag: true,
      animIESide: 'down',
      ellArrWidth: [],
      currentEll: 0,
      listWidth : 0,
      init: function(){
        this.navbar = document.getElementById('nav-feed');
        this.listShow = this.navbar.getElementsByClassName('list-show')[0];
        this.listHide = this.navbar.getElementsByClassName('list-hide')[0];
        this.workWrap = this.navbar.getElementsByClassName('nav-wrap')[0];

        for (var i = 0; i < this.listShow.children.length; i++) {
          this.ellArrWidth.push(this.listShow.children[i].offsetWidth);
          this.listWidth += (this.listShow.children[i].offsetWidth);
        }

        (this.listHide.children.length === 0) ? this.listShow.lastElementChild.style.display = 'none' : this.listShow.lastElementChild.style.display = 'inline-block';

        this.adaptNav();

        window.addEventListener('resize', function (){
          navComponent.adaptNav();
        }, false);
      },
      checkNav: function(){
        var workWidth = this.workWrap.clientWidth,
            listShow = this.listShow.children,
            listHide = this.listHide.children;

        if(this.listWidth >= workWidth){
          this.currentEll += 1;
          this.listWidth -= this.ellArrWidth[this.ellArrWidth.length - this.currentEll - 1];
          if(listHide.length === 0) listShow[listShow.length - 1].style.display = 'inline-block';
          this.ellReplaceToHide(listShow[listShow.length - 2]);
          this.checkNav();      
        } else if(this.listWidth + this.ellArrWidth[this.ellArrWidth.length - this.currentEll - 1] <  workWidth && listHide[0]) {
          this.listWidth += this.ellArrWidth[this.ellArrWidth.length - this.currentEll - 1];
          this.currentEll -= 1;
          this.ellReplaceToShow(listHide[0]);         
          if(listHide.length === 0) listShow[listShow.length - 1].style.display = 'none';
          this.checkNav();
        }
      },
      ellReplaceToShow: function(ellement){
        this.listShow.insertBefore(ellement, this.listShow.lastElementChild);
      },
      ellReplaceToHide: function(ellement){
        (this.listHide.firstElementChild) ? this.listHide.insertBefore(ellement, this.listHide.firstElementChild) : this.listHide.appendChild(ellement);  
      },
      adaptNav: function(){ 
        if(window.innerWidth <= 768 && this.navbar.classList && !this.navbar.classList.contains('mobile-conf') || window.innerWidth <= 768 && !/\bmobile-conf\b/g.test(this.navbar.className)){
          if(this.navbar.classList) {
            this.navbar.classList.add('mobile-conf');
          } else{
            this.navbar.className = this.navbar.className + " mobile-conf";
          } 
          this.listShow.lastElementChild.firstElementChild.firstElementChild.textContent = 'Меню';
          for (var i = this.listShow.children.length - 1; i > 0; i--) {
            this.currentEll += 1;
            this.listWidth -= this.ellArrWidth[this.ellArrWidth.length - this.currentEll - 1];
            if(this.listHide.children.length === 0) this.listShow.children[this.listShow.children.length - 1].style.display = 'inline-block';
            this.ellReplaceToHide(this.listShow.children[i - 1]);
            if(this.listWidth < this.ellArrWidth[this.ellArrWidth.length - 1]) this.listWidth = this.ellArrWidth[this.ellArrWidth.length - 1];
          } 
        } else if(window.innerWidth > 768) {
          if(this.navbar.classList && this.navbar.classList.contains('mobile-conf')){
            this.navbar.classList.remove('mobile-conf');
            this.listShow.lastElementChild.firstElementChild.firstElementChild.textContent = 'Ещё';
          } else if(/\bmobile-conf\b/g.test(this.navbar.className)){
            this.navbar.className = this.navbar.className.replace(/\b mobile-conf\b/g, "");
            this.listShow.lastElementChild.firstElementChild.firstElementChild.textContent = 'Ещё';
          }
          this.checkNav();  
        }
      }
    };

    $(window).on('load', function (){
      if($('#nav-feed').length > 0) {
        navComponent.init();
      }  
    });




    /* feed-search */
    $('.feed-search .icon-search').on('click', function(){
      $(this).addClass('active');
      $('.feed-search').addClass('active');
    });

    $('.feed-search .close-search').on('click', function(){
      $('.feed-search').removeClass('active');
      $('.feed-search .icon-search').removeClass('active');
    });




    /* scrollbar-inner */
    function fixScroll(){
      var scrollType,
          scrollKey = false,
          contWidth = $('body').width();

      (contWidth > 767) ? scrollType = 'desctop' : scrollType = 'mobile';   

      $(window).on('resize', function(){
        contWidth = $('body').width();
        if(scrollType == 'desctop' && contWidth  <= 767) {
          scrollKey = true;
          scrollType = 'mobile';
        } else if (scrollType == 'mobile' && contWidth  > 767) {
          scrollKey = true;
          scrollType = 'desctop';
        } 
        if (scrollKey) {
          scrollKey = false;
          $('.scrollbar-inner').scrollbar('destroy');
          $('.scrollbar-inner').scrollbar();
        }
      })
    }

    if($('.scrollbar-inner').length > 0){
      $('.scrollbar-inner').scrollbar();
      fixScroll();  
    }




    /*window-employ*/

    $('.employ-open').on('click', function(){
      var tabTarget = $(this).attr('data-tab');
      $('.employ-tab-btn').attr('href', tabTarget);
      if(tabTarget == '#employee-tab') {
        $('.employ-tab-btn').children('.text').text('Работодателю');   
      } else if (tabTarget == '#employer-tab') {
        $('.employ-tab-btn').children('.text').text('Работнику');
      }
      $('.employ-tab-btn').tab('show');
      $('.window-employ').addClass('active');
      $('body').css('overflow','hidden');
      $('body').scrollTop(0);
      if(device.desktop()){
        if($.browser.webkit || $.browser.mozilla) {
          $('body').css('padding-right', '17px');
        }
      }
    });

    $('.employ-close').on('click', function(){
      $('.window-employ').removeClass('active');
      setTimeout(function(){
        $('body').css('overflow','auto');
        if(device.desktop()){
          if($.browser.webkit || $.browser.mozilla) {
            $('body').css('padding-right', '0px');
          }
        }
      }, 500); 
    });

    $('.employ-tab-btn').on('click', function(event){
        event.preventDefault();
        var tabTarget = $(this).attr('href');
        if(tabTarget == '#employee-tab') {
          $(this).children('.text').text('Работнику');
          $(this).attr('href', '#employer-tab');
        } else if (tabTarget == '#employer-tab') {
          $(this).children('.text').text('Работодателю');
          $(this).attr('href', '#employee-tab');
        }
        $('.employ-tab-btn').tab('show');
    });



    /* region-list */
    function fixRegionList(listEll){
      var listHeight = 0,
          columHeight =0,
          columLength = 3,
          windowWidth = $(window).width(),
          wrapHeight; 

      function initColum(windowWidth){
        if(windowWidth >= 992) {
          columLength = 3;
          $(listEll).width('33.333%');
        } else if(windowWidth >= 768) {
          columLength = 2;
          $(listEll).width('50%');
        } else {
          columLength = 1;
          $(listEll).width('100%');
        }
      }
         
      function calculate(columLength){      
        listHeight = 0;
        columHeight = 0;
        $(listEll).removeClass('fix-marg');
        if(columLength > 1) {
          for (var i = 0; i < listEll.length; i++) {
            listHeight += $(listEll[i]).outerHeight();
          }
          wrapHeight = (listHeight / columLength) + $(listEll[0]).outerHeight();
          $(listEll).parent().height(wrapHeight);
          for (var i = 0; i < listEll.length; i++) {
            columHeight += $(listEll[i]).outerHeight();
            if(columHeight > wrapHeight) {
              console.log(i);
              columHeight = $(listEll[i]).outerHeight();
              if($(listEll[i]).hasClass('list-name')) {
                $(listEll[i]).addClass('fix-marg');
              }
            }
          }
        } else {
          $(listEll).parent().height('auto');
        }
      } 

      initColum(windowWidth);

      $(window).on('resize', function(){
        windowWidth = $(window).width();
        initColum(windowWidth);
        calculate(columLength);
      });   
      
      $('a[href="#region-list"]').on('shown.bs.tab',function(e){
        calculate(columLength);
      });
    }                  

    if($('.region-list').length > 0){
      fixRegionList($('.region-list .flex-ell'));  
    }

  })();

});


