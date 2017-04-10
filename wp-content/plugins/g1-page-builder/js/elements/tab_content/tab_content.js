(function ($, context) {
    "use strict";

    var elementUniqueId = 'tab_content';

    var pbBlock = {
        level: 3,
        withControls: false,
        cssBlockClass: 'tab-content',
        cssElementClass: 'tab-content',
        toolbarSection: '',
        label: 'Tab content',
        description: 'A tab content.'
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