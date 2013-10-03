/*global define*/

define([
    'jquery',
    'backbone',
    'views/splash',
    'models/twitter-user',
    'views/twitter-user',
    'collections/tweet',
    'views/tweet-collection',
], function ($, Backbone, SplashView, UserModel, UserView, TweetCollection, TweetCollectionView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        
        routes: {
        	"user/:user":  		"user",
        	"*path":			"splash"
        },

        /*
        *	Splash
        *	--------------------------------------------------
        *	Loads the splash page where the user can search
        *	for a Twitter screen name
        *	--------------------------------------------------
        *	@param null
        *	@return (Void)
        */
        splash: function splashFn () {

        	console.log("Splash page");

        	// Print out the Splash view with user search form
        	var view = new SplashView({ router: this });
        	$('#app').html( view.render().el );
        },

        /*
        *	User
        *	--------------------------------------------------
        *	Loads a Twitter user (and most-recent tweets) 
        *	--------------------------------------------------
        *	TODO: Add user validation
        *	--------------------------------------------------
        *	@param (String) screenName - Twitter Screen name
        *	@return (Void)
        */
        user: function userFn (screenName) {

        	console.log("Screen name:", screenName);

        	var user = new UserModel({ screen_name: screenName });

        	user.fetch({
        		success: function (model, response, options) {

        			var view = new UserView({ model: user });
        			$('#app').html( view.render().el );

        			// Get statuses
        			var tweetCollection = new TweetCollection([], { screen_name: screenName });
        			tweetCollection.fetch({
        				success: function (collection, response, options) {

        					var tweetCollectionView = new TweetCollectionView({ collection: tweetCollection });

        					// Render tweets
        					view.$el.find('#user__tweets').html( tweetCollectionView.render().el );
        				}
        			});
        		}
        	});
        }
    },
    {
    	_instance: undefined,

    	/*
		*	getInstance singleton function
		*	--------------------------------------------------
		*	Will want to reuse the same router object through-
		*	out the program.
		*	--------------------------------------------------
		*	@param null
		*	@return (MainRouter) Instance of router
    	*/
    	getInstance: function getInstanceFn () {

    		if (this._instance === undefined) {

    			this._instance = new MainRouter();
    		}

    		return this._instance;
    	}
    });

    return MainRouter;
});