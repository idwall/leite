'use strict'

const n = require('./../n')
const natural = require('./../natural')

module.exports = () => {
  const nn = n(natural, 11, { max: 9 })

  return nn.join('')
}
