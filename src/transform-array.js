// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform( arr ) {
  if ( !Array.isArray( arr ) ) {
    throw new Error( "'arr' parameter must be an instance of the Array!" )
  }
  if ( !arr.length ) {
    return []
  }
  const res = []
  const controlSec = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ]

  for ( let i = 0; i < arr.length; i++ ) {
    let cur = arr[i]

    if ( controlSec.includes( cur ) ) {
      switch ( cur ) {
        case '--discard-next':
          i++
          break
        case '--discard-prev':
          res.splice( i - 1, 1 )
          break
        case '--double-next':
          res.push( arr[i + 1] )
          break
        case '--double-prev':
          res.push( res[i - 1] )
          break
      }
      continue
    }

    if ( cur && cur.toString() ) {
      res.push( cur )
    }

  }
  return res
}

/*transform( [ 3, '1', true, 4, { 'foo': 'bar' }, 1, '3', false, true ] )
transform( [ true, true ] )
transform( [ '--discard-next', 4 ] )
transform( [ '--discrard-next', 2 ] )
transform( [ '--discard-prev', 5 ] )
transform( [ 1, 2, 3, undefined, NaN, 4, 5 ] )
transform( [ 1, 2, 3, undefined, NaN, 4, 5 ] )
transform( [ '--discard-next', true ] )
transform( [ 1, 2, 3, '--double-next', 4, 5 ] )
transform( [ 1, 2, 3, '--double-prev', 4, 5 ] )
transform( [ [ undefined ], 1, 1, 1 ] )*/
transform( [ [ undefined ], 1, 2, 3 ] )

console.log( [ undefined ].toString() )

// console.log( transform( [ 1, 2, 3, '--double-next', 4, 5 ] ) )

module.exports = {
  transform
}
