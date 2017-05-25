'use strict'

const moment = require('moment')
const inteiro = require('./../inteiro')

module.exports = () => {
  return moment()
    .subtract(inteiro({ min: 0, max: 60 }), 'years')
    .subtract(inteiro({ min: 0, max: 11 }), 'months')
    .subtract(inteiro({ min: 0, max: 30 }), 'days')
    .toDate()
}
