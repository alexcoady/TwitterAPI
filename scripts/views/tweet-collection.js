/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/tweet'
], function ($, _, Backbone, JST, TweetView) {
    'use strict';

    var TweetCollectionView = Backbone.View.extend({

    	className: "tweet-collection",

    	render: function renderFn () {

    		var that = this;

    		that.collection.each(function (tweet) {

    			that.renderOne(tweet);
    		});

    		return that;
    	},

    	renderOne: function renderOneFn (tweet) {

    		var view = new TweetView({ model: tweet });
    		this.$el.append(view.render().el);
    		return this;
    	}

    });

    return TweetCollectionView;
});