'use strict'

const { defaults } = require('underscore')
const moment = require('moment')
const inteiro = require('./../inteiro')

module.exports = (options = {}) => {
  options = defaults(options, {
    string: false,
    idade: inteiro({ min: 18, max: 100 })
  })

  let _nascimento = moment()
    .subtract(options.idade, 'years')
    .subtract(inteiro({ min: 0, max: 11 }), 'months')
    .subtract(inteiro({ min: 0, max: 28 }), 'days')
    .toDate()

  if (options.string || options.formato) {
    _nascimento = moment(_nascimento).format(options.formato || 'DD/MM/YYYY')
  }

  return _nascimento
}
