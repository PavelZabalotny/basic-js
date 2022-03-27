// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	arr: [],
	getLength() {
		return this.arr.length
	},
	addLink(value = '') {
		this.arr.push(`( ${value} )`)
		return this
	},
	removeLink(position) {
		if (isNaN(position) || position < 1 || position > this.getLength() || !Number.isInteger(position)) {
			this.arr.length = 0
			throw new Error(`You can't remove incorrect link!`)
		}
		this.arr.splice(position - 1, 1)
		return this
	},
	reverseChain() {
		this.arr = this.arr.reverse()
		return this
	},
	finishChain() {
		const res = this.arr.join('~~')
		this.arr.length = 0
		return res
	},
}

module.exports = {
	chainMaker
};
