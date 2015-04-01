'use strict';

describe('GraphAPI', function() {
	describe('Core', function() {

		describe('Constructor', function() {
			
			it('should respect version', function() {
				var version = 'v1.0';
				var facebook = new GraphAPI({
					version: version
				});

				expect(facebook.version).to.equal(version);
			});

			it('should respect baseUrl', function() {
				var baseUrl = 'http://google.de';

				var facebook = new GraphAPI({
					baseUrl: baseUrl
				});

				expect(facebook.baseUrl).to.equal(baseUrl);
			});

		});

		describe('_getEdgePath', function() {

			var facebook;
			var edgeArray = ['me', 'picture'];

			before(function () {
				facebook = new GraphAPI();
			});

			describe('when called with array', function() {
				it('should return the full edge', function() {
					expect(facebook._getEdgePath(edgeArray)).to.equal('https://graph.facebook.com/v2.2/me/picture');
				});

				it('should not modify the original array', function() {
					facebook._getEdgePath(edgeArray);
					expect(edgeArray.length).to.equal(2);
				});
			});

			describe('when called with string', function() {
				it('should return the full edge', function() {
					expect(facebook._getEdgePath(edgeArray.join('/'))).to.equal('https://graph.facebook.com/v2.2/me/picture');
				});
			});

		});
	});

	describe('HTTPResponse', function() {
		it('should be ok if statusCode is 200', function() {
			var h = new HTTPResponse({statusCode: 200});
			expect(h.ok()).to.be['true'];
		});

		it('should not be ok if statusCode is not 200', function() {
			var h = new HTTPResponse({statusCode: 201});
			expect(h.ok()).to.be['false'];
		});
	});
});
