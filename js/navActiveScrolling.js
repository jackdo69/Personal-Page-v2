// Sicky Nav Bar with active state while scrolling
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();
//outerHeight return the total height (include padding and border) of the div
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  //scrollTop return the position of the vertical bar
  //offset return the coordinates of the object
  sections.each(function () {
    var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();
    // add/remove the active class 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');

      $(this).addClass('active');
      nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
    }
  });
});


// smooth scroll to section
nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');

  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);

  return false;
});