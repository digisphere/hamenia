(function ($, context) {
    "use strict";

    var elementUniqueId = 'custom_works';

    var pbBlock = {
        level: 3,
        withControls: true,
        cssBlockClass: 'custom-works',
        cssElementClass: 'custom-works',
        toolbarSection: 'collections_elements',
        label: 'Custom Works',
        description: 'A collection of custom works.'
    };

    context.registerBlock(elementUniqueId, pbBlock);

    var pbElement = function (fieldsValues, contentValue) {
        var that = context.classes.elements.baseElement(); // inherit from base element

        /**
         * VARS
         */
        var contentConfig = null;

        var fieldsConfig = {
            'template': {
                'type':     'select',
                'options':  {
                    'one_fourth':           'one fourth',
                    'one_fourth_gallery':   'one fourth gallery',
                    'one_fourth_masonry':   'one fourth masonry',
                    'one_third':            'one third',
                    'one_third_gallery':    'one third gallery',
                    'one_third_masonry':    'one third masonry',
                    'one_half':             'one half',
                    'one_half_gallery':     'one half gallery',
                    'two_third':            'two third'
                },
                'default':  'one_fourth'
            },
            'effect': {
                'type':     'select',
                'options':  {
                    'none':         'none',
                    'grayscale':    'grayscale'
                },
                'default':  'none'
            },
            'hide': {
                'type':     'input',
                'hint':     'Comma separated list of elements. Full list: title,featured-media,date,author,comments-link,summary,categories,tags,button-1'
            },
            'entry_ids': {
                'type':     'input',
                'hint':     'Comma separated list of entry IDs'
            }
        };

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