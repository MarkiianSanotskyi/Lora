
	
/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#a2a0ad" });
 });
 
;(function(){

	if (window.jQuery) {

		// jQuery version
		$(document).ready(function(){

			// Add a 'js' class to the html tag
			// If you're using modernizr or similar, you
			// won't need to do this
			$('html').addClass('js');

			// Fade in videos
			var $fade_in_videos = $('.video-bg video');
			$fade_in_videos.each(function(){
				if( $(this)[0].currentTime > 0 ) {
					// It's already started playing
					$(this).addClass('is-playing');
				} else {
					// It hasn't started yet, wait for the playing event
					$(this).on('playing', function(){
						$(this).addClass('is-playing');
					});
				}
			});

			// Seamless looping (avoid the flicker)
			var $looping_videos = $('video[loop]');
			$looping_videos.each(function(){
				$(this).on('timeupdate', function(){
					if($(this)[0].currentTime >= $(this)[0].duration - 0.3) {
						$(this)[0].currentTime = 0.0;
					}
				});
			});

			// Scrap videos on iOS because it won't autoplay,
			// it adds it's own play icon and opens the
			// media player when clicked
			var iOS = /iPad|iPhone|iPod/.test(navigator.platform) || /iPad|iPhone|iPod/.test(navigator.userAgent);
			if( iOS ) {
				$('.video-bg video').remove();
			}

		});

	} else {

		// Vanilla JS version

		// Add a 'js' class to the html tag
		// If you're using modernizr or similar, you
		// won't need to do this
		document.documentElement.className += " js";

		// Fade in videos
		var fade_in_videos = document.querySelectorAll('.video-bg video');
		for( i=0; i<fade_in_videos.length; i++ ) {
			if( fade_in_videos[i].currentTime > 0 ) {
				// It's already started playing
				fade_in_videos[i].className += ' is-playing';
			} else {
				// It hasn't started yet, wait for the playing event
				fade_in_videos[i].addEventListener("playing", function(){
					if(this.className.indexOf('is-playing') < 0) {
						this.className += ' is-playing';
					}
				});
			}
		}

		// Seamless looping (avoid the flicker)
		var looping_videos = document.querySelectorAll('video[loop]');
		for( i=0; i<fade_in_videos.length; i++ ) {
			looping_videos[i].addEventListener('timeupdate', function() {
				if(this.currentTime >= this.duration - 0.3) {
					this.currentTime = 0.0;
				}
			});
		}

		// Scrap videos on iOS because it won't autoplay,
		// it adds it's own play icon and opens the
		// media player when clicked
		var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
		if( iOS ) {
			var background_videos = document.querySelectorAll('.video-bg video');
			for( i=0; i<background_videos.length; i++ ) {
				background_videos[i].parentNode.removeChild(background_videos[i]);
			}
		}

	}

})();

	/*Fancybox*/


            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 294,
        minHeight: 212,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	

/*Fancybox end*/  

	
		
		//   $("a[href$='.jpg'], a[href$='.png']")
//           .addClass("fancybox");
          
           $("a[href$='.jpg'], a[href$='.png']").each(function() {
      $(this).addClass("fancybox");
       $(this).attr('rel', 'gallery');
     
});

 $(".fancybox").fancybox({
        padding: [0, 0, 0, 0],
        openEffect: 'elastic',
        openSpeed: 300,
//        closeEffect: 'elastic',
//        scrolling: 'visible',
         background:'white',
        maxWidth: 800,
		arrows: false,
        fixed: false,
        autoCenter: false,
     
    });
	
	$(document).ready(function(){
        var $menu = $(".top-header");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <=100 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });
	
	

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 800,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
	 $(document).ready(function(){
   $(' #header a[href*=#]').bind("click", function(e){
      var anchor = $(this);
      $('html, body').stop().animate({
         scrollTop: $(anchor.attr('href')).offset().top
      }, 1400);
      e.preventDefault();
   });
   return false;
});



(function($) {
		$(function() {
			$('input, select').styler({
				selectSearch: true
			});
		});
		})(jQuery);
		
		    $('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    })
	
	function windowSize(){
  if ($(window).width() < '767')
  {
    $(' ul.our-services-list li:nth-child(2n) .info-box ').detach().insertAfter('ul.our-services-list li:nth-child(2n) .image-box'),
	$('#footer .info-masters ').detach().insertAfter('#footer ul.social-list');
  } 
 }

$(window).load(windowSize); 
$(window).resize(windowSize);
	
	