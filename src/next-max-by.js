(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.maxBy = function (inArray, inCallback) {
    var items = nx.map(inArray, inCallback);
    var maxValue = Math.max.apply( null, items );
    var maxIndex = items.indexOf(maxValue);
    return inArray[ maxIndex ];
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.maxBy;
  }

}());
