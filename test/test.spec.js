var mySum = require('../sumTwoNumbers.js');
var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;

describe('function sumTwoNumbers', function() {
    it('sum 2 + 2', function() {
      assert.equal(mySum(2, 2), 4);
    });
  
    it('sum 3 + 4', function() {
      expect(mySum(3, 4)).to.equal(7);
    });
  });