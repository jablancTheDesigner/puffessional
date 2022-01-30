(function (jQuery, document) {

    var productContainer = null;

    jQuery(document).ready(function () {
        productContainer = jQuery('.js-products');
        if (productContainer.length == 1) {
            console.log('products running');
            startProductList();
            productSelectListener();
        }
    });

    function startProductList() {
        jQuery('.product-item-area').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '60px',
            infinite: true,
            variableWidth: true,
            focusOnSelect: true,
            arrows: false,
            prevArrow: jQuery('.prev-product'),
            nextArrow: jQuery('.next-product'),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    function productSelectListener() {
        jQuery('[data-slide]').click(function (e) {
            var slideno = jQuery(this).data('slide');
            jQuery('.product-item-area').slick('slickGoTo', slideno - 1);
            jQuery('html, body').animate({
                scrollTop: jQuery('#product-info').offset().top - 50
            }, 500);
            jQuery('#product-info').addClass('product-info--open');
        });

    }



})(jQuery, document)