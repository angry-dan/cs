//jQuery(function($){
//  var bgHeight = 1200;
//
//  $(window).bind('scroll resize', function(ev){
//    
//    var top = $(window).scrollTop(),
//    bgOffset, 
//    wHeight = $(window).height();
//
//    // Put the background to the top of the viewport
//    bgOffset = top;
//
//    // r = % scrolled down the page. When you are at the bottom it = 1
//    // at the top it's 0
//    var r = top / ($(document).height() - wHeight);
//
//    // d = the difference between the hight of the viewport and the height
//    // of the background.
//    var d = bgHeight - wHeight;
//
//    // remove an offset as the percentage of the difference, such that 
//    // when we are at the bottom, the bottom tip of the image is touching
//    // the bottom tip of the viewport.
//    bgOffset -= d * r;
//
//    $('body').css('backgroundPosition', 'center ' + bgOffset + 'px')
//
//  })
//
//})