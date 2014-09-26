head.ready(function() {

	$(document).on("click", function(){
        $(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
        //$(".js-overlay").hide();
        //$("html").removeClass("has-open-popup");
	});

// slick slider init
	$('.js-slick').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 6,
		dots: false,
		arrows: true
	});

// window popup
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

// select list
    $(".js-select").on("click",function(event) {
        event.stopPropagation();
    });
    $(".js-select-text").on("click",function(event) {
        if ($(this).parents(".js-select").hasClass("is-active")) {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
        }
        else {
            $(".js-select").removeClass("is-active");
            $(".js-select-list").slideUp(100);
            $(this).parents(".js-select").toggleClass("is-active");
            $(this).parents(".js-select").find(".js-select-list").slideToggle(100);
        }
       
    });
    $(".js-select-list a").on("click",function() {
        var val = $(this).attr("href");
        var text = $(this).text();
        $(this).parents(".js-select").find(".js-select-text").text(text);
        $(this).parents(".js-select").find("option").removeAttr("selected");
        $(this).parents(".js-select").find('option[value="'+val+'"]').attr("selected", "selected");
        $(this).parents(".js-select-list").find("a").removeClass("is-active");
        $(this).addClass("is-active");
        $(this).parents(".js-select").removeClass("is-active");
        $(this).parents(".js-select-list").slideUp(100);
        return false;
        
    });

    $(".js-more").on("click",function() {
        var el = $(this).parent().find(".js-box-more");
        $(this).toggleClass("is-active");
        el.toggleClass("is-active");
        return false;
    });

    // accordeon
    function accord () {
        var el = $('.js-accord'),
            item = el.find('.accord__item'),
            head = el.find('.accord__head'),
            content = el.find('.accord__in');
        head.on('click', function () {
            if (!$(this).parent().hasClass('is-active')) {
                item.removeClass('is-active');
                $(this).parent().addClass('is-active');
                content.slideUp();
                $(this).next().slideDown();
            };
        }); 
    }
    accord();

});