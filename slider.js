    function blogCollum() {
        if (window.innerWidth >= 600) {
            $('.blogContainer').bxSlider({
                mode: 'horizontal',
                moveSlides: 1,
                slideMargin: 40,
                infiniteLoop: true,
                slideWidth: 660,
                minSlides: 3,
                maxSlides: 3,
                speed: 800,
            });
        }

        else if (600 < window.innerWidth <= 600) {
            $('.blogContainer').bxSlider({
                mode: 'horizontal',
                moveSlides: 1,
                slideMargin: 40,
                infiniteLoop: true,
                slideWidth: 660,
                minSlides: 1,
                maxSlides: 1,
                speed: 800,
            });
        }
    }

    $(document).ready(function(){ 
        blogCollum();
	});