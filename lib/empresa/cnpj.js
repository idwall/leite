'use strict'

const { defaults } = require('underscore')
const natural = require('./../natural')
const n = require('./../n')

module.exports = (options = {}) => {
  options = defaults(options, {
    formatado: false
  })

  const nn = n(natural, 8, { max: 9 })
  let d1 =
    2 +
    nn[7] * 6 +
    nn[6] * 7 +
    nn[5] * 8 +
    nn[4] * 9 +
    nn[3] * 2 +
    nn[2] * 3 +
    nn[1] * 4 +
    nn[0] * 5
  d1 = 11 - d1 % 11
  if (d1 >= 10) {
    d1 = 0
  }
  let d2 =
    d1 * 2 +
    3 +
    nn[7] * 7 +
    nn[6] * 8 +
    nn[5] * 9 +
    nn[4] * 2 +
    nn[3] * 3 +
    nn[2] * 4 +
    nn[1] * 5 +
    nn[0] * 6
  d2 = 11 - d2 % 11
  if (d2 >= 10) {
    d2 = 0
  }

  const cnpj =
    String(nn[0]) +
    nn[1] +
    '.' +
    nn[2] +
    nn[3] +
    nn[4] +
    '.' +
    nn[5] +
    nn[6] +
    nn[7] +
    '/0001-' +
    d1 +
    d2

  return options.formatado ? cnpj : cnpj.replace(/\D/g, '')
}
