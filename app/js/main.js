"use strict";
$(document).ready(function() {

    (function addMainSlider() {
        initSlider($('#main-slider'),$('#main-slider .banner__item:first-child'),".banner__item");
    })();
    (function wrapButton() {
        wrapUpSliderArrow('.slick-arrow', 'template-wrapper wrapper-slider-button');
    })();
    (function validateSubscribe() {
        validationForm($('#subscribe-form'));
    })();
    (function closeMainSlider() {
        $('.banner__close').on('click', function () {
            $('.slider-wrapper').slideUp(300);
        })
    })();
    (function validateSearchForm() {
        validationForm($('#search-form'));
    })();
    (function openCategoryMenu() {
        $('#open-category-menu').on('click', function () {
            if ($(this).hasClass('open')) {
                $('.category-menu').removeClass('show');
                $(this).removeClass('open');
                // $('.close-category-menu').removeClass('active');
            } else {
                $(this).addClass('open');
                $('.category-menu').addClass('show');
                // $('.close-category-menu').addClass('active');
            }
        });
    })();
    // (function closeCategoryMenu() {
    //     $('.close-category-menu').on('click', function (e) {
    //        e.preventDefault();
    //        $(this).removeClass('active');
    //        $('.category-menu').removeClass('show');
    //        $('#open-category-menu').removeClass('open');
    //     });
    // })();
    (function initTooltip() {
        $('.tooltip').tooltipster({
            interactive: true,
        });
    })();
    (function fixedHeightOnCategoryCard() {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            $('.cards__wrapper').each(function (i, e) {
                var thisHeight = $(this).outerHeight();
                var thisParents = $(this).parents('.cards__item');

                $(this).mouseover(function () {
                  thisParents.css('height',thisHeight);
                });

                $(this).mouseout(function () {
                  thisParents.css('height','auto');
                });
            })
        }


        // $('.button-all-category').on('click', function (e) {
        //     e.preventDefault();
        //     if (thisParents.hasClass('active')) {
        //         thisParents.css('height','auto');
        //         thisParents.removeClass('active');
        //     } else {
        //         thisParents.css('height',thisHeight);
        //         thisParents.addClass('active');
        //     }
        // });

        $('.button-all-category').on('click', function (e) {
            var parentOfButton = $(this).parents('.cards__item');
            var heightCardsWrapper = parentOfButton.find('.cards__wrapper').outerHeight();
            e.preventDefault();
            if (parentOfButton.hasClass('active')) {
                parentOfButton.css('height','auto');
                parentOfButton.removeClass('active');
            } else {
                parentOfButton.css('height',heightCardsWrapper);
                parentOfButton.addClass('active');
            }
        });
    })();
    (function addViewportAnimation() {
        $('.souvenir').viewportChecker({
            classToAdd: 'animation-cup',
        });
    })();

    (function initNewsSlider() {
        // D.R.Y.
        function onNewsSliderInit(event, slick) {
            var countSlide = $('.news-slider .slick-dots li:last-child button').text();
            var activeSlide = $('.news-slider .slick-dots .slick-active button').text();
            $('.news-slide-number__count').text(countSlide);
            $('.news-slide-number__this-slide').text(activeSlide);
        }
        $('#init-news-slider').on('init', onNewsSliderInit);
        $('#init-news-slider').on('afterChange', onNewsSliderInit);

        $('.news__show-all').prepend('<div class="news-button-wrapper"></div>')
        $('#init-news-slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: true,
            adaptiveHeight: false,
            appendArrows: '.news-button-wrapper',
            prevArrow: '<button type="button" class="slick-prev news-slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12">\n' +
            '  <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n' +
            '<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        ">\n' +
            '   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
            '      <rdf:Description rdf:about=""/>\n' +
            '   </rdf:RDF>\n' +
            '</x:xmpmeta>\n' +
            '<?xpacket end="w"?></metadata>\n' +
            '  <path fill="#404040" id="Фигура_24_копия" data-name="Фигура 24 копия" class="cls-1" d="M1399,4463.13h-30.7l5.61-5.13h-2.44l-6.47,6,6.47,6h2.44l-5.61-5.13H1399v-1.74Z" transform="translate(-1365 -4458)"/>\n' +
            '</svg>\n</button>',
            nextArrow: '<button type="button" class="slick-next news-slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="12" viewBox="0 0 34 12">\n' +
            '  <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n' +
            '<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        ">\n' +
            '   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
            '      <rdf:Description rdf:about=""/>\n' +
            '   </rdf:RDF>\n' +
            '</x:xmpmeta>\n' +
            '<?xpacket end="w"?></metadata>\n' +
            '  <path fill="#404040" id="Фигура_24" data-name="Фигура 24" class="cls-1" d="M1521,4464.87h30.7l-5.61,5.13h2.44l6.47-6-6.47-6h-2.44l5.61,5.13H1521v1.74Z" transform="translate(-1521 -4458)"/>\n' +
            '</svg></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
            ]
        });
        $('.news-slide-number').appendTo('.news-button-wrapper');
    })();
    (function addModalCalbackForm() {
        $('.callback').magnificPopup({
            type: 'inline',
            items: {
                src: '.callback-popup',
            },
            showCloseBtn: false,
        });
        $(document).on('click', '.close-button', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        })
    })();
    (function addModalOneBuyClick() {
        $('.button-buy-one-click').magnificPopup({
            type: 'inline',
            items: {
                src: '.one-click-buy',
            },
            showCloseBtn: false,
        });
    })();
    (function addEnterModal() {
        $('.enter').magnificPopup({
            type: 'inline',
            items: {
                src: '.enter-popup',
            },
            showCloseBtn: false,
        });
    })();
    (function editErrorMessage() {
        jQuery.extend(jQuery.validator.messages, {
            required: "Это поле обязательно для заполнения",
            minlength: "Введите корректный телефон",
            email: "Введите корректный email",
            equalTo: "Пароли не совпадают",
        });
    })();
    (function addPhoneMask() {
        $('.phone-input').mask('+7 (000)-000-00-00');
    })();
    (function addValidationCallbackForm() {
        $('#callback-form').validate({
            required: true,
        });
    })();
    (function addValidationOneClickBuyForm() {
        $('#buy-one-click-form').validate({
            required: true,
        });
    })();
    (function toggleTypeInput() {
        $('.eye-icon').mousedown(function () {
            cnageTypeInput($(this));
        });
        $('.eye-icon').mouseup(function () {
            cnageTypeInput($(this));
        });
    })();
    (function validateEnterForm() {
        $('#enter-form').validate({
            required: true,
        });
    })();
    (function validateEnterForm() {
        $('#personal-form').validate({
            required: true,
        });
    })();
    (function validateStatePurchasesForm() {
        $('#validate-state-purchases-form').validate({
            required: true,
        });
    })();
    (function () {
        $('#validate-contact-form').validate({
            required: true,
        });
    })();

    (function initRangeSlider() {
        if ($("div").is('#custom-range')) {
            var slider = document.getElementById('custom-range');
            var minMeaning = document.getElementById('input-min');
            var maxMeaning = document.getElementById('input-max');

            noUiSlider.create(slider, {
                start: [0, 100000],
                connect: true,
                step: 1,
                range: {
                    'min': 0,
                    'max': 100000
                },
                format: wNumb({
                    decimals: 0,
                    thousand: ' ',
                })
            });

            slider.noUiSlider.on('update', function( values, handle ) {

                var value = values[handle];

                if ( handle ) {
                    maxMeaning.value = value;
                } else {
                    minMeaning.value = value;
                }
            });

            minMeaning.addEventListener('change', function(){
                slider.noUiSlider.set([this.value, null]);
            });

            maxMeaning.addEventListener('change', function(){
                slider.noUiSlider.set([null, this.value]);
            });
        }
    })();
    (function addMaskForIntervalRange() {
        $('.input-interval').mask('# ##0', {reverse: true});
    })();
    (function initCustomSelect() {
        CustomSelect('#filter-select', 'Все', '.filter-select-wrapper');
    })();
    (function addCustomSortSelect() {
        CustomSelect('#custom-sort-select', 'Сортировать', '.sort-select-wrapper');
    })();
    (function catalogLayout() {
        function setUpCatalogLayout() {
            if (window.matchMedia('(max-width: 1024px)').matches) {
                $('.download-catalog').appendTo('.catalog__products-list')
            } else {
                $('.download-catalog').appendTo('.catalog__sidebar_filter')
            }
        }
        if ($('.download-catalog').length) {
            setUpCatalogLayout()
            $(window).on('resize', setUpCatalogLayout)
        }
    })
    (function toggleClass() {
        $('.wish-list').on('click', function () {
          $(this).toggleClass('add-to-wish-list');
        });

        $('.comparison').on('click', function () {
            $(this).toggleClass('add-to-comparison');
        });
    })();
    (function initViewportChecker() {
        $('.individual-order__animate-img').viewportChecker({
            classToRemove: 'hidden',
            classToAdd: 'animate',
        });
    })();
    (function initCardSlider() {
        function setUpCardLayout() {
            if (window.matchMedia('(max-width: 1024px)').matches) {
                $('.card-block__gallery').prependTo('.card-block__description')
                $('.card-block__title').prependTo('.card-block__description')
            } else {
                $('.card-block__gallery').prependTo('.card-block')
            }
        }
        if ($('.card-block__gallery').length) {
            setUpCardLayout()
            $(window).on('resize', setUpCardLayout)
        }

        $('#card-slider').slick({
            fade: true,
            arrows: false,
            infinite: false,
            asNavFor: '#card-prev-slider',
            dotsClass: 'card-block__slider-dots',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        dots: true
                    }
                }
            ]
        });

        $('#card-prev-slider').slick({
            slidesToShow: 3,
            slidesToScroll:1,
            infinite: false,
            asNavFor: '#card-slider',
            prevArrow: '<button type="button" class="slick-prev"><img src="../images/arrow-prev.png" alt="arrow-left"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../images/arrow-next.png" alt="arrow-right"></button>',
            responsive: [
                {
                    responsive: 1024,
                    settings: 'unslick'
                }
            ]
        });
    })();
    (function customizeInputNumber() {
        jQuery('.quantity').each(function() {
            var spinner = jQuery(this),
                input = spinner.find('input[type="number"]'),
                btnPlus = spinner.find('.quantity-button_plus'),
                btnMinus = spinner.find('.quantity-button_minus'),
                min = input.attr('min'),
                max = input.attr('max');

            btnPlus.click(function () {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

            btnMinus.click(function () {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
    })();
    (function initTabDescription() {
        if ($('div').is('#description-tabbed')) {
            addTabs('#description-tabbed');
        }
    })();
    (function initExampleSlider() {
        $('.example-tab').on('click', function () {
            initializationExamlesSlider();
        });
    })();
    (function closeOrderRow() {
        var thisElement;
        var thisParent;

        $('.close-row').on('click', function () {
           thisElement = $(this);
           thisParent = thisElement.parents('tr');
        });
        $('.button-yes-close').on('click', function () {
            thisElement.magnificPopup('close');
            thisParent.hide();
        });
        $('.button-no-close').on('click', function () {
            thisElement.magnificPopup('close');
        });
    })();
    (function initClosePopupRow() {
        $('.close-row').magnificPopup({
            type: 'inline',
            items: {
                src: '.close-row-modal',
            },
            showCloseBtn: false,
        });
    })();
    (function validateEnterForm() {
        $('#validate-cooperation-form').validate({
            required: true,
        });
    })();
    (function initWorExamlekSlider() {
        if ($('div').is('.work-examples')) {
            initializationExamlesSlider()
        }
    })();
    (function customizeCustomUpload() {
        var fileInput  = document.querySelector( ".upload-input" ),
            button = document.querySelector( ".input-file-trigger" ),
            the_return = document.querySelector(".file-return");

        if ($('div').is('.custom-upload')) {
            button.addEventListener("keydown", function (event) {
                if (event.keyCode == 13 || event.keyCode == 32) {
                    fileInput.focus();
                }
            });
            button.addEventListener("click", function (event) {
                fileInput.focus();
                return false;
            });
            fileInput.addEventListener("change", function (event) {
                the_return.innerHTML = this.value;
            });

        }
    })();
    (function initAccordeonVacancies() {
        $('.button-show-vacancies').on('click', function () {
           var thisParent = $(this).parents('.vacancies__element-item');
           var thisVacanciesText = thisParent.find('.vacancies__element-item-body');
           var parentTop = thisParent.offset().top;

           if (thisParent.hasClass('active')) {
               thisVacanciesText.slideUp(300);
               thisParent.removeClass('active');
               $(this).removeClass('active');
           } else {
               thisVacanciesText.slideDown(300);
               thisParent.addClass('active');
               $(this).addClass('active');
               $('html, body').animate({ scrollTop: parentTop }, 1000);
           }
        });
    })();
    (function initTabVacancies() {
        if ($('div').is('#vacancies-tab')) {
            addTabs('#vacancies-tab');
        }
    })();
    (function addIdForVacanciesForm() {
        $('.vacancies-form').each(function (i, e) {
            $(this).attr('id','vacancies-form-' + i);
        });
    })();
    (function addValidationVacanciesForm() {
        $('[id^="vacancies-form-"]').each(function (i, e) {
            $(this).validate({
                        required: true,
                    });
        });
    })();
    (function initAskQuestion() {
       $('.ask-question').on('click', function () {
          $('.callback').trigger('click');
       });
    })();
    (function initMapContact() {
        if ($('div').is('#map')) {
            ymaps.ready(initYMap);
        }
    })();
    (function initValidateDemandsForm() {
        $('.demands-form').validate({
            required: true,
        });
    })();
    (function initCardPopup() {
        $('.card-block-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled:true,
            },
            mainClass: 'card-gallery'
        });
    })();
    (function initPopupRecommendations() {
        $('.recommendations-popup-init').magnificPopup({
            type: 'inline',
            items: {
                src: '.recommendations-popup',
            },
            showCloseBtn: false,
        });
    })();
    (function validation() {
        $('.registration-form').validate({
            required: true,
        });
    })();
    (function addDropDownMenu() {
        $('.sub-list-wrapper').hide();
        $('.menu-catalog__item_with-sub').hover(function () {
            var thisChildren = $(this).children('.sub-list-wrapper');
            if (document.documentElement.clientWidth > 1024) {
                // clearTimeout($.data(this, 'timer'));
                thisChildren.stop(true, true).fadeIn(300);
            }
        }, function () {
            var thisChildren = $(this).children('.sub-list-wrapper');
            if (document.documentElement.clientWidth > 1024) {
                thisChildren.stop(true, true).fadeOut(300);
                // $.data(this, 'timer', setTimeout($.proxy(function () {
                //     thisChildren.stop(true, true).fadeOut(300);
                // }, this), 300));
            }
        });
        $('.menu-catalog__item_with-sub').click(function (e) {
            e.stopPropagation();
            var thisChildren = $(this).children('.sub-list-wrapper');
            if (document.documentElement.clientWidth < 1025) {
                if (thisChildren.css('display') == 'none') {
                    $('.sub-list-wrapper_next-level').hide();
                    thisChildren.fadeIn(300);
                } else {
                    thisChildren.fadeOut(300);
                }
            }
        });
        window.addEventListener("resize", function () {
            $('.sub-list-wrapper').hide();
        }, false);
        window.addEventListener("orientationchange", function () {
            $('.sub-list-wrapper').hide();
        }, false);
    })();




    function initializationExamlesSlider() {
        $('.examples-slider__main').on('init', function(event, slick){
            var countSlide = $('.examples-slider__main .slick-dots li:last-child button').text();
            var activeSlide = $('.examples-slider__main .slick-dots .slick-active button').text();
            $('.slide-quantity').text(countSlide);
            $('.slide-item').text(activeSlide);
        });
        $('.examples-slider__main').on('afterChange', function(event, slick, currentSlide){
            var countSlide = $('.examples-slider__main .slick-dots li:last-child button').text();
            var activeSlide = $('.examples-slider__main .slick-dots .slick-active button').text();
            $('.slide-quantity').text(countSlide);
            $('.slide-item').text(activeSlide);
        });
        $('.examples-slider__button-prev').click(function () {
            $('.examples-slider__prev .slick-prev').trigger('click');
        });
        $('.examples-slider__button-next').click(function () {
            $('.examples-slider__prev .slick-next').trigger('click');
        });
        $('.examples-slider__main').slick({
            fade: true,
            arrows: false,
            infinite: true,
            dots: true,
            adaptiveHeight: true,
            asNavFor: '.examples-slider__prev',
        });
        $('.examples-slider__prev').slick({
            slidesToShow: 6,
            slidesToScroll:1,
            infinite: true,
            asNavFor: '.examples-slider__main',
            focusOnSelect: true,
            prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16.969" height="27" viewBox="0 0 16.969 27">\n' +
            '  <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n' +
            '<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        ">\n' +
            '   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
            '      <rdf:Description rdf:about=""/>\n' +
            '   </rdf:RDF>\n' +
            '</x:xmpmeta>\n' +
            '<?xpacket end="w"?></metadata>\n' +
            '<defs>\n' +
            '    <style>\n' +
            '      .exmpale-prev {\n' +
            '        fill: #2d2d2d;\n' +
            '        fill-rule: evenodd;\n' +
            '      }\n' +
            '    </style>\n' +
            '  </defs>\n' +
            '  <path class="exmpale-prev" d="M748.147,1080.36l-9.267-8.86,9.268-8.86a2.7,2.7,0,0,0-1.976-4.64h0a2.868,2.868,0,0,0-1.975.78l-11.4,10.9a2.492,2.492,0,0,0,0,3.63l11.4,10.9a2.833,2.833,0,0,0,1.975.79h0A2.7,2.7,0,0,0,748.147,1080.36Z" transform="translate(-732.031 -1058)"/>\n' +
            '</svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16.94" height="27" viewBox="0 0 16.94 27">\n' +
            '  <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>\n' +
            '<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        ">\n' +
            '   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n' +
            '      <rdf:Description rdf:about=""/>\n' +
            '   </rdf:RDF>\n' +
            '</x:xmpmeta>\n' +
            '<?xpacket end="w"?></metadata>\n' +
            '<defs>\n' +
            '    <style>\n' +
            '      .example-next {\n' +
            '        fill: #2d2d2d;\n' +
            '        fill-rule: evenodd;\n' +
            '      }\n' +
            '    </style>\n' +
            '  </defs>\n' +
            '  <path class="example-next" d="M1533.88,1082.36l9.23-8.86-9.23-8.86a2.7,2.7,0,0,1,1.97-4.64h0a2.862,2.862,0,0,1,1.97.78l11.36,10.9a2.5,2.5,0,0,1,0,3.63l-11.36,10.9a2.826,2.826,0,0,1-1.97.79h0A2.7,2.7,0,0,1,1533.88,1082.36Z" transform="translate(-1533.03 -1060)"/>\n' +
            '</svg></button>',
        });
        $('.examples-slider_slider-nav').appendTo('.examples-slider__main');
    }
    function addTabs(tabbed_selector) {
        // Get relevant elements and collections
        var tabbed = document.querySelector(tabbed_selector);
        var tablist = tabbed.querySelector('ul');
        var tabs = tablist.querySelectorAll('a');
        var panels = tabbed.querySelectorAll('[id^="section"]');

        // The tab switching function
        var switchTab = function switchTab(oldTab, newTab) {
            newTab.focus();
            // Make the active tab focusable by the user (Tab key)
            newTab.removeAttribute('tabindex');
            // Set the selected state
            newTab.setAttribute('aria-selected', 'true');
            oldTab.removeAttribute('aria-selected');
            oldTab.setAttribute('tabindex', '-1');
            // Get the indices of the new and old tabs to find the correct
            // tab panels to show and hide
            var index = Array.prototype.indexOf.call(tabs, newTab);
            var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
            panels[oldIndex].hidden = true;
            panels[index].hidden = false;
        };

        // Add the tablist role to the first <ul> in the .tabbed container
        tablist.setAttribute('role', 'tablist');

        // Add semantics are remove user focusability for each tab
        Array.prototype.forEach.call(tabs, function (tab, i) {
            tab.setAttribute('role', 'tab');
            tab.setAttribute('id', 'tab' + (i + 1));
            tab.setAttribute('tabindex', '-1');
            tab.parentNode.setAttribute('role', 'presentation');

            // Handle clicking of tabs for mouse users
            tab.addEventListener('click', function (e) {
                e.preventDefault();
                var currentTab = tablist.querySelector('[aria-selected]');
                if (e.currentTarget !== currentTab) {
                    switchTab(currentTab, e.currentTarget);
                }
            });

            // Handle keydown events for keyboard users
            tab.addEventListener('keydown', function (e) {
                // Get the index of the current tab in the tabs node list
                var index = Array.prototype.indexOf.call(tabs, e.currentTarget);
                // Work out which key the user is pressing and
                // Calculate the new tab's index where appropriate
                var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
                if (dir !== null) {
                    e.preventDefault();
                    // If the down key is pressed, move focus to the open panel,
                    // otherwise switch to the adjacent tab
                    dir === 'down' ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
                }
            });
        });

        // Add tab panel semantics and hide them all
        Array.prototype.forEach.call(panels, function (panel, i) {
            panel.setAttribute('role', 'tabpanel');
            panel.setAttribute('tabindex', '-1');
            var id = panel.getAttribute('id');
            panel.setAttribute('aria-labelledby', tabs[i].id);
            panel.hidden = true;
        });

        // Initially activate the first tab and reveal the first tab panel
        tabs[0].removeAttribute('tabindex');
        tabs[0].setAttribute('aria-selected', 'true');
        panels[0].hidden = false;
    };
    function CustomSelect(main_selector,select_placeholder,dr_parent) {
        $(main_selector).select2({
            placeholder: select_placeholder,
            allowClear: true,
            dropdownParent:$(dr_parent),
        });
    }
    function cnageTypeInput(thisSelector) {
        var thisInput = thisSelector.parent('.form-item').find('.form-input');

        if (thisInput.attr('type') == "password") {
                thisInput.attr('type','text');
            } else {
                thisInput.attr('type','password');
            }
    }
    function wrapUpSliderArrow(arrow, wrapper) {
       $(arrow).wrapAll('<div class="' + wrapper + '"></div>');
    };
    function validationForm(selector) {
        selector.validate();
        jQuery.extend(jQuery.validator.messages, {
            required: "Это поле обязательно для заполнения",
            minlength: "Введите корректный телефон",
            email: "Введите корректный email",
        });
    };
    function initSlider(initSelector, firstChild, sliderItem) {
        initSelector.on('init', function(e, slick) {
            var $firstAnimatingElements = firstChild.find('[data-animation]');
            doAnimationsInit($firstAnimatingElements);
            $('#initialization-slider .slick-arrow').wrapAll('<div class="template-wrapper wrapper-slick-arrow"></div>');
        });
        initSelector.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $(sliderItem + '[data-slick-index="' + currentSlide + '"]').find('[data-after-animation]');
            doAnimationsAfter($animatingElements);
        });

        initSelector.on('afterChange', function (e, slick, currentSlide) {
            var $animatingElements = $(sliderItem + '[data-slick-index="' + currentSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        initSelector.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            infinite: true,
            prevArrow: "<button type=\"button\" class=\"slick-prev\"></button>",
            nextArrow: "<button type=\"button\" class=\"slick-next\"></button>",
        });
        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function() {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function() {
                    $this.removeClass($animationType);
                });
            });
        }
        function doAnimationsAfter(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('after-animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
        function doAnimationsInit(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': '1s',
                    '-webkit-animation-delay': '1s'
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    };
    function initYMap(){
        let myMap, myPlacemark;
        function renderMap() {
            let elem = document.querySelector('.active');
            myMap = new ymaps.Map("map", {
                center: elem.dataset.map.split(','),
                zoom: 16
            });
            myPlacemark = new ymaps.Placemark(elem.dataset.marker.split(','), {
                hintContent: 'Награда центр',
                balloonContent: 'Получи награду, которую ты заслужил.'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './images/geoMarker.svg',
                // Размеры метки.
                iconImageSize: [69, 79],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-35, -50]
            });
            myMap.geoObjects.add(myPlacemark);
        };
        renderMap();
        $('.map__button>button').map(function (i, item, arr)
        {
            item.addEventListener('click', function() {
                $('.map__button>button').map(function (ind, it) {
                    it.classList.toggle('active');
                    if (it.classList.contains('active')) {
                        myMap.destroy();
                        renderMap();
                    }
                });
            });
        });
    }
    // ymaps.ready(initYMap);

});

