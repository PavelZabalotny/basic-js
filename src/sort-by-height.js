// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const tempIndex = []
    const res = []

    arr.forEach((el, i) => {
        if (el === -1) {
            tempIndex.push(i)
        }
    })

    const newArr = arr.filter(el => el !== -1)
        .sort((a, b) => a - b)
        .reverse()

    for (let i = 0; i < arr.length; i++) {
        tempIndex.includes(i) ? res.push(-1) : res.push(newArr.pop())
    }

    return res
}

module.exports = {
    sortByHeight
}
