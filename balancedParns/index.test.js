/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */
function balancedParens(input) {
  input = input.match(/[()[\]{}]/g)
  let parens = {
    '(':')',
    '[':']',
    '{':'}',
  }
  let open = []
  for(let i = 0; i < input.length; i++){
    if(Object.keys(parens).includes(input[i])){
      open.push(input[i])}
    else {
      if(parens[ open.pop()]!==input[i]) {
      return false}
  }}
  if(open[0]) return false
  return true
}

describe('Test', () => {
  it('test #balancedParens Truthy', () => {
    expect(balancedParens('{}')).toBeTruthy();
    expect(balancedParens('{}(hi){}')).toBeTruthy();
    expect(balancedParens('()[dummy[]dummy]')).toBeTruthy();
    expect(balancedParens('()[{}[]]')).toBeTruthy();
    expect(balancedParens(' var hubble = function() { telescopes.awesome() };')).toBeTruthy();
  });

  it('test #balancedParens Falsy', () => {
    expect(balancedParens(')()(')).toBeFalsy();
    expect(balancedParens('[({}]')).toBeFalsy();
    expect(balancedParens('(]char in between(')).toBeFalsy();
    expect(balancedParens('{([maby here to]})')).toBeFalsy();
    expect(balancedParens(' var hubble = function() { telescopes.awesome();')).toBeFalsy();
  });
});