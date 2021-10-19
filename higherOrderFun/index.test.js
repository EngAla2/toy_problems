/*
Problem 1:
Replace the native Array map function with your own.
It should work exactly the same way as Javascript built-in map function.
The map function works on the array and returns back a new array
where each element has been modified according to the results
of calling the callback function.
See example usage to understand what arguments are passed to the callback.
*/

Array.prototype.map = function(callback) {
  let array = []
  this.forEach((e, i) => { array.push(callback(e,i,this)) })
  return array
};

/*
Example usage:
var transform = function(element,index,array){
  return array[index] + index + element;
};
["a","b","c"].map(transform); //should return ['a0a','b1b','c2c'];
*/
var transform = function(element,index,array){
  return array[index] + index + element;
};

/*
Problem 2:
Write an asynchronous sum function that accepts two numbers and a callback.
The function should wait 1 second, then calculate the sum of two numbers
and pass the result to the callback.
If 1st or 2nd argument is not a number, the function should call the callback
with the error message - a simple string that says "Incorrect argument(s)".
Please see example usage to understand what should be passed to the callback.
*/
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const asyncSum = async function(a, b, callback) {
  await sleep(1000)
  if (!(typeof(a) === "number" && typeof(b) === "number"))
    await callback("Error: Incorrect argument(s)", 0)
  else
    await callback("", a+b)

};

/*
Example use:
*/

const logNumber = async function(error, number) {
  if (error) {
    console.log('Error: ', error);
  } else {
    console.log('The total is: ', number);
  }
};

describe('Tests ', () => {
  console.log = jest.fn()
  it('test array custom function map', () => {
    expect(["a","b","c"].map(transform)).toEqual([ 'a0a', 'b1b', 'c2c' ]);
  });

  // it('test asynchronous sum function', () => {
  //   const consoleSpy = jest.spyOn(console, 'log');
    
  //   asyncSum(10,7,logNumber)
  //   expect(consoleSpy).toHaveBeenCalledWith("The total is: 17");
  //   asyncSum(10,"B",logNumber)
  //   expect(consoleSpy).toHaveBeenCalledWith("Error: Incorrect argument(s)");
  // });
});

//should print "The total is: 17" after 1 second

/*
asyncSum(10,7,logNumber);//should print "The total is: 17" after 1 second
asyncSum(10,"B",logNumber);
//should print "Error: Incorrect argument(s)" after 1 second
*/


/*
Problem 3 (ADVANCED):
What kind of candy do you like?
Your answer: 
*/
