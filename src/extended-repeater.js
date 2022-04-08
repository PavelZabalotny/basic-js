// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition,
  additionRepeatTimes = 1,
  additionSeparator = '|',
} = {}) {
  str = String(str)
  addition = addition !== undefined ? String(addition) : ''

  const res = []
  const additionalToAdd = []

  if (addition) {
    let addStr = [addition, additionSeparator]
    for (let j = 1; j <= additionRepeatTimes; j++) {
      additionalToAdd.push(...addStr)
    }
    additionalToAdd.splice(-1)
  }

  const strToAdd = [str, ...additionalToAdd, separator]

  for (let i = 1; i <= repeatTimes; i++) {
    res.push(...strToAdd)
  }

  res.splice(-1)

  return res.join('')
}

module.exports = {
  repeater
};
