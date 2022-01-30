(function (jQuery, document) {
    jQuery('.go-to a').bind('click', function (e) {
        var $anchor = jQuery(this);
        e.preventDefault();
        var thisUrl = $anchor.attr('href');
        jQuery('html, body').animate({
            scrollTop: jQuery(thisUrl).offset().top
        }, 500)
    })
})(jQuery, document)