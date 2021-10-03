/**
 * Given a single input array, write a function that outputs an unique array of values
 *
 *
 * What time complexity is your solution? n
 *
 * Your solution shouldn't using any build in function.
 *
 * Credit: Write a unit tests.
 */

/**
  * example usage:
  * const arrOfNum = [1, 2, 2, 4, 5, 6, 6];
  * console.log(getUniqueValues(arrOfNum)); // [1, 2, 4, 5, 6]
  */
const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

const getUniqueValues = (arrOfNum) => {
  let arrOfUniqueNum = []
  arrOfNum.forEach(ch => {
    if (! arrOfUniqueNum.includes(ch))
    arrOfUniqueNum.push(ch)
  });
  return arrOfUniqueNum
}

describe("Tests", () => {
  it("test toSnakeCase", () => {
    expect(getUniqueValues(arrOfNum)).toStrictEqual([1, 2, 4, 5, 6])
    expect(getUniqueValues([0,0,0,0,5,2,4,3,2,3,4,5,5])).toStrictEqual([0, 5, 2, 4, 3])
    expect(getUniqueValues([])).toStrictEqual([])
  });
});
