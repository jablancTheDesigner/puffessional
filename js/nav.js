(function (jQuery, document) {

    var navContainer = null;

    jQuery(document).ready(function () {
        navContainer = jQuery('.js-main-nav');
        if (navContainer.length == 1) {
            addMobileTriggerHandlers();
            addMenuCloseTriggerHandler();
            addLinkListenerHandlers();
        }
    });

    function addMobileTriggerHandlers() {
        jQuery('.js-mobile-menu-trigger').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            var mobileNavContainer = navContainer.find('.nav-inner');
            mobileNavContainer.animate({
                right: 0 + '%',
            }, "slow");
        });
    };

    function addLinkListenerHandlers() {
        jQuery('.nav-list a').on('click', function () {
            var $windowWidth = jQuery(window).width();
            if ($windowWidth <= 768) {
                jQuery('.js-close-menu-trigger').trigger('click');
            }
        });
    }

    function addMenuCloseTriggerHandler() {
        jQuery('.js-close-menu-trigger').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            var mobileNavContainer = navContainer.find('.nav-inner');
            mobileNavContainer.removeAttr('style');
        });
    }


})(jQuery, document)