/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../scripts/libs/jquery',
        backbone: '../scripts/libs/backbone',
        underscore: '../scripts/libs/underscore'
    }
});

require([
    'backbone',
    'routes/main'
], function (Backbone, MainRouter) {

    MainRouter.getInstance();

    Backbone.history.start();
});
