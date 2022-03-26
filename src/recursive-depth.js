// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr, count = 1) {
		let max = count

		arr.forEach(el => {
			if (Array.isArray(el)) {
				let currentDepth = this.calculateDepth(el, count + 1)
				max = currentDepth > max ? currentDepth : max
			}
		})

		return max
	}
}


module.exports = {
	DepthCalculator
};
