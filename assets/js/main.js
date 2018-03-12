
(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');


		// Scrolly links.
			$('.scrolly').scrolly({
				speed: 2000
			});


		// Banner.
			var $banner = $('#banner');

			$banner
				._parallax();

	});

})(jQuery);