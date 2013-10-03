/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var TwitterUserView = Backbone.View.extend({

    	className: "user",
        
        template: JST['scripts/templates/twitter-user.ejs'],

        initialize: function initializeFn () {

        	this.on("change", this.render, this);
        },

        render: function renderFn () {
            
        	var template = this.template( this.model.toJSON() );
        	this.$el.html(template);
        	return this;
        }
    });

    return TwitterUserView;
});