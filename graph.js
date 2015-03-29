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

	// TODO support other types of access tokens
	// and also enable no access token at all,
	// because some edges support that.

	this.version = data.version || 'v2.2';
	this.baseUrl = data.baseUrl || 'https://graph.facebook.com/';
	this.baseUrl += this.version;
};

_.extend(GraphAPI.prototype, {

	_getAccessToken: function () {
		return [this.appId, this.secret].join('|');
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
	}
});
