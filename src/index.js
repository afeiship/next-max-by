import nx from '@jswork/next';

nx.maxBy = function(inArrayLike, inKey) {
  let max = -Infinity;
  let maxItem = null;

  for (let i = 0; i < inArrayLike.length; i++) {
    const item = inArrayLike[i];
    const value = typeof inKey === 'function' ? inKey(item, i, inArrayLike) : nx.get(item, inKey, null);
    if (value === null) continue;
    if (value > max) {
      max = value;
      maxItem = item;
    }
  }
  return maxItem;
};

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.maxBy;
}

export default nx.maxBy;
