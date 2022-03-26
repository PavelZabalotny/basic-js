// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = []
  const toArray = n.toString().split('')

  for (let i = 0; i < toArray.length; i++) {
    let temp = [...toArray]
    temp.splice(i, 1)
    arr.push(+temp.join(''))
  }

  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
