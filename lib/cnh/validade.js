'use strict'

const moment = require('moment')
const inteiro = require('./../inteiro')

module.exports = () => {
  return moment()
    .add(inteiro({ min: 0, max: 4 }), 'years')
    .add(inteiro({ min: 0, max: 11 }), 'months')
    .add(inteiro({ min: 0, max: 30 }), 'days')
    .toDate()
}
