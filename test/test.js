var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-max-by');

describe('next/maxBy', function () {

  it('nx.maxBy', function () {
    var objects = [{ 'n': 1 }, { 'n': 2 }];
    var max = nx.maxBy(objects, function (_, o) {
      return o.n;
    });

    assert.equal( max.n , 2);
  });

});
