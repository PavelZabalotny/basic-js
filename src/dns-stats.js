// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {}

  const res = {}
  const arr = []

  const splitDomains = domains
    .map(item => item
      .split('.')
      .map(el => '.' + el)
      .reverse()
    )

  splitDomains.forEach(el => {
    let temp = ''

    el.forEach(item => {
      arr.push(temp + item)
      temp += item
    })
  })

  arr.forEach(item => {
    if(!res[item]) {
      res[item] = 1
    } else {
      res[item] += 1
    }
  })

  return res
}

module.exports = {
  getDNSStats
};
