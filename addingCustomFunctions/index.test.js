/**
 * adding custom functions into native array
 * 1- sort function
 * 2- get first element
 * 3- get last element
 * 4- search for value
 */

Array.prototype.sortArray = function(){
  return this.sort()
}

Array.prototype.getFirstElement = function(array){
    return this[0]
}

Array.prototype.getLastElement = function(array){
  return this.pop()
}


Array.prototype.searchArray = function(val){
  return this.find(e => e === val)
}


describe('Tests ', () => {
  it('test array custom functions', () => {
    let arr = [1,2,3,0]
    expect(arr.sortArray()).toEqual([0,1,2,3]);
    expect(arr.getLastElement()).toEqual(3);
    expect(arr.getFirstElement()).toEqual(0);
    expect(arr.searchArray(2)).toEqual(2);
  });
});