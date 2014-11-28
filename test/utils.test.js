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


	describe('#encry & decrypt', function() {
		it('should equal after encrypt/decrypt', function() {
			var secret = '!@#$ss';
			var data = "origin data";
			assert.equal(utils.decryptData(utils.encryptData(data, secret), secret), data);
		});

		it('should support Chinese', function() {
			var secret = 'abcdefghhhh_key';
			var data = "我是谁abc_123";
			assert.equal(utils.decryptData(utils.encryptData(data, secret), secret), data);
		});

		it('should support long sentence', function() {
			var secret = 'secret_key';
			var data = "The quick brown fox jumps over the lazy dog. 少年不识愁滋味，爱上层楼，爱上层楼，为赋新词强说愁。而今识尽愁滋味，欲说还休，欲说还休，却道天凉好个秋！";
			assert.equal(utils.decryptData(utils.encryptData(data, secret), secret), data);
		});
	});
});

