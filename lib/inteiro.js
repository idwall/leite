'use strict'

const {defaults} = require('underscore')
const random = require('./../helpers/random')
const {MIN_INT, MAX_INT} = require('./../helpers/constants')

module.exports = (options = {}) => {
  options = defaults(options, {
    min: MIN_INT,
    max: MAX_INT
  })
  return Math.floor(random() * (options.max - options.min + 1) + options.min)
}
