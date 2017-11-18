"use strict";

jQuery(document).ready(function($) {
  (function() {

    // form field
    $('.base-faildes input, .base-faildes textarea').on('focus', function(){
      $(this).parent().find('label').addClass('focused');
    });

    $('.base-faildes select').on('change', function(){
      ($(this).val()) ? $(this).parent().find('label').addClass('focused') : $(this).parent().find('label').removeClass('focused');
    });

    $('.base-faildes input, .base-faildes textarea').on('blur', function(){
      if(!$(this).val()) $(this).parent().find('label').removeClass('focused');
    });
    
    $('.base-faildes input, .base-faildes textarea').on('change', function(){
      ($(this).val()) ? $(this).parent().find('label').addClass('focused') : $(this).parent().find('label').removeClass('focused');
    });



    $.validator.setDefaults({
      showErrors: function() {
        if (this.settings.highlight) {
          for (var i = 0; this.errorList[i]; ++i) {
            this.settings.highlight.call(this, this.errorList[i].element,
              this.settings.errorClass, this.settings.validClass);
          }
        }
        if (this.settings.unhighlight) {
          for (var i = 0, elements = this.validElements(); elements[i]; ++i) {
            this.settings.unhighlight.call(this, elements[i],
              this.settings.errorClass, this.settings.validClass);
          }
        }
      }
    });

    $(".mail-subscr-form").validate({
      submitHandler: function(form) {
        $(form).submit();
      },
      rules: {
        email: {
          required: true,
          email: true
        }
      }
    });

  })();

});


