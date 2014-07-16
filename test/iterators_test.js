var expect = require('chai').expect,
  Iterators = require('../src/iterators.js');

describe('Iterators', function(){
  describe('#max', function(){
    var myArr;
    beforeEach(function(){
      myArr = [66,22,67, 34];
    });
    it('should return the maximum in an array', function(){
      expect(Iterators.max(myArr)).to.equal(67);
    })    
    it('should return -Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    })
  })
  describe('#min', function(){
    beforeEach(function() {
      myArr = [23, 43, 3, -5, 14];
    })
    it('should return the minimum in an array', function(){
      expect(Iterators.min(myArr)).to.equal(-5);
    })
    it('should return Infinity for empty array', function(){
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });

})