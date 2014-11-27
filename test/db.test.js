var userModel = require("../models/user.js");
var utils = require("../lib/utils.js");

var assert = require("assert");
var should = require("should");


describe('User Group', function() {
	describe('#queryUsers()', function() {
		it('result should be array', function(done) {
			userModel.queryUsers(function(err, result){
				assert.equal(true, utils.isArray(result));
				done();
			});
		});
	});

	describe('#queryUserByUsername()', function() {
		it('should not be null or object', function(done) {
			userModel.queryUserByUsername('test', function(err, result){
				//result.should.n
				done();
			});
		});
	});
});

