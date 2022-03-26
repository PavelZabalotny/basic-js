// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let res = ''
	let count = 1

	for (let i = 0; i < str.length - 1; i++) {
		let [cur, next] = [str[i], str[i + 1]]

		if (next !== cur) {
			if (i === str.length - 2) {
				res += count > 1 ? `${count}${cur}${next}` : `${cur}${next}`
			} else {
				res += count > 1 ? `${count}${cur}` : `${cur}`
			}
			count = 1
		} else {
			if (i === str.length - 2) {
				res += `${++count}${cur}`
			} else {
				count++
			}
		}
	}

	return res
}

module.exports = {
	encodeLine
};
