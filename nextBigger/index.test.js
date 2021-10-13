/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

const nextBigger = function(num) {
  num = String(num).split('')
  for(let i= num.length -1 ; i > 0; i--){
    if(num[i]>num[i-1]){
      var b = num[i];
      num[i] = num[i-1];
      num[i-1] = b;
      return parseInt(num.join(""))
    }
  }
  return -1
};

describe('Tests', () => {
  it('test nextBigger', () => {
    expect(nextBigger(9)).toEqual(-1);
    expect(nextBigger(2017)).toEqual(2071);
    expect(nextBigger(12)).toEqual(21);
    expect(nextBigger(513)).toEqual(531);
    expect(nextBigger(111)).toEqual(-1);
    expect(nextBigger(0)).toEqual(-1);
  });
});
