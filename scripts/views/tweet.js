/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TweetView = Backbone.View.extend({

    	className: "tweet",
        
        template: JST['scripts/templates/tweet.ejs'],

        initialize: function initializeFn () {
        },

        render: function renderFn () {

        	var template = this.template( this.model.toJSON() );
        	this.$el.html(template);
        	return this;
        }
    });

    return TweetView;
});