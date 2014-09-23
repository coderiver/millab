head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$('.js-slick').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		dots: false,
		arrows: true
	});
	var win = $(".js-window");
	$(".js-window-toggle").hover(
	  function() {
	  	var href = $(this).attr("href");
	  	var el = $('[data-window="'+href+'"]');
	  	var el_left = $(this).offset().left;
	  	var el_top = $(this).offset().top;
		win.hide();
		el.css({
			left: el_left - $(this).outerWidth()/2,
			top: el_top - el.outerHeight()
		});
	    el.fadeIn(400);
	  }, function() {

	    win.hide();
	  }
	);
});