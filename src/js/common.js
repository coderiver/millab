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
    if ($(".js-window-toggle").length > 0) {
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
    }
    	

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
        $(this).parents(".js-select").removeClass("is-active").removeClass("is-empty");
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
            }
            else {
                item.removeClass('is-active');
                $(this).next().slideUp();
            }
        }); 
    }
    accord();

    // links
    function links () {
        var el = $('.links'),
            el_wrap = el.find('.links__wrap'),
            el_top = el.offset().top,
            el_height = el.height(),
            scroll_top = $(window).scrollTop();
        if (scroll_top > (el_top + el_height)) {
            el.addClass('is-fixed');
        }
        else {
            el.removeClass('is-fixed');
        }
    }
    function links_nav () {
        var el = $('.links'),
            link = el.find('.links__list a'),
            links_height = 80;
        link.on('click', function () {
            var id = $(this).attr('href'),
                item = $(id),
                top = item.offset().top,
                top = top - links_height;
            $('html, body').animate({
                scrollTop: top
            }, 400);
            return false;
        });
    }
    if ($('.links').length > 0) {
        links_nav();
    }
    function links_blocks () {
        var el = $('.links'),
            link = el.find('.links__list a'),
            block = $('.js-links-block'),
            offset_top = $(window).scrollTop(),
            links_height = 80;
        var item_scroll = $('.js-nav-item');
        block.each(function(){        
            var block_top = $(this).offset().top,
                block_top = block_top - links_height;
            if (offset_top >= block_top) {
                var item_el = $(this).attr('id'),
                    item_el = '#' + item_el;
                link.each(function(){    
                    var link_item = $(this).attr('href');
                    if (item_el == link_item) {
                        link.removeClass('is-active');
                        $(this).addClass('is-active');
                    };
                });
            };
        });
    }


    // scroll
    $(window).scroll(function () {
        // links();
        // links_blocks();
        if ($('.links').length > 0) {
            links();
            links_nav();
        }
    });

});