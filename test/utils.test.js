var utils = require("../lib/utils.js");

var assert = require("assert");
var should = require("should");

describe('Utils Group', function() {
	describe('#isArray()-1', function() {
		it('should be array', function() {
			assert.equal(true, utils.isArray([]));
		});
	});

	describe('#isArray()-2', function() {
		it('should not be array', function() {
			assert.equal(false, utils.isArray({}));
		});
	});
});

