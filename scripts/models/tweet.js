/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TweetModel = Backbone.Model.extend({
        
    	initialize: function initializeFn () {

    		this.parseStatus();
    		this.on("change:text", this.parseStatus, this);
    	},

    	/*
    	*	parseStatus
    	*	--------------------------------------------------
    	*	Takes status and parses its entities
    	*	--------------------------------------------------
    	*	@param null
    	*	@return (TweetModel) this: Instance of TweetModel
    	*/
    	parseStatus: function parseStatusFn () {

    		this.parseMentions();
    		this.parseUrls();

    		return this;
    	},

    	/*
    	*	parseMentions
    	*	--------------------------------------------------
    	*	Takes mention strings and parses them as links
    	*	--------------------------------------------------
    	*	@param null
    	*	@return (TweetModel) this: Instance of TweetModel
    	*/
    	parseMentions: function parseMentionsFn () {

    		var text = this.get("text"),
    			mentions = this.get("entities").user_mentions,
    			mentions_count = mentions.length,
    			mentions_i = 0;

        		for (mentions_i; mentions_i < mentions_count; mentions_i += 1) {

        			text = text.replace( mentions[mentions_i].screen_name, '<a class="tweet__link" href="#user/'+ mentions[mentions_i].screen_name +'">' + mentions[mentions_i].screen_name + '</a>' );
        		}

        	this.set("text", text);

    		return this;
    	},

    	/*
    	*	parseMentions
    	*	--------------------------------------------------
    	*	Takes url strings and parses them as links
    	*	--------------------------------------------------
    	*	TODO: More advanced URL parsing (Allow for slash
    	*	parsing etc)
    	*	--------------------------------------------------
    	*	@param null
    	*	@return (TweetModel) this: Instance of TweetModel
    	*/
    	parseUrls: function parseUrlsFn () {

        	var text = this.get("text"),
    			links = this.get("entities").urls,
    			links_count = links.length,
    			links_i = 0;

    		for (links_i; links_i < links_count; links_i += 1) {

    			text = text.replace( links[links_i].url, '<a class="tweet__link" target="_blank" href="'+ links[links_i].expanded_url +'">' + links[links_i].display_url + '</a>' );
    		}

    		this.set("text", text);

    		return this;
        }

    });

    return TweetModel;
});