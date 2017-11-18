function run_map(container, options, data){
    var last_hover, 
        current_scale,
        current_width;

    var style = {CL1:'#FFFFFF', // default stroke
                 CL2:'#E0E0E0', // default bg
                 CL3:'#FFFFFF', // hover stroke
                 CL4:'#1F3683', // hover color
                 CL5:'#FFFFFF', // inactive stroke
                 CL6:'#E0E0E0', // inactive color
                 ST1:1, ST2:1};

    current_width = $(container).width();             
    $(container).css('height', $(container).width() * options.svg_height / options.svg_width);

    /*
     * Bubble creation
     */
    var bubble = $('<div id="map-bubble"><div class="regiontitle"></div></div>');
    var regiontitle = bubble.find('.regiontitle');
    bubble.appendTo(document.body);


    /*
     * info-wind creation
     */
    var infoWind = $('<div id="info-wind"><div class="close"></div><h4 class="wind-name"></h4><p class="wind-sub">Адрес:</p><p id="info-addres" class="wind-text"></p><p class="wind-sub">Телефон:</p><p id="info-phone" class="wind-text"></p><a href="#" class="wind-link">Перейти в инспекцию</a></div>');
    var infoTitle = infoWind.find('.wind-name');
    var infoAddres = infoWind.find('#info-addres');
    var infoPhone = infoWind.find('#info-phone');
    var infoLink = infoWind.find('.wind-link');
    infoWind.appendTo($('.map-wrap'));



    /*
     * Scale widget
     */
    var zoomSlider = $("#zoom-map").slider({
      reversed : true,
      min: 100,
      max: 250,
      step: 1,
      value: 100,
      orientation: 'vertical'
    });
    
    zoomSlider.on("change", function(slideEvt) {
      var scale = zoomSlider.slider('getValue') / 100;
      scale = map.correctScale(scale);
      var scaleTranslateCoeff = 1/map.scale - 1/scale;
      map.transX -= scaleTranslateCoeff * map.width / 2;
      map.transY -= scaleTranslateCoeff * map.height / 2;
      map.scale = scale;
      map.applyTransform()
    });


    /* ============= Map ============= */
    options = $.extend({}, options, {
      'color': style.CL2,
      'stroke': [style.CL1, style.ST1],
      'onTransform': function(){
        if(map.scale != current_scale){
          var paths = $(map.rootGroup).find(path_tag);
          for (var i=paths.length;i--;){
            paths[i].setStroke(null, style.ST1 / map.scale);
          }
          current_scale = map.scale;
        }
        bubble.css('display', 'none'); // XXX
      }
    });

    var map = vectorMap(container, options);

    map.addShadowStyle('black', options.shadow, options.shadow, Math.round(options.shadow * 0.8));
    map.onTransform();

    $(window).on('resize', function(){
      map.do_resize();
      $(container).css('height', $(container).width() * options.svg_height / options.svg_width);
    })

    var path_tag = map.canvas.mode == 'svg'? 'path': 'shape';

    var paths = $(map.rootGroup).find(path_tag).each(function(){
      var code = this.id.split('_')[1];
      if (!(code in data) || !data[code].visittext){
        this.setStroke(style.CL1, style.ST1 / map.scale).setFill(style.CL2);
      }
    });

    map.addBubble(bubble[0], {
      'mouseover': function(mouseCoords){
        var code = this.id.split('_')[1];
        map.reorder(code);
        if (code in data) { bubble.show(); } else { bubble.hide(); }
      }, 
      'mousemove': function(mouseCoords){
        var code = this.id.split('_')[1];
        if (code in data){
          var x = mouseCoords.pageX - (data[code].image? 80: 25);
          bubble.css({'top': mouseCoords.pageY - 30 - bubble.height(),'left': x});
        }
      },
      'click': function(){
        infoWind.addClass('active');
        var code = this.id.split('_')[1];
        if (code in data){
          data[code].title ? infoTitle.text(data[code].title) : infoTitle.text('add "title" in data/russia.json');
          data[code].address ? infoAddres.text(data[code].address) : infoAddres.text('add "address" in data/russia.json');
          data[code].phone ? infoPhone.text(data[code].phone) : infoPhone.text('add "phone" in data/russia.json');
          if(data[code].link) {
            infoLink.text('Перейти в инспекцию');
            infoLink.attr('href',data[code].link);
          } else{
            infoLink.attr('href',"#");
            infoLink.text('add "link" in data/russia.json');
          } 
        }
      },
      'unhover': unhover
    });

    if (!map.hasTouch){
      $(container).bind('mouseleave', unhover);
    }

    function unhover(){
      map.reorder();
      bubble.hide();
    }   

    infoWind.find('.close').on('click', function(){
      infoWind.removeClass('active');
    });

    map.makeDraggable();

    map.reorder = function(code){
      if (map.active_item){
        if (map.active_code in data && data[map.active_code].visittext){
          map.active_item.setStroke(style.CL3, style.ST1 / map.scale).setFill(style.CL4);
        } else {
          map.active_item.setStroke(style.CL5, style.ST1 / map.scale).setFill(style.CL6);
        }
        if(map.canvas.mode == 'svg'){
          map.active_item.setAttribute('style', '');
        }
        map.active_item = null;
      }

      if ( code && ! (code in data) && window.console){
        /* // */window.console.warn('unknown country: ' + code);
      }
      if (code && code in data){
        map.active_code = code;
        map.active_item = map.getPath(code);
        if (data[code].visittext){
          if(map.canvas.mode == 'svg'){
            map.active_item.setAttribute('style', 'filter: url(#inner-shadow-'+map.index+');');
          }
          map.active_item.setFill(style.CL2).setStroke(style.CL1, style.ST2/map.scale);
        } else {
          map.active_item.setFill(style.CL4).setStroke(style.CL3, style.ST2/map.scale);
        }
        map.rootGroup.appendChild(map.active_item);
        regiontitle.text(data[code].title);
      } else {
        regiontitle.text('');
      }
    }
    return map;
}