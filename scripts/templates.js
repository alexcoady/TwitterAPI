define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["scripts/templates/splash.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1 class="heading">Twitter user search</h1>\n\n<form class="user-search">\n\t<label for="screen-name">Screen name</label>\n\t<input type="text" class="input input--text input--screen-name" name="screen_name" id="screen-name" placeholder="' +
((__t = ( placeholder )) == null ? '' : __t) +
'" />\n\n\t<button type="submit">Go</button>\n</form>\n\n<h2 class="heading heading--sub">Some suggestions...</h2>\n\n<ul class="suggestions">\n\t<li class="suggestion__item">\n\t\t<a class="suggestion__link" href="#/user/CoadyCodes">@CoadyCodes</a>\n\t</li>\n\t<li class="suggestion__item">\n\t\t<a class="suggestion__link" href="#/user/Burberry">@Burberry</a>\n\t</li>\n\t<li class="suggestion__item">\n\t\t<a class="suggestion__link" href="#/user/FascinatingPics">@FascinatingPics</a>\n\t</li>\n</ul>';

}
return __p
};

this["JST"]["scripts/templates/tweet.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="tweet__image">\n\t<img src="' +
((__t = ( user.profile_image_url )) == null ? '' : __t) +
'" width="48" height="48" alt="" />\n</div>\n<div class="tweet__content">\n\t<h4 class="tweet__text">' +
((__t = ( text )) == null ? '' : __t) +
'</h4>\n</div>\n\t';

}
return __p
};

this["JST"]["scripts/templates/twitter-user.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="nav nav--main">\n\t<a href="#/splash">&lt; Home</a>\n</nav>\n<div class="user__profile">\n\t<div class="profile__item--image profile__item">\n\t\t<img src="' +
((__t = ( profile_image_url )) == null ? '' : __t) +
'" width="73" height="73" alt="" />\n\t</div>\n\n\t<h3 class="profile__item--name profile__item">' +
((__t = ( name )) == null ? '' : __t) +
'</h3>\n\t<p class="profile__item--description profile__item">' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n\n</div>\n\n<div id="user__tweets"></div>';

}
return __p
};

  return this["JST"];

});