'use strict'

function n(fn, n) {
  if (typeof n === 'undefined') {
    n = 1
  }

  let i = n
  const arr = []
  const params = Array.prototype.slice.call(arguments, 2)

  i = Math.max(0, i)

  for (null; i--; null) {
    arr.push(fn.apply(this, params))
  }

  return arr
}

module.exports = n
