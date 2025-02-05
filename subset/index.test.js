/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.
 * To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * const a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * const b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit:
Make the method work for arrays that contain objects and/or arrays as elements.
*/

// eslint-disable-next-line no-extend-native
Array.prototype.isSubsetOf = function(arr) {
  let sub_set = new Set(this);
  let set = new Set(arr);
  let ret = true
  sub_set.forEach( e => {
    ret = ret && set.has(e) 
  })
  return ret
};


describe('Tests ', () => {
  it('test', () => {
    const a = ['commit','push']
    expect(a.isSubsetOf(['commit','rebase','push','blame'])).toEqual(true);
    const b = ['merge','reset','reset']
    expect(b.isSubsetOf(['reset','merge','add','commit'])).toEqual(true);
  });

});
