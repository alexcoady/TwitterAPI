/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var SplashView = Backbone.View.extend({

        className: "splash",

        template: JST['scripts/templates/splash.ejs'],

        events: {

        	"submit .user-search": 			"submitForm", 
        },

        render: function renderFn () {

        	var template = this.template( { placeholder: "Burberry" } );
        	this.$el.html(template);
        	return this;
        },

        submitForm: function submitFormFn (e) {

        	e.preventDefault();

        	var screenName = this.$el.find(".input--screen-name");
        	this.options.router.navigate("/user/" + screenName.val(), { trigger: true });
        }
    });

    return SplashView;
});