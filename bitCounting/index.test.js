/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  let bin = 0
  while(num > 0){
    if (num % 2)
      bin++
    num = Math.floor(num/2)
  }
  return(bin)
};

describe("#bitCounting", () => {

  it('test bitCounting', () => {
    expect(bitCounting(1234)).toEqual(5);
    expect(bitCounting(1)).toStrictEqual(1);
    expect(bitCounting(0)).toStrictEqual(0);
    expect(bitCounting(2)).toStrictEqual(1);
  });
});

