Package.describe({
	name: 'dferber:graph-api',
	version: '0.0.1',
	summary: 'Conveniently use Facebook Graph API on the server.',
	git: 'https://github.com/dferber90/meteor-graph-api',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	'use strict';
	
	api.versionsFrom('1.0.3.2');
	api.use(['underscore', 'http'], 'server');
	api.addFiles(['exports.js', 'graph.js'], 'server');

	api.export(['GraphAPI', 'HTTPResponse'], 'server');
});


/*
	Run tests with
		meteor test-packages --driver-package respondly:test-reporter

	More information:
		https://blog.respond.ly/testing-meteor-packages-with-mocha/
 */
Package.onTest(function(api){
	api.use(['mike:mocha-package', 'practicalmeteor:chai']);

	api.use(['underscore', 'http'], 'server');
	api.use(['dferber:graph-api'], 'server');

	api.addFiles('tests/GraphAPI.js', ['server']);
});
