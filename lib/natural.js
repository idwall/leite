'use strict'

const {defaults} = require('underscore')
const inteiro = require('./inteiro')
const {MAX_INT} = require('./../helpers/constants')

module.exports = (options = {}) => {
  options = defaults(options, {
    min: 0,
    max: MAX_INT
  })

  return inteiro(options)
}
