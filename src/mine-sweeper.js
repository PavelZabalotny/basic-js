// const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const newMatrix = []
	const res = []

	matrix.forEach((el, i) => {
		if (i === 0) {
			newMatrix.unshift(Array(el.length + 2).fill(0))
		}
		const newEl = el.map(item => +Boolean(item))
		newEl.unshift(0)
		newEl.push(0)
		newMatrix.push(newEl)
		if (i === matrix.length - 1) {
			newMatrix.push(Array(el.length + 2).fill(0))
		}
	})

	for (let i = 1; i < newMatrix.length - 1; i++) {
		const temp = []
		for (let j = 1; j < newMatrix[i].length - 1; j++) {
			let sum = 0
			for (let k = -1; k <=1; k++) {
				for (let l = -1; l <=1 ; l++) {
					sum += newMatrix[i+k][j+l]
				}
			}
			temp.push(sum - newMatrix[i][j])
		}
		res.push(temp)
	}

	return res
}

module.exports = {
	minesweeper
};