window.onload = function() {
    $('.preloader').fadeOut('300');
    setTimeout(function () {
        $('body').css('overflow', 'auto');
    }, 300);
};

// adaptive

// activate breakpoints

function media(mediaQueryString, action){
   var handleMatchMedia = function (mediaQuery) {
       if (mediaQuery.matches) { //Попадает в запроc
           if (action  && typeof(action) === "function") action();
       }
   };
   var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
   handleMatchMedia(mql);
   mql.addListener(handleMatchMedia);
}

// custom scrollbar on cards

// media('all and (max-width: 767px)', function(){
//     (function($){
//       $(window).on("load",function(){
//         $(".cards").mCustomScrollbar({
//           axis:"x",
//           theme:"rounded-dark",
//           contentTouchScroll: 25,
//           advanced:{
//             autoExpandHorizontalScroll:true
//           },
//           mouseWheel:{ enable: false}
//         });
//       });
//     })(jQuery);
// });


// toggle search
$('.search-toggle').click(function(){
    $('.search').toggleClass('search_active')
    $(this).toggleClass('search-toggle--close')
});

$('.search__input').on('focus', function () {
    $(this).closest('.search').addClass('search_active')
    $('.search-toggle').addClass('search-toggle--close')
})

// drilldown menu

$(document).foundation();

$('.menu-adaptive__wrap').hide();
$('.header-info__wrapper .catalog-burger').click(function(){
    $('.menu-adaptive__wrap').slideToggle(750);
});


// custom text for back link

$('.nav-back').each(function(){
  var backTxt = $(this).parent().closest('.is-drilldown-submenu-parent').find('> a').text();
  $(this).text(backTxt);
});
