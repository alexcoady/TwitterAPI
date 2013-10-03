/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var TwitterUserModel = Backbone.Model.extend({

    	url: "/php/get_user.php?screen_name=",

    	idAttribute: "screen_name",
        
        defaults: {
        },

        initialize: function initializeFn () {

        	// Set up GET url for API calls
        	this.url = this.url + this.id;
        	this.on("change:profile_image_url", this.parseUser, this);
        },

        /*
        *	parseUser
		*	--------------------------------------------------
		*	Some routine work on the raw response from tw.
        *	--------------------------------------------------
        *	@param null
        *	@return (TwitterUserModel) this: to allow chaining
        */
        parseUser: function parseUserFn () {

        	var that = this,
        		profile_image_url = this.get("profile_image_url"),
        		new_profile_image_url = profile_image_url.replace("normal", "bigger");

        	this.set("profile_image_url", new_profile_image_url);

        	return this;
        }

    });

    return TwitterUserModel;
});