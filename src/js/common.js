$(document).ready(function() {

	$(document).on("click", function(){
        $(".js-select").removeClass("is-active");
		$(".js-select-list").slideUp(100);
        $(".js-overlay").fadeOut(300);
        $(".js-popup").removeClass("is-visible");
        $("html").removeClass("has-open-popup");
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
    var timer;
    var delay = 500;
    if ($(".js-window-toggle").length > 0) {
        $(".js-window-toggle").hover(
          function() {
            var href = $(this).attr("href");
            var el = $('[data-window="'+href+'"]');
            var el_left = $(this).offset().left;
            var el_top = $(this).offset().top;
            el.css({
                left: el_left - $(this).outerWidth()/2,
                top: el_top - el.outerHeight()
            });
            timer = setTimeout(function() {
                win.hide().removeClass("is-visible");
                
                el.fadeIn(400).addClass("is-visible");
            }, delay);
                
          }, function() {
            clearTimeout(timer);
            win.hide().removeClass("is-visible");
          }
        );
        $(".js-window").hover(
          function() {
            $(this).show().addClass("is-visible");
          }, function() {
            $(this).fadeOut(400).removeClass("is-visible");
          }
        );
    }
    	
// popups 
    $(".js-popup-link").on("click", function(event){
        $(".js-overlay").fadeIn(300);
        var popup = $(this).attr("href");
        $("html").addClass("has-open-popup");
        $(".js-popup").removeClass("is-visible");
        $('[data-popup="'+popup+'"]').addClass("is-visible");
        event.stopPropagation();
        return false; 
    });

    $(".js-popup-close").on("click", function(){
        $(".js-overlay").fadeOut(300); 
        $(this).parents(".js-popup").removeClass("is-visible");
        return false;
    });
    $(".js-popup").children().on("click", function(event){
        event.stopPropagation();
    });
    $(".js-ovarlay").on("click", function(){
        $(".js-popup").removeClass("is-visible");
    });

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

// fancy box
        $(".js-fancybox a").fancybox({
            padding: 1,
            openEffect: 'elastic',
            closeEffect: 'elastic'
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
    function links() {
        var el = $('.links'),
            el_wrap = el.find('.links__wrap'),
            el_top = el.offset().top,
            el_height = el.height(),
            scroll_top = $(window).scrollTop();
        if (scroll_top > (el_top + el_height)) {
            el.addClass('is-fixed');
            $(".js-page-action").addClass("has-top-margin");
        }
        else {
            el.removeClass('is-fixed');
            $(".js-page-action").removeClass("has-top-margin");
        }
    }
     if ($('.links').length > 0) {
        links();
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
    function pageAction() {
        var top = $(".main").offset().top;
        if ($(window).scrollTop() >= top) {
            $(".js-page-action").addClass("is-fixed");
        }
        else {
            $(".js-page-action").removeClass("is-fixed");
        }
    }
    if ($(".js-page-action").length > 0) {
        pageAction();
    }
    if ($('.links').length > 0) {
        links();
        links_blocks();
    }
    $(window).scroll(function () {
        // links();
        // links_blocks();
        if ($('.links').length > 0) {
            links();
            links_blocks();
        }
        if ($(".js-page-action").length > 0) {
            pageAction();
        }
    });

    // validation form
    function validate() {
        $('.js-validate').each(function(){
            if ($(this).length > 0) {
                $(this).validate({
                    errorClass: 'has-error',
                    rules: {
                        username: {
                            minlength: 2
                        },
                        any: {
                            minlength: 2
                        },
                        password: {
                            minlength: 5
                        },
                        confirm_password: {
                            minlength: 5,
                            equalTo: '#password'
                        },
                        email: {
                            email: true
                        },
                        tel: {
                            minlength: 2,
                        },
                        address: {
                            minlength: 2
                        },
                        message: {
                            minlength: 4
                        }
                    },
                    messages: {
                        firstname: 'Вас так зовут?',
                        lastname: 'У вас такая фамилия?',
                        fathername: 'У вас такое отчество?',
                        password: {
                            required: 'Введите пароль',
                            minlength: 'Минимум 5 символов'
                        },
                        confirm_password: {
                             required: 'Пароли не совпадают',
                             minlength: 'Минимум 5 символов',
                             equalTo: 'Пароли не совпадают'
                        },
                        email: 'Неверный формат',
                        address: 'Это Ваш адрес?',
                        any: 'Заполните поле',
                        company: 'Заполните поле',
                        tel: {
                            required: 'Заполните поле',
                        },
                        message: {
                            required: 'Заполните поле',
                            minlength: 'Заполните поле'
                        }
                    }
                    // messages: {
                    //     firstname: '',
                    //     lastname: '',
                    //     fathername: '',
                    //     alias: '',
                    //     any: '',
                    //     password: {
                    //         required: '',
                    //         minlength: ''
                    //     },
                    //     confirm_password: {
                    //         required: '',
                    //         minlength: '',
                    //         equalTo: ''
                    //     },
                    //     email: '',
                    //     address: '',
                    //     workplace: '',
                    //     edu: '',
                    //     status: '',
                    //     exp: '',
                    //     tel: {
                    //         required: '',
                    //         phoneUS: ''
                    //     },
                    //     message: {
                    //         required: '',
                    //         minlength: ''
                    //     }
                    // }
                });
            }
        });
    }
        
    validate();
    if ($(".js-input-tel").length) {
        $(".js-input-tel").mask("+799 (99) 999-99-99");
    }
    $("body").on("change",".js-check input",function(){
        var checkGroup = $(this).closest(".js-check-group");
        var checkHidden = checkGroup.children(".js-check-hidden");
        if ($(this).is(":checked")) {
            checkHidden.addClass("is-visible");
            $(this).parent().addClass("is-checked");
        }
        else {
            checkHidden.removeClass("is-visible").addClass("is-hidden");
            $(this).parent().removeClass("is-checked");
        }
    }); 

    $('body').on("change",'[data-state="1"]',function(){
        var el = $(this).parent().attr("data-toggle");
        $("."+el).addClass("is-visible").removeClass("is-hidden");
    });

    $('body').on("change",'[data-state="0"]',function(){
        var el = $(this).parent().attr("data-toggle");
        $("."+el).addClass("is-hidden").removeClass("is-visible");
    });
});