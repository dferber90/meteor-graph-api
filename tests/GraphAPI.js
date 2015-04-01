'use strict';

describe('GraphAPI', function() {
	describe('Core', function() {
		describe('_getEdgePath', function() {

			var facebook;
			var edgeArray = ['me', 'picture'];
			var baseUrl = new GraphAPI().baseUrl;

			before(function () {
				facebook = new GraphAPI();
			});

			describe('when called with array', function() {
				it('should return the full edge', function() {
					expect(facebook._getEdgePath(edgeArray)).to.equal('https://graph.facebook.com/v2.2/me/picture');
				});
			});

			describe('when called with string', function() {
				it('should return the full edge', function() {
					expect(facebook._getEdgePath(edgeArray.join('/'))).to.equal('https://graph.facebook.com/v2.2/me/picture');
				});
			});

		});
	});
});
