$(document).ready(function () {
    
    // smooth scroll function
    var $root = $('html, body');
    $('a').click(function () {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 550, function () {
            window.location.hash = href;
        });
        return false;
    });
    
    
    // nav icon hover
    $('#navIcon').hover(function () {
        $('#navIcon').toggleClass('hover');
    });
    
    //nav icon click   
	$('#navIcon').click(function () {
        if ($(this).hover) {
            $('#navIcon').toggleClass('open');
            $('.navPage').toggleClass('openNav');
            $('.navFilter').toggleClass('openFilter');
            $('body').toggleClass('stopScrolling');
        }
	});
    
    // side navigation    
	$('.projectMask').hover(function () {
		$('.projectMask h2').css({
            '-webkit-transform': 'translateY(-15px)',
            'transform': 'translateY(-15px)',
            'transition-duration': '.6s',
            'transition-timing-function': 'ease'
        });
        
		$('.projectMask p').css({
            '-webkit-transform': 'translateY(-20px)',
            'transform': 'translateY(-20px)',
            'transition-duration': '.5s',
            'transition-timing-function': 'ease-out'
        });
	}, function () {
            $('.projectMask h2').css({
            '-webkit-transform': 'translateY(0px)',
            'transform': 'translateY(0px)',
            'transition-duration': '.5s',
            'transition-timing-function': 'ease'
        });
		$('.projectMask p').css({
            '-webkit-transform': 'translateY(0px)',
            'transform': 'translateY(0px)',
            'transition-duration': '.6s',
            'transition-timing-function': 'ease'
        });
    });

    //sticky menu style
  $(document).scroll(function () {
      var $nav = $(".navContainer");
      var $menu = $("header nav a");
      var $logo = $("#logo");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $menu.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $logo.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});   
});