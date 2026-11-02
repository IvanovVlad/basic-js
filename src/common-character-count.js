/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  const ignoreS2Indexes = new Set();

  for (const n1 of s1) {
    for (const n2I in s2) {
      if (ignoreS2Indexes.has(n2I)) continue;
      const n2Val = s2[n2I];
      if (n1 === n2Val) {
        counter += 1;
        ignoreS2Indexes.add(n2I);
        break;
      }
    }
  }

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
