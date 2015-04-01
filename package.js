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
	api.addFiles(['GraphAPI.js', 'graph.js'], 'server');

	api.export('GraphAPI', 'server');
});

Package.onTest(function (api) {
	api.export('HTTPResponse', 'server');
});
