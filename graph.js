'use strict';

/* global
	HTTPResponse: true,
	_: false,
	Graph: true,
	Meteor: false,
	HTTP: false
*/
var HTTPResponse = function (response) {
	_.extend(this, response);
};


HTTPResponse.prototype = {
	constructor: HTTPResponse,

	ok: function () {
		return this.statusCode === 200;
	}
};


GraphAPI = function (data) {
	this.appId = data.appId;
	this.secret = data.secret;
};

_.extend(GraphAPI.prototype, {
	baseUrl: 'https://graph.facebook.com/v2.2',

	_getAccessToken: function () {
		var appId = Meteor.settings.public.services.facebook.appId;
		var secret = Meteor.settings.services.facebook.secret;

		return [appId, secret].join('|');
	},
	
	_call: function (method, edge, params) {

		// enable edge to be defined as array
		var edgeArray = _.isArray(edge) ? edge : [edge];

		// add baseUrl in front
		// [userId, 'pages'] => [this.baseUrl, userId, 'pages']
		edgeArray.unshift(this.baseUrl);

		// [userId, 'pages'] => 'userId/pages'
		var edgePath = edgeArray.join('/');

		return new HTTPResponse(HTTP.call(method, edgePath, {
			params: params
		}));
	},

	get: function (edge, params) {
		return this._call('GET', edge, params);
	},

	post: function (edge, params) {
		return this._call('POST', edge, params);
	},


	getPage: function (pageId) {
		var response = this.get([pageId], {
			access_token: this._getAccessToken()
		});

		// if response.ok()
		if (response && response.statusCode === 200) {
			return response.data;
		} else {
			return false;
		}
	},

	getEvent: function (eventId, fields) {
		var response = this.get([eventId], {
			access_token: this._getAccessToken(),
			fields: fields || 'id,name,description'
		});

		return response.ok() ? response.data : false;
	},

	getEvents: function (pageId, options) {
		options = options || {};
		var query = {};
		query.fields = options.fields || 'id,name,start_time,end_time,cover';
		query.access_token = this._getAccessToken();

		var response = this.get([pageId, 'events'], query);

		// TODO use query that gets ALL upcoming events
		return response.ok() ? response.data.data : false;
	},

	getProfilePictureUrl: function (userId) {
		var response = this.get([userId, 'picture'], {
			redirect: false
		});

		return response.ok() ? response.data.data.url : false;
	}/*,

	getEvent: function (eventId, pageAccessToken) {
		var response = this.get(['']);
	}
	*/
});
