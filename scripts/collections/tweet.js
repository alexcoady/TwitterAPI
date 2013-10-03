/*global define*/

define([
    'underscore',
    'backbone',
    'models/tweet'
], function (_, Backbone, TweetModel) {
    'use strict';

    var TweetCollection = Backbone.Collection.extend({
        
        model: TweetModel,

        url: function urlFn () {

        	return "/php/get_statuses.php?screen_name=" + this.screen_name;
        },

        initialize: function initializeFn (models, options) {

        	this.screen_name = options.screen_name;
        }
    });

    return TweetCollection;
});