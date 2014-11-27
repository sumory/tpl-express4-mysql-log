var assert = require("assert");
var should = require("should");

describe('Test Group', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1, 2, 3].indexOf(5));
			assert.equal(-1, [1, 2, 3].indexOf(0));
		});
	});

	describe('#save()', function() {
		it('should do without error', function(done) {
			//do something
			done();
		})
	})
});

describe('Test Case1', function() {
	it('should check the real value', function() {
		[1, 2, 3].indexOf(5).should.not.equal(2);
		var  value = {a:"abc"};
		var expected = {a:"abc"};
	});
});