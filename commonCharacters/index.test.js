/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  let str = new Set()
  str1 = new Set(str1.replaceAll(" ", "").split(""))
  str1.forEach(ch => {
    if (str2.includes(ch))
    str.add(ch)
  });
  return Array.from(str).join("")
};
const commonCharactersList = (listOfStr) => {
  let str0 = listOfStr[0]
  for (let a = listOfStr.length - 1; a >= 0; a--){
    str0 = commonCharacters(listOfStr[a], str0)
  }
  return str0
}
console.log(commonCharactersList(['acexivou', 'aegihobu']))

describe("Tests", () => {
  it("test commonCharacters", () => {
    expect(commonCharactersList(['acexivou', 'aegihobu'])).toStrictEqual("aeiou")
    expect(commonCharactersList(['acexivo  u', 'a  egihobu'])).toStrictEqual("aeiou")
    expect(commonCharactersList(['acexivou', 'aegihobu', 'awert'])).toStrictEqual("ae")
  });
});
