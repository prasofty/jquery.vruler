/**
 * jQuery vruler 0.1
 * A plugin to create vertical rulers.
 *
 * http://github.com/prasofty/jquery.vruler
 * contributors:
 * prasofty@gmail.com
 *
 * Usage:
 *  $('.section').vruler();
 */


(function($) {

  $.fn.vruler = function(options){

    // Setup default option values
    var defaults = {
      no_of_rulers: 1,
      color: '#CCCCCC',
      width: '1'
    };

    var options = $.extend(defaults, options);

    var height = $(this).height();
    var width = $(this).width();

    var _percent = (100 / (options['no_of_rulers']+1)).toFixed(2);

    var style = {
      height: height,
      'background-color': options['color'],
      position: 'absolute',
      width: options['width']
    };
    
    return this.each(function(){
      $(this).find('.v_ruler').remove();
      var left = 0.0;
      for(i=1;i<=options['no_of_rulers'];i++){
        $(this).prepend('<div class="v_ruler ruler_' + i +'"></div>');
        left = parseFloat(left) + parseFloat(_percent);
        style['left'] = left + '%';
        $('.v_ruler.ruler_' + i).css(style);
      }
    });

  };
})(jQuery);