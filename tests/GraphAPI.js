'use strict';

describe('GraphAPI', function() {
	describe('Core', function() {
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
					expect(edgeArray.length).to.be(2);
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
