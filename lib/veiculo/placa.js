'use strict'

const { sample } = require('underscore')
const inteiro = require('./../inteiro')
const { ABC } = require('./../../helpers/constants')

module.exports = () =>
  sample([ABC], 3).join('') + inteiro({ min: 1000, max: 9999 })
