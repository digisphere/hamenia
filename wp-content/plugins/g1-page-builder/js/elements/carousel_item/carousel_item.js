(function ($, context) {
    "use strict";

    var elementUniqueId = 'carousel_item';

    var pbBlock = {
        level: 3,
        withControls: false,
        cssBlockClass: 'carousel-item',
        cssElementClass: 'carousel-item',
        toolbarSection: '',
        label: 'Carousel item',
        description: 'A carousel item.'
    };

    context.registerBlock(elementUniqueId, pbBlock);

    var pbElement = function (fieldsValues, contentValue) {
        var that = context.classes.elements.baseElement(); // inherit from base element

        /**
         * VARS
         */
        var contentConfig = null;
        var fieldsConfig = {};

        // pseudo constructor
        function init () {
            that.init(fieldsValues, fieldsConfig, contentValue, contentConfig);
        }

        init();

        // public scope

        return that; // gives access to public methods
    };

    context.registerElement(elementUniqueId, pbElement);
})(jQuery, g1PageBuilder);